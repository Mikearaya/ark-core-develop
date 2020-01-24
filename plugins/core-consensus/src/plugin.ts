import { Container } from "@arkecosystem/core-interfaces";
import { Consensus } from "./consensus";
import { defaults } from "./defaults";

export const plugin: Container.IPluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    alias: "core-consensus",
    async register(container: Container.IContainer, options) {
        return new Consensus();
    },
    async deregister(container: Container.IContainer, options) {
        return container.resolvePlugin("core-consensus").exit();
    },
};
