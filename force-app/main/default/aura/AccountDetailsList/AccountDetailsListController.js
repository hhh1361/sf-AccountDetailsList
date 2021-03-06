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
                console.log(response.getReturnValue())
                component.set("v.contactsList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    changeMode: function(component, event, helper) {
        console.log(!component.get("v.mode"))
        component.set("v.mode", !component.get("v.mode"))
    }
})
