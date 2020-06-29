({
    doInit : function (component, event, helper) {
        var accountId = component.get("v.recordId");
        var action = component.get('c.fetchContactsFromAccount');
        action.setParams({
            accountId: accountId
        });
        action.setCallback(this, function(response) { 
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.ContactsList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
})
