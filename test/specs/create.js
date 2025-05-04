import { expect } from '@wdio/globals';
import { faker } from '@faker-js/faker';
import ListScreen from '../screenobjects/list.screen';

describe('Create list flow', () => {

    const listName = faker.string.alphanumeric(5);

    before(async () => {
        await ListScreen.createList(listName);
    });

    it('should create a todo list', async () => {
        await expect(await ListScreen.createdListName.getValue()).toBe(listName);
    })

    it.only('should add a todo item in the list', async () => {
        await ListScreen.createdListName.click();
        await ListScreen.createTodoItem(faker.string.alphanumeric(10));
        await expect(await ListScreen.numberOfTodoitems.getValue()).not.toBe(0);
    })
})

