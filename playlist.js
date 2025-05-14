document.addEventListener('DOMContentLoaded', function() {
    // Simulasi data lagu untuk pengujian (dalam implementasi asli, data ini akan berasal dari database)
    const tracks = [
        {
            id: 1,
            title: 'Sunset Melody',
            artist: 'Dream Waves',
            duration: '3:45',
            cover: 'assets/images/cover1.jpg',
            audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        },
        {
            id: 2,
            title: 'Urban Beats',
            artist: 'City Groove',
            duration: '4:20',
            cover: 'assets/images/cover2.jpg',
            audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
        },
        {
            id: 3,
            title: 'Mountain Echo',
            artist: 'Nature Sounds',
            duration: '5:12',
            cover: 'assets/images/cover3.jpg',
            audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
        },
        {
            id: 4,
            title: 'Midnight Drive',
            artist: 'Night Rider',
            duration: '3:58',
            cover: 'assets/images/cover4.jpg',
            audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
        },
        {
            id: 5,
            title: 'Ocean Waves',
            artist: 'Sea Breeze',
            duration: '4:05',
            cover: 'assets/images/cover5.jpg',
            audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
        }
    ];

    // Elemen-elemen DOM
    const playlistContainer = document.querySelector('.playlist-container');
    const currentTrackTitle = document.getElementById('current-track-title');
    const currentTrackArtist = document.getElementById('current-track-artist');
    const trackThumb = document.querySelector('.track-thumb');
    const playPauseBtn = document.getElementById('play-pause');
    const prevTrackBtn = document.getElementById('prev-track');
    const nextTrackBtn = document.getElementById('next-track');
    const progressBar = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    const volumeControl = document.getElementById('volume');

    // State untuk player musik
    let currentTrackIndex = 0;
    let isPlaying = false;
    const audio = new Audio();

    // Memuat track pertama
    loadTrack(currentTrackIndex);

    // Event listener untuk tombol play/pause
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    // Event listener untuk tombol next
    nextTrackBtn.addEventListener('click', function() {
        nextTrack();
    });

    // Event listener untuk tombol previous
    prevTrackBtn.addEventListener('click', function() {
        prevTrack();
    });

    // Event listener untuk update progress bar
    audio.addEventListener('timeupdate', updateProgress);

    // Event listener untuk mengklik progress bar
    progressContainer.addEventListener('click', setProgress);

    // Event listener untuk audio ended
    audio.addEventListener('ended', function() {
        nextTrack();
    });

    // Event listener untuk volume control
    volumeControl.addEventListener('input', function() {
        const volume = volumeControl.value / 100;
        audio.volume = volume;
    });

    // Event listener untuk tombol play di playlist
    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', function() {
            const trackId = parseInt(this.getAttribute('data-id'));
            const trackIndex = tracks.findIndex(track => track.id === trackId);
            
            if (currentTrackIndex === trackIndex && isPlaying) {
                pauseTrack();
            } else {
                currentTrackIndex = trackIndex;
                loadTrack(currentTrackIndex);
                playTrack();
            }
        });
    });

    // Fungsi untuk memuat track
    function loadTrack(index) {
        if (index < 0) index = tracks.length - 1;
        if (index >= tracks.length) index = 0;
        
        currentTrackIndex = index;
        
        const track = tracks[currentTrackIndex];
        audio.src = track.audioSrc;
        audio.load();
        
        updateTrackInfo(track);
    }

    // Fungsi untuk memperbarui informasi track yang sedang diputar
    function updateTrackInfo(track) {
        currentTrackTitle.textContent = track.title;
        currentTrackArtist.textContent = track.artist;
        trackThumb.style.backgroundImage = `url(${track.cover})`;
    }

    // Fungsi untuk memutar track
    function playTrack() {
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        highlightCurrentTrack();
    }

    // Fungsi untuk menjeda track
    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }

    // Fungsi untuk memainkan track berikutnya
    function nextTrack() {
        currentTrackIndex++;
        loadTrack(currentTrackIndex);
        if (isPlaying) {
            playTrack();
        }
    }

    // Fungsi untuk memainkan track sebelumnya
    function prevTrack() {
        currentTrackIndex--;
        loadTrack(currentTrackIndex);
        if (isPlaying) {
            playTrack();
        }
    }

    // Fungsi untuk memperbarui progress bar
    function updateProgress() {
        const { duration, currentTime } = audio;
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            
            // Update current time
            const currentMinutes = Math.floor(currentTime / 60);
            const currentSeconds = Math.floor(currentTime % 60);
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
            
            // Update total time
            const durationMinutes = Math.floor(duration / 60);
            const durationSeconds = Math.floor(duration % 60);
            totalTimeEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
        }
    }

    // Fungsi untuk mengatur progress ketika diklik
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        
        audio.currentTime = (clickX / width) * duration;
    }

    // Fungsi untuk menyorot track yang sedang diputar
    function highlightCurrentTrack() {
        const trackItems = document.querySelectorAll('.track-item');
        trackItems.forEach((item, index) => {
            if (index === currentTrackIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Tambahkan hover effect untuk tombol-tombol
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        button.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });
}); 