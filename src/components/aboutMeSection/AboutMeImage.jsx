import { useEffect } from "react";

const LINKEDIN_SCRIPT_ID = "linkedin-badge-script";

const AboutMeImage = () => {
  useEffect(() => {
    if (!document.getElementById(LINKEDIN_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      script.id = LINKEDIN_SCRIPT_ID;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div
        style={{ width: 400, height: 360 }}
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="sarojmishraa"
        data-version="v1"
        aria-label="Saroj Mishra LinkedIn Profile"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/sarojmishraa?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </div>
  );
};

export default AboutMeImage;
