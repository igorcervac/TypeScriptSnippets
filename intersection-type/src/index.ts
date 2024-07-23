interface IPhone {
    makeCall():void
}

interface IPhotograph {
    takePhoto():void
}

type ISmartPhone = IPhone & IPhotograph;

class SmartPhone implements ISmartPhone {
    makeCall(): void {
        console.log('Make call');
    }

    takePhoto(): void {
        console.log('Take photo');        
    }
}

let smartphone: SmartPhone = new SmartPhone();
smartphone.makeCall();
smartphone.takePhoto();