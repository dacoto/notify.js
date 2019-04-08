'use strict';

class Notify {
    /**
     * Generic constructor
     * @param options
     * @param type
     */
    constructor(options = {}, type = 'primary') {
        let types = ['primary', 'success', 'warning', 'danger'];
        if (types.includes(type)) {
            this.notify(type, options);
        } else {
            throw new Error('The notify could not be generated, undefined type');
        }
    }

    /**
     * Notify builder
     * @param type
     * @param options
     */
    notify(type, options) {
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
        // If the icon is not configured, we get the default icon for that color
        if (!options['icon']) {
            switch (type) {
                case 'primary':
                    options['icon'] = 'notify-icon notify-icon-primary';
                    break;
                case 'success':
                    options['icon'] = 'notify-icon notify-icon-success';
                    break;
                case 'warning':
                    options['icon'] = 'notify-icon notify-icon-warning';
                    break;
                case 'danger':
                    options['icon'] = 'notify-icon notify-icon-danger';
                    break;
            }
        }
        // If the notify width is not configured, we enter the default value
        if (!options['width']) {
            options['width'] = 420;
        }
        // Notify container
        let notifyHtml = document.createElement('div');
        // Notify action button
        let notifyActionButton = document.createElement('a');
        if (options['link']) {
            notifyActionButton.setAttribute("href", options['link']['linkHref']);
            notifyActionButton.className = options['link']['linkHref'];
            notifyActionButton.innerText = options['link']['linkText'];
        }
        // Notify close button div
        let notifyRightTitle = document.createElement('div');
        notifyRightTitle.className = 'notify-notification-content-inner-' + type + '-right-title';
        notifyRightTitle.innerText = options['title'];
        // Notify close button div
        let notifyRightMessage = document.createElement('div');
        notifyRightMessage.className = 'notify-notification-content-inner-' + type + '-right-message';
        if (options['link']) {
            notifyRightMessage.innerHTML = options['message'] + '<br><br>';
            notifyRightMessage.append(notifyActionButton);
        } else {
            notifyRightMessage.innerText = options['message'];
        }
        // Notify close button div
        let notifyCloseButton = document.createElement('a');
        notifyCloseButton.className = 'notify-notification-close-btn';
        notifyCloseButton.innerText = 'X';
        notifyCloseButton.addEventListener('click', function () {
            notifyHtml.style.display = "none";
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
        });
        let notifyCloseButtonDiv = document.createElement('div');
        notifyCloseButtonDiv.className = 'notify-notification-content-inner-' + type + '-right-close';
        notifyCloseButtonDiv.append(notifyCloseButton);
        // Notify content right
        let notifyContentRight = document.createElement('div');
        notifyContentRight.className = 'notify-notification-content-inner-' + type + '-right';
        notifyContentRight.append(notifyCloseButtonDiv);
        notifyContentRight.append(notifyRightTitle);
        notifyContentRight.append(notifyRightMessage);
        // Notify content left icon
        let notifyContentLeftIcon = document.createElement('i');
        notifyContentLeftIcon.className = options['icon'];
        // Notify content left
        let notifyContentLeft = document.createElement('div');
        notifyContentLeft.className = 'notify-notification-content-inner-' + type + '-left';
        notifyContentLeft.append(notifyContentLeftIcon);
        // Notify content inner
        let notifyDialogInner = document.createElement('div');
        notifyDialogInner.className = 'notify-notification-content-inner-' + type;
        notifyDialogInner.append(notifyContentLeft);
        notifyDialogInner.append(notifyContentRight);
        // Notify content inner
        let notifyContent = document.createElement('div');
        notifyContent.className = 'notify-notification-content';
        notifyContent.append(notifyDialogInner);
        // Notify dialog
        let notifyDialog = document.createElement('div');
        notifyDialog.className = 'notify-notification-dialog';
        notifyDialog.style.cssText = 'width: ' + options['width'] + 'px;';
        notifyDialog.append(notifyContent);
        // Insert notify in container
        notifyHtml.className = 'notify-notification notify-notification-' + type + ' notify-notification-fade-right notify-notification-in';
        notifyHtml.style.cssText = 'top: 0px; right: 0px;';
        notifyHtml.append(notifyDialog);
        // Append notify to body
        document.body.append(notifyHtml);
    }
}

global.Notify = Notify;

export {Notify as default}
