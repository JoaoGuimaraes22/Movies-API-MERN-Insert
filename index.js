var CronJob = require("cron").CronJob;
const movies = require("./helpers/movies").default;

var job = new CronJob(
  "* * * * *",
  () => {
    movies();
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();
