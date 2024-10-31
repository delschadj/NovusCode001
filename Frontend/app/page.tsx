"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Modal } from "@/components/ui/modalLandingPage"
import { Code, Sparkle, FileText } from "lucide-react";
import CookieConsent from "react-cookie-consent";
import HowItWorksSection from "./HowItWorks"
import Benefits from "./Benefits"

const features = [
  { icon: <FileText />, title: "Documentation", description: "Auto generated documentation based on your needs.", image: "/f2.png" },
  { icon: <Code />, title: "CodeGPT", description: "Ask any questions 24/7 and always get code specific answers.", image: "/f3.png" },
  { icon: <Sparkle />, title: "CodeExplorer", description: "Explore and ask questions about the codebase in a cloud IDE.", image: "/f4.png" }
];

const slides = [
  { image: "/f1.png", text: "Step 1: Upload your codebase" },
  { image: "/slide2.png", text: "Step 2: AI analyzes the code" },
  { image: "/slide3.png", text: "Step 3: Start your onboarding journey" }
];

const LandingPage = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollAreaRef.current) {
        const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollElement) {
          const { scrollTop, scrollHeight, clientHeight } = scrollElement;
          const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
          setScrollProgress(scrollPercentage);
        }
      }
    };

    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const scrollElement = scrollArea.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.addEventListener('scroll', handleScroll);
        return () => scrollElement.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

  const handleStartDemoClick = () => {
    router.push("/start");
  };

  const handleEmailClick = () => {
    const name = document.querySelector('#contactForm input[type="text"]').value;
    const email = document.querySelector('#contactForm input[type="email"]').value;
    const message = document.querySelector('#contactForm textarea').value;
  
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink; // Redirect to the mailto link
  };

  const openModal = (image, title, description) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
    setSelectedTitle("");
    setSelectedDescription("");
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setEmail("");
    setMessage("");
    setConfirmationMessage("");
  };

  const handleSendMessage = () => {
    setConfirmationMessage("Your message has been sent! Thank you for contacting us.");
    closeContactModal();
  };

  const handleLogoClick = () => {
    router.push('/'); // Redirect to the home page
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("how-it-works");
      const images = section.querySelectorAll(".fade-in-image");
      
      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        const fadeInThreshold = index * window.innerHeight / images.length; // Calculate threshold for each image
        
        if (isVisible && window.scrollY > fadeInThreshold) {
          image.classList.remove("opacity-0");
          image.classList.add("opacity-100");
        } else {
          image.classList.remove("opacity-100");
          image.classList.add("opacity-0");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="h-screen bg-[#FAF7F2]">
      <ScrollArea className="h-full" ref={scrollAreaRef}>
        <div className="min-h-[calc(100vh-52px)] p-4 md:px-8">
          <div className="min-h-screen bg-[#FAF7F2]">
          <header className="py-6 px-4 md:px-8 flex flex-col justify-between items-center bg-[#FAF7F2] z-50 fixed top-0 left-0 right-0">
            <div className="w-full flex justify-between items-center">
              <div
                className="relative z-20 flex items-center text-2xl font-bold cursor-pointer"
                onClick={handleLogoClick} // Handle click to redirect
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                NovusCode
              </div>
              <nav>
                <div className="flex space-x-4">
                  <Button
                    variant="default"
                    className="bg-black hover:bg-gray-800 text-white"
                    onClick={handleStartDemoClick}
                  >
                    Start Demo
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-white hover:text-black"
                    onClick={handleStartDemoClick}
                  >
                    Login
                  </Button>
                </div>
              </nav>
            </div>
            <div className="w-full h-1 bg-gray-200 mt-2">
              <div
                className="h-full bg-black transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
          </header>

            <main className="container mx-auto px-4 md:px-8 py-24 bg-[#FAF7F2]">
              <CookieConsent
                style={{ background: "white", color: "black", padding: "5px 5px", fontSize: "14px" }} // Reduced padding for the CookieConsent
                buttonStyle={{
                    color: "white", // Accept button text color
                    fontSize: "13px",
                    fontWeight: "bold",
                    background: "black", // Accept button background color
                    border: "1px solid black",
                    borderRadius: "6px", // Add rounded corners to the Accept button
                    padding: "8px 12px", // Reduced padding for the button
                }}
                declineButtonStyle={{
                    color: "black", // Decline button text color
                    fontSize: "13px",
                    fontWeight: "bold",
                    background: "white", // Decline button background color
                    border: "1px solid black", // Add a border to the Decline button
                    borderRadius: "6px", // Add rounded corners to the Decline button
                    padding: "8px 12px", // Reduced padding for the button
                }}
                buttonText="Accept"
                declineButtonText="Decline"
                enableDeclineButton // Enable the decline button
            >
                <div style={{ padding: "5px 0" }}> {/* Added a small vertical padding to the text container */}
                    Empathy uses cookies to optimize site user experience. By clicking on Accept, you consent to the placing of all cookies.
                    <br />
                    For a complete overview of all cookies used, please see our Cookie Policy.
                </div>
            </CookieConsent>
              <div className="flex flex-col md:flex-row items-center justify-between min-h-[600px]">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <h1 className="text-5xl font-bold mb-8 leading-tight text-black">AI-powered Developer Onboarding</h1>
                  <p className="text-xl mb-10">Get new developers up to speed faster with AI. Our tool helps them understand code, projects, and docs quickly, so they can start contributing right away.</p>
                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={handleStartDemoClick}
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    Start Demo
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="h-[400px] w-full rounded-lg">
                    <img 
                      src="/2.png" 
                      alt="Landing Page Illustration" 
                      className="h-[400px] w-full rounded-lg object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <section id="how-it-works">
              <h2 className="text-3xl font-semibold mb-10 text-center text-black">How it works</h2>
              <HowItWorksSection />
              </section>
              

              
              <section id="features" className="my-12">
                <h2 className="text-3xl font-semibold mb-10 text-center text-black">Features</h2>
                <div className="flex justify-center space-x-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center p-6 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
                         onClick={() => openModal(feature.image, feature.title, feature.description)}>
                      <div className="mb-4 text-3xl text-black">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-black text-center">{feature.title}</h3>
                      <p className="text-md text-center">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="about" className="my-24 pt-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2">
                    <div className="h-[400px] w-full rounded-lg">
                      <img
                        src="/about.gif"
                        alt="Animated GIF"
                        width="480"
                        height="480"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="text-3xl text-center font-semibold mb-10 text-black">About NovusCode</h2>
                    <p className="text-lg text-center max-w-3xl mx-auto">
                      NovusCode is revolutionizing the way new developers onboard to projects. 
                      Our AI-powered platform provides personalized learning paths, codebase exploration, and automated documentation. 
                      Say goodbye to lengthy onboarding processes and hello to productivity!
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact" className="my-24 flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 flex flex-col items-center mb-12 md:mb-0">
                  <h2 className="text-3xl font-semibold mb-10 text-black">Get in Touch</h2>
                  <p className="mb-10 text-center">Have questions? We're here to help!</p>
                </div>
                <div className="md:w-1/2 p-4 bg-[#FAF7F2] rounded-lg shadow-md">
                  <form id="contactForm" className="flex flex-col space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                      className="border border-gray-300 rounded p-2"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="border border-gray-300 rounded p-2"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      required 
                      rows="4" 
                      className="border border-gray-300 rounded p-2"
                    />
                    <button 
                      type="button" 
                      onClick={handleEmailClick} 
                      className="bg-black text-white rounded py-2 hover:bg-gray-800"
                    >
                      Send Email
                    </button>
                  </form>
                </div>
              </section>



            </main>

            <footer className=" py-8 text-center border-t border-gray-200">
              <div className="container mx-auto">
                <p className="text-black">
                  &copy; {new Date().getFullYear()} <span className="font-semibold">NovusCode</span>. All rights reserved.
                </p>
                <ul className="flex justify-center space-x-4 mt-4">
                  <li>
                    <a href="/imprint" className="text-black hover:text-blue-500 transition-colors duration-300">Imprint</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="text-black hover:text-blue-500 transition-colors duration-300">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="text-black hover:text-blue-500 transition-colors duration-300">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </footer>

          </div>
        </div>
      </ScrollArea>

      {/* Custom Modal for displaying images */}
      <Modal 
        title={selectedTitle} 
        isOpen={modalIsOpen} 
        onClose={closeModal}
      >
        <div>
          <img src={selectedImage} alt={selectedTitle} className="max-w-[100%] h-auto object-contain" />
          <p className="mt-4 text-center">{selectedDescription}</p>
        </div>
      </Modal>

      {/* Contact Us Modal */}
      <Modal 
        title="Contact Us" 
        isOpen={contactModalOpen} 
        onClose={closeContactModal}
      >
        <div className="flex flex-col space-y-4">
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded h-32"
            required
          />
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleSendMessage}
            className="bg-black hover:bg-gray-800 text-white"
          >
            Send
          </Button>
          {confirmationMessage && <p className="text-green-500 text-center">{confirmationMessage}</p>}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;