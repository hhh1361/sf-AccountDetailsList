({
    onSuccess : function(component, event, helper) {

        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been Saved successfully."
        });
        toastEvent.fire();
    },
    onError : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Error!",
            "message": "Error."
        });
        toastEvent.fire();
    },
    onSubmit: function(component, event, helper) {
        var fields = event.getParam('fields');
        if(component.get("v.contact.AccountId") !== fields.AccountId) {
            component.set("v.display", false)
        }
    },
})