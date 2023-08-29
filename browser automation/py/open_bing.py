import time
import pyautogui
import subprocess
from modified_values_module import modified_values


class BingClass:
    def __init__(self, value):
        self.value = value

    def bingAuto(self):  # Added 'self' parameter here
        # Replace this path with the actual path to msedge.exe on your system
        edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" # noqa

        # Replace this URL with the desired website URL
        website_url = "https://www.example.com"

        # Start Edge browser using subprocess
        subprocess.Popen([edge_path, website_url])

        # Delay to allow the browser to open
        time.sleep(5)

        # Simulate keyboard shortcut to open a new tab (Ctrl+T)
        pyautogui.hotkey('ctrl', 'shift', '.')

        time.sleep(5)

        pyautogui.hotkey('tab')
        pyautogui.hotkey('tab')
        pyautogui.hotkey('tab')
        pyautogui.hotkey('tab')
        pyautogui.hotkey('tab')
        pyautogui.hotkey('tab')

        for item in self.value:  # Changed 'self.value' to 'self.values'
            modified_value = self.value + [item]  # Corrected this line
            print("Writing:", modified_value)
            pyautogui.typewrite(str(modified_value) + '\n', interval=0)
            time.sleep(5)

        # Print a message to indicate completion
        print("Browser automation completed.")


if __name__ == "__main__":
    modified_values.append(1)
    modified_values.append(2)
    modified_values.append(3)
    print("Writing:", modified_values)
    instance = BingClass(modified_values)  # Pass a value to the constructor
    instance.bingAuto()  # Call the bingAuto method
