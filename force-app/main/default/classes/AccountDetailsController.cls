public with sharing class AccountDetailsController {
    @AuraEnabled
    public static list<Contact> fetchContactsFromAccount(Id accountId) {
        List<Contact> contactsList = new List<Contact>();
        for(Contact contact:[Select Id, Name, FirstName, LastName, Title, Email, Account.Name from Contact where AccountId=:accountId]) {
            contactsList.add(contact);
        }
        return contactsList;
    }
}
