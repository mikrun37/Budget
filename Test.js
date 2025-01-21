function test0()
//Test 0
//Testa testdriver för att utföra ett test, utvärdera och returnera utfall.
{
TestResult="Not set by testDriver()"
//Fungerar inte eftersom anropet till en funktion som inte returnerar nollställer variabeln
//TestResult=testDriver()
if (TestResult == "False")
{
        app.ShowPopup("Test 0 passed"+ "TestResult has value: " + TestResult)
        app.Wait(15)
    }
    else
{
    app.ShowPopup("Test 0 failed"+ "TestResult has value: " + TestResult)
    app.Wait(15)
}    
    
if (TestResult == "True")
{
        app.ShowPopup("Test 0 passed"+ "TestResult has value: " + TestResult)
        app.Wait(15)
    }
    else
{
    app.ShowPopup("Test 0 failed"+ "TestResult has value: " + TestResult)
    app.Wait(15)
}

/*
if ((TestResult !== "False") || (TestResult !== "True"))
{
    app.ShowPopup("Test 0 failed" + "TestResult has value: " + TestResult)
    app.Wait(10)
    } else
    {
        app.ShowPopup("Test 0 passed"+ "TestResult has value: " + TestResult)
        app.Wait(10)
    }
    */
//Korrekt utfall att TestResult har ett sanningsvärde "True" eller "False"
}

//Test 1
//Ladda skriptet för att skapa konfig
//Skriptets namn ska vara konfigurerbart

//app.Script("Config.js" )


//Test 2
//Konfigurationsskriptet ska kunna ta en parameter för vilken konfig-fil som ska användas.







function testDriver()
{
    //return "Kalle"
    }