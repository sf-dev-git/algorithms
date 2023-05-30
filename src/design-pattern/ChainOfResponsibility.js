class Handler {
    nextHandler;

    setNext(handler) {
        return this.nextHandler = new handler;
    }

}

class Google extends Handler{
    handle(request) {
        if(request === 'google') {
            return 'Im Google';
        }
        if (this.nextHandler) {
            return  this.nextHandler.handle(request);
        }
        return null;
    }

}

class Firefox extends Handler{
    handle(request) {
        if(request === 'firefox') {
            return 'Im Firefox';
        }
        if (this.nextHandler) {
            return  this.nextHandler.handle(request);
        }
        return null;
    }

}

class Edge extends Handler{
    handle(request) {
        if(request === 'edge') {
            return 'Im Edge';
        }
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }

}

function chainOfResponsibility(request) {
    let handler = new Google;
    handler.setNext(Edge).setNext(Firefox);

    return handler.handle(request);

}

chainOfResponsibility('edge');

module.exports = chainOfResponsibility;
