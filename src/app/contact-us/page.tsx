import * as C from '@/components/index'
import { companyName } from '@/constants'

const ContactUs = () => <>
  <C.Hero text="enterprises growth companies startups" url="#contact-form" btn={'tell us about your project'} heading="Connect with Us Today for Expert Support and Assistance" poster="/banner-1.webp" />


  <C.ContactInfo />

</>

export default ContactUs


export const metadata = {
  title: `Contact Us | ${companyName}`,
}