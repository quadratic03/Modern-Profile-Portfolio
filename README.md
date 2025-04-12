# Dark Neon Portfolio Template

A modern, responsive portfolio template with a dark theme and glowing neon accents. This template features an eye-catching design with animated elements, perfect for developers, designers, and creative professionals.

![Portfolio Preview](img/preview.jpg)

## 🌟 Features

- **Dark Neon Theme**: Sleek dark backgrounds with vibrant purple glowing elements
- **Fully Responsive**: Looks great on all devices - mobile, tablet, and desktop
- **Modern Design**: Clean layout with subtle animations and transitions
- **Comprehensive Pages**: Complete set of pages for a professional portfolio
- **Interactive Elements**: Animated components that respond to user interaction
- **Semantic HTML5**: Well-structured and accessible code
- **CSS Variables**: Easy customization through CSS variables
- **No JavaScript Framework Required**: Built with vanilla JavaScript for simplicity
- **Cross-Browser Compatible**: Works on all modern browsers

## 📄 Pages Included

- **Home**: Landing page with hero section, featured projects, skills preview, and testimonials
- **Projects**: Filterable portfolio grid with search functionality
- **Skills**: Detailed presentation of technical and professional skills
- **Timeline**: Professional journey visualization
- **CV/Resume**: Comprehensive CV with work history, education, and skills
- **Blog**: Ready-to-use blog layout
- **Services**: Showcase of professional services
- **Contact**: Contact form with additional contact information

## 🎨 Customization

### Color Scheme

The color scheme can be easily customized by modifying the CSS variables in the `:root` selector in `css/style.css`:

```css
:root {
    --primary-color: #7f5af0;       /* Main accent color */
    --primary-color-dark: #6a3ed3;   /* Darker shade of primary color */
    --secondary-color: #94a1b2;      /* Text color for descriptions */
    --dark-color: #010101;           /* Darkest background color */
    --bg-color: #0f0e0e;             /* Main background color */
    --card-bg: #16161a;              /* Card background color */
    --text-color: #fffffe;           /* Main text color */
    /* ...other variables... */
}
```

### Glow Effects

Adjust the glow intensity by modifying these variables:

```css
--glow-sm: 0 0 8px rgba(127, 90, 240, 0.4);   /* Small glow effect */
--glow-md: 0 0 15px rgba(127, 90, 240, 0.5);  /* Medium glow effect */
--glow-lg: 0 0 30px rgba(127, 90, 240, 0.6);  /* Large glow effect */
```

### Typography

The default font is Poppins, which can be changed by updating:

```css
--body-font: 'Poppins', sans-serif;
--heading-font: 'Poppins', sans-serif;
```

## 🛠️ Usage

1. Clone or download this repository
2. Customize the content in HTML files to add your personal information
3. Replace placeholder images in the `img` folder with your own
4. Modify the color scheme if desired by editing CSS variables
5. Deploy to your preferred hosting service

## 📁 Folder Structure

```
/
├── css/
│   └── style.css          # Main stylesheet
├── img/                   # Images directory
│   ├── profile.jpg        # Profile image
│   ├── projects/          # Project images
│   └── testimonials/      # Testimonial images
├── js/
│   └── main.js            # Main JavaScript file
├── files/                 # Downloadable files (CV, etc.)
├── index.html             # Home page
├── projects.html          # Projects portfolio page
├── skills.html            # Skills page
├── timeline.html          # Professional timeline page
├── cv.html                # CV/Resume page
├── blog.html              # Blog page
├── services.html          # Services page
├── contact.html           # Contact page
└── README.md              # This file
```

## 📱 Responsive Breakpoints

The template is designed with the following breakpoints:

- **Large Screens**: 1200px and above
- **Desktop**: 1024px to 1199px
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🔧 Dependencies

- **Font Awesome**: For icons (loaded via CDN)
- **Google Fonts**: For typography (Poppins font)

## 📝 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🙏 Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Images: Replace with appropriate attribution for your placeholder images

## 👤 Author

Your Name - [yourwebsite.com](https://yourwebsite.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

If you have any questions or suggestions, please contact me at hello@yourname.com 