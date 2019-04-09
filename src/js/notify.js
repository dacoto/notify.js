'use strict';

class Notify {
    /**
     * Generic constructor
     * @param options
     * @param type
     */
    constructor(options = {}, type = 'primary') {
        if (typeof options.title !== 'undefined' && typeof options.message !== 'undefined') {
            // Types of alerts
            let types = ['primary', 'success', 'warning', 'danger'];
            // Check alert type
            if (types.includes(type)) {
                // Notify container
                this._element = document.createElement('div');
                this._type = type;
                this._options = options;
                this.make();
            } else {
                throw new Error('The notify could not be generated, undefined type');
            }
        } else {
            throw new Error('The notify could not be generated, title or message not defined');
        }
    }

    /**
     * Notify builder
     */
    make() {
        // Global this
        let _this = this;
        // If the icon is not configured, we get the default icon for that color
        if (!this._options.icon) {
            switch (this._type) {
                case 'primary':
                    this._options.icon = 'notify-icon notify-icon-primary';
                    break;
                case 'success':
                    this._options.icon = 'notify-icon notify-icon-success';
                    break;
                case 'warning':
                    this._options.icon = 'notify-icon notify-icon-warning';
                    break;
                case 'danger':
                    this._options.icon = 'notify-icon notify-icon-danger';
                    break;
            }
        }
        // If the notify width is not configured, we enter the default value
        if (!this._options.width) {
            this._options.width = 420;
        }
        // If the notify auto open is not configured, we enter the default value
        if (typeof this._options.autoOpen === 'undefined') {
            this._options.autoOpen = true;
        }
        // Notify action button
        let notifyActionButton = document.createElement('a');
        if (this._options.link) {
            notifyActionButton.setAttribute("href", this._options.link.linkHref);
            notifyActionButton.className = this._options.link.linkClass;
            notifyActionButton.innerText = this._options.link.linkText;
        }
        // Notify close button div
        let notifyRightTitle = document.createElement('div');
        notifyRightTitle.className = 'notify-notification-content-inner-' + this._type + '-right-title';
        notifyRightTitle.innerText = this._options.title;
        // Notify close button div
        let notifyRightMessage = document.createElement('div');
        notifyRightMessage.className = 'notify-notification-content-inner-' + this._type + '-right-message';
        if (this._options.link) {
            notifyRightMessage.innerHTML = this._options.message + '<br><br>';
            notifyRightMessage.append(notifyActionButton);
        } else {
            notifyRightMessage.innerText = this._options.message;
        }
        // Notify close button div
        let notifyCloseButton = document.createElement('a');
        notifyCloseButton.className = 'notify-notification-close-btn';
        notifyCloseButton.innerText = 'X';
        notifyCloseButton.addEventListener('click', function () {
            _this.close();
        });
        let notifyCloseButtonDiv = document.createElement('div');
        notifyCloseButtonDiv.className = 'notify-notification-content-inner-' + this._type + '-right-close';
        notifyCloseButtonDiv.append(notifyCloseButton);
        // Notify content right
        let notifyContentRight = document.createElement('div');
        notifyContentRight.className = 'notify-notification-content-inner-' + this._type + '-right';
        notifyContentRight.append(notifyCloseButtonDiv);
        notifyContentRight.append(notifyRightTitle);
        notifyContentRight.append(notifyRightMessage);
        // Notify content left icon
        let notifyContentLeftIcon = document.createElement('i');
        notifyContentLeftIcon.className = this._options.icon;
        // Notify content left
        let notifyContentLeft = document.createElement('div');
        notifyContentLeft.className = 'notify-notification-content-inner-' + this._type + '-left';
        notifyContentLeft.append(notifyContentLeftIcon);
        // Notify content inner
        let notifyDialogInner = document.createElement('div');
        notifyDialogInner.className = 'notify-notification-content-inner-' + this._type;
        notifyDialogInner.append(notifyContentLeft);
        notifyDialogInner.append(notifyContentRight);
        // Notify content inner
        let notifyContent = document.createElement('div');
        notifyContent.className = 'notify-notification-content';
        notifyContent.append(notifyDialogInner);
        // Notify dialog
        let notifyDialog = document.createElement('div');
        notifyDialog.className = 'notify-notification-dialog';
        notifyDialog.style.cssText = 'width: ' + this._options.width + 'px;';
        notifyDialog.append(notifyContent);
        // Insert notify in container
        this._element.className = 'notify-notification notify-notification-' + this._type + ' notify-notification-fade-right notify-notification-in';
        this._element.style.cssText = 'top: 0px; right: 0px;';
        this._element.append(notifyDialog);
        this._element.style.display = 'none';
        // Append notify to body
        document.body.append(this._element);
        // If auto open is enabled open notification
        if (this._options.autoOpen) {
            this.open();
        }
    }

    /**
     * Notify open action
     */
    open() {
        if (this._element.style.display === 'none') {
            if (this._options.onOpen) {
                this._options.onOpen();
            }
            this._element.style.display = 'block';
            // Send other notifications to background
            let x = document.getElementsByClassName('notify-notification-in');
            this.numberOfParentModals = x.length;
            let distanceToMove = 5;
            if (this.numberOfParentModals > 0) {
                for (let i = 0; i < this.numberOfParentModals; i++) {
                    let currentMarginTop = x[i].style['top'];
                    if (currentMarginTop && currentMarginTop !== '0px') {
                        let m = Math.abs(currentMarginTop.slice(0, -2));
                        let dist = parseInt(m + distanceToMove);
                        x[i].style['top'] = '-' + dist + 'px';
                        x[i].style['right'] = '-' + dist + 'px';
                    } else {
                        x[i].style['top'] = distanceToMove * -1 + 'px';
                        x[i].style['right'] = distanceToMove * -1 + 'px';
                    }
                }
            }
        } else {
            throw new Error('Notification already opened');
        }
    }

    /**
     * Notify close action
     */
    close() {
        if (this._element.style.display === 'block') {
            if (this._options.onClose) {
                this._options.onClose();
            }
            // Remove element
            this._element.style.display = 'none';
            // Pull other notifications to front
            let x = document.getElementsByClassName('notify-notification-in');
            this.numberOfParentModals = x.length;
            let distanceToMove = -5;
            if (this.numberOfParentModals > 0) {
                for (let i = 0; i < this.numberOfParentModals; i++) {
                    let currentMarginTop = x[i].style['top'];
                    if (currentMarginTop && currentMarginTop !== '0px') {
                        let m = Math.abs(currentMarginTop.slice(0, -2));
                        let dist = parseInt(m + distanceToMove);
                        x[i].style['top'] = '-' + dist + 'px';
                        x[i].style['right'] = '-' + dist + 'px';
                    } else {
                        x[i].style['top'] = distanceToMove * -1 + 'px';
                        x[i].style['right'] = distanceToMove * -1 + 'px';
                    }
                }
            }
        } else {
            throw new Error('Notification already closed');
        }
    }
}

global.Notify = Notify;

export {Notify as default}
