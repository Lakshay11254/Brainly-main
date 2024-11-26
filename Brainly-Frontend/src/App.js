"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const Button_1 = require("./components/ui/Button");
const PlusIcon_1 = require("./icons/PlusIcon");
const ShareIcon_1 = require("./icons/ShareIcon");
function App() {
    return (<>
      <Button_1.Button variant={"primary"} startIcon={<PlusIcon_1.PlusIcon size={"lg"}/>} endIcon={<ShareIcon_1.ShareIcon size={"lg"}/>} size="lg" title={"Share"}></Button_1.Button>

    <Button_1.Button variant={"secondary"} startIcon={<PlusIcon_1.PlusIcon size={"lg"}/>} endIcon={<ShareIcon_1.ShareIcon size={"lg"}/>} size="lg" title={"Share"}></Button_1.Button>


      <Button_1.Button variant={"primary"} startIcon={<PlusIcon_1.PlusIcon size={"sm"}/>} endIcon={<ShareIcon_1.ShareIcon size={"sm"}/>} size="sm" title={"Share"}></Button_1.Button>
    </>);
}
exports.default = App;
