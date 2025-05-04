class BaseScreen {

    get datepickerNextMonth() { return $('~DatePicker.NextMonth') };
    get datepickerMonth()     { return $('//XCUIElementTypeButton[@name="DatePicker.Show"]') };
    get futureDate()          { return $('-ios predicate string:name CONTAINS "Sunday"') }; //predicate string
    get createBtn()           { return $('~Create') };
    get navigateToListsBtn()  { return $('~Lists') };

    async selectFutureDate() {
        await this.datepickerMonth.waitForExist();
        await this.datepickerNextMonth.click();
        await this.futureDate.click();
    }
}

export default new BaseScreen();