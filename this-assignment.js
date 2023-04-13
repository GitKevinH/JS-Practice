// This Activity
 
// Create one object named `photoSlideShow`. This object will represent the functionality of a picture slideshow.


// There should be no variables declared outside the object.
 
// The object should have properties for:

// An array called photoList that contains the names of the photos as strings
// An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
// A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
// A prevPhoto() function that does the same thing, but backwards.
// A function getCurrentPhoto() that returns the current photo from the list.
 

// Complete all of the items and submit them via your GitHub repo. It might be a good idea to have one repo for all these JS assignments to push them all to one but only send the link to the file itself, not the whole repo if you do this. 

let photoSlideShow={

    // An array called photoList that contains the names of the photos as strings
    photoList: ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg'],

    // An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    currentPhotoIndex: 1,

    // A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
    nextPhoto: function (){
       if(this.currentPhotoIndex < (this.photoList.length -1)){
         return this.currentPhotoIndex++, console.log(`The current photo is: ${this.photoList[this.currentPhotoIndex]}`);
       } else{
        return console.log("End of slideshow");
       }

    },

    // A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function (){
        if(this.currentPhotoIndex > 0 ){
            this.currentPhotoIndex--;
            console.log(`The current photo is: ${this.photoList[this.currentPhotoIndex]}`);
          } else{
           console.log("End of slideshow");
          }

    },

    // A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto: function (){
        return this.photoList[this.currentPhotoIndex];
    }
};

 // nextPhoto log testing
    // console.log(photoSlideShow.currentPhotoIndex);
    // photoSlideShow.nextPhoto();
    // console.log(photoSlideShow.currentPhotoIndex);
    // photoSlideShow.nextPhoto();

// prevPhoto log testing
    // console.log(photoSlideShow.currentPhotoIndex);
    // photoSlideShow.prevPhoto();
    // console.log(photoSlideShow.currentPhotoIndex);
    // photoSlideShow.prevPhoto();
    // console.log(photoSlideShow.currentPhotoIndex);
    // photoSlideShow.prevPhoto();

// getCurrentPhoto log testing

    console.log(photoSlideShow.getCurrentPhoto());
    photoSlideShow.nextPhoto();
    console.log(photoSlideShow.getCurrentPhoto());
    photoSlideShow.nextPhoto();


