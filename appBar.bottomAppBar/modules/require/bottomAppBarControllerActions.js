define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxTabA **/
    AS_FlexContainer_a264c165278a488ea7545da13e8dcc63: function AS_FlexContainer_a264c165278a488ea7545da13e8dcc63(eventobject) {
        var self = this;
        return self.navigateToForm.call(this, this.tabAtoForm, this.view.flxTabA.id);
    },
    /** onClick defined for flxTabD **/
    AS_FlexContainer_aa42a8c1afea482d9064726b4897e6aa: function AS_FlexContainer_aa42a8c1afea482d9064726b4897e6aa(eventobject) {
        var self = this;
        return self.navigateToForm.call(this, this.tabDtoForm, this.view.flxTabD.id);
    },
    /** onClick defined for flxTabE **/
    AS_FlexContainer_ad345ca3dae24660a7f183130b2dc9d5: function AS_FlexContainer_ad345ca3dae24660a7f183130b2dc9d5(eventobject) {
        var self = this;
        return self.navigateToForm.call(this, this.tabEtoForm, this.view.flxTabE.id);
    },
    /** onClick defined for flxTabC **/
    AS_FlexContainer_b940520d0231401e837ce1e2733a43bd: function AS_FlexContainer_b940520d0231401e837ce1e2733a43bd(eventobject) {
        var self = this;
        return self.navigateToForm.call(this, this.tabCtoForm, this.view.flxTabC.id);
    },
    /** onClick defined for flxTabB **/
    AS_FlexContainer_d68f71fb89e74721840548c72e78298a: function AS_FlexContainer_d68f71fb89e74721840548c72e78298a(eventobject) {
        var self = this;
        return self.navigateToForm.call(this, this.tabBtoForm, this.view.flxTabB.id);
    },
    /** preShow defined for bottomAppBar **/
    AS_FlexContainer_fd7c9c90f27d422e8f29a8d5f8996a56: function AS_FlexContainer_fd7c9c90f27d422e8f29a8d5f8996a56(eventobject) {
        var self = this;
        self.tabViewsVisibility.call(this);
        self.setDimensions.call(this);
        self.setTheme.call(this);
    }
});