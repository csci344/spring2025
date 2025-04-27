import utils

utils.modify_system_path()

import unittest

# import the tests you want to run with the python run_tests.py command:
from tests.test_bookmark_delete import TestBookmarkDetailEndpoint
from tests.test_bookmark_list_post import TestBookmarkListEndpoint
from tests.test_comments_delete import TestCommentDetailEndpoint
from tests.test_comments_post import TestCommentListEndpoint
from tests.test_followers_list import TestFollowerListEndpoint
from tests.test_following_delete import TestFollowingDetailEndpoint
from tests.test_following_list_post import TestFollowingListEndpoint
from tests.test_like_delete import TestLikePostDetailEndpoint
from tests.test_like_post import TestLikePostListEndpoint


from tests.test_login import TestLoginEndpoint
from tests.test_logout import TestLogoutEndpoint
from tests.test_posts_get_patch_delete import TestPostDetailEndpoint
from tests.test_posts_list_post import TestPostListEndpoint

# Not yet refactored:
from tests.test_profile import TestProfileEndpoint
from tests.test_stories_list import TestStoryListEndpoint
from tests.test_suggestions_list import TestSuggestionListEndpoint
from tests.test_token import TestTokenEndpoint, TestRefreshTokenEndpoint


if __name__ == "__main__":
    unittest.main()

# Note: to run on command line (from the tests directory):
# $ python3 run_tests.py -v
# $ python3 run_tests.py TestPostListEndpoint -v
# $ python3 run_tests.py TestPostDetailEndpoint -v
# $ python3 run_tests.py TestFollowingListEndpoint -v
