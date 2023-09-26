import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {

  // Array of image file paths
  images: string[] = [
    '../assets/images/image3.jpg',
    '../assets/images/image1.jpg',
    '../assets/images/image2.jpg',
  ];

  currentIndex = 0; 

  ngOnInit(): void {
    
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds (adjust as needed)
  }

  // Function to move to the next image in the carousel
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}