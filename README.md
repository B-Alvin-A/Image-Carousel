# Image-Carousel
This is an HTML, CSS and JavaScript that creates an image carousel. It consists of a main photo displayed in a larger section with a caption and a "Check Out" button. Below the main photo, there is a row of smaller images that serve as navigation for the carousel.

The HTML structure is divided into a container section, which contains a wrapper element for the main photo and caption, and an image-wrapper element for the smaller images.

The CSS styles define the layout and appearance of the elements, including the transitions and hover effects.

The main photo is displayed in an img element with the id main-photo. It has a dynamic source attribute (src) and a name attribute (name) to identify the image.

The caption is displayed in a caption-wrapper element, which is initially hidden and becomes visible when hovering over the wrapper.

The caption includes a title (caption), an image name (img-name), and a "Check Out" button (btn) represented by an anchor (<a>) tag.

The smaller images are displayed in img elements with the class imageCarousel. Each image has a dynamic source attribute and a name attribute to identify the image.

The JavaScript code adds functionality to the image carousel. It retrieves the imageCarousel elements and assigns a click event listener to each of them.

When a smaller image is clicked, the corresponding image source is assigned to the main photo, the caption is updated with the image name, and the clicked image is highlighted by adding the class selected.

The changeCaption function updates the caption with the provided image name.
