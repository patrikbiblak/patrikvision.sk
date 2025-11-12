import FtpDeploy from "ftp-deploy";
import dotenv from "dotenv";

dotenv.config();

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  localRoot: "./build",
  remoteRoot: '/',
  include: ["*", "**/*"],
  deleteRemote: true,
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("✅ Deploy complete:", res))
  .catch(err => console.error("❌ Deploy failed:", err));
