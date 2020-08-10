angular.module("snackxpress").provider("serialGenerator", () => {

    const _lenght = 10;

    this.getLength = () => {
        return _lenght;
    }

    this.setLength = (lenght) => {
        this._lenght = lenght;
    }

    this.$get = () => {
        return {
            generate: () => {
                let serial = "";
                while(serial.length < 10) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64 ) + 32 );
                }
                return serial;
            }
        };
    }
})