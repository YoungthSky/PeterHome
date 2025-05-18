"use client";
import ContactExperience from "../components/models/contact/ContactExperience";
export const Model = () => {
  return (
    <div id="contact" className="pb-2 md:pb-4 lg:pb-8">
      <div className="container">
        <div className="w-full h-[300px] md:h-[500px] lg:h-[560px] hover:cursor-grab rounded-3xl overflow-hidden">
          <ContactExperience />
        </div>
      </div>
    </div>
  );
};
