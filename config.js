
class Config
{
	constructor(theLang)
	{
	     this.lang=theLang
	     this.configText=app.ReadFile("config.json")
	     this.theConfigObj=JSON.parse(this.configText)
		  //Properties
		   this.props=new Map()
		    
	    	//this.logo="/Sys/Img/Icon.png"
	    	this.props.set("logo","/Sys/Img/Icon.png")
        //this.mainBackground="/Res/drawable/android"
        this.props.set("mainBackground","/Res/drawable/android")
        
        //this.infoText="<-- swipe from left"
         this.props.set("infoText","<-- swipe from left")
         //this.swipeDirection="left"
         this.props.set("swipeDirection","left")
        // this.txtUser="Mikael Rundqvist"
         this.props.set("txtUser","/Res/drawable/android")
         // this.txtEmail="mikael.rundqvist@gmail.com"
         this.props.set("txtEmail","mikael.rundqvist@gmail.com")
         //this.background="/Sys/Img/GreenBack.jpg"
         this.props.set("background","/Sys/Img/GreenBack.jpg")
        // this.drawerBackColor="White"
         this.props.set("drawerBackColor","White")
	}
	
	//---- METHODS ----
	
	getConfigItemValue(theCIKey){
	    return(this.props.get(theCIKey))
	}
	
	getConfigText()
	{
	    return(this.configText)
	    }
	    
	getConfigObject()
	{
	    return(this.theConfigObj) 
	    }
	    
	Test()
	{
	   //Note: we use an arrow function so 'this' works inside callbacks.
		app.TextToSpeech( "Hello " + this.name, 1,1, ()=>{this.OnSpeechDone()} )
	}
	
	//---- CALLBACKS ----
	
	OnSpeechDone()
	{
		app.ShowPopup( "Your age is " + this.age )
	}
}