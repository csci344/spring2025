module Jekyll
    module MyCustomFilters
      # Simple string reversal
      def reverse_string(input)
        input.reverse
      end
  
      # Get all Tuesdays and Thursdays in a date range
      def tuesdays_and_thursdays(start_date, end_date)
        (Date.parse(start_date)..Date.parse(end_date)).select { |date| [2, 4].include?(date.wday) }.map(&:to_s)
      end
  
      # Extract and sort unique due dates from pages
      def extract_due_dates(pages)
        pages.map { |page| page['due_date'] if page['due_date'] }.compact.uniq.sort
      end

  
      # Combine and sort dates from two arrays
      def combine_dates(arr1, arr2)
        (arr1 + arr2).map { |date| convert_to_date_if_not_already(date) }.compact.uniq.sort
      end


      def get_week_number(start_date, end_date)
        start_date = start_date.is_a?(Date) ? start_date : Date.parse(start_date)
        end_date = end_date.is_a?(Date) ? end_date : Date.parse(end_date)
        
        ((end_date - start_date) / 7).to_i + 1
      end
  

      # Normalize URL and set target attribute
      def get_url(url)
        url&.start_with?("http") ? url : "/spring2025#{url}"
      end

  
      def get_target(url)
        url&.start_with?("http") ? "_blank" : ""
      end


      def display_reading(reading)
        type = reading['type']
        title = "<span>#{reading['title']}</span>"
        target = get_target(reading['url'])
        notes = "<div>#{reading['notes']}</div>"
        url = get_url(reading['url'])
        colon = "<span style='display: none'>: </span>"

        if reading["citation"]
            return "<span class='mb-1'>"\
                "#{reading['citation']}"\
            "</span>"\
            "#{notes}"
        end

        return "<a class='mb-1' href='#{url}' target='#{target}'>"\
                "#{reading['tag'] != nil ? reading['tag'] : reading['title']}"\
            "</a>"\
          "#{notes}"
      end


      def display_link_or_badge(page, hide_title=false, new_line=true, simple=false, show_notes=true)
        if page.nil?
            return ""
        end
        
        type = page['type'] == "homework" ? "hw" : page['type']
        url = page['slides_url'] || page['url']
        url = get_url(url)
        target = get_target(url)
        badge_text = simple ? page['title'] : "#{type.capitalize} #{page['num']}"
        class_name = new_line ? "block" : "inline"
        title = (hide_title || simple) ? "" : "<span>#{page['title']}</span>"
        colon = "<span style='display: none'>: </span>"
        is_draft = page['draft'] == 1
        link_class = page['tag'] ? "badge" : (simple ? "" : (is_draft ? "badge" : type))
        link_icon = " <i class='fa-solid fa-link'></i>"
        notes = show_notes && page['notes'] ? "<div>#{page['notes']}</div>" : ""
        due_date = page['due_date'] ? "(due #{convert_to_date_if_not_already(page['due_date']).strftime('%a, %-m/%-d')})" : ""
      
        # Handle anchor or span rendering
        if url && !is_draft
            if page['type'] == "lecture" && page['slides_url'] == nil
                return "#{title} #{due_date} #{notes}"
            end
            return "<span class='mb-1 #{class_name}'>"\
                   "<a class='#{link_class}' href='#{url}' target='#{target}'>#{page['tag'] || badge_text} #{link_icon}</a>"\
                   "#{colon}#{title} #{due_date}"\
                 "</span>#{notes}"
        end
        
        
        # Handle span rendering for drafts or no URL
        return "<span class='mb-1 #{class_name}'>"\
          "<span class='#{link_class}'>#{page['tag'] || badge_text}</span>#{colon}"\
          "#{title} #{due_date}"\
        "</span>#{notes}"
      end
  

      # Display assignment links or labels
      def display_assignment(page, hide_title = false, new_line = true)
        return "<div class='mb-1'>Lab #{page['num']}</div>" if page['type'] == 'lab'
        display_link_or_badge(page, hide_title, new_line)
      end

  
      # Check for holidays or deadlines
      def has_holiday_or_deadline(pages)
        pages.any? { |page| %w[holiday deadline].include?(page['type']) }
      end

  
      # Convert a date if needed
      def convert_to_date_if_not_already(date)
        return Date.strptime(date, '%Y-%m-%d') if date.is_a?(String)
        return date if date.is_a?(Date)
      end

  
      # Filter content by date
      def filter_list_by_date(list, date)
        # return list if list.nil? || list.none? { |item| item&.fetch('start_date', nil) }
      
        list.select do |item|
          next false if item.nil? || item['start_date'].nil?
      
          convert_to_date_if_not_already(item['start_date']) == date
        end
      end

  
      # Retrieve labs, projects, or tutorials by module
      def get_items_by_module(items, site, type)
        site['assignments'].select { |item| items&.include?(item['num']) && item['type'] == type } || []
      end
  

      def get_labs_by_module(page, site)
        items = page['labs']
        get_items_by_module(items, site, 'labs')
      end

  
      def get_projects_by_module(page, site)
        items = page['projects']
        get_items_by_module(items, site, 'project')
      end
  

      def get_tutorials_by_topic(topic, site)
        items = topic['tutorials']
        get_items_by_module(items, site, 'tutorial')
      end


      def get_homework_by_lecture(page, site)
        items = page['homework']
        get_items_by_module(items, site, 'homework')
      end
  

      def get_lectures_by_topic(topic, site)
        topic['lectures']&.map { |num| site['lectures'].find { |item| item['num'] == num } } || []
      end
  

      # Filter readings by type
      def filter_readings(readings, type)
        return [] unless readings
        case type
        when "required" then readings.select { |r| r['required'] }
        when "optional" then readings.select { |r| !r['required'] && !r['pick_one'] && !r['skim'] }
        when "skim" then readings.select { |r| r['skim'] }
        when "pick_one" then readings.select { |r| r['pick_one'] }
        else []
        end
      end

  
      # Combine module activities (lectures, tutorials)
      def get_all_module_activities(topic, site)
        get_lectures_by_topic(topic, site) + get_tutorials_by_topic(topic, site)
      end
  

      # Get module dates
      def get_module_dates(page, site)
        get_all_module_activities(page, site).map do |item| 
          item && item['start_date'] ? convert_to_date_if_not_already(item['start_date']) : nil
        end.compact.uniq.sort
      end

    end
  end
  
  Liquid::Template.register_filter(Jekyll::MyCustomFilters)
  