public with sharing class AccountDetailsController {
    @AuraEnabled
    public static list<contact> fetchContactsFromAccount(Id accountId) {
        List<contact> contactsList = new List<contact>();
        for(contact contact:[Select id, name, title, email from contact where accountid=:accountId]) {
            contactsList.add(contact);
        }
        return contactsList;
    }
}
