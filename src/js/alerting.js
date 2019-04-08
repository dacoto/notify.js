'use strict';

class Alerting {
    /**
     * Generic constructor
     * @param options
     * @param type
     */
    constructor(options = [], type = 'primary') {
        let types = ['default', 'primary', 'success', 'warning', 'danger'];
        if (types.includes(type)) {
            this.alert(type, options);
        } else {
            throw new Error('The alert could not be generated, undefined type');
        }
    }

    /**
     * Alert builder
     * @param type
     * @param options
     */
    alert(type, options) {
        // If not set icon, get default icons
        if (!options['icon']) {
            switch (type) {
                case 'default':
                    options['icon'] = 'fas fa-bell';
                    break;
                case 'primary':
                    options['icon'] = 'fas fa-info-circle';
                    break;
                case 'success':
                    options['icon'] = 'alerting-icon alerting-icon-success';
                    break;
                case 'warning':
                    options['icon'] = 'fas fa-exclamation-triangle';
                    break;
                case 'danger':
                    options['icon'] = 'fas fa-exclamation-circle';
                    break;
            }
        }

        // TODO all

        // Alert content right
        let alertContentRight = document.createElement('div');
        alertContentRight.className = 'alerting-notification-content-inner-' + type + '-right';
        // Alert content left icon
        let alertContentLeftIcon = document.createElement('i');
        alertContentLeftIcon.className = options['icon'];
        // Alert content right
        let alertContentLeft = document.createElement('div');
        alertContentLeft.className = 'alerting-notification-content-inner-' + type + '-left';
        alertContentLeft.append(alertContentLeftIcon);
        // Alert content
        let alertContent = document.createElement('div');
        alertContent.className = 'alerting-notification-content';
        alertContent.append(alertContentLeft);
        alertContent.append(alertContentRight);
        // Alert dialog
        let alertDialog = document.createElement('div');
        alertDialog.className = 'alerting-notification-dialog';
        alertDialog.append(alertContent);
        // Alert container
        let alertHtml = document.createElement('div');
        alertHtml.className = 'alerting-notification alerting-notification-' + type + ' alerting-notification-fade-right alerting-notification-in';
        alertHtml.style.cssText = 'display: block !important;';
        alertHtml.append(alertDialog);
        // Append alert to body
        document.body.append(alertHtml);
    }
}

global.Alerting = Alerting;

export {Alerting as default}
