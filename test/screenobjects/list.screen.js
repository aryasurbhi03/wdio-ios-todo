import BaseScreen from '../screenobjects/base.screen'

class ListScreen {

    get addListIcon()            { return $('//XCUIElementTypeButton[@name="Add"]')} // XPath fallback')}
    get createListBtn()          { return $('//*[@name="Create list"]') }
    get createListnameTextbox()  { return $('//XCUIElementTypeTextField[@value="List Name"]') }
    get createdListName()        { return $('//XCUIElementTypeCell//XCUIElementTypeStaticText[1]') }
    get numberOfTodoitems()      { return $('//XCUIElementTypeCell//XCUIElementTypeStaticText[2]') }
    get createItemBtn()          { return $('//XCUIElementTypeButton[@name="Create item"]') }
    get titleTextbox()           { return $('//XCUIElementTypeTextField[@value="Title"]') }
    get dueTextbox()             { return $('//XCUIElementTypeTextField[@value="Due"]') }

    /**
     * Creates a new list with the specified name.
     * 
     * @param {string} listName - The name of the list to create.
     */
    async createList(listName){
        await this.addListIcon.click();
        //await this.createListBtn.click();
        await this.createListnameTextbox.setValue(listName);
        await BaseScreen.createBtn.click();
}

    /**
     * Adds todo item in list  with the specified name.
     * 
     * @param {string} todoItemTitle - The name of the todo item to add.
     */
    async createTodoItem(todoItemTitle){
        await this.createItemBtn.click();
        await this.titleTextbox.addValue(todoItemTitle);
        await this.dueTextbox.click();
        await BaseScreen.selectFutureDate();
        await BaseScreen.createBtn.click();
        await BaseScreen.navigateToListsBtn.click();
    }

    
}
export default new ListScreen();