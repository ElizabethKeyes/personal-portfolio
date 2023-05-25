import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { emailApi } from "./AxiosService.js";
import emailjs from '@emailjs/browser';

class EmailsService {
  sendEmail(emailData) {
    emailjs
      .sendForm(
        "service_gopu1ms",
        "template_gxaqi99",
        emailData,
        "yxRhojyX12xpQWNCV"
      )
      .then(
        function (response) {
          logger.log("SUCCESS!", response.status, response.text);
          Pop.toast("Message sent!", "success", "center");
        },
        function (error) {
          logger.log("FAILED...", error);
          Pop.toast("Message not sent", "error", "center");
        }
      );
  };
}

export const emailsService = new EmailsService();