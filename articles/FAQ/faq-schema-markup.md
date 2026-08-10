# FAQ Schema Markup for Eye Care Articles

## What is FAQ Schema Markup?

FAQ (Frequently Asked Questions) schema markup is structured data in JSON-LD format that helps search engines understand and display your FAQ content. When implemented correctly, Google may display your FAQs in search results as a special rich snippet, making your content more visible and accessible to users searching for answers.

## How to Add FAQ Schema Markup to Your Article Pages

1. Copy the JSON-LD code block for the article you're working on
2. Paste it into the `<head>` section of your HTML page (after closing the main `</head>` tag or within it)
3. Alternatively, paste it anywhere in the `<body>` of your page as a `<script type="application/ld+json">` element
4. Ensure the JSON is valid and properly escaped
5. Test your implementation using [Google's Rich Results Test](https://search.google.com/test/rich-results)

**Important:** Each FAQ schema block is specific to one article. Use the corresponding block for each of your 7 article pages.

---

## Article 1: Retinal Detachment - Symptoms, Surgery & Recovery

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is retinal detachment surgery painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retinal detachment surgery is performed under local or general anaesthesia, so you should not feel pain during the procedure. After surgery, you may experience mild discomfort, soreness, and sensitivity to light, which typically improves within a few days with prescribed eye drops and simple pain relief."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to recover from retinal detachment surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recovery time varies depending on the type of surgery. After scleral buckling, most patients return to light activities within one to two weeks. After vitrectomy with a gas bubble, full visual recovery typically takes three to six months, and you may need to maintain specific head positioning for one to two weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Can retinal detachment happen again after surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, recurrence is possible, though not common. The overall success rate for retinal reattachment is over 95% across all procedures. The most common reason for re-detachment is proliferative vitreoretinopathy (PVR), where scar tissue forms on the retinal surface. If re-detachment occurs, further surgery can usually be performed."
      }
    },
    {
      "@type": "Question",
      "name": "What is the success rate of retinal detachment surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The retina can be successfully reattached in over 95-97% of cases when all procedures are considered. For straightforward cases treated with scleral buckling, the primary success rate is about 88-89% with a single operation. If the initial surgery does not succeed, additional procedures almost always achieve reattachment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I fly after retinal detachment surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a gas bubble was used during your vitrectomy, you must not fly or travel to high altitudes until the gas has fully absorbed. This typically takes two to eight weeks depending on the type of gas used. Flying with a gas bubble in your eye can cause dangerous increases in eye pressure. Your surgeon will confirm when it is safe to fly."
      }
    },
    {
      "@type": "Question",
      "name": "Does retinal detachment cause permanent vision loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visual outcomes depend largely on whether the macula was detached at the time of surgery. If the macula was still attached (\"macula on\"), visual outcomes are generally excellent. If the macula was detached, some degree of permanent vision reduction is expected, though surgery can still preserve and improve peripheral vision and prevent complete blindness."
      }
    }
  ]
}
</script>
```

---

## Article 2: High Myopia - Why Glasses Aren't the End of the Story

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "At what degree of myopia should I be worried about complications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High myopia is generally defined as a prescription of -6.00 dioptres (600 degrees) or more. However, the risk of complications increases progressively with higher prescriptions and longer eye length. If your prescription is -5.00 or above, regular dilated eye examinations and OCT scans are recommended to catch any changes early."
      }
    },
    {
      "@type": "Question",
      "name": "Can LASIK cure the risks associated with high myopia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. LASIK and other refractive surgeries correct the focusing error, so you can see clearly without glasses. However, they do not change the physical elongation of the eye or its structural vulnerabilities. After LASIK, you still carry the same risk of retinal detachment, macular degeneration, and other complications associated with high myopia. Regular retinal screening remains essential."
      }
    },
    {
      "@type": "Question",
      "name": "How often should someone with high myopia have their eyes checked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At minimum, once a year with a dilated eye examination and OCT scan. If your eye doctor identifies any risk factors or early changes such as lattice degeneration, retinal thinning, or early macular changes, more frequent monitoring may be recommended. Between visits, watch for sudden floaters, flashes of light, or distortion in your vision."
      }
    },
    {
      "@type": "Question",
      "name": "Can myopia progression be stopped in children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Current treatments can slow but not completely stop myopia progression. Options include low-dose atropine eye drops, specialised spectacle lenses, orthokeratology (overnight contact lenses), and increased outdoor time. Starting myopia control early gives the best chance of limiting the final prescription and reducing the risk of future complications."
      }
    },
    {
      "@type": "Question",
      "name": "Is high myopia hereditary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, there is a strong genetic component. If one or both parents are highly myopic, the child has a significantly higher risk of developing myopia. However, environmental factors such as prolonged near work and limited outdoor time also play an important role, particularly during childhood."
      }
    }
  ]
}
</script>
```

---

