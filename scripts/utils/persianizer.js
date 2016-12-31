/**
 * Created by emran on 12/8/16.
 */
window.persianizer = {
    reshapeNums: function (str) {
        if (typeof str !== 'string') {
            if (typeof str === 'number')
                return this.reshapeNums(str.toString());
            else
                return null;
        }

        let result = '';
        for (let i = 0; i < str.length; i++) {
            let ch = str.charAt(i);

            switch (ch) {
                case '0':
                    result += '۰';
                    break;
                case '1':
                    result += '۱';
                    break;
                case '2':
                    result += '۲';
                    break;
                case '3':
                    result += '۳';
                    break;
                case '4':
                    result += '۴';
                    break;
                case '5':
                    result += '۵';
                    break;
                case '6':
                    result += '۶';
                    break;
                case '7':
                    result += '۷';
                    break;
                case '8':
                    result += '۸';
                    break;
                case '9':
                    result += '۹';
                    break;
                default:
                    result += ch;
                    break;
            }
        }

        return result;
    }
};