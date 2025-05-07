class BaseScreen {

    get datepickerNextMonth() { return $('~DatePicker.NextMonth') };
    get datepickerMonth()     { return $('//XCUIElementTypeButton[@name="DatePicker.Show"]') };
    get futureDate()          { return $('-ios predicate string:name CONTAINS "Sunday"') }; //predicate string
    get createBtn()           { return $('~Create') };
    get navigateToListsBtn()  { return $('~Lists') };

    /**
    * Selects a future date from the date picker.
    * 
    * This method interacts with the date picker by navigating to the next month
    * and selecting a date that matches the predicate string (e.g., "Sunday").
    */
    async selectFutureDate() {
        await this.datepickerMonth.waitForExist();
        await this.datepickerNextMonth.click();
        await this.futureDate.click();
    }
}

export default new BaseScreen();