## Article 3: Macular Hole - What It Is, Who Gets It & Face-Down Recovery

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do I need to stay face-down after macular hole surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most surgeons recommend face-down posturing for five to seven days after surgery, though this can vary. Your surgeon will give you specific instructions based on the size and characteristics of your macular hole. Brief breaks for bathroom use and meals are usually permitted."
      }
    },
    {
      "@type": "Question",
      "name": "What is the success rate of macular hole surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modern vitrectomy with ILM peeling achieves closure in over 90% of cases with a single surgery. For smaller holes treated early, the closure rate approaches 95-100%. If the hole does not close after the first surgery, a second operation can be considered."
      }
    },
    {
      "@type": "Question",
      "name": "Will my vision return to normal after macular hole surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most patients experience meaningful improvement in central vision, but the final result depends on the size of the hole and how long it was present before surgery. Smaller holes that are treated promptly have the best outcomes. Some patients may notice subtle residual distortion even after successful closure. Visual improvement is gradual and can continue for up to a year."
      }
    },
    {
      "@type": "Question",
      "name": "Can a macular hole heal on its own without surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stage 1 macular holes (where the hole has not yet fully formed) sometimes resolve spontaneously as the vitreous releases its traction on the macula. However, full-thickness macular holes (stages 2 to 4) very rarely close on their own and typically require surgery to prevent further vision loss."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a macular hole in my other eye?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The risk of developing a macular hole in the other eye is estimated at around 10-15%. Your doctor will monitor both eyes during follow-up visits. Knowing the warning signs (distortion or blurring of central vision) and checking your vision regularly with an Amsler grid can help detect any changes early."
      }
    }
  ]
}
</script>
```

---

## Article 4: Eye Floaters - When to Panic, When Not To

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are eye floaters dangerous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most floaters are harmless and are caused by normal age-related changes in the vitreous gel inside your eye. However, a sudden shower of new floaters, especially with flashes of light or a shadow in your vision, can indicate a retinal tear or detachment, which requires urgent evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "When should I see a doctor about floaters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "See an eye doctor urgently (ideally within 24 hours) if you experience a sudden increase in floaters, new flashes of light, a shadow or curtain spreading across your vision, or any sudden change in your visual field. For long-standing, stable floaters without other symptoms, mention them at your next routine eye check-up."
      }
    },
    {
      "@type": "Question",
      "name": "Can floaters go away on their own?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Floaters do not typically disappear completely, but many become much less noticeable over time. The brain adapts and learns to filter them out, and the floaters themselves often settle away from your central line of sight. Most people find that floaters bother them less after several weeks to months."
      }
    },
    {
      "@type": "Question",
      "name": "Can laser treatment remove floaters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "YAG laser vitreolysis can break up certain types of large, isolated floaters into smaller, less noticeable fragments. However, it is not effective for all floater types, particularly small, diffuse floaters. Vitrectomy (surgical removal of the vitreous gel) is more definitive but carries greater surgical risks and is reserved for severe cases."
      }
    },
    {
      "@type": "Question",
      "name": "Are floaters more common if you have high myopia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. People with high myopia tend to develop floaters earlier and more frequently because the vitreous gel in elongated myopic eyes undergoes degenerative changes at a younger age. If you are highly myopic and notice new floaters, it is especially important to have a prompt dilated eye examination, as myopic eyes are also at higher risk for retinal tears."
      }
    }
  ]
}
</script>
```

---

## Article 5: Dislocated Intraocular Lens - Causes, Symptoms & Surgery

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How common is IOL dislocation after cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IOL dislocation is uncommon, occurring in roughly 1-3% of patients who have had cataract surgery, typically years after the original procedure. The risk is higher in patients with pseudoexfoliation syndrome, high myopia, or a history of eye trauma."
      }
    },
    {
      "@type": "Question",
      "name": "How long after cataract surgery can the lens dislocate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delayed (late) dislocation is the most common type and can occur anywhere from five to twenty or more years after cataract surgery. It happens as the zonular fibres that hold the lens gradually weaken over time. Early dislocation (within weeks to months of surgery) is less common and usually related to zonular weakness present at the time of surgery."
      }
    },
    {
      "@type": "Question",
      "name": "Is dislocated IOL surgery an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, a dislocated IOL is not a medical emergency, but it should be addressed in a timely manner. If the lens has fallen completely into the vitreous cavity causing sudden vision loss, more urgent surgical intervention is advisable. Your eye doctor will assess the degree of dislocation and advise on the appropriate timing for surgery."
      }
    },
    {
      "@type": "Question",
      "name": "What is the success rate of dislocated IOL surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Surgery for dislocated IOL, including vitrectomy with scleral fixation or lens exchange, has a high success rate. Most patients achieve significant improvement in vision compared to their pre-operative state. The final visual outcome depends on the overall health of the eye, particularly the condition of the retina and optic nerve."
      }
    },
    {
      "@type": "Question",
      "name": "Can a dislocated IOL be prevented?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not always preventable, you can reduce the risk by informing your eye doctor if you have been diagnosed with pseudoexfoliation syndrome, wearing protective eyewear during sports and high-risk activities, and attending regular follow-up appointments after cataract surgery for early detection of any lens position changes."
      }
    }
  ]
}
</script>
```

---

## Article 6: Age-Related Macular Degeneration (AMD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between dry and wet AMD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dry AMD accounts for 80-90% of cases and involves gradual thinning and deterioration of the macula, with drusen deposits forming under the retina. It progresses slowly over years. Wet AMD is less common (10-20% of cases) but more aggressive, involving abnormal blood vessel growth under the retina that leaks fluid and blood, causing rapid vision loss. Wet AMD requires urgent treatment with anti-VEGF injections."
      }
    },
    {
      "@type": "Question",
      "name": "Can AMD be cured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is currently no cure for AMD. However, dry AMD can be slowed with AREDS2 supplements, lifestyle changes, and newer complement inhibitor treatments for geographic atrophy. Wet AMD can be effectively controlled with anti-VEGF injections, which can stabilise vision and in about a third of patients, improve it. Early detection and consistent treatment are key."
      }
    },
    {
      "@type": "Question",
      "name": "Will I go completely blind from AMD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AMD affects central vision but spares peripheral vision. Even in advanced cases, most patients retain enough side vision to move around and maintain a degree of independence. Complete blindness from AMD alone is very rare. However, the loss of detailed central vision can significantly impact activities like reading, driving, and recognising faces."
      }
    },
    {
      "@type": "Question",
      "name": "How can I test myself for AMD at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Amsler grid is a simple self-monitoring tool. It is a grid of straight lines with a dot in the centre. Cover one eye, look at the central dot, and check whether any of the lines appear wavy, distorted, or missing. If you notice any changes, see your eye doctor promptly. Your doctor can provide an Amsler grid and show you how to use it correctly."
      }
    },
    {
      "@type": "Question",
      "name": "Do AREDS2 supplements prevent AMD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AREDS2 supplements do not prevent AMD from developing in the first place. They are specifically beneficial for patients who already have intermediate dry AMD, reducing the risk of progression to advanced AMD by about 25%. The formulation includes vitamin C, vitamin E, lutein, zeaxanthin, zinc, and copper. Ask your eye doctor whether these supplements are appropriate for your specific stage of AMD."
      }
    },
    {
      "@type": "Question",
      "name": "How often do I need anti-VEGF injections for wet AMD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatment typically starts with three monthly injections, followed by ongoing injections tailored to your response. With newer agents like faricimab, some patients can be maintained on injections every 12 to 16 weeks. Many patients require treatment for years, though the frequency often decreases over time. Your doctor will monitor your retina with regular OCT scans to determine the best interval."
      }
    }
  ]
}
</script>
```

---

## Article 7: Intravitreal Injections - What to Expect

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does an intravitreal injection hurt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most patients experience mild discomfort rather than real pain. Anaesthetic drops effectively numb the eye, and the needle used is very fine (30-gauge). On a pain scale of 1 to 10, most patients rate the discomfort at 2 to 3. The most uncomfortable part is usually the antiseptic preparation, not the injection itself."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the injection procedure take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The entire process from preparation to completion takes about 10 to 15 minutes. The injection itself lasts only a few seconds. You can go home shortly afterward and resume normal activities the same day."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to drive after an intravitreal injection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your vision may be slightly blurry immediately after the procedure due to the antiseptic solution and the medication dispersing in the eye. Many patients find they can drive, but it is advisable to have someone accompany you for your first injection until you know how your vision is affected. Ask your doctor for specific guidance."
      }
    },
    {
      "@type": "Question",
      "name": "What are the signs of infection after an eye injection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Watch for increasing pain, worsening vision, and significant redness developing one to five days after the injection. These could indicate endophthalmitis, a rare but serious infection (approximately 1 in 2,000 to 1 in 5,000 per injection). If you experience these symptoms, contact your eye doctor immediately. Early treatment is critical."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to stop blood thinners before the injection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You do not need to stop aspirin, warfarin, or other blood thinners for intravitreal injections. The needle is very fine and the injection site is in the white of the eye, so the risk of significant bleeding is low. You may develop a small red spot (subconjunctival haemorrhage) at the injection site, which is harmless and resolves on its own."
      }
    },
    {
      "@type": "Question",
      "name": "Will I need injections forever?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on your condition. For wet AMD, many patients require ongoing treatment for years, though the frequency often decreases over time with newer medications. For diabetic macular oedema, some patients achieve remission and can stop treatment. For myopic choroidal neovascularisation, fewer injections are typically needed. Your doctor will regularly assess whether treatment can be reduced or stopped."
      }
    }
  ]
}
</script>
```

---

## Summary

You now have 7 complete FAQ schema markup blocks, one for each article. Each block contains:

- All the Q&A pairs from the article's "Frequently Asked Questions" section
- Properly formatted JSON-LD that follows schema.org standards
- Valid JSON with escaped special characters
- Clear labeling showing which block corresponds to which article

To use these:
1. Identify which article page you're working on
2. Find the corresponding block above
3. Copy the entire `<script>` block
4. Paste it into the `<head>` or `<body>` of your HTML page
5. Test with Google's Rich Results Test to verify proper implementation
