// Mobile Detection and Overlay Script for Digital Signatures
// This script detects mobile devices and shows a desktop optimization warning

class MobileDetection {
  constructor() {
    this.isMobile = this.detectMobile();
    this.isLandscapeRequired = this.checkLandscapeRequired();
    this.overlayShown = false;
    this.orientationOverlayShown = false;
    this.init();
    this.setupOrientationListener();
  }

  detectMobile() {
    // Check for mobile user agents
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Mobile device patterns
    const mobilePatterns = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
      /Opera Mini/i,
      /IEMobile/i,
      /Mobile/i,
    ];

    // Check screen size (additional check for small screens)
    const isSmallScreen = window.innerWidth <= 768 || window.innerHeight <= 600;

    // Check touch capability
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Return true if any mobile pattern matches OR if it's a small touch screen
    return (
      mobilePatterns.some((pattern) => pattern.test(userAgent)) ||
      (isSmallScreen && isTouchDevice)
    );
  }

  checkLandscapeRequired() {
    // Check if device is mobile/tablet and in portrait mode
    const isMobileDevice = this.isMobile;
    const isPortrait = window.innerHeight > window.innerWidth;
    const isSmallHeight = window.innerHeight < 600;

    return isMobileDevice && (isPortrait || isSmallHeight);
  }

  setupOrientationListener() {
    // Listen for orientation changes
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        this.handleOrientationChange();
      }, 500); // Delay to allow orientation change to complete
    });

    // Also listen for resize events
    window.addEventListener("resize", () => {
      this.handleOrientationChange();
    });
  }

  handleOrientationChange() {
    const wasLandscapeRequired = this.isLandscapeRequired;
    this.isLandscapeRequired = this.checkLandscapeRequired();

    if (
      !wasLandscapeRequired &&
      this.isLandscapeRequired &&
      !this.overlayShown
    ) {
      this.showLandscapeAlert();
    } else if (wasLandscapeRequired && !this.isLandscapeRequired) {
      this.hideLandscapeAlert();
    }
  }

  init() {
    if (this.isMobile && !this.overlayShown) {
      // Wait for DOM to be ready
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => this.showOverlay());
      } else {
        this.showOverlay();
      }
    } else if (this.isLandscapeRequired && !this.orientationOverlayShown) {
      // Show landscape alert for smaller screens
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () =>
          this.showLandscapeAlert()
        );
      } else {
        this.showLandscapeAlert();
      }
    }
  }

  showOverlay() {
    if (this.overlayShown) return;

    this.overlayShown = true;

    // Create overlay HTML
    const overlay = document.createElement("div");
    overlay.id = "mobile-warning-overlay";
    overlay.innerHTML = `
      <div class="mobile-overlay-backdrop">
        <div class="mobile-overlay-content">
          <div class="mobile-overlay-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="#f59e0b" stroke-width="2" fill="#fef3c7"/>
              <path d="M12 8V13M12 16H12.01" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h2 class="mobile-overlay-title">Desktop Experience Recommended</h2>
          <p class="mobile-overlay-description">
            This Digital Signatures experiment is optimized for desktop computers with larger screens and precise mouse interaction. 
            While you can continue on mobile, you may experience:
          </p>
          <ul class="mobile-overlay-list">
            <li>• Difficulty interacting with RSA key controls</li>
            <li>• Limited screen space for signature verification</li>
            <li>• Reduced functionality for cryptographic calculations</li>
            <li>• Suboptimal experience with hash generation and display</li>
          </ul>
          <div class="mobile-overlay-actions">
            <button class="mobile-overlay-btn mobile-overlay-btn-primary" onclick="mobileDetection.continueAnyway()">
              Continue Anyway
            </button>
            <button class="mobile-overlay-btn mobile-overlay-btn-secondary" onclick="mobileDetection.goBack()">
              Use Desktop Instead
            </button>
          </div>
          <p class="mobile-overlay-footer">
            For the best learning experience, please access this on a desktop or laptop computer.
          </p>
        </div>
      </div>
    `;

    // Add overlay styles
    const styles = `
      <style>
        .mobile-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .mobile-overlay-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          max-width: 400px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          text-align: center;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: slideUp 0.3s ease-out;
        }

        .mobile-overlay-icon {
          margin: 0 auto 16px;
          width: 48px;
          height: 48px;
        }

        .mobile-overlay-title {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .mobile-overlay-description {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
          line-height: 1.5;
          text-align: left;
        }

        .mobile-overlay-list {
          text-align: left;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 20px;
          padding-left: 0;
          list-style: none;
        }

        .mobile-overlay-list li {
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .mobile-overlay-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 20px 0;
        }

        .mobile-overlay-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-overlay-btn-primary {
          background: #3b82f6;
          color: white;
        }

        .mobile-overlay-btn-primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .mobile-overlay-btn-secondary {
          background: #e5e7eb;
          color: #374151;
        }

        .mobile-overlay-btn-secondary:hover {
          background: #d1d5db;
          transform: translateY(-1px);
        }

        .mobile-overlay-footer {
          font-size: 12px;
          color: #9ca3af;
          line-height: 1.4;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (min-width: 480px) {
          .mobile-overlay-actions {
            flex-direction: row;
          }
          
          .mobile-overlay-btn {
            width: auto;
            flex: 1;
          }
        }
      </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML("beforeend", styles);

    // Add overlay to body
    document.body.appendChild(overlay);

    // Prevent body scrolling
    document.body.style.overflow = "hidden";
  }

  showLandscapeAlert() {
    if (this.orientationOverlayShown || this.overlayShown) return;

    this.orientationOverlayShown = true;

    // Create landscape alert overlay
    const overlay = document.createElement("div");
    overlay.id = "landscape-warning-overlay";
    overlay.innerHTML = `
      <div class="landscape-overlay-backdrop">
        <div class="landscape-overlay-content">
          <div class="landscape-overlay-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="#3b82f6" stroke-width="2" fill="#dbeafe"/>
              <path d="M8 10L12 14L16 10" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="landscape-overlay-title">Rotate to Landscape Mode</h2>
          <p class="landscape-overlay-description">
            For the best experience with the Digital Signatures simulation, please rotate your device to landscape mode.
          </p>
          <div class="landscape-benefits">
            <h4>Landscape mode provides:</h4>
            <ul>
              <li>• Better visibility of signature generation steps</li>
              <li>• More space for RSA key configuration</li>
              <li>• Improved layout for hash and signature display</li>
              <li>• Enhanced readability of cryptographic results</li>
            </ul>
          </div>
          <div class="landscape-overlay-actions">
            <button class="landscape-overlay-btn" onclick="mobileDetection.dismissLandscapeAlert()">
              Continue in Portrait
            </button>
          </div>
          <p class="landscape-overlay-instruction">
            🔄 Rotate your device now for optimal viewing
          </p>
        </div>
      </div>
    `;

    // Add landscape overlay styles
    const landscapeStyles = `
      <style>
        .landscape-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.9);
          backdrop-filter: blur(4px);
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease-out;
        }

        .landscape-overlay-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          max-width: 350px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          text-align: center;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease-out;
        }

        .landscape-overlay-icon {
          margin: 0 auto 16px;
          width: 48px;
          height: 48px;
        }

        .landscape-overlay-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .landscape-overlay-description {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .landscape-benefits {
          text-align: left;
          margin-bottom: 20px;
        }

        .landscape-benefits h4 {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .landscape-benefits ul {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
          padding-left: 0;
          list-style: none;
        }

        .landscape-benefits li {
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .landscape-overlay-actions {
          margin: 16px 0;
        }

        .landscape-overlay-btn {
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .landscape-overlay-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }

        .landscape-overlay-instruction {
          font-size: 13px;
          color: #3b82f6;
          font-weight: 500;
          margin-top: 12px;
        }

        @media (orientation: landscape) {
          .landscape-overlay-backdrop {
            display: none;
          }
        }
      </style>
    `;

    // Add styles to head
    document.head.insertAdjacentHTML("beforeend", landscapeStyles);

    // Add overlay to body
    document.body.appendChild(overlay);
  }

  continueAnyway() {
    this.hideOverlay();
  }

  goBack() {
    // Try to go back in history, or redirect to a homepage if available
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // You can customize this to redirect to your main page
      alert(
        "Please bookmark this page and open it on a desktop computer for the best experience."
      );
    }
  }

  dismissLandscapeAlert() {
    this.hideLandscapeAlert();
  }

  hideOverlay() {
    const overlay = document.getElementById("mobile-warning-overlay");
    if (overlay) {
      overlay.style.animation = "fadeOut 0.3s ease-out forwards";
      setTimeout(() => {
        overlay.remove();
        document.body.style.overflow = "";
      }, 300);
    }
  }

  hideLandscapeAlert() {
    const overlay = document.getElementById("landscape-warning-overlay");
    if (overlay) {
      overlay.style.animation = "fadeOut 0.3s ease-out forwards";
      setTimeout(() => {
        overlay.remove();
        this.orientationOverlayShown = false;
      }, 300);
    }
  }
}

// Add fadeOut animation
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  </style>
`
);

// Initialize mobile detection
const mobileDetection = new MobileDetection();

// Export for use in other scripts if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = MobileDetection;
}
