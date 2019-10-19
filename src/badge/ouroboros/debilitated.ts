import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Debilitated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "debilitated",
    names: [
        {value: "Debilitated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed a Task Force/Flashback between level 15 and 19 while not gaining bonuses from slotted Enhancements."},
    ],
    acquisition: "Complete a level 16-19 Flashback arc using no enhancements.",
    links: [
        {title: "Debilitated Badge", href: "https://paragonwiki.com/wiki/Debilitated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/debilitated.png"}]
};
