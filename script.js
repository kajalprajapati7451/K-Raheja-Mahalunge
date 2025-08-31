 // Function to scroll amenities slider
        function scrollAmenities(scrollOffset) {
            const slider = document.getElementById('amenitiesSlider');
            slider.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
        
        // Floor plan navigation
        document.addEventListener('DOMContentLoaded', function() {
            const floorplanBtns = document.querySelectorAll('.floorplan-btn');
            const floorplanContents = document.querySelectorAll('.floorplan-content');
            
            floorplanBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const target = this.getAttribute('data-type');
                    
                    // Update buttons
                    floorplanBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update content
                    floorplanContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === 'floorplan-' + target) {
                            content.classList.add('active');
                        }
                    });
                });
            });
            
            // Image zoom functionality
            const zoomContainers = document.querySelectorAll('.zoom-container');
            zoomContainers.forEach(container => {
                container.addEventListener('click', function() {
                    this.classList.toggle('zoomed');
                    if (this.classList.contains('zoomed')) {
                        this.style.overflow = 'auto';
                        this.querySelector('.zoom-info').textContent = 'Click to zoom out';
                    } else {
                        this.style.overflow = 'hidden';
                        this.querySelector('.zoom-info').textContent = 'Click to zoom';
                    }
                });
            });
            
            // Simple script to show modal after 3 seconds
            setTimeout(function() {
                var myModal = new bootstrap.Modal(document.getElementById('comingSoonModal'));
                myModal.show();
            }, 3000);
        });