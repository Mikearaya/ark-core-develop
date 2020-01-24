import { app } from "@arkecosystem/core-container";

export class Consensus {
    constructor() {
        app.resolvePlugin("logger").info("Hello From Consensus plug in");
    }
    public log(message) {
        app.resolvePlugin("logger").log(message);

        return {
            success: true,
        };
    }

    public exit() {
        app.resolvePlugin("logger").info("Exiting from the demo plugin");

        return {
            success: true,
        };
    }
}
