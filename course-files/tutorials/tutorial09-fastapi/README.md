# Setup Instructions

## Ensure that Python >= 3.8 and Poetry are installed
1. Check whether you have python installed by running the following on your command line: 
    ```bash
    python3 --version
    ```
    
2. If you get a command not found, try running these commands (just in case you have a different way of running python on your system):
    ```
    python ---version
    py -- version
    ```

3. Install / upgrade if necessary:
    * If your do not have python installed on your machine, you will need to install it. Please follow these instructions:
    * If you have an older python version installed on your machine, you'll have to upgrade. Please follow these instructions:

4. Install poetry 

## Create a virtual environment and install the dependencies
1. Navigate to your fast-api directory on the command line.

2. Install the poetry dependencies as follows:
    ```bash
    poetry install
    ```
    This should download all of the Python libraries needed to run your FAST API backend.

3. Run your "backend" server:
    ```bash
    poetry run fastapi dev main.py
    ```

3. Navigate to http://127.0.0.1:8000/docs in your web browser

## Practice
See the Tutorial 9 instructions