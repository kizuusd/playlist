<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reluxe - Platform Musik</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <h1>Reluxe</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Tracks</a></li>
                    <li><a href="#">How it works</a></li>
                </ul>
            </nav>
            <div class="auth-buttons">
                <a href="#" class="btn btn-outline">Log In</a>
                <a href="#" class="btn btn-filled">Sign Up</a>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Reluxe</h1>
                        <p>The platform helps aspiring artists bring their music to the audience</p>
                        <a href="#" class="btn btn-learn">Learn More</a>
                    </div>
                    <div class="hero-image">
                        <!-- Hero image will be in CSS -->
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="feature-card">
                    <div class="feature-image"></div>
                    <h3>Opportunity to create your own unique profile</h3>
                    <a href="#" class="btn-explore">Explore</a>
                </div>
                <div class="feature-card">
                    <div class="feature-image"></div>
                    <h3>Support and feedback from the music community</h3>
                    <div class="player-controls">
                        <span>Menu</span>
                        <span>Records</span>
                        <span>Progress</span>
                        <span>Create +</span>
                    </div>
                </div>
                <div class="feature-card">
                    <div class="feature-image"></div>
                    <h3>Guaranteed payouts for every track played</h3>
                    <a href="#" class="btn-explore">Explore</a>
                </div>
            </section>

            <section class="playlist">
                <h2>Your Playlist</h2>
                <div class="playlist-container">
                    <?php
                    // Simulasi data playlist (dalam implementasi nyata, data ini akan diambil dari database)
                    $tracks = [
                        ['id' => 1, 'title' => 'Sunset Melody', 'artist' => 'Dream Waves', 'duration' => '3:45', 'cover' => 'assets/images/cover1.jpg'],
                        ['id' => 2, 'title' => 'Urban Beats', 'artist' => 'City Groove', 'duration' => '4:20', 'cover' => 'assets/images/cover2.jpg'],
                        ['id' => 3, 'title' => 'Mountain Echo', 'artist' => 'Nature Sounds', 'duration' => '5:12', 'cover' => 'assets/images/cover3.jpg'],
                        ['id' => 4, 'title' => 'Midnight Drive', 'artist' => 'Night Rider', 'duration' => '3:58', 'cover' => 'assets/images/cover4.jpg'],
                        ['id' => 5, 'title' => 'Ocean Waves', 'artist' => 'Sea Breeze', 'duration' => '4:05', 'cover' => 'assets/images/cover5.jpg'],
                    ];

                    foreach ($tracks as $track) {
                        echo '<div class="track-item" data-id="' . $track['id'] . '">';
                        echo '<div class="track-cover" style="background-image: url(' . $track['cover'] . ')"></div>';
                        echo '<div class="track-info">';
                        echo '<h3>' . $track['title'] . '</h3>';
                        echo '<p>' . $track['artist'] . '</p>';
                        echo '</div>';
                        echo '<div class="track-duration">' . $track['duration'] . '</div>';
                        echo '<div class="track-controls">';
                        echo '<button class="play-btn" data-id="' . $track['id'] . '"><i class="fas fa-play"></i></button>';
                        echo '</div>';
                        echo '</div>';
                    }
                    ?>
                </div>
            </section>

            <section class="music-player">
                <div class="now-playing">
                    <div class="track-thumb"></div>
                    <div class="track-details">
                        <h4 id="current-track-title">Select a track</h4>
                        <p id="current-track-artist"></p>
                    </div>
                </div>
                <div class="player-controls">
                    <button id="prev-track"><i class="fas fa-step-backward"></i></button>
                    <button id="play-pause"><i class="fas fa-play"></i></button>
                    <button id="next-track"><i class="fas fa-step-forward"></i></button>
                </div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <div class="time">
                        <span id="current-time">0:00</span>
                        <span id="total-time">0:00</span>
                    </div>
                </div>
                <div class="volume-control">
                    <i class="fas fa-volume-up"></i>
                    <input type="range" id="volume" min="0" max="100" value="80">
                </div>
            </section>
        </main>

        <footer>
            <div class="footer-logo">Reluxe</div>
            <div class="footer-links">
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <p class="copyright">&copy; 2025 Reluxe. All rights reserved.</p>
        </footer>
    </div>

    <script src="assets/js/playlist.js"></script>
</body>
</html> 