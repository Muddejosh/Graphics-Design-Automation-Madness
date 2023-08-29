from read_excel import ExcelClass
from open_bing import BingClass
from modified_values_module import modified_values

if __name__ == "__main__":

    with open('prompt.txt', 'r') as file:
        textToAppend = file.read()

    instance = ExcelClass(textToAppend)
    instance.excelFunc()

    instance = BingClass(modified_values)  # Pass the array to the constructor
    instance.bingAuto()
