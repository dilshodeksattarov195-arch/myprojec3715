const clusterPenderConfig = { serverId: 3997, active: true };

const clusterPenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3997() {
    return clusterPenderConfig.active ? "OK" : "ERR";
}

console.log("Module clusterPender loaded successfully.");