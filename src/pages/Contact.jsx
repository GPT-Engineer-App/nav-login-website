import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Your Message" />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;