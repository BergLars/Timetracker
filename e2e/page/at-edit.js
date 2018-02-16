var EditComponent = function () {
    this.editButton = element(by.buttonText('EDIT'));
    this.cancelButton = element(by.buttonText('Cancel'));
    this.profileIcon = element(by.id('accountCircle'));
    this.logoutButton = element(by.buttonText('Logout'));
    this.descriptionTaskField = element(by.id('newTaskDescription'));
    this.okButton = element(by.buttonText('OK'));
    this.itemName = 'black';
    this.projectNameField = element(by.id('newProjectName'));
    this.clientNameField = element(by.id('newClientName'));
    this.blockClientOption = $('#clientOptions').element(by.cssContainingText('option', 'block'));
    this.blackClientOption = $('#clientOptions').element(by.cssContainingText('option', 'black'));
    this.blockProjectOption = $('#projectOptions').element(by.cssContainingText('option', 'block'));
    this.blackProjectOption = $('#projectOptions').element(by.cssContainingText('option', 'black'));
    this.blockTaskOption = $('#taskOptions').element(by.cssContainingText('option', 'block'));
    this.blackTaskOption = $('#taskOptions').element(by.cssContainingText('option', 'black'));
}
module.exports = EditComponent;