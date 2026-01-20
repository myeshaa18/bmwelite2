// api.js - API Integrations (Google Sign-In & YouTube)

// CONFIGURATION 

const GOOGLE_CLIENT_ID = '115784920848-4bk6phrpt1njnorq5tqvuleocg3km9sg.apps.googleusercontent.com';
const YOUTUBE_API_KEY = 'AIzaSyAjuxqv1TymJil8rDV0MTcceYboyIaYTag';


const HERO_VIDEO_ID = 'AFtUpMTs4vI'; 
const SHOWCASE_VIDEO_ID = 'ww37JDbFO20'; 

// GOOGLE SIGN-IN 


function initializeGoogleSignIn() {
    
    if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID_HERE') {
        console.warn('⚠️ Google Client ID not configured');
        return;
    }

    console.log('📍 Loading Google Sign-In API...');
    console.log('📍 Client ID:', GOOGLE_CLIENT_ID);
    console.log('📍 Current URL:', window.location.origin);

    // Load Google Sign-In API
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;

    script.onload = function () {
        console.log('📦 Google Sign-In script loaded');

        setTimeout(() => {
            if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
                try {
                    google.accounts.id.initialize({
                        client_id: GOOGLE_CLIENT_ID,
                        callback: handleGoogleCallback,
                        auto_select: false,
                        cancel_on_tap_outside: true,
                        ux_mode: 'popup',
                        use_fedcm_for_prompt: false
                    });

                    console.log('✅ Google Sign-In initialized successfully');
                } catch (error) {
                    console.error('❌ Error initializing Google Sign-In:', error);
                    console.error('Error details:', error.message);
                }
            } else {
                console.error('❌ Google API not available');
            }
        }, 1000);
    };

    script.onerror = function (error) {
        console.error('❌ Failed to load Google Sign-In script');
    };

    document.head.appendChild(script);
}


async function handleGoogleCallback(response) {
    try {
        const credential = response.credential;


        const payload = parseJwt(credential);

        const backendResponse = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: credential,
                email: payload.email,
                firstName: payload.given_name,
                lastName: payload.family_name,
                picture: payload.picture
            })
        });

        const data = await backendResponse.json();

        if (backendResponse.ok) {
            // Store auth token and user data
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Show success message
            if (typeof showAlert === 'function') {
                showAlert('success', 'Google Sign-In successful! Redirecting...');
            }

            // Redirect to home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            throw new Error(data.message || 'Google Sign-In failed');
        }
    } catch (error) {
        console.error('Google Sign-In error:', error);
        if (typeof showAlert === 'function') {
            showAlert('error', 'Google Sign-In failed. Please try again.');
        }
    }
}

// Parse JWT token
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error parsing JWT:', error);
        return null;
    }
}

// Trigger Google Sign-In programmatically
function triggerGoogleSignIn() {
    console.log('🔍 Triggering Google Sign-In...');

    if (typeof google === 'undefined' || !google.accounts) {
        console.error('❌ Google API not loaded');
        alert('Please wait a moment and try again.');
        return;
    }

    try {
        google.accounts.id.prompt((notification) => {
            console.log('📨 Notification:', notification);

            if (notification.isNotDisplayed()) {
                console.log('⚠️ Prompt not displayed. Trying alternative method...');

                
                const tempDiv = document.createElement('div');
                tempDiv.id = 'g_id_signin';
                document.body.appendChild(tempDiv);

                google.accounts.id.renderButton(
                    document.getElementById('g_id_signin'),
                    {
                        theme: 'outline',
                        size: 'large',
                        type: 'standard',
                        text: 'continue_with',
                        shape: 'rectangular'
                    }
                );

                // Auto-click the button
                setTimeout(() => {
                    document.getElementById('g_id_signin').querySelector('div[role="button"]')?.click();
                }, 100);
            }
        });
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error: ' + error.message);
    }
}

// YOUTUBE API 

function initializeYouTubeAPI() {
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}


window.onYouTubeIframeAPIReady = function () {
    console.log('YouTube API ready');
    loadHeroVideo();
    loadShowcaseVideo();
};

// Loading hero section background video
function loadHeroVideo() {
    const heroVideoContainer = document.getElementById('heroVideo');

    if (!heroVideoContainer) return;

    // Creating YouTube player with minimal branding
    const player = new YT.Player('heroVideo', {
        videoId: HERO_VIDEO_ID,
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            fs: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 1,
            mute: 1,
            rel: 0,
            disablekb: 1,
            playlist: HERO_VIDEO_ID 
        },
        events: {
            onReady: function (event) {
                event.target.mute();
                event.target.playVideo();
            },
            onStateChange: function (event) {
                if (event.data === YT.PlayerState.ENDED) {
                    event.target.playVideo();
                }
            }
        }
    });
}

// Loading showcase video section
function loadShowcaseVideo() {
    const videoContainer = document.getElementById('youtubeVideoContainer');

    if (!videoContainer) return;

    videoContainer.innerHTML = '';

   
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = `https://www.youtube.com/embed/${SHOWCASE_VIDEO_ID}?rel=0&modestbranding=1&controls=1&showinfo=0`;
   
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = '15px';

    videoContainer.appendChild(iframe);
}

// Fetching YouTube video details
async function fetchYouTubeVideoDetails(videoId) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
        );

        const data = await response.json();

        if (data.items && data.items.length > 0) {
            return data.items[0];
        }

        return null;
    } catch (error) {
        console.error('Error fetching YouTube video details:', error);
        return null;
    }
}

// Searching YouTube videos 
async function searchYouTubeVideos(query, maxResults = 10) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
        );

        const data = await response.json();

        if (data.items) {
            return data.items;
        }

        return [];
    } catch (error) {
        console.error('Error searching YouTube videos:', error);
        return [];
    }
}

//  INITIALIZATION =


document.addEventListener('DOMContentLoaded', function () {
    
    initializeGoogleSignIn();

    initializeYouTubeAPI();

 
    const googleSignInButtons = document.querySelectorAll('#googleSignIn');
    googleSignInButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            triggerGoogleSignIn();
        });
    });
});



function loadYouTubeVideosSimple() {
    
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playlist=${HERO_VIDEO_ID}"
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
            </iframe>
        `;
    }

    // Showcase video
    const showcaseVideo = document.getElementById('youtubeVideoContainer');
    if (showcaseVideo) {
        showcaseVideo.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${SHOWCASE_VIDEO_ID}?rel=0&modestbranding=1&controls=1&showinfo=0"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                style="border-radius: 15px;">
            </iframe>
        `;
    }
}

// Export functions for global use
window.apiIntegrations = {
    triggerGoogleSignIn,
    fetchYouTubeVideoDetails,
    searchYouTubeVideos,
    loadYouTubeVideosSimple
};
