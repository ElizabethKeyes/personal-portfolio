import { emailApi } from "./AxiosService.js";

class EmailsService {
  async sendEmail(emailData) {
    emailData.service_id = 'service_gopu1ms'
    emailData.template_id = 'template_gxaqi99'
    emailData.user_id = 'yxRhojyX12xpQWNCV'
    // emailData.template_params = {
    //   name: emailData.name,
    //   email: emailData.email,
    //   message: emailData.message
    // }
    const res = await emailApi.post('', emailData)
    logger.log(res.data, 'emailJS response')
  }
}

export const emailsService = new EmailsService();