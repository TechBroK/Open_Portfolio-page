import profile from '../../assets/images (2).jpeg';
import about from '../../assets/images.jpeg';
import cvFile from '../../assets/Profile.pdf';
import arrow from '../../assets/react.svg';
import './homepage.css';
import './mediaQuery.css';

function HomePage() {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profile} alt="profile picture" className="img" />
        </div>
        <div className="section__text">
          <p className="section__text-p1">Hi, I'm </p>
          <h1 className="title">User Name</h1>
          <p className="section__text-p1">Frontend Developer</p>
          <p className="section__text-p3">
            Welcome to my personal website! I'm a frontend developer with a passion for creating
            beautiful and functional web applications. With experience in React, TypeScript, and
            CSS, I enjoy bringing designs to life and crafting seamless user experiences.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              type="button"
              onClick={() => {
                // Open the imported asset in a new tab/window.
                // Create an anchor to ensure the bundler-resolved URL is used and set safe attributes.
                const a = document.createElement('a');
                a.href = cvFile;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              }}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </button>
          </div>
          <div id="socials">
            {/* Social icons: update hrefs to your real profiles */}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
              style={{ display: 'inline-block', marginRight: '0.6rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.784 1.76-1.75 1.76zm13.5 10.29h-3v-4.86c0-1.16-.02-2.65-1.61-2.65-1.61 0-1.86 1.26-1.86 2.56v4.95h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
              </svg>
            </a>

            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
              style={{ display: 'inline-block', marginRight: '0.6rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.73 0-4.944 2.214-4.944 4.945 0 .387.044.763.128 1.125C7.728 8.89 4.1 6.86 1.67 3.92a4.93 4.93 0 00-.667 2.485c0 1.713.873 3.226 2.2 4.114a4.904 4.904 0 01-2.238-.62v.062c0 2.396 1.704 4.398 3.964 4.849a4.935 4.935 0 01-2.231.085c.628 1.957 2.449 3.382 4.604 3.423A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-link"
              style={{ display: 'inline-block', marginRight: '0.6rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.92 11.92 0 0012 .04 11.94 11.94 0 001.02 9.02c0 2.11.55 4.18 1.6 6.01L0 24l8.06-2.12A11.94 11.94 0 0012 22c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 20c-.68 0-1.35-.12-1.98-.35l-.14-.06L4 21l1.43-5.7-.08-.14A7.96 7.96 0 014 9.02 8 8 0 1112 20zm4.5-6.3c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.11-.49.12-.12.26-.32.38-.48.12-.16.16-.28.24-.46.08-.18 0-.34-.12-.46-.12-.12-1.03-2.48-1.44-3.4-.38-.88-.77-.76-1.05-.76-.27 0-.58 0-.88 0-.3 0-.46.08-.7.34-.24.26-.92.9-.92 2.18s.94 2.52 1.07 2.7c.12.18 1.84 2.88 4.46 3.92 3.06 1.2 3.06.9 3.6.86.54-.04 1.73-.7 1.98-1.38.24-.68.24-1.26.17-1.38-.07-.12-.24-.18-.48-.3z" />
              </svg>
            </a>

            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
              style={{ display: 'inline-block' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.5.11-3.14 0 0 .98-.31 3.2 1.18a11.2 11.2 0 015.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.64.23 2.84.11 3.14.75.81 1.2 1.84 1.2 3.1 0 4.42-2.7 5.4-5.27 5.69.42.36.79 1.08.79 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.68.8.56A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text-p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={about} alt="Know More About Me" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="detail-container">
                <a
                  href="#"
                  aria-label="Medal"
                  className="social-link"
                  style={{ display: 'inline-block', marginRight: '0.6rem' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 1.5A6.5 6.5 0 1 0 18.5 8 6.51 6.51 0 0 0 12 1.5Zm0 11A4.5 4.5 0 1 1 16.5 8 4.5 4.5 0 0 1 12 12.5Zm5.12 1.32L14.5 19v3l3.5-1 3.5 1v-3Zm-10.24 0L2 19v3l3.5-1 3.5 1v-3Z" />
                  </svg>
                </a>
                <h3>Experience</h3>
                <p>
                  2+ Years <br /> Frontend Development{' '}
                </p>
              </div>
              <div className="detail-container">
                <a
                  href="#"
                  aria-label="Medal"
                  className="social-link"
                  style={{ display: 'inline-block', marginRight: '0.6rem' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 1.5A6.5 6.5 0 1 0 18.5 8 6.51 6.51 0 0 0 12 1.5Zm0 11A4.5 4.5 0 1 1 16.5 8 4.5 4.5 0 0 1 12 12.5Zm5.12 1.32L14.5 19v3l3.5-1 3.5 1v-3Zm-10.24 0L2 19v3l3.5-1 3.5 1v-3Z" />
                  </svg>
                </a>
                <h3>Education</h3>
                <p>
                  B.Sc. ehiovhsorfv <br /> M.Sc. efuhuefhuehfu{' '}
                </p>
              </div>
            </div>
            <div className="text-comtainer">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum dignissimos
                ipsa voluptatibus aut iste quidem dolorem odio maiores magni in omnis consectetur
                corporis sit sapiente deleniti ipsam rerum soluta, error quo magnam. Voluptatem
                eligendi minima incidunt quae culpa in eos reiciendis perspiciatis nesciunt, placeat
                maiores! Eaque alias dicta delectus quos iusto asperiores nisi sint commodi
                suscipit, impedit unde explicabo quibusdam modi voluptates harum at beatae illo
                mollitia officia reiciendis fugit similique exercitationem? Animi, quia, magni eum
                ducimus nisi id cumque dolorum hic aut veniam nobis sunt iusto quod! Eum.
              </p>
            </div>
          </div>
        </div>
        <img src={arrow} alt="point down" className="arrow" />
      </section>
      <section id="experience"></section>
    </>
  );
}

export default HomePage;
