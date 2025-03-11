// Function to create a WhatsApp-optimized version of the image
function createWhatsAppImage(originalImage) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to WhatsApp's preferred dimensions
    canvas.width = 800;
    canvas.height = 800;
    
    // Calculate dimensions to maintain aspect ratio
    const originalAspect = originalImage.naturalWidth / originalImage.naturalHeight;
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    
    if (originalAspect > 1) {
        // Image is wider than tall
        drawHeight = canvas.width / originalAspect;
        offsetY = (canvas.height - drawHeight) / 2;
    } else {
        // Image is taller than wide
        drawWidth = canvas.height * originalAspect;
        offsetX = (canvas.width - drawWidth) / 2;
    }
    
    // Fill background with white (or any color that matches your design)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the image centered
    ctx.drawImage(originalImage, offsetX, offsetY, drawWidth, drawHeight);
    
    return canvas.toDataURL('image/jpeg', 0.9);
}

// Process images when sharing
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-og-image]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            const whatsappVersion = createWhatsAppImage(img);
            // Update og:image meta tag when sharing
            const ogImage = document.querySelector('meta[property="og:image"]');
            if (ogImage) {
                ogImage.setAttribute('content', whatsappVersion);
            }
        });
    });
}); 