"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Button from "@/components/Buttons/Button";

// type ContactFormDataProps = {
//   firstName: string;
//   lastName: string;
//   phone: number;
//   email: string;
//   groupOrCompany: string;
//   message: string;
// };

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <section>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="uppercase text-4xl mb-4">Contact Us</h2>
          <p>
            We’re always happy to hear from fellow tequila fans — drop us a line
            with any questions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#333333] p-4 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  className="w-full outline-none text-white px-4 py-2 rounded-sm bg-[#1c1c1c]"
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                <input
                  className="w-full outline-none text-white px-4 py-2 rounded-sm bg-[#1c1c1c]"
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  className="w-full outline-none text-white px-4 py-2 rounded-sm bg-[#1c1c1c]"
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                />
                <input
                  className="w-full outline-none text-white px-4 py-2 rounded-sm bg-[#1c1c1c]"
                  type="email"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                />
              </div>
              <input
                className="w-full mb-4 outline-none text-white px-4 py-2 rounded-sm bg-[#1c1c1c]"
                type="text"
                placeholder="Group Or Company"
                {...register("groupOrCompany", { required: true })}
              />
              <textarea
                className="w-full mb-4 outline-none text-white px-4 py-2 rounded-sm bg-[#1c1c1c]"
                name="message"
                id="message"
                placeholder="How Can We Help!"
                cols={30}
                rows={8}
              />
              <Button type="submit" className="btn-primary">
                Submit
              </Button>
            </form>
          </div>
          <div className="bg-[#333333] p-4 rounded-md">
            <div>
              <h3 className="text-[#988357] text-2xl font-bold mb-2">
                Our Details
              </h3>
              <ul>
                <li>
                  <div className="flex gap-4">
                    <span>Email:</span>
                    <Link href="mailto:zahidul.haque767@gmail.com">
                      zahidul.haque767@gmail.com
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4">
                    <span>Phone</span>
                    <Link href="tel:+8801789293803">+8801789293803</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-4">
              <h3 className="text-[#988357] text-2xl font-bold mb-2">
                Our Location
              </h3>
              <ul>
                <li>
                  <div className="flex gap-4">
                    <span>Address:</span>
                    <address>
                      <p>HACIEN HQ, Greek Street, LS1 5SH</p>
                    </address>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <p>Map Coming Soon 🙂</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
