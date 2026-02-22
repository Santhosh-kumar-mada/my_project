const prompts = [
  {
    image: "./images/prompt-001.jpeg",
    title: "1. Effortlessly cool.",
    description: "Photorealistic black-and-white portrait of a young man outdoors, using the uploaded image as a facial and pose reference, with soft natural light, shallow depth of field, and a smooth bokeh background; candid off-center framing, short textured hair, neatly trimmed beard, glasses, casual hoodie over a t-shirt, calm and confident expression, cinematic contrast, subtle film grain, sharp facial details, modern editorial photography style, 85mm lens look, f/1.8, intimate and effortless mood."
  },
  {
    image: "./images/prompt-002.jpeg",
    title: "2. Cinematic Urban Portrait",
    description: "Photorealistic cinematic portrait of a stylish man in an urban outdoor setting, using the uploaded image as a facial and body reference, wearing a black leather jacket over a dark shirt, sunglasses, and a wristwatch, holding a takeaway coffee cup; confident, composed pose with one hand in pocket, soft natural daylight, shallow depth of field with a blurred city and car background, muted color palette, modern fashion editorial style, sharp focus on face and clothing textures, subtle contrast, realistic skin tones, high-end lifestyle photography, 85mm lens look, f/1.8, calm and effortlessly cool mood."
  },
  {
    image: "./images/prompt-003.jpeg",
    title: "3. Luxury Evening Editorial Portrait",
    description: "Photorealistic cinematic portrait of an elegant man in a warm, upscale interior, using the uploaded image as a facial and body reference, dressed in a tailored black suit with a long overcoat, refined grooming and neatly styled hair, calm confident expression, standing casually with hands in pockets; soft golden ambient lighting from modern pendant lamps, rich reflections and depth, shallow depth of field with a softly blurred luxury lounge background, high contrast with warm highlights and deep shadows, premium fashion editorial style, realistic skin tones, sharp fabric textures, cinematic color grading, 85mm lens look, f/1.8, sophisticated and timeless mood."
  } ,
  {
    image: "./images/prompt-004.jpeg",
    title: "4. Warm Minimalist Studio Portrait Prompt",
    description: "Photorealistic studio portrait of a confident man, using the uploaded image as a facial and body reference, standing against a neutral beige backdrop with strong directional warm lighting creating defined shadows; wearing a slightly unbuttoned light linen shirt with rolled sleeves and tailored dark trousers, natural textured hair and neatly groomed beard, relaxed yet powerful pose with one hand on hip, sharp jawline emphasis, cinematic contrast, soft highlights on skin, detailed fabric texture, editorial fashion photography style, medium-format camera look, 85mm lens, shallow depth of field, earthy color grading, sophisticated and masculine mood."
  } ,
  {
    image: "./images/prompt-005.jpeg",
    title: "5. Moody Contemporary Lifestyle Portrait Prompt",
    description: "Photorealistic lifestyle portrait of a rugged, confident man indoors, using the uploaded image as a facial and body reference, seated backward on a wooden chair with arms resting naturally, intense direct gaze toward the camera, wearing a dark blue casual shirt with rolled sleeves and light denim jeans, subtle accessories like a wristwatch and bracelet; soft natural window light creating gentle highlights and shadows across the face, shallow depth of field with a minimal blurred interior background, cool-toned cinematic color grading, detailed skin texture and fabric realism, modern editorial photography style, 85mm lens look, f/2.0, intimate, strong, and effortlessly masculine mood."
  },
  {
    image: "./images/prompt-006.jpeg",
    title: "6. Moody Cinematic Drama Portrait Prompt",
    description: "Photorealistic cinematic portrait of a serious middle-aged man seated indoors, using the uploaded image as a facial and body reference, wearing a dark button-down shirt and casual trousers, holding a small plush toy in his lap; intense, contemplative expression with subtle tension in posture, warm ambient lighting from a table lamp casting soft golden highlights and gentle shadows across the face, cozy living room setting with muted earthy tones and shallow depth of field, detailed skin texture and fabric realism, natural color grading with cinematic contrast, 85mm lens look, f/2.0, intimate storytelling atmosphere, dramatic yet grounded mood inspired by high-quality streaming series cinematography."
  },
  {
    image: "./images/prompt-007.jpeg",
    title: "7. Cosmic Dragon Power Fantasy Prompt",
    description: "Hyper-realistic fantasy portrait of a muscular man viewed from behind, using the uploaded image as a facial and body reference, flexing both arms in a powerful stance inside a dim gym setting; a massive ethereal dragon made of swirling cosmic energy and stardust emerging from his back, wrapping around him in a spiral of glowing nebula clouds, deep blues and purples with sparkling stars embedded in its body, luminous eyes and flowing celestial mane; dramatic rim lighting outlining the physique, high contrast cinematic glow, ultra-detailed muscle definition and fabric texture, dynamic energy particles in the air, shallow depth of field, epic fantasy concept art style blended with realistic photography, 85mm lens look, intense, mythic, unstoppable aura."
  },
  {
    image: "./images/prompt-008.jpeg",
    title: "8. Earth-Toned Fashion Editorial Portrait Prompt",
    description: "Photorealistic fashion portrait of a confident man leaning casually against a textured warm brown studio backdrop, using the uploaded image as a facial and body reference, wearing a fitted olive-green polo shirt and tailored trousers, subtle accessories like a wristwatch and small earring, relaxed posture with hands loosely clasped, soft yet defined studio lighting that enhances facial structure and arm definition, warm earthy color grading, sharp fabric and skin detail, shallow depth of field with smooth background texture, modern minimalist editorial photography style, 85mm lens look, natural tones, refined masculine aesthetic, calm and self-assured mood."
  },
  {
    image: "https://instagram.fvtz3-2.fna.fbcdn.net/v/t51.82787-15/609107751_18158352421418015_1116049369840292254_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc5OTkyMDE0Mzg0MjMxMzQ0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=wLw_tNkF08gQ7kNvwFi42da&_nc_oc=AdkA9Rp7YVU61f6xo0KgzCSYy87aVQeES7pauePElyqnmeEp5J12zg9gHZB-0O15S_U&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=instagram.fvtz3-2.fna&_nc_gid=A3n6bhOT_2oVV--icz-GJA&oh=00_AfvDBqomAMUzfhruIZBJ11p_t-tXhh6jFIePTEw27T2tAg&oe=69A0578D",
    title: "9.Intense Romantic Cinematic Poster Prompt",
    description: "Hyper-realistic cinematic poster-style portrait of a couple in an intimate, emotionally charged moment, using the uploaded photos as facial and body references; the man shown from behind with a strong, muscular build and subtle battle-worn details like light bruises and bandages on his shoulder and arm, wearing minimal light fabric around the waist, while the woman stands close in a soft, elegant draped outfit, gently lighting his cigarette and gazing at him with deep emotion; warm golden-hour lighting streaming through an open window, soft cityscape blur in the background, dramatic shadows and highlights sculpting their forms, rich earthy color grading, ultra-detailed skin texture and fabric realism, cinematic depth of field, high-end movie poster composition, intense romantic tension, bold stylized title typography at the bottom, epic, passionate, and dramatic atmosphere."
  },
  {
    image: "https://instagram.fvtz3-2.fna.fbcdn.net/v/t51.82787-15/628611832_18510079828079213_2644044525998130245_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgzMDEzMjEyOTMyMjQyMTA5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=j4Vb9k0e4mQQ7kNvwF3Njmt&_nc_oc=AdnqO0xGBxuCtyRG3dsPVe2KQivU6GLeDo14HwcPPEmXYwpU1SzC-WvczHEvjlEkjAM&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=instagram.fvtz3-2.fna&_nc_gid=l18m6zlkjIKsrE_bFzHYIg&oh=00_AfuBoJHpQU_KwmIdrfYWgMAcpMUmBwupEBEOVVtJzKsT8A&oe=69A06FDB",
    title: "10.Dark Royal Cinematic Portrait Prompt",
    description: "Ultra-realistic studio portrait of a confident man in a tailored black sherwani with intricate metallic embroidery on the shoulder, wearing sleek tinted sunglasses and a minimal wristwatch, posed against a deep black background; dramatic low-key lighting illuminating only half of his face to create a bold chiaroscuro effect, sharp jawline and well-groomed beard emphasized with cinematic shadows, hands adjusting his cuff with subtle rings visible, luxury editorial fashion style, high contrast, moody atmosphere, ultra-detailed skin texture and fabric embroidery, 85mm lens look, shallow depth of field, sharp focus, rich blacks and gold highlights, premium magazine cover aesthetic, powerful, mysterious, and sophisticated vibe."
  },
  {
    image: "https://instagram.fvtz3-2.fna.fbcdn.net/v/t51.82787-15/627739356_18395079793180772_643779178157918686_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzgyNzcyMjYzOTU3NDEyMTc5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=LTRhn3xKmZIQ7kNvwFDB_7w&_nc_oc=AdmGv45ZsY1aCHyH15YvFjiQxCHX1LVUEvf9lm5Q6jgkl1QQqKky_oQXnmhFPk5klGQ&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=instagram.fvtz3-2.fna&_nc_gid=1c73sCTmKFmJYbj44Qlz6Q&oh=00_AfsNEWjD-Qs5Z665basqb0MBKrYCnT1qnfmARZHowptkvw&oe=69A07086",
    title: "11.Sunset Coastal Lifestyle Portrait Prompt",
    description: "Ultra-realistic outdoor lifestyle portrait of a confident man seated casually on a boat railing with the ocean softly blurred in the background, wearing a relaxed beige linen shirt slightly unbuttoned at the collar and light-toned trousers, accessorized with aviator sunglasses and a subtle chain necklace; natural golden-hour lighting casting warm highlights on his face and hair, gentle sea breeze adding movement to his wavy hair and shirt fabric, candid smile with a calm, charismatic expression, cinematic depth of field, 85mm lens look, soft neutral color grading with sandy and oceanic tones, high-detail skin texture and fabric realism, travel magazine aesthetic, relaxed luxury vibe, vibrant yet natural tones, crisp focus, and a serene coastal atmosphere."
  },
  {
    image: "https://instagram.fvtz3-2.fna.fbcdn.net/v/t51.82787-15/626037988_17873961489529070_4173802045456730146_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzgyODU2MDIzMjgxNDEwODI5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=p8PVbffu4rwQ7kNvwGhefrJ&_nc_oc=AdmA8Ky4-RiyZPkwUGJEJCIfRbP1r3R3lrTjrbjEwFD_zIAAn-_nVd--qsOf9ikSA7w&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=instagram.fvtz3-2.fna&_nc_gid=YRCk1e7juUD2NHudNcozPA&oh=00_Afu2DVqM7T1ceWMcIqt9oI9_vyUb2dBO26EmCe40yqMFug&oe=69A07CE5",
    title: "12.Rustic Vintage Explorer Portrait Prompt",
    description: "Ultra-realistic outdoor portrait of a confident man in a warm-toned rustic setting, wearing a casual plaid button-down shirt with rolled sleeves, dark denim jeans, a statement belt buckle, and a classic wristwatch, accessorized with dark sunglasses and a wide-brim black hat slightly tilted as he adjusts it with one hand; golden-hour lighting casting soft, earthy highlights across his face and outfit, cinematic shallow depth of field with a blurred rural background featuring muted trees and vintage elements, warm sepia-inspired color grading, textured fabric details, natural skin tones, 85mm lens look, editorial fashion photography style, sharp focus with creamy bokeh, relaxed yet bold body language, rugged countryside aesthetic, and a timeless vintage explorer vibe."
  },
  {
    image: "https://instagram.fvtz3-1.fna.fbcdn.net/v/t51.82787-15/630660843_17974118232010634_961716908092003895_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=103&ig_cache_key=MzgzMjk5NjYyMTU3MTgyMjEyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=p8JgBqtnb1gQ7kNvwHOChrJ&_nc_oc=Adltql3tBuknuFhfDi8aaslWbt03CvV2m0OllzF1TBV_AI1DV5ZZE5ENlk6_nSkmRSw&_nc_ad=z-m&_nc_cid=1252&_nc_zt=23&_nc_ht=instagram.fvtz3-1.fna&_nc_gid=NVskgtJg4sVF1ODeZ38vKQ&oh=00_Afvi3j-zXX96zSBnQL74xfhp39luuRNN1ya4kJdI4101RQ&oe=69A05F41",
    title: "13.Golden Autumn Casual Portrait Prompt",
    description: "Ultra-realistic outdoor portrait of a stylish young man standing confidently in a park during autumn, wearing a mustard-yellow plaid shirt with rolled sleeves and the top buttons open, subtle chain necklace visible, paired with modern dark sunglasses; medium-length slightly wavy hair naturally tousled, soft stubble, relaxed yet confident expression while looking slightly off-camera; warm golden-hour lighting enhancing skin tones and bringing out rich yellow and earthy hues in the background, shallow depth of field with creamy bokeh of trees and foliage, 85mm lens effect, crisp facial details with natural texture, soft cinematic color grading with warm highlights and muted greens, lifestyle fashion photography aesthetic, sharp focus on subject with beautifully blurred background, calm, charismatic, and effortlessly stylish vibe."
  }

];
