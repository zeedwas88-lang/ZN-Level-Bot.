export const config = {
  token: process.env.TOKEN || "",

  generalChannelId: "",

  roles: {
    newStaff: "",
    helper: "",
    jrHelper: "",
    supervisor: "",
    moderator: "",
    jrMod: ""
  },

  points: {
    message: 1,
    voice: 10,
    ticketClaim: 3,
    warning: 2
  },

  cooldowns: {
    message: 30,
    voice: 600
  },

  doubleXP: {
    enabled: true,
    everyHours: 5,
    durationMinutes: 60
  },

  promotions: [
    { points: 100, role: "newStaff" },
    { points: 250, role: "helper" },
    { points: 450, role: "jrHelper" },
    { points: 650, role: "supervisor" },
    { points: 750, role: "moderator" },
    { points: 800, role: "jrMod" }
  ]
};
