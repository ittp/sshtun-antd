const admins = {
  remote: {},
  local: {}
};

const log = (data) => console.log(data);
const netconfig = require("./network.yaml");
const network = [
  {
    id: 0,
    name: "wan",
    device: 0,
    config: {
      ip: "192.168.1.100",
      netmask: "255.255.255.0",
      gateway: "192.168.3.2",
      dns: ["192.168.3.2"]
    }
  }
];
/*
   firewall: {
      allow: [],
      deny: [],
      reject: [],
      log: []
    },

const services = [
  ("http": {
    id: 1,
    name: "http",
    description: "HTTP",

    protocol: "tcp",
    port: 80
  }),
  {
    id: 2,
    name: "ssh",
    protocol: "tcp",
    port: 22
  }
];

log(services[0]);
*/
