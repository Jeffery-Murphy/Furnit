import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaSquareMinus } from "react-icons/fa6";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      id: 1,
      question: "What type of furniture do you offer?",
      answer:
        "To create an account, download our app from the App Store or Google Play. Open the app and follow the on-screen instructions to complete the sign-up process. You’ll need to provide basic information such as your name, email address, and a secure password. After that, you’ll receive a verification code via email or SMS to confirm your account. Once verified, you can log in and access all features, including sending and receiving money, tracking transactions, and managing your account settings.",
    },
    {
      id: 2,
      question: "What payment method do you accept?",
      answer:
        "Our service offers a variety of payment options to meet your needs. You can send funds to local wallets like MTN Mobile Money, Vodafone Cash, and Orange Money. Additionally, we support traditional bank transfers to major banks within the recipient’s country. Each method has been optimized to ensure quick processing times, and in many cases, the funds are available instantly. We are constantly expanding our list of supported payment options to provide you with even more flexibility.",
    },
    {
      id: 3,
      question: "Can I track my furniture delivery?",
      answer:
        "Transfer times depend on several factors, including the recipient's payment method and location. For most local wallet transfers (such as MTN, Vodafone, or Orange), funds are delivered instantly or within a few minutes. Bank transfers, however, may take a bit longer, typically between 1-3 business hours, depending on the bank's processing times. We prioritize fast and reliable service, so you can rest assured that your funds will arrive as quickly as possible. For real-time updates, you can track the status of your transfer in the app.",
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer:
        "Yes, we take security very seriously. Our platform uses advanced encryption technologies to protect your personal information and transaction details. This means all data transmitted between your device and our servers is encrypted and inaccessible to unauthorized parties. Additionally, we comply with international data protection regulations to ensure that your information is handled safely. Our app also includes multi-factor authentication (MFA) and device verification to provide additional layers of security, helping to safeguard your account against unauthorized access.",
    },
    {
      id: 5,
      question: "What materials are used in your furniture?",
      answer:
        "Yes, we take security very seriously. Our platform uses advanced encryption technologies to protect your personal information and transaction details. This means all data transmitted between your device and our servers is encrypted and inaccessible to unauthorized parties. Additionally, we comply with international data protection regulations to ensure that your information is handled safely. Our app also includes multi-factor authentication (MFA) and device verification to provide additional layers of security, helping to safeguard your account against unauthorized access.",
    },
    {
      id: 6,
      question: "Are there any discount or promotion available?",
      answer:
        "Yes, we take security very seriously. Our platform uses advanced encryption technologies to protect your personal information and transaction details. This means all data transmitted between your device and our servers is encrypted and inaccessible to unauthorized parties. Additionally, we comply with international data protection regulations to ensure that your information is handled safely. Our app also includes multi-factor authentication (MFA) and device verification to provide additional layers of security, helping to safeguard your account against unauthorized access.",
    },
  ];
  return (
    <div className="py-32 px-32">
      <p className="text-center">Question</p>
      <p className="font-medium text-center text-[30px]">
        Questions?<span className="text-[#0b410b]"> Look here.</span>
      </p>
      <div className="faq-list mt-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item bg-[${
              openIndex === index && "#0b410b"
            }] rounded-md mb-4`}
          >
            <div
              className={`flex items-center justify-between border-[${
                openIndex === index ? "" : "2px"
              }] border-[#b9b9b943] p-[10px] rounded-md`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`faq-question cursor-pointer font-medium text-[${
                    openIndex === index ? "#FFFFFF" : "#00000"
                  }] text-[15px]`}
                  onClick={() => toggleAnswer(index)}
                >
                  {item.question}
                </div>
              </div>
              {openIndex === index ? (
                <FaSquareMinus size={25} color="#ffa500" />
              ) : (
                <IoIosAdd size={25} color="#000000" />
              )}
            </div>
            {openIndex === index && (
              <div className="faq-answer px-2 pb-2 text-white text-[14px]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
