class SwipeMenu
{
   constructor(theLang,theDrawerWidth,theSwipeDirection) {
       this.lang=theLang
       this.drawerWidth=theDrawerWidth
       this.swipeDirection=theSwipeDirection
   
   }
    

    //Create the drawer contents.
    CreateDrawer() {
        //Create a layout for the drawer.
    	//(Here we also put it inside a scroller to allow for long menus)
    	//drawerWidth = 0.75;
        var drawerScroll = app.CreateScroller( this.drawerWidth, -1, "FillY" )
        drawerScroll.SetBackColor( "White" )
    	//returnera layDrawer istället
    	
    	var layDrawer = app.CreateLayout( "Linear", "Left" )
    	drawerScroll.AddChild( layDrawer )
    	
    	//Create layout for top of drawer.
    	var layDrawerTop = app.CreateLayout( "Absolute" )
    	layDrawerTop.SetBackground( "/Sys/Img/GreenBack.jpg" )
    	layDrawerTop.SetSize( this.drawerWidth, 0.23 )
    	layDrawer.AddChild( layDrawerTop )
    	
    	//Add an icon to top layout.
    	var img = app.CreateImage( "/Sys/Img/Icon.png", 0.15 )
    	img.SetPosition( this.drawerWidth*0.06, 0.04 )
    	layDrawerTop.AddChild( img )
    	
    	//Add user name to top layout.
    	var txtUser = app.CreateText( "Dave Smart",-1,-1,"Bold")
    	txtUser.SetPosition( this.drawerWidth*0.07, 0.155 )
    	txtUser.SetTextColor( "White" )
    	txtUser.SetTextSize( 13.7, "dip" )
    	layDrawerTop.AddChild( txtUser )
    	
    	//Add user email to top layout.
    	var txtEmail = app.CreateText( "david@droidscript.org")
    	txtEmail.SetPosition( this.drawerWidth*0.07, 0.185 )
    	txtEmail.SetTextColor( "#bbffffff" )
    	txtEmail.SetTextSize( 14, "dip" )
    	layDrawerTop.AddChild( txtEmail )
    	
    	//Create menu layout.
    	var layMenu = app.CreateLayout( "Linear", "Left" )
    	layDrawer.AddChild( layMenu )
    	
        //Add a list to menu layout (with the menu style option).
        var listItems = "Primary::[fa-home],Social::[fa-users],Promotions::[fa-tag]";
        var lstMenu1 = app.CreateList( listItems, this.drawerWidth, -1, "Menu,Expand" )
        lstMenu1.SetColumnWidths( -1, 0.35, 0.18 )
        lstMenu1.SelectItemByIndex( 0, true )
        lstMenu1.SetItemByIndex( 0, "Primary", 21 )
        lstMenu1.SetOnTouch( lstMenu_OnTouch )
        layMenu.AddChild( lstMenu1 )
        
        //Add seperator to menu layout.
        var sep = app.CreateImage( null, this.drawerWidth,0.001,"fix", 2,2 )
        sep.SetSize( -1, 1, "px" )
        sep.SetColor( "#cccccc" )
        layMenu.AddChild( sep )
        
        //Add title between menus.
    	var txtTitle = app.CreateText( "All labels",-1,-1,"Left")
    	txtTitle.SetTextColor( "#666666" )
    	txtTitle.SetMargins( 16,12,0,0, "dip" )
    	txtTitle.SetTextSize( 14, "dip" )
    	layMenu.AddChild( txtTitle )
    	
        //Add a second list to menu layout.
        var listItems = "Starred::[fa-star],Important::[fa-flag],Settings::[fa-cog]";
        var lstMenu2 = app.CreateList( listItems, this.drawerWidth, -1, "Menu,Expand" )
        lstMenu2.SetColumnWidths( -1, 0.35, 0.18 )
        lstMenu2.SetOnTouch( lstMenu_OnTouch )
        layMenu.AddChild( lstMenu2 )
        //returnerar nu layouten 
        return(drawerScroll)
    }
    
    //getter for the width of the drawer
    getDrawerWidth() {
        return(this.drawerWidth)
    }
    
    
    getSwipeDirection(){
        return(this.drawerSwipeDirection)
    }
        
        
    //Handle menu item selection.
    lstMenu_OnTouch( title, body, type, index ) {
        //Close the drawer.
        app.CloseDrawer( "Left" )
        
        //Highlight the chosen menu item in the appropriate list.
        if( this==lstMenu1 ) lstMenu2.SelectItemByIndex(-1)
        else lstMenu1.SelectItemByIndex(-1)
        this.SelectItemByIndex( index, true )
        
        app.ShowPopup( title )
    }
    
    //Called when a drawer is opened or closed.
    OnDrawer( side, state ){
        console.log( side + " : " + state )
    }
    
    //Called when hardware menu key pressed.
    OnMenu( name ) {  
        app.OpenDrawer()
    }
    
}

