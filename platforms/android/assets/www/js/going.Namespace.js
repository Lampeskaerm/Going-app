var Globals = Globals || {};

Globals.test = {
	restaurants: []
}

Globals.loggedIn = false;

Globals.loginStatus = "";

Globals.user = null;

Globals.currentSection = "";

Globals.texts = {
	verification: "You have received an email to verify the given email-adress.",
	verified: "You have successfully verified your email"
}

Globals.verificationEmail = {
	subject: "Verify your email",
	content: "To verify your emailadress please type this code [UNIQUE] into the app in the specified textfield."
}

Globals.temporarySave = "";