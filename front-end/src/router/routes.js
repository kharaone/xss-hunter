import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

const XSSPayloadFireReports = () =>
    import("@/pages/XSSPayloadFireReports.vue");
const XSSPayloads = () =>
    import("@/pages/XSSPayloads.vue");
const Settings = () =>
    import("@/pages/Settings.vue");
const CollectedPages = () =>
    import("@/pages/CollectedPages.vue");

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/",
        children: [
            {
                path: "",
                name: "Payload Fire Reports",
                component: XSSPayloadFireReports
            },
            {
                path: "/xsspayloads",
                name: "Payloads",
                component: XSSPayloads
            },
            {
                path: "/collectedpages",
                name: "Collected Pages",
                component: CollectedPages
            },
            {
                path: "/settings",
                name: "Settings",
                component: Settings
            },
        ]
    }
];

export default routes;
