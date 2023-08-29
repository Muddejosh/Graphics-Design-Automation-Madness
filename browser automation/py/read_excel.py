# import pandas as pd
import openpyxl  # Import the openpyxl library
from modified_values_module import modified_values  # Import the array


class ExcelClass:
    def __init__(self, addition):
        self.addition = addition

    def excelFunc(self):
        # Load the Excel workbook
        workbook = openpyxl.load_workbook('reviews.xlsx')

        # Select a specific worksheet
        # Replace 'Sheet1' with the actual sheet name
        worksheet = workbook['Sheet1']
        # Initialize an empty array to store data
        column_c_values = []

        # Iterate through values in column C
        for cell in worksheet['C']:
            if cell.value is not None:
                column_c_values.append(cell.value)

        # Print the extracted values
        for value in column_c_values:
            modified_value = self.addition + value
            modified_values.append(modified_value)
            # Append modified value to the array
            print(modified_value)

        # excel_file_path = 'reviews.xlsx'
        # df = pd.read_excel(excel_file_path)

        # csv_file_path = 'reviews.csv'
        # df.to_csv(csv_file_path, index=False)

        # print("Excel data exported to CSV successfully.")


if __name__ == "__main__":

    with open('prompt.txt', 'r') as file:
        content = file.read()

instance = ExcelClass(content)
instance.excelFunc()
