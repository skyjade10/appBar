define(function() {
  
  /** var vTabNormalSkin = null;
  var vTabActiveSkin = null;
  var vTabIconNormalSkin = null;
  var vTabIconActiveSkin = null;
  var vTabTitleNormalSkin = null;
  var tabTitleActiveSkin = null;
  
  var vTabNotifySkin = null;
  var vTppBarTopBorderSkin = null;
  var vTabBottomBorderSkin = Skin;*/
  
  
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          this._activeTabHolder = "flxTabA";
          
          
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'activeTabHolder', () => {
                return this._activeTabHolder;
            });
            defineSetter(this, 'activeTabHolder', value => {
                this._activeTabHolder = value;
            });
            defineGetter(this, 'tabDtoForm', () => {
                return this._tabDtoForm;
            });
            defineSetter(this, 'tabDtoForm', value => {
                this._tabDtoForm = value;
            });
            defineGetter(this, 'tabBtoForm', () => {
                return this._tabBtoForm;
            });
            defineSetter(this, 'tabBtoForm', value => {
                this._tabBtoForm = value;
            });
            defineGetter(this, 'tabCtoForm', () => {
                return this._tabCtoForm;
            });
            defineSetter(this, 'tabCtoForm', value => {
                this._tabCtoForm = value;
            });
            defineGetter(this, 'tabAtoForm', () => {
                return this._tabAtoForm;
            });
            defineSetter(this, 'tabAtoForm', value => {
                this._tabAtoForm = value;
            });
            defineGetter(this, 'tabEtoForm', () => {
                return this._tabEtoForm;
            });
            defineSetter(this, 'tabEtoForm', value => {
                this._tabEtoForm = value;
            });
            defineGetter(this, 'useDefaultNavToFunction', () => {
                return this._useDefaultNavToFunction;
            });
            defineSetter(this, 'useDefaultNavToFunction', value => {
                this._useDefaultNavToFunction = value;
            });
            //AppBar Top Border Getters and Setters
            //Includes
            defineGetter(this, 'includeNotifyIcons', () => {
                return this._includeNotifyIcons;
            });
            defineSetter(this, 'includeNotifyIcons', value => {
                this._includeNotifyIcons = value;
            });
            defineGetter(this, 'includeTabTitle', () => {
                return this._includeTabTitle;
            });
            defineSetter(this, 'includeTabTitle', value => {
                this._includeTabTitle = value;
            });
            defineGetter(this, 'includeTabBottomBorder', () => {
                return this._includeTabBottomBorder;
            });
            defineSetter(this, 'includeTabBottomBorder', value => {
                this._includeTabBottomBorder = value;
            });
            defineGetter(this, 'includeAppBarTopBorder', () => {
                return this._includeAppBarTopBorder;
            });
            defineSetter(this, 'includeAppBarTopBorder', value => {
                this._includeAppBarTopBorder = value;
            });
            //Skin getters and setters
            defineGetter(this, 'tabNormalSkin', () => {
                return this._tabNormalSkin;
            });
            defineSetter(this, 'tabNormalSkin', value => {
                if (value !== null && value !== '') {
                    this._tabNormalSkin = value;
                } else {
                    this._tabNormalSkin = tabNormalSkin;
                }
            });
            defineGetter(this, 'tabActiveSkin', () => {
                return this._tabActiveSkin;
            });
            defineSetter(this, 'tabActiveSkin', value => {
                if (value !== null && value !== '') {
                    this._tabActiveSkin = value;
                } else {
                    this._tabActiveSkin = tabActiveSkin;
                }
            });
            defineGetter(this, 'tabIconNormalSkin', () => {
                return this._tabIconNormalSkin;
            });
            defineSetter(this, 'tabIconNormalSkin', value => {
                if (value !== null && value !== '') {
                    this._tabIconNormalSkin = value;
                } else {
                    this._tabIconNormalSkin = tabIconNormalSkin;
                }
            });
            defineGetter(this, 'tabIconActiveSkin', () => {
                return this._tabIconActiveSkin;
            });
            defineSetter(this, 'tabIconActiveSkin', value => {
                if (value !== null && value !== '') {
                    this._tabIconActiveSkin = value;
                } else {
                    this._tabIconNormalSkin = aLabelActive;
                }
            });
            defineGetter(this, 'tabTitleNormalSkin', () => {
                return this._tabTitleNormalSkin;
            });
            defineSetter(this, 'tabTitleNormalSkin', value => {
                if (value !== null && value !== '') {
                    this._tabTitleNormalSkin = value;
                } else {
                    this._tabTitleNormalSkin = titleNormalSkin;
                }
            });
            defineGetter(this, 'tabTitleActiveSkin', () => {
                return this._tabTitleActiveSkin;
            });
            defineSetter(this, 'tabTitleActiveSkin', value => {
                if (value !== null && value !== '') {
                    this._tabTitleActiveSkin = value;
                } else {
                    this._tabTitleActiveSkin = titleNormalSkin;
                }
            });
            defineGetter(this, 'tabNotifySkin', () => {
                return this._tabNotifySkin;
            });
            defineSetter(this, 'tabNotifySkin', value => {
                if (value !== null && value !== '') {
                    this._tabNotifySkin = value;
                } else {
                    this._tabNotifySkin = tabIconNormalSkin;
                }
            });
            defineGetter(this, 'appBarTopBorderSkin', () => {
                return this._appBarTopBorderSkin;
            });
            defineSetter(this, 'appBarTopBorderSkin', value => {
                if (value !== null && value !== '') {
                    this._appBarTopBorderSkin = value;
                } else {
                    this._appBarTopBorderSkin = tabIconNormalSkin;
                }
            });
            defineGetter(this, 'tabBottomBorderSkin', () => {
                return this._tabBottomBorderSkin;
            });
            defineSetter(this, 'tabBottomBorderSkin', value => {
                if (value !== null && value !== '') {
                    this._tabBottomBorderSkin = value;
                } else {
                    this._tabBottomBorderSkin = titleNormalSkin;
                }
            });
           
        },
      
      /**
      *Default function to navigate between forms if the useDefaultNavtoFuction
      *property is set to true
      */
      navigateToForm: function(formName,tabName){
        
        if(this.useDefaultNavToFunction){
           if(formName !== null && formName !== ""){
             
             var nForm = new voltmx.mvc.Navigation(formName);
             voltmx.print("Navigating to " + formName);
             nForm.navigate();
           }else{
             
             throw {"Error": "Invalid form name", "message": "Insert form id"};
           }
          
        }else{
          var self = this;
          
          if (self.navigateTo) {
            self.navigateTo(tabName);
          }
        }
          
          if (this.onTabClick) {
            this.onTabClick(tabName);
          }
     
      },
      
      /**
      */
      tabViewsVisibility: function(){
        
        try{
          
        this.view.labelNotIconA.isVisible = false;
        this.view.labelNotIconB.isVisible = false;
        this.view.labelNotIconC.isVisible = false;
        this.view.labelNotIconD.isVisible = false;
        this.view.labelNotIconE.isVisible = false;
          
          this.view.flxTabBottomBorderA.isVisible = false;
          this.view.flxTabBottomBorderB.isVisible = false;
          this.view.flxTabBottomBorderC.isVisible = false;
          this.view.flxTabBottomBorderD.isVisible = false;
          this.view.flxTabBottomBorderE.isVisible = false;
          
          if(this.includeAppBarTopBorder){
            this.view.topBorder.isVisible = true;
          }else{
            this.view.topBorder.isVisible = false;
          }
        
        if(!this.includeTabTitle){
          
          this.view.labelNameA.isVisible = false;
          this.view.labelNameB.isVisible = false;
          this.view.labelNameC.isVisible = false;
          this.view.labelNameD.isVisible = false;
          this.view.labelNameE.isVisible = false;
          
          this.view.flxIconWrapperA.centerY = "50%";
          this.view.flxIconWrapperB.centerY = "50%";
          this.view.flxIconWrapperC.centerY = "50%";
          this.view.flxIconWrapperD.centerY = "50%";
          this.view.flxIconWrapperE.centerY = "50%";
          
        }
          
        }catch(exception){
          throw(exception);
        }
      },
      
      
      //sets default and active skin for All UIs
      setTheme: function(){
      
        var tabs = [this.view.flxTabA,this.view.flxTabB,this.view.flxTabC,this.view.flxTabD,this.view.flxTabE];
        var icons = [this.view.labelIconA,this.view.labelIconB,this.view.labelIconC,this.view.labelIconD,this.view.labelIconE];
        var title = [this.view.labelNameA,this.view.labelNameB,this.view.labelNameC,this.view.labelNameD,this.view.labelNameE];
        var notifyIcon = [this.view.labelNotIconA,this.view.labelNotIconB,this.view.labelNotIconC,this.view.labelNotIconD,this.view.labelNotIconE];
        var topBorder = this.view.topBorder;
        var tabBottomBorder = [this.view.flxTabBottomBorderA,this.view.flxTabBottomBorderB,this.view.flxTabBottomBorderC,this.view.flxTabBottomBorderD,this.view.flxTabBottomBorderE];
        
        try{
          
          for(i = 0; i<5; i++){
            
           /*
           *if activeTabHolder === none all widgets will be set to their
           *respective normal skins. otherwise skins will be set accordingly. 
           *ie active tab to active skin and the rest to normal skin
           */
            if(this.activeTabHolder !== "none"){
              
             if(tabs[i].id === this.activeTabHolder){
              tabs[i].skin = this.tabActiveSkin;
              icons[i].skin = this.tabIconActiveSkin;
              
              if(this.includeTabTitle){
                title[i].skin = this.tabTitleActiveSkin;
              }else{
                if(this.includeTabBottomBorder){
                  tabBottomBorder[i].skin = this.tabBottomBorderSkin;
                  tabBottomBorder[i].isVisible = true;
                }
              }
              
            }else{
              tabs[i].skin = this.tabNormalSkin;
              icons[i].skin = this.tabIconNormalSkin;
              
              if(this.includeTabTitle){
                title[i].skin = this.tabTitleNormalSkin;
              }
             }
              
            }else{
              tabs[i].skin = this.tabNormalSkin;
              icons[i].skin = this.tabIconNormalSkin;
              
              if(this.includeTabTitle){
                title[i].skin = this.tabTitleNormalSkin;
              }
            }
            
            
            
            notifyIcon[i].skin = this.tabNotifySkin;
            
          }
          
          topBorder.skin = this.appBarTopBorderSkin;
         
        }catch(exception){
          throw(exception);
        }
        
      },
      
      
      /**
      *Sets dimensions to all ui,
      *For Icon and Notify Icons their Wrappers are used for the dimensions
      *Because their dimentions are set to !00% width and height respectively.
      *The icon and icon notify sould be altered using font size
      */
      setDimensions: function(){
        
        var iconWrapperA = this.view.flxIconWrapperA;
        var iconWrapper = [this.view.flxIconWrapperB,this.view.flxIconWrapperC,this.view.flxIconWrapperD,this.view.flxIconWrapperE];
        var notifyIconwrappersA = this.view.flxIconNotWrapperA;
        var notifyIconwrappers = [this.view.flxIconNotWrapperB,this.view.flxIconNotWrapperC,this.view.flxIconNotWrapperD,this.view.flxIconNotWrapperE];
        var labelNamesA = this.view.labelNameA;
        var labelNames = [this.view.labelNameB,this.view.labelNameC,this.view.labelNameD,this.view.labelNameE];
        var bottomBorderA = this.view.flxTabBottomBorderA;
        var bottomBorder = [this.view.flxTabBottomBorderB,this.view.flxTabBottomBorderC,this.view.flxTabBottomBorderD,this.view.flxTabBottomBorderE];
        
        try{
          
          for(i=0; i<4;i++){
            
            iconWrapper[i].centerX = iconWrapperA.centerX;
            iconWrapper[i].centery = iconWrapperA.centery;
            iconWrapper[i].width = iconWrapperA.width;
            iconWrapper[i].height = iconWrapperA.height;
            
            if(this.includeNotifyIcons){
              notifyIconwrappers[i].centerX = notifyIconwrappersA.centerX;
              notifyIconwrappers[i].centery = notifyIconwrappersA.centery;
              notifyIconwrappers[i].width = notifyIconwrappersA.width;
              notifyIconwrappers[i].height = notifyIconwrappersA.height;
            }
            
            if(this.includeTabTitle){
              labelNames[i].centerX = labelNamesA.centerX;
              labelNames[i].centery = labelNamesA.centery;
            }
            
            if(this.includeTabTitle){
              if(this.includeTabBottomBorder){
                bottomBorder[i].height = bottomBorderA.height;
              }
            }
            
          }
          
        }catch(exception){
          throw(exception);
        }
      },
      
	};
 
});