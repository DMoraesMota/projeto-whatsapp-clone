class WhatsAppController {

    constructor(){
        console.log('WhatsApp Controller OK');       
        
        this.elementsPrototype();
        this.loadElement();        
        this.initEvents();
    }

    loadElement(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(Element => {

            this.el[Format.getCamelCase(Element.id)] = Element;

        });
    }

    elementsPrototype(){

        Element.prototype.hide = function () {
            this.style.display = 'nome';
            return this;
        }

        Element.prototype.show = function () {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function () {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
            return this;
        }

        Element.prototype.css = function(styles){
            for (let name in styles){
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function(name){
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function(name){
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function(name){
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function(name){
            return this.classList.contains(name);
        }

    }

    initEvents(){
        
        this.el.myPhoto.on('click', e=> {

            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            this.el.panelEditProfile.addClass('open');

        });

        this.el.btnNewContact.on('click', e=> {

            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            this.el.panelAddContact.addClass('open');

        });

        this.el.btnClosePanelEditProfile.on('click', e => {

            this.el.panelEditProfile.removeClass('open');
            
        });
    }

    closeAllLeftPanel(){
        
        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();

    }

}