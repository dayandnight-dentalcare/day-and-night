export interface Benefit {
  title: string;
  description: string;
}

export interface ProcedureStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TreatmentDetails {
  id: string;
  name: string;
  shortDesc: string;
  price: string;
  overview: string;
  benefits: Benefit[];
  procedureSteps: ProcedureStep[];
  faqs: FAQ[];
  whoNeedsIt: string;
  howItWorks: string;
}

export const treatmentsData: TreatmentDetails[] = [
  {
    id: "metal-braces",
    name: "Metal Braces",
    shortDesc: "Traditional alignment for complex structural issues.",
    price: "₹20,000 – ₹40,000",
    overview: "Metal braces are a highly effective, time-tested orthodontic treatment designed to correct complex bite issues and severe tooth crowding. Using durable stainless steel brackets and wires, they offer precise control over tooth movement, ensuring optimal functional and aesthetic results.",
    whoNeedsIt: "Ideal for patients of all ages suffering from severe misalignments, significant crowding, crossbites, overbites, or underbites that clear aligners may not effectively correct.",
    howItWorks: "Brackets are bonded to the surface of each tooth and connected with an archwire. The wire applies continuous, gentle pressure, gradually guiding teeth into their proper positions over time.",
    benefits: [
      { title: "Highly Effective", description: "Capable of correcting the most severe and complex structural issues." },
      { title: "Durable", description: "Made from strong materials that withstand daily wear and tear." },
      { title: "Cost-Effective", description: "Often more affordable compared to alternative alignment options." },
      { title: "Predictable Results", description: "Provides precise control for the orthodontist, leading to guaranteed outcomes." }
    ],
    procedureSteps: [
      { title: "Consultation & X-Rays", description: "Comprehensive examination of your teeth and jaw structure." },
      { title: "Placement", description: "Thorough cleaning of teeth followed by bonding of brackets and threading of wires." },
      { title: "Adjustments", description: "Periodic visits every 4-6 weeks to tighten wires and monitor progress." },
      { title: "Removal & Retention", description: "Removing the braces and fitting custom retainers to maintain the new alignment." }
    ],
    faqs: [
      { question: "Are metal braces painful?", answer: "You may experience mild discomfort or soreness for a few days after adjustments, but it is generally manageable and subsides quickly." },
      { question: "How long is the treatment?", answer: "Treatment typically lasts between 12 to 24 months, depending on the complexity of your case." },
      { question: "Can I eat normally?", answer: "You should avoid sticky, hard, or chewy foods that could damage the brackets, but otherwise, you can maintain a normal diet." }
    ]
  },
  {
    id: "clear-aligners",
    name: "Clear Aligners",
    shortDesc: "Invisible, comfortable alignment for a discreet transformation.",
    price: "₹25,000 – ₹2,00,000",
    overview: "Clear aligners are a modern, virtually invisible alternative to traditional braces. Custom-made from clear, smooth plastic, these removable trays gradually and gently shift your teeth into the desired position, offering a highly aesthetic and comfortable orthodontic experience.",
    whoNeedsIt: "Perfect for adults and teens with mild to moderate alignment issues, spacing problems, or mild bite irregularities who desire a discreet treatment option.",
    howItWorks: "A series of custom-fitted aligners is created using 3D imaging. Each set is worn for 1-2 weeks, slowly moving the teeth until the final, optimal alignment is achieved.",
    benefits: [
      { title: "Virtually Invisible", description: "Clear plastic design makes them barely noticeable when smiling or speaking." },
      { title: "Removable", description: "Easily take them out to eat, drink, brush, and floss without restrictions." },
      { title: "Comfortable", description: "Smooth edges prevent irritation to gums and cheeks compared to metal wires." },
      { title: "Convenient", description: "Fewer clinic visits needed for adjustments compared to traditional braces." }
    ],
    procedureSteps: [
      { title: "Digital Scanning", description: "A precise 3D scan of your teeth is taken to map out your treatment plan." },
      { title: "Custom Fabrication", description: "Your unique series of clear aligners are manufactured in a specialized lab." },
      { title: "Wearing Aligners", description: "Wear each set for 20-22 hours a day, changing to the next set every few weeks." },
      { title: "Final Assessment", description: "Completing the series and transitioning to retainers to lock in your new smile." }
    ],
    faqs: [
      { question: "How many hours a day must I wear them?", answer: "For the best results, aligners should be worn 20 to 22 hours per day." },
      { question: "Will it affect my speech?", answer: "There may be a slight lisp for the first few days, but most patients adapt quickly." },
      { question: "How do I clean them?", answer: "Rinse them daily and brush them gently with a soft toothbrush and clear antibacterial soap." }
    ]
  },
  {
    id: "smile-designing",
    name: "Smile Designing",
    shortDesc: "Comprehensive aesthetics tailored to your facial symmetry.",
    price: "₹20,000 – ₹1,50,000",
    overview: "Smile Designing is a bespoke cosmetic procedure that completely transforms your smile. By analyzing your facial structure, lip line, and tooth proportions, we create a harmonious, radiant smile using a combination of veneers, crowns, whitening, and contouring.",
    whoNeedsIt: "Individuals who are self-conscious about their smile due to stained, chipped, misaligned, or unevenly spaced teeth, seeking a complete aesthetic makeover.",
    howItWorks: "Using advanced digital software, a simulation of your new smile is created. After your approval, a customized combination of cosmetic treatments is executed to achieve the envisioned result.",
    benefits: [
      { title: "Boosts Confidence", description: "A flawless, radiant smile dramatically improves your self-esteem and social presence." },
      { title: "Customized", description: "Tailored specifically to complement your unique facial features and skin tone." },
      { title: "Comprehensive Solution", description: "Addresses multiple cosmetic concerns simultaneously." },
      { title: "Long-lasting Aesthetics", description: "Utilizes premium materials that resist staining and wear." }
    ],
    procedureSteps: [
      { title: "Aesthetic Analysis", description: "Detailed photography, digital scanning, and discussion of your desired outcome." },
      { title: "Digital Mockup", description: "Creating a visual simulation or temporary trial smile for your approval." },
      { title: "Preparation", description: "Preparing the teeth for restorations, which may involve minor reshaping." },
      { title: "Final Placement", description: "Bonding custom veneers or crowns to finalize your new, perfect smile." }
    ],
    faqs: [
      { question: "Is the procedure reversible?", answer: "Depending on the treatments used (like veneers), some enamel reshaping may be permanent." },
      { question: "How long does a smile makeover last?", answer: "With proper care, a smile makeover can last 10-15 years or more." },
      { question: "Will the new teeth look natural?", answer: "Yes, we use advanced ceramics that mimic the translucency and texture of natural enamel." }
    ]
  },
  {
    id: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDesc: "Painless microscopic therapy to save your natural teeth.",
    price: "₹3,000 – ₹5,000",
    overview: "Root canal treatment is a highly effective, painless procedure designed to save a tooth that is severely decayed or infected. By using advanced microscopic technology, we carefully remove the infected pulp, clean the inner canals, and seal the tooth to prevent further damage.",
    whoNeedsIt: "Patients experiencing severe toothache, prolonged sensitivity to hot or cold, swelling around the gums, or deep cavities that have reached the nerve of the tooth.",
    howItWorks: "The infected or inflamed nerve tissue (pulp) inside the tooth is removed. The hollowed-out space is then meticulously cleaned, disinfected, and filled with a biocompatible material.",
    benefits: [
      { title: "Pain Relief", description: "Immediately eliminates the severe pain caused by a dental infection." },
      { title: "Saves Natural Tooth", description: "Prevents the need for extraction, maintaining your natural bite and jawbone health." },
      { title: "Highly Successful", description: "A routine procedure with a very high success rate when performed expertly." },
      { title: "Prevents Spread of Infection", description: "Stops bacteria from spreading to adjacent teeth or the jawbone." }
    ],
    procedureSteps: [
      { title: "Diagnosis & Anesthesia", description: "X-rays are taken to assess the infection, followed by local anesthesia for a painless experience." },
      { title: "Pulp Removal", description: "Creating a small access hole to remove the infected pulp tissue." },
      { title: "Cleaning & Shaping", description: "Microscopic cleaning and shaping of the root canals to remove all bacteria." },
      { title: "Filling & Restoration", description: "Sealing the canals with gutta-percha and placing a crown to restore tooth strength." }
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "No, with modern anesthesia and techniques, the procedure is completely painless and actually relieves your existing pain." },
      { question: "How long does it take?", answer: "It usually requires 1 to 2 visits, lasting about 45 to 90 minutes each." },
      { question: "Do I always need a crown after?", answer: "Yes, a crown is typically necessary to protect the weakened tooth and restore its full function." }
    ]
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    shortDesc: "Permanent, natural-looking replacements for missing teeth.",
    price: "₹20,000 – ₹45,000",
    overview: "Dental implants are the gold standard for replacing missing teeth. They provide a permanent, robust foundation for artificial teeth that look, feel, and function exactly like natural teeth, preserving facial structure and preventing bone loss.",
    whoNeedsIt: "Anyone missing one, multiple, or all teeth due to injury, decay, or disease, who desires a permanent alternative to dentures or bridges.",
    howItWorks: "A biocompatible titanium post is surgically embedded into the jawbone. Over time, it fuses with the bone (osseointegration), creating a sturdy anchor for a custom-made crown.",
    benefits: [
      { title: "Natural Appearance", description: "Implants look and feel indistinguishable from your natural teeth." },
      { title: "Preserves Bone Health", description: "Stimulates the jawbone, preventing the bone loss that typically follows tooth extraction." },
      { title: "Durable & Permanent", description: "With good oral hygiene, implants can last a lifetime." },
      { title: "Restores Full Function", description: "Allows you to eat, chew, and speak with complete confidence." }
    ],
    procedureSteps: [
      { title: "Comprehensive Assessment", description: "3D scans are used to evaluate bone density and plan the exact placement." },
      { title: "Surgical Placement", description: "The titanium implant is gently placed into the jawbone under local anesthesia." },
      { title: "Healing (Osseointegration)", description: "A period of 3-6 months allows the implant to fuse securely with the bone." },
      { title: "Crown Placement", description: "An abutment and a custom ceramic crown are attached, completing the restoration." }
    ],
    faqs: [
      { question: "Am I a candidate for implants?", answer: "Most people with healthy gums and sufficient bone density are good candidates. Bone grafting can help if bone volume is low." },
      { question: "Does the surgery hurt?", answer: "The procedure is performed under anesthesia, ensuring no pain during surgery. Mild soreness afterward is manageable with medication." },
      { question: "How long do implants last?", answer: "With proper care and regular checkups, dental implants can last a lifetime." }
    ]
  },
  {
    id: "dental-scaling",
    name: "Dental Scaling",
    shortDesc: "Advanced ultrasonic cleaning for optimal gum health.",
    price: "₹1,000 – ₹2,000",
    overview: "Dental scaling is a professional deep cleaning procedure that removes stubborn plaque and tartar (calculus) from the teeth and beneath the gumline. Regular scaling is fundamental to preventing gum disease and maintaining a bright, healthy smile.",
    whoNeedsIt: "Highly recommended for everyone every 6 months as part of routine hygiene, and especially for individuals with signs of gingivitis or tartar buildup.",
    howItWorks: "Using specialized ultrasonic instruments, tartar is gently vibrated loose and flushed away with water, ensuring a thorough clean without damaging the tooth enamel.",
    benefits: [
      { title: "Prevents Gum Disease", description: "Removes the bacteria responsible for gingivitis and periodontitis." },
      { title: "Freshens Breath", description: "Eliminates the bacterial buildup that causes chronic bad breath." },
      { title: "Removes Stains", description: "Polishes away superficial surface stains from tea, coffee, and tobacco." },
      { title: "Protects Overall Health", description: "Reduces systemic inflammation linked to heart disease and diabetes." }
    ],
    procedureSteps: [
      { title: "Examination", description: "A quick check of your gums and teeth to assess plaque levels." },
      { title: "Ultrasonic Scaling", description: "Gentle removal of hard tartar deposits using an ultrasonic scaler." },
      { title: "Manual Scaling", description: "Fine detailing with hand instruments to remove residual deposits." },
      { title: "Polishing", description: "Smoothing the tooth surfaces with a prophylactic paste to resist future buildup." }
    ],
    faqs: [
      { question: "Will my teeth become loose after scaling?", answer: "No, scaling actually strengthens teeth by removing the tartar that causes gum recession and bone loss." },
      { question: "Does scaling damage enamel?", answer: "Professional ultrasonic scaling is entirely safe and does not scratch or damage healthy enamel." },
      { question: "Is scaling painful?", answer: "It is generally painless, though you might feel mild sensitivity if your gums are heavily inflamed." }
    ]
  },
  {
    id: "extraction",
    name: "Extraction",
    shortDesc: "Safe, comfortable removal of compromised teeth.",
    price: "₹600 – ₹2,000",
    overview: "Tooth extraction is a safe, routine procedure to remove an irrecoverable or problematic tooth. We prioritize patient comfort, utilizing gentle techniques and effective anesthesia to ensure a stress-free and painless experience.",
    whoNeedsIt: "Patients with severely decayed teeth, advanced gum disease, fractured roots, or impacted wisdom teeth that are causing pain or crowding.",
    howItWorks: "After thoroughly numbing the area, the tooth is carefully loosened and removed. For impacted teeth, a minor surgical approach may be necessary to safely extract the tooth.",
    benefits: [
      { title: "Stops Severe Pain", description: "Instantly resolves the pain caused by deep infections or impaction." },
      { title: "Prevents Infection Spread", description: "Removes the source of bacteria to protect neighboring healthy teeth." },
      { title: "Creates Space", description: "Necessary for orthodontic treatments to resolve severe dental crowding." },
      { title: "Improves Oral Health", description: "Eliminates problematic teeth that cannot be saved, paving the way for restorative options." }
    ],
    procedureSteps: [
      { title: "X-Ray Evaluation", description: "Assessing the tooth's root shape and position." },
      { title: "Local Anesthesia", description: "Administering anesthesia to ensure the area is completely numb." },
      { title: "Tooth Removal", description: "Gently expanding the socket and extracting the tooth." },
      { title: "Post-Op Care", description: "Providing a gauze pad to control bleeding and detailed aftercare instructions." }
    ],
    faqs: [
      { question: "Will it hurt?", answer: "You will feel pressure during the extraction, but no sharp pain thanks to the local anesthesia." },
      { question: "How long is the recovery?", answer: "Initial healing takes a few days. You can usually return to normal activities within 24 to 48 hours." },
      { question: "What should I eat after?", answer: "Stick to soft, cool foods for the first few days and avoid using a straw." }
    ]
  },
  {
    id: "fpd",
    name: "FPD (Fixed Partial Dentures)",
    shortDesc: "Fixed partial dentures to restore function and appearance.",
    price: "₹3,000 onwards",
    overview: "Fixed Partial Dentures (FPD), commonly known as dental bridges, are custom-made restorative devices used to replace one or more missing teeth. By anchoring artificial teeth to adjacent healthy teeth, FPDs restore both your smile and your ability to chew efficiently.",
    whoNeedsIt: "Patients missing one or a few adjacent teeth who prefer a fixed, non-removable solution over traditional removable dentures.",
    howItWorks: "The healthy teeth on either side of the gap are slightly reshaped to serve as anchors. A custom bridge, consisting of crowns for the anchors and a false tooth (pontic) in the middle, is then permanently cemented in place.",
    benefits: [
      { title: "Restores Smile", description: "Fills unsightly gaps with natural-looking artificial teeth." },
      { title: "Improves Chewing", description: "Restores normal bite force and chewing efficiency." },
      { title: "Prevents Shifting", description: "Stops adjacent teeth from drifting into the empty space." },
      { title: "Fixed Solution", description: "Does not need to be removed for cleaning like traditional dentures." }
    ],
    procedureSteps: [
      { title: "Preparation", description: "Reshaping the adjacent abutment teeth under local anesthesia." },
      { title: "Impressions", description: "Taking a digital or physical mold of your teeth to fabricate the bridge." },
      { title: "Temporary Bridge", description: "Placing a temporary bridge while the permanent one is crafted." },
      { title: "Final Placement", description: "Removing the temporary bridge and permanently cementing the final FPD." }
    ],
    faqs: [
      { question: "How long does a bridge last?", answer: "With excellent oral hygiene, a dental bridge can last anywhere from 5 to 15 years or longer." },
      { question: "Is it hard to clean?", answer: "You will need to use special floss threaders or water flossers to clean underneath the artificial tooth." },
      { question: "Will it look natural?", answer: "Yes, modern ceramic bridges are color-matched and crafted to look exactly like natural teeth." }
    ]
  },
  {
    id: "facial-fracture-surgery",
    name: "Facial Fracture Surgery",
    shortDesc: "Expert maxillofacial reconstructive procedures.",
    price: "₹50,000 – ₹1,50,000",
    overview: "Facial fracture surgery is a specialized maxillofacial procedure aimed at repairing broken bones in the face, including the jaw (mandible or maxilla), cheekbones, or eye sockets, usually resulting from trauma.",
    whoNeedsIt: "Individuals who have suffered significant facial trauma from accidents, sports injuries, or falls, leading to broken facial bones.",
    howItWorks: "Under general anesthesia, maxillofacial surgeons realign the broken bones and stabilize them using miniature titanium plates and screws to ensure proper healing and restore facial symmetry.",
    benefits: [
      { title: "Restores Function", description: "Corrects bite issues and restores normal chewing and speaking abilities." },
      { title: "Aesthetic Recovery", description: "Rebuilds the natural contours of the face." },
      { title: "Prevents Complications", description: "Avoids long-term issues like chronic pain, nerve damage, or vision problems." },
      { title: "Expert Care", description: "Performed by highly trained oral and maxillofacial surgeons." }
    ],
    procedureSteps: [
      { title: "Advanced Imaging", description: "Using CBCT and CT scans to accurately map the fractures." },
      { title: "Surgical Planning", description: "Detailed virtual surgical planning for precise reconstruction." },
      { title: "Surgical Stabilization", description: "Realigning bones and securing them with biocompatible titanium hardware." },
      { title: "Post-Operative Recovery", description: "Careful monitoring and a soft-diet regimen while bones fuse." }
    ],
    faqs: [
      { question: "Will I have visible scars?", answer: "Surgeons typically make incisions inside the mouth or in natural skin creases to minimize visible scarring." },
      { question: "How long is the recovery?", answer: "Initial healing takes several weeks, but complete bone fusion may take a few months." },
      { question: "Do the titanium plates need to be removed later?", answer: "Usually, the plates and screws are permanent and do not require removal unless they cause irritation." }
    ]
  },
  {
    id: "flap-surgery",
    name: "Flap Surgery",
    shortDesc: "Advanced periodontal treatment for severe gum disease.",
    price: "₹10,000 – ₹60,000",
    overview: "Flap surgery is an advanced periodontal procedure designed to treat severe gum disease (periodontitis). When deep pockets form between the teeth and gums, scaling alone is insufficient. This procedure allows direct access to the roots to remove deep-seated infection and halt bone loss.",
    whoNeedsIt: "Patients with advanced periodontitis experiencing severe bone loss, deep gum pockets, or persistent gum infection that hasn't responded to non-surgical treatments.",
    howItWorks: "The gum tissue is gently separated (flapped back) from the teeth to expose the roots and bone. The area is thoroughly cleaned of tartar and diseased tissue, and the bone may be reshaped before the gums are sutured snugly back in place.",
    benefits: [
      { title: "Halts Disease Progression", description: "Effectively stops the advancement of severe periodontitis." },
      { title: "Reduces Pocket Depth", description: "Makes it easier for you to maintain oral hygiene at home." },
      { title: "Saves Teeth", description: "Prevents tooth loss by stabilizing the supporting bone structure." },
      { title: "Regenerative Potential", description: "Allows for bone grafting to repair lost tissue." }
    ],
    procedureSteps: [
      { title: "Anesthesia", description: "The affected area is deeply numbed with local anesthesia." },
      { title: "Incision & Access", description: "The gums are carefully lifted to access the root surface." },
      { title: "Deep Cleaning", description: "Tartar, plaque, and infected tissue are meticulously cleared." },
      { title: "Suturing", description: "The gums are repositioned tightly around the teeth and secured with stitches." }
    ],
    faqs: [
      { question: "Is flap surgery painful?", answer: "The procedure is done under local anesthesia, so you will not feel pain. Post-operative discomfort is manageable with prescribed painkillers." },
      { question: "How long does healing take?", answer: "Initial healing of the gums takes about 1-2 weeks. Stitches are usually removed after 7-10 days." },
      { question: "Will my teeth look longer?", answer: "Because diseased tissue is removed and gums heal tighter, roots may be slightly more exposed, making teeth appear slightly longer." }
    ]
  },
  {
    id: "cosmetic-fillings",
    name: "Cosmetic Fillings",
    shortDesc: "Tooth-colored restorations completely invisible to the eye.",
    price: "₹800 – ₹1,500",
    overview: "Cosmetic fillings, also known as composite or tooth-colored fillings, are used to repair teeth affected by decay, cracks, or minor fractures. Unlike traditional silver amalgams, these fillings blend seamlessly with your natural tooth enamel.",
    whoNeedsIt: "Anyone with cavities, chipped front teeth, or older metal fillings they wish to replace for aesthetic reasons.",
    howItWorks: "The decayed portion of the tooth is removed, and a high-quality composite resin is applied in layers. A special curing light is used to harden the resin, which is then polished to perfectly match the natural tooth.",
    benefits: [
      { title: "Highly Aesthetic", description: "Color-matched to your natural teeth, making the restoration virtually invisible." },
      { title: "Preserves Tooth Structure", description: "Requires less removal of healthy tooth structure compared to silver fillings." },
      { title: "Strong Bond", description: "The resin chemically bonds to the tooth, providing excellent support." },
      { title: "Safe & Mercury-Free", description: "A completely safe, modern alternative to amalgam." }
    ],
    procedureSteps: [
      { title: "Preparation", description: "Numbing the area and gently removing the decayed tooth material." },
      { title: "Application", description: "Applying the composite resin in precise layers to rebuild the tooth." },
      { title: "Curing", description: "Using a specialized UV light to instantly harden the resin." },
      { title: "Shaping & Polishing", description: "Sculpting the filling to match your bite and polishing it for a natural shine." }
    ],
    faqs: [
      { question: "How long do cosmetic fillings last?", answer: "With good oral hygiene, composite fillings typically last 5 to 10 years or more." },
      { question: "Are they as strong as silver fillings?", answer: "Modern composite materials are highly durable and withstand normal chewing pressure effectively." },
      { question: "Does the procedure take long?", answer: "No, a typical cosmetic filling takes only about 20 to 30 minutes per tooth." }
    ]
  },
  {
    id: "gum-depigmentation",
    name: "Gum Depigmentation",
    shortDesc: "Laser treatment for an even, healthy pink gumline.",
    price: "₹7,000 onwards",
    overview: "Gum depigmentation, or gum bleaching, is a cosmetic procedure that removes dark spots or overall dark discoloration of the gums caused by excess melanin. We use advanced lasers to gently restore a healthy, uniform pink color to your gumline.",
    whoNeedsIt: "Individuals who feel self-conscious about dark, brownish, or black patches on their gums and desire a brighter, more even-toned smile.",
    howItWorks: "A precise dental laser is used to gently ablate (vaporize) the thin top layer of the gum tissue where the melanin pigment resides. As the tissue heals, new, pinker tissue emerges.",
    benefits: [
      { title: "Improves Aesthetics", description: "Creates a vibrant, uniform pink gumline that enhances your smile." },
      { title: "Minimally Invasive", description: "Laser technology eliminates the need for scalpel surgery." },
      { title: "Painless", description: "Highly comfortable procedure with minimal to no bleeding." },
      { title: "Fast Healing", description: "Rapid recovery time compared to traditional surgical methods." }
    ],
    procedureSteps: [
      { title: "Assessment", description: "Evaluating the health of your gums and the depth of pigmentation." },
      { title: "Local Anesthesia", description: "Applying a mild anesthetic spray or gel for comfort." },
      { title: "Laser Application", description: "Using a specialized dental laser to gently sweep away the pigmented layer." },
      { title: "Post-Treatment Care", description: "Healing is usually complete within a few days with minimal discomfort." }
    ],
    faqs: [
      { question: "Will the dark spots return?", answer: "Results are often long-lasting, though some slight re-pigmentation can occur over several years depending on genetics and habits." },
      { question: "Does the laser hurt?", answer: "No, the procedure is very comfortable, and most patients require only topical numbing gel." },
      { question: "Can anyone get this done?", answer: "Yes, as long as your gums are healthy and free of periodontal disease." }
    ]
  },
  {
    id: "tooth-whitening",
    name: "Tooth Whitening",
    shortDesc: "Professional grade brightening up to 8 shades lighter.",
    price: "₹2,000 per tooth",
    overview: "Professional tooth whitening is a fast, highly effective cosmetic treatment to eliminate stains and discoloration. Under expert supervision, our clinical-grade whitening agents provide dramatic results, brightening your smile by up to 8 shades in a single visit.",
    whoNeedsIt: "Perfect for patients with teeth stained by coffee, tea, wine, tobacco, or natural aging, looking for an instant confidence boost.",
    howItWorks: "A strong, professional-grade bleaching gel is applied to the teeth. A specialized light is often used to activate the gel, rapidly breaking down complex stains deep within the enamel.",
    benefits: [
      { title: "Instant Results", description: "Achieve a noticeably whiter smile in just one 60-minute session." },
      { title: "Safe & Supervised", description: "Performed by professionals to protect your gums and minimize sensitivity." },
      { title: "Removes Tough Stains", description: "Effectively targets deep-set stains that over-the-counter products cannot reach." },
      { title: "Boosts Confidence", description: "A brighter smile instantly rejuvenates your overall appearance." }
    ],
    procedureSteps: [
      { title: "Preparation", description: "Teeth are cleaned, and gums are protected with a barrier gel." },
      { title: "Gel Application", description: "The professional whitening agent is carefully applied to the teeth." },
      { title: "Activation", description: "A special light activates the gel for 15-20 minute intervals." },
      { title: "Review", description: "The gel is removed, and the new, brighter shade is assessed." }
    ],
    faqs: [
      { question: "Will it make my teeth sensitive?", answer: "Some temporary sensitivity is normal for 1-2 days, but we use desensitizing agents to minimize discomfort." },
      { question: "How long do the results last?", answer: "Results can last from 1 to 3 years depending on your dietary habits (like coffee and wine consumption)." },
      { question: "Is it better than home whitening kits?", answer: "Yes, clinical whitening uses stronger, safer agents providing faster and more significant results." }
    ]
  },
  {
    id: "laser-treatment",
    name: "Laser Treatment",
    shortDesc: "Minimally invasive, precise soft tissue therapy.",
    price: "₹3,000 – ₹10,000",
    overview: "Laser dentistry is an innovative, minimally invasive approach to treating soft tissue issues. Dental lasers use focused light energy to perform procedures with extreme precision, reducing bleeding, eliminating the need for sutures, and drastically accelerating recovery.",
    whoNeedsIt: "Patients requiring gum contouring, treatment for mouth ulcers, frenectomies, or soft tissue biopsies who prefer a faster, more comfortable experience.",
    howItWorks: "The dental laser acts as a highly precise cutting instrument that simultaneously cauterizes nerve endings and blood vessels, making the procedure nearly bloodless and painless.",
    benefits: [
      { title: "Reduced Pain", description: "Often requires less anesthesia compared to traditional surgery." },
      { title: "Faster Healing", description: "Laser energy stimulates tissue regeneration and minimizes swelling." },
      { title: "No Stitches Needed", description: "Natural cauterization means sutures are rarely required." },
      { title: "High Precision", description: "Accurately targets diseased tissue while leaving healthy tissue untouched." }
    ],
    procedureSteps: [
      { title: "Targeted Assessment", description: "Identifying the specific soft tissue issue to be addressed." },
      { title: "Comfort Preparation", description: "Applying minimal local anesthesia or topical gel." },
      { title: "Laser Therapy", description: "Using the laser wand to precisely remove or contour tissue." },
      { title: "Immediate Recovery", description: "Patients experience immediate relief and fast healing." }
    ],
    faqs: [
      { question: "Is laser dentistry safe?", answer: "Yes, when performed by a trained professional, lasers are incredibly safe and sterile." },
      { question: "Do lasers emit radiation?", answer: "No, dental lasers emit concentrated light energy, not harmful radiation." },
      { question: "Is it noisy?", answer: "Lasers are very quiet, completely avoiding the intimidating sounds of traditional dental drills." }
    ]
  },
  {
    id: "dental-health-scanner",
    name: "Dental Health Scanner",
    shortDesc: "Comprehensive intraoral imaging for complete oral mappings.",
    price: "Free Consultation Scan",
    overview: "Our advanced 3D Dental Health Scanner revolutionizes the way we diagnose and plan treatments. This non-invasive intraoral camera captures thousands of high-definition images per second to create a perfect, highly detailed 3D model of your mouth.",
    whoNeedsIt: "Every patient benefits from this technology during their initial consultation, especially those requiring aligners, implants, or complex restorative work.",
    howItWorks: "A small, pen-like wand is gently moved over your teeth. The scanner instantly relays optical impressions to a screen, building a real-time, highly accurate 3D digital model of your teeth and gums.",
    benefits: [
      { title: "No Messy Molds", description: "Eliminates the uncomfortable, gag-inducing traditional putty impressions." },
      { title: "Highly Accurate", description: "Provides flawless digital models ensuring perfect fits for aligners and crowns." },
      { title: "Instant Visuals", description: "Allows you to see your oral health in 3D on a screen in real-time." },
      { title: "Treatment Simulation", description: "Software can simulate your 'before' and 'after' results instantly." }
    ],
    procedureSteps: [
      { title: "Preparation", description: "Ensuring the teeth are dry for an optimal scan." },
      { title: "Scanning", description: "The wand is guided smoothly along the upper and lower arches." },
      { title: "Digital Rendering", description: "The 3D model is instantly processed and displayed on the monitor." },
      { title: "Consultation", description: "The dentist reviews the interactive model with you to discuss any issues and treatments." }
    ],
    faqs: [
      { question: "Does the scanner use radiation?", answer: "No, it uses safe, visible optical light to capture images, so there is zero radiation exposure." },
      { question: "How long does the scan take?", answer: "A full mouth scan is incredibly fast and usually completed in under two minutes." },
      { question: "Is the process comfortable?", answer: "Yes, the scanning wand is small and entirely painless, making it very comfortable." }
    ]
  }
];
