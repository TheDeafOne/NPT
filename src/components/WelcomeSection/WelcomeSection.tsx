import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import '../../styles/globals.css';
import Section from "../Section";
import GridBackground from "./GridBackground";

const WelcomeSection = () => {
    const [sectionHeight, setSectionHeight] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { y: scrollY } = useWindowScroll();
    const allDescriptors = 'Student • Software Engineer • Tetris Enthusiast'

    useEffect(() => {
        if (sectionRef!.current?.clientHeight !== undefined) {
            setSectionHeight(sectionRef!.current?.clientHeight)
        }
        setIsClient(true);
        anime({
            targets: 'svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) { return i * 80 },
            direction: 'normal',
            loop: false,

            complete: () => {
                anime({
                    targets: '#full-letter',
                    opacity: [0, 1],
                    easing: 'linear',
                    // duration: 10,
                });
            }
        });
    }, []);

    return (
        <Section id="welcome-section">
            <GridBackground />
            <div id="background-mask" className="absolute h-screen w-screen pointer-events-none bg-gradient-to-b from-background-950 via-transparent to-background-950" />
            <div className="h-screen flex items-center justify-center animate-gradient-movement flex-col bg-200 bg-gradient-to-r from-secondary-900 via-accent-500 to-secondary-900" ref={sectionRef}>
                <div className='font-lato text-text flex justify-center w-full h-full items-center'>
                    <svg className="transform scale-150 pointer-events-none" width="515" height="99" viewBox="0 0 515 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1_5_9" maskUnits="userSpaceOnUse" x="0.00800323" y="0.879997" width="515" height="98" fill="black">
                            <rect fill="white" x="0.00800323" y="0.879997" width="515" height="98" />
                            <path d="M127.104 5.43999L98.624 96H92.736L65.984 17.408C65.6427 16.3413 65.344 15.232 65.088 14.08C64.832 15.232 64.5333 16.3413 64.192 17.408L37.376 96H31.552L3.008 5.43999H8.448C9.68534 5.43999 10.4747 6.016 10.816 7.168L33.664 81.6C34.1333 83.3067 34.56 85.248 34.944 87.424C35.1573 86.3147 35.3707 85.2907 35.584 84.352C35.7973 83.3707 36.0533 82.4533 36.352 81.6L61.952 7.168C62.1227 6.69866 62.4213 6.29333 62.848 5.952C63.2747 5.61066 63.7867 5.43999 64.384 5.43999H66.176C66.7733 5.43999 67.264 5.61066 67.648 5.952C68.032 6.25066 68.3307 6.656 68.544 7.168L94.144 81.6C94.4427 82.4107 94.6987 83.3067 94.912 84.288C95.168 85.2693 95.4027 86.2933 95.616 87.36C95.8293 86.2933 96.0213 85.2907 96.192 84.352C96.4053 83.3707 96.6187 82.4533 96.832 81.6L119.68 7.168C119.808 6.69866 120.085 6.29333 120.512 5.952C120.981 5.61066 121.515 5.43999 122.112 5.43999H127.104Z" />
                            <path d="M178.793 57.728C178.793 54.3147 178.302 51.264 177.321 48.576C176.382 45.8453 175.038 43.5413 173.289 41.664C171.54 39.7867 169.449 38.3573 167.017 37.376C164.628 36.352 161.982 35.84 159.081 35.84C155.796 35.84 152.852 36.352 150.249 37.376C147.646 38.4 145.385 39.872 143.465 41.792C141.588 43.712 140.073 46.016 138.921 48.704C137.769 51.392 137.001 54.4 136.617 57.728H178.793ZM136.297 61.632V62.848C136.297 67.6267 136.852 71.8293 137.961 75.456C139.07 79.0827 140.649 82.1333 142.697 84.608C144.745 87.04 147.22 88.8747 150.121 90.112C153.022 91.3493 156.265 91.968 159.849 91.968C163.049 91.968 165.822 91.6267 168.169 90.944C170.516 90.2187 172.478 89.4293 174.057 88.576C175.678 87.68 176.958 86.8907 177.897 86.208C178.836 85.4827 179.518 85.12 179.945 85.12C180.5 85.12 180.926 85.3333 181.225 85.76L182.889 87.808C181.865 89.088 180.5 90.2827 178.793 91.392C177.129 92.5013 175.252 93.4613 173.161 94.272C171.113 95.04 168.894 95.6587 166.505 96.128C164.158 96.5973 161.79 96.832 159.401 96.832C155.049 96.832 151.081 96.0853 147.497 94.592C143.913 93.056 140.841 90.8373 138.281 87.936C135.721 85.0347 133.737 81.4933 132.329 77.312C130.964 73.088 130.281 68.2667 130.281 62.848C130.281 58.2827 130.921 54.08 132.201 50.24C133.524 46.3573 135.401 43.0293 137.833 40.256C140.308 37.44 143.316 35.2427 146.857 33.664C150.441 32.0853 154.494 31.296 159.017 31.296C162.601 31.296 165.929 31.9147 169.001 33.152C172.073 34.3893 174.74 36.2027 177.001 38.592C179.262 40.9387 181.033 43.84 182.313 47.296C183.636 50.752 184.297 54.72 184.297 59.2C184.297 60.1387 184.169 60.7787 183.913 61.12C183.657 61.4613 183.23 61.632 182.633 61.632H136.297Z" />
                            <path d="M207.591 2.88V96H201.447V2.88H207.591Z" />
                            <path d="M271.937 40.832C271.724 41.0453 271.51 41.2373 271.297 41.408C271.126 41.536 270.87 41.6 270.529 41.6C270.102 41.6 269.526 41.3227 268.801 40.768C268.076 40.1707 267.094 39.5307 265.857 38.848C264.62 38.1653 263.062 37.5467 261.185 36.992C259.35 36.3947 257.11 36.096 254.465 36.096C250.796 36.096 247.532 36.7573 244.673 38.08C241.857 39.36 239.468 41.216 237.505 43.648C235.542 46.08 234.049 49.024 233.025 52.48C232.044 55.936 231.553 59.8187 231.553 64.128C231.553 68.608 232.065 72.576 233.089 76.032C234.156 79.488 235.649 82.4107 237.569 84.8C239.489 87.1467 241.814 88.9387 244.545 90.176C247.276 91.4133 250.305 92.032 253.633 92.032C256.705 92.032 259.265 91.6693 261.313 90.944C263.404 90.2187 265.11 89.4293 266.433 88.576C267.798 87.7227 268.865 86.9333 269.633 86.208C270.401 85.4827 271.041 85.12 271.553 85.12C272.065 85.12 272.492 85.3333 272.833 85.76L274.433 87.808C273.452 89.088 272.214 90.2827 270.721 91.392C269.228 92.5013 267.542 93.4613 265.665 94.272C263.788 95.0827 261.74 95.7013 259.521 96.128C257.345 96.5973 255.062 96.832 252.673 96.832C248.62 96.832 244.908 96.1067 241.537 94.656C238.209 93.1627 235.329 91.0293 232.897 88.256C230.508 85.44 228.63 82.0053 227.265 77.952C225.942 73.8987 225.281 69.2907 225.281 64.128C225.281 59.264 225.921 54.8267 227.201 50.816C228.481 46.8053 230.358 43.3493 232.833 40.448C235.308 37.5467 238.316 35.3067 241.857 33.728C245.441 32.1067 249.537 31.296 254.145 31.296C258.284 31.296 261.953 31.9573 265.153 33.28C268.353 34.6027 271.148 36.3947 273.537 38.656L271.937 40.832Z" />
                            <path d="M313.462 31.296C318.027 31.296 322.102 32.0853 325.686 33.664C329.313 35.2 332.363 37.3973 334.838 40.256C337.313 43.1147 339.19 46.5707 340.47 50.624C341.793 54.6347 342.454 59.136 342.454 64.128C342.454 69.12 341.793 73.6213 340.47 77.632C339.19 81.6427 337.313 85.0773 334.838 87.936C332.363 90.7947 329.313 92.992 325.686 94.528C322.102 96.064 318.027 96.832 313.462 96.832C308.897 96.832 304.801 96.064 301.174 94.528C297.59 92.992 294.539 90.7947 292.022 87.936C289.547 85.0773 287.649 81.6427 286.326 77.632C285.046 73.6213 284.406 69.12 284.406 64.128C284.406 59.136 285.046 54.6347 286.326 50.624C287.649 46.5707 289.547 43.1147 292.022 40.256C294.539 37.3973 297.59 35.2 301.174 33.664C304.801 32.0853 308.897 31.296 313.462 31.296ZM313.462 92.032C317.259 92.032 320.566 91.392 323.382 90.112C326.241 88.7893 328.609 86.912 330.486 84.48C332.406 82.048 333.835 79.1253 334.774 75.712C335.713 72.256 336.182 68.3947 336.182 64.128C336.182 59.904 335.713 56.064 334.774 52.608C333.835 49.152 332.406 46.208 330.486 43.776C328.609 41.3013 326.241 39.4027 323.382 38.08C320.566 36.7573 317.259 36.096 313.462 36.096C309.665 36.096 306.337 36.7573 303.478 38.08C300.662 39.4027 298.294 41.3013 296.374 43.776C294.497 46.208 293.067 49.152 292.086 52.608C291.147 56.064 290.678 59.904 290.678 64.128C290.678 68.3947 291.147 72.256 292.086 75.712C293.067 79.1253 294.497 82.048 296.374 84.48C298.294 86.912 300.662 88.7893 303.478 90.112C306.337 91.392 309.665 92.032 313.462 92.032Z" />
                            <path d="M359.621 96V32.32H363.013C364.08 32.32 364.698 32.8533 364.869 33.92L365.445 43.136C367.92 39.5947 370.757 36.736 373.957 34.56C377.157 32.384 380.762 31.296 384.773 31.296C389.424 31.296 393.136 32.64 395.909 35.328C398.725 38.016 400.624 41.7493 401.605 46.528C402.373 43.9253 403.44 41.664 404.805 39.744C406.213 37.824 407.813 36.2453 409.605 35.008C411.397 33.728 413.338 32.7893 415.429 32.192C417.562 31.5947 419.738 31.296 421.957 31.296C425.114 31.296 427.952 31.8293 430.469 32.896C432.986 33.92 435.12 35.456 436.869 37.504C438.618 39.552 439.962 42.0693 440.901 45.056C441.84 48.0427 442.309 51.456 442.309 55.296V96H436.229V55.296C436.229 49.0667 434.885 44.3307 432.197 41.088C429.509 37.8027 425.669 36.16 420.677 36.16C418.458 36.16 416.325 36.5653 414.277 37.376C412.272 38.1867 410.48 39.4027 408.901 41.024C407.365 42.6027 406.128 44.5867 405.189 46.976C404.293 49.3653 403.845 52.1387 403.845 55.296V96H397.701V55.296C397.701 49.1093 396.464 44.3733 393.989 41.088C391.557 37.8027 387.973 36.16 383.237 36.16C379.781 36.16 376.581 37.184 373.637 39.232C370.693 41.28 368.069 44.1173 365.765 47.744V96H359.621Z" />
                            <path d="M507.293 57.728C507.293 54.3147 506.802 51.264 505.821 48.576C504.882 45.8453 503.538 43.5413 501.789 41.664C500.04 39.7867 497.949 38.3573 495.517 37.376C493.128 36.352 490.482 35.84 487.581 35.84C484.296 35.84 481.352 36.352 478.749 37.376C476.146 38.4 473.885 39.872 471.965 41.792C470.088 43.712 468.573 46.016 467.421 48.704C466.269 51.392 465.501 54.4 465.117 57.728H507.293ZM464.797 61.632V62.848C464.797 67.6267 465.352 71.8293 466.461 75.456C467.57 79.0827 469.149 82.1333 471.197 84.608C473.245 87.04 475.72 88.8747 478.621 90.112C481.522 91.3493 484.765 91.968 488.349 91.968C491.549 91.968 494.322 91.6267 496.669 90.944C499.016 90.2187 500.978 89.4293 502.557 88.576C504.178 87.68 505.458 86.8907 506.397 86.208C507.336 85.4827 508.018 85.12 508.445 85.12C509 85.12 509.426 85.3333 509.725 85.76L511.389 87.808C510.365 89.088 509 90.2827 507.293 91.392C505.629 92.5013 503.752 93.4613 501.661 94.272C499.613 95.04 497.394 95.6587 495.005 96.128C492.658 96.5973 490.29 96.832 487.901 96.832C483.549 96.832 479.581 96.0853 475.997 94.592C472.413 93.056 469.341 90.8373 466.781 87.936C464.221 85.0347 462.237 81.4933 460.829 77.312C459.464 73.088 458.781 68.2667 458.781 62.848C458.781 58.2827 459.421 54.08 460.701 50.24C462.024 46.3573 463.901 43.0293 466.333 40.256C468.808 37.44 471.816 35.2427 475.357 33.664C478.941 32.0853 482.994 31.296 487.517 31.296C491.101 31.296 494.429 31.9147 497.501 33.152C500.573 34.3893 503.24 36.2027 505.501 38.592C507.762 40.9387 509.533 43.84 510.813 47.296C512.136 50.752 512.797 54.72 512.797 59.2C512.797 60.1387 512.669 60.7787 512.413 61.12C512.157 61.4613 511.73 61.632 511.133 61.632H464.797Z" />
                        </mask>
                        <path strokeLinecap="round" d="M127.104 5.43999L98.624 96H92.736L65.984 17.408C65.6427 16.3413 65.344 15.232 65.088 14.08C64.832 15.232 64.5333 16.3413 64.192 17.408L37.376 96H31.552L3.008 5.43999H8.448C9.68534 5.43999 10.4747 6.016 10.816 7.168L33.664 81.6C34.1333 83.3067 34.56 85.248 34.944 87.424C35.1573 86.3147 35.3707 85.2907 35.584 84.352C35.7973 83.3707 36.0533 82.4533 36.352 81.6L61.952 7.168C62.1227 6.69866 62.4213 6.29333 62.848 5.952C63.2747 5.61066 63.7867 5.43999 64.384 5.43999H66.176C66.7733 5.43999 67.264 5.61066 67.648 5.952C68.032 6.25066 68.3307 6.656 68.544 7.168L94.144 81.6C94.4427 82.4107 94.6987 83.3067 94.912 84.288C95.168 85.2693 95.4027 86.2933 95.616 87.36C95.8293 86.2933 96.0213 85.2907 96.192 84.352C96.4053 83.3707 96.6187 82.4533 96.832 81.6L119.68 7.168C119.808 6.69866 120.085 6.29333 120.512 5.952C120.981 5.61066 121.515 5.43999 122.112 5.43999H127.104Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                        <path strokeLinecap="round" d="M178.793 57.728C178.793 54.3147 178.302 51.264 177.321 48.576C176.382 45.8453 175.038 43.5413 173.289 41.664C171.54 39.7867 169.449 38.3573 167.017 37.376C164.628 36.352 161.982 35.84 159.081 35.84C155.796 35.84 152.852 36.352 150.249 37.376C147.646 38.4 145.385 39.872 143.465 41.792C141.588 43.712 140.073 46.016 138.921 48.704C137.769 51.392 137.001 54.4 136.617 57.728H178.793ZM136.297 61.632V62.848C136.297 67.6267 136.852 71.8293 137.961 75.456C139.07 79.0827 140.649 82.1333 142.697 84.608C144.745 87.04 147.22 88.8747 150.121 90.112C153.022 91.3493 156.265 91.968 159.849 91.968C163.049 91.968 165.822 91.6267 168.169 90.944C170.516 90.2187 172.478 89.4293 174.057 88.576C175.678 87.68 176.958 86.8907 177.897 86.208C178.836 85.4827 179.518 85.12 179.945 85.12C180.5 85.12 180.926 85.3333 181.225 85.76L182.889 87.808C181.865 89.088 180.5 90.2827 178.793 91.392C177.129 92.5013 175.252 93.4613 173.161 94.272C171.113 95.04 168.894 95.6587 166.505 96.128C164.158 96.5973 161.79 96.832 159.401 96.832C155.049 96.832 151.081 96.0853 147.497 94.592C143.913 93.056 140.841 90.8373 138.281 87.936C135.721 85.0347 133.737 81.4933 132.329 77.312C130.964 73.088 130.281 68.2667 130.281 62.848C130.281 58.2827 130.921 54.08 132.201 50.24C133.524 46.3573 135.401 43.0293 137.833 40.256C140.308 37.44 143.316 35.2427 146.857 33.664C150.441 32.0853 154.494 31.296 159.017 31.296C162.601 31.296 165.929 31.9147 169.001 33.152C172.073 34.3893 174.74 36.2027 177.001 38.592C179.262 40.9387 181.033 43.84 182.313 47.296C183.636 50.752 184.297 54.72 184.297 59.2C184.297 60.1387 184.169 60.7787 183.913 61.12C183.657 61.4613 183.23 61.632 182.633 61.632H136.297Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                        <path strokeLinecap="round" d="M207.591 2.88V96H201.447V2.88H207.591Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                        <path strokeLinecap="round" d="M271.937 40.832C271.724 41.0453 271.51 41.2373 271.297 41.408C271.126 41.536 270.87 41.6 270.529 41.6C270.102 41.6 269.526 41.3227 268.801 40.768C268.076 40.1707 267.094 39.5307 265.857 38.848C264.62 38.1653 263.062 37.5467 261.185 36.992C259.35 36.3947 257.11 36.096 254.465 36.096C250.796 36.096 247.532 36.7573 244.673 38.08C241.857 39.36 239.468 41.216 237.505 43.648C235.542 46.08 234.049 49.024 233.025 52.48C232.044 55.936 231.553 59.8187 231.553 64.128C231.553 68.608 232.065 72.576 233.089 76.032C234.156 79.488 235.649 82.4107 237.569 84.8C239.489 87.1467 241.814 88.9387 244.545 90.176C247.276 91.4133 250.305 92.032 253.633 92.032C256.705 92.032 259.265 91.6693 261.313 90.944C263.404 90.2187 265.11 89.4293 266.433 88.576C267.798 87.7227 268.865 86.9333 269.633 86.208C270.401 85.4827 271.041 85.12 271.553 85.12C272.065 85.12 272.492 85.3333 272.833 85.76L274.433 87.808C273.452 89.088 272.214 90.2827 270.721 91.392C269.228 92.5013 267.542 93.4613 265.665 94.272C263.788 95.0827 261.74 95.7013 259.521 96.128C257.345 96.5973 255.062 96.832 252.673 96.832C248.62 96.832 244.908 96.1067 241.537 94.656C238.209 93.1627 235.329 91.0293 232.897 88.256C230.508 85.44 228.63 82.0053 227.265 77.952C225.942 73.8987 225.281 69.2907 225.281 64.128C225.281 59.264 225.921 54.8267 227.201 50.816C228.481 46.8053 230.358 43.3493 232.833 40.448C235.308 37.5467 238.316 35.3067 241.857 33.728C245.441 32.1067 249.537 31.296 254.145 31.296C258.284 31.296 261.953 31.9573 265.153 33.28C268.353 34.6027 271.148 36.3947 273.537 38.656L271.937 40.832Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                        <path strokeLinecap="round" d="M313.462 31.296C318.027 31.296 322.102 32.0853 325.686 33.664C329.313 35.2 332.363 37.3973 334.838 40.256C337.313 43.1147 339.19 46.5707 340.47 50.624C341.793 54.6347 342.454 59.136 342.454 64.128C342.454 69.12 341.793 73.6213 340.47 77.632C339.19 81.6427 337.313 85.0773 334.838 87.936C332.363 90.7947 329.313 92.992 325.686 94.528C322.102 96.064 318.027 96.832 313.462 96.832C308.897 96.832 304.801 96.064 301.174 94.528C297.59 92.992 294.539 90.7947 292.022 87.936C289.547 85.0773 287.649 81.6427 286.326 77.632C285.046 73.6213 284.406 69.12 284.406 64.128C284.406 59.136 285.046 54.6347 286.326 50.624C287.649 46.5707 289.547 43.1147 292.022 40.256C294.539 37.3973 297.59 35.2 301.174 33.664C304.801 32.0853 308.897 31.296 313.462 31.296ZM313.462 92.032C317.259 92.032 320.566 91.392 323.382 90.112C326.241 88.7893 328.609 86.912 330.486 84.48C332.406 82.048 333.835 79.1253 334.774 75.712C335.713 72.256 336.182 68.3947 336.182 64.128C336.182 59.904 335.713 56.064 334.774 52.608C333.835 49.152 332.406 46.208 330.486 43.776C328.609 41.3013 326.241 39.4027 323.382 38.08C320.566 36.7573 317.259 36.096 313.462 36.096C309.665 36.096 306.337 36.7573 303.478 38.08C300.662 39.4027 298.294 41.3013 296.374 43.776C294.497 46.208 293.067 49.152 292.086 52.608C291.147 56.064 290.678 59.904 290.678 64.128C290.678 68.3947 291.147 72.256 292.086 75.712C293.067 79.1253 294.497 82.048 296.374 84.48C298.294 86.912 300.662 88.7893 303.478 90.112C306.337 91.392 309.665 92.032 313.462 92.032Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                        <path strokeLinecap="round" d="M359.621 96V32.32H363.013C364.08 32.32 364.698 32.8533 364.869 33.92L365.445 43.136C367.92 39.5947 370.757 36.736 373.957 34.56C377.157 32.384 380.762 31.296 384.773 31.296C389.424 31.296 393.136 32.64 395.909 35.328C398.725 38.016 400.624 41.7493 401.605 46.528C402.373 43.9253 403.44 41.664 404.805 39.744C406.213 37.824 407.813 36.2453 409.605 35.008C411.397 33.728 413.338 32.7893 415.429 32.192C417.562 31.5947 419.738 31.296 421.957 31.296C425.114 31.296 427.952 31.8293 430.469 32.896C432.986 33.92 435.12 35.456 436.869 37.504C438.618 39.552 439.962 42.0693 440.901 45.056C441.84 48.0427 442.309 51.456 442.309 55.296V96H436.229V55.296C436.229 49.0667 434.885 44.3307 432.197 41.088C429.509 37.8027 425.669 36.16 420.677 36.16C418.458 36.16 416.325 36.5653 414.277 37.376C412.272 38.1867 410.48 39.4027 408.901 41.024C407.365 42.6027 406.128 44.5867 405.189 46.976C404.293 49.3653 403.845 52.1387 403.845 55.296V96H397.701V55.296C397.701 49.1093 396.464 44.3733 393.989 41.088C391.557 37.8027 387.973 36.16 383.237 36.16C379.781 36.16 376.581 37.184 373.637 39.232C370.693 41.28 368.069 44.1173 365.765 47.744V96H359.621Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                        <path strokeLinecap="round" d="M507.293 57.728C507.293 54.3147 506.802 51.264 505.821 48.576C504.882 45.8453 503.538 43.5413 501.789 41.664C500.04 39.7867 497.949 38.3573 495.517 37.376C493.128 36.352 490.482 35.84 487.581 35.84C484.296 35.84 481.352 36.352 478.749 37.376C476.146 38.4 473.885 39.872 471.965 41.792C470.088 43.712 468.573 46.016 467.421 48.704C466.269 51.392 465.501 54.4 465.117 57.728H507.293ZM464.797 61.632V62.848C464.797 67.6267 465.352 71.8293 466.461 75.456C467.57 79.0827 469.149 82.1333 471.197 84.608C473.245 87.04 475.72 88.8747 478.621 90.112C481.522 91.3493 484.765 91.968 488.349 91.968C491.549 91.968 494.322 91.6267 496.669 90.944C499.016 90.2187 500.978 89.4293 502.557 88.576C504.178 87.68 505.458 86.8907 506.397 86.208C507.336 85.4827 508.018 85.12 508.445 85.12C509 85.12 509.426 85.3333 509.725 85.76L511.389 87.808C510.365 89.088 509 90.2827 507.293 91.392C505.629 92.5013 503.752 93.4613 501.661 94.272C499.613 95.04 497.394 95.6587 495.005 96.128C492.658 96.5973 490.29 96.832 487.901 96.832C483.549 96.832 479.581 96.0853 475.997 94.592C472.413 93.056 469.341 90.8373 466.781 87.936C464.221 85.0347 462.237 81.4933 460.829 77.312C459.464 73.088 458.781 68.2667 458.781 62.848C458.781 58.2827 459.421 54.08 460.701 50.24C462.024 46.3573 463.901 43.0293 466.333 40.256C468.808 37.44 471.816 35.2427 475.357 33.664C478.941 32.0853 482.994 31.296 487.517 31.296C491.101 31.296 494.429 31.9147 497.501 33.152C500.573 34.3893 503.24 36.2027 505.501 38.592C507.762 40.9387 509.533 43.84 510.813 47.296C512.136 50.752 512.797 54.72 512.797 59.2C512.797 60.1387 512.669 60.7787 512.413 61.12C512.157 61.4613 511.73 61.632 511.133 61.632H464.797Z" stroke="#F4F6F5" strokeWidth="4" mask="url(#path-1-outside-1_5_9)" />
                    </svg>

                </div>
            </div>

        </Section>
    )
}

export default WelcomeSection