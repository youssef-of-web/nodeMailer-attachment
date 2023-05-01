const { form } = require("../lib/forms");
const { nodeMailer } = require("../lib/nodeMailer");

module.exports = {
  Send: async (req, res) => {
    const mail = await nodeMailer(req.body.to, "form test", form());
    res.send(mail);
  },
};
