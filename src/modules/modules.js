export {default as WebpackModules} from "./webpackmodules";

import DiscordModules from "./discordmodules";
export const React = DiscordModules.React;
export const ReactDOM = DiscordModules.ReactDOM;
export {DiscordModules};

export {default as Utilities} from "./utilities";
export {default as DataStore} from "./datastore";
export {default as Events} from "./emitter";
export {default as Settings} from "./settingsmanager";
export {default as DOMManager} from "./dommanager";
export {default as Logger} from "./logger";
export {default as Patcher} from "./patcher";
export {default as ReactComponents} from "./reactcomponents";
export {default as Strings} from "./strings";