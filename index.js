var CronJob = require("cron").CronJob;
const mongo = require("./db/mongo");

var job = new CronJob(
  "* * * * *",
  () => {
    mongo();
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();
