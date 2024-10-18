import Bar from "./bar/Bar.ts";
import Mpris from "./mpris/Mpris.ts";
import NotificationPopups from "./notifications/NotificationPopups.ts";
import OSD from "./osd/OSD.ts";
import QuickSettings from "./quicksettings/QuickSettings";

export default {
  windows: [Bar(), NotificationPopups(), OSD(), Mpris(), QuickSettings()],
};
