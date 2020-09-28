(function(global, $) {

    var Greeter = function(firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    }
    
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greeter.prototype = {

        fullName: function() {
            return this.firstName + '' + this.lastName;
        },
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '.'
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal) {
            var msg;
            
            if (formal) {
                msg = this.formalGreeting()
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.lagnuage] + ': ' + this.fullName());
                
                return this;
            }
        }

    };

    Greeter.init = function(firstName = '', lastName = '', language = '') {

        var self = this; 
        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;

    }

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;

}(window, jQuery)); 