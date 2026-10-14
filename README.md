# Rotation

Keeps track of what you wear and puts your freshest top and bottom first, so nothing comes back too soon. It runs entirely on the phone.

- **Freshest first.** Pick an occasion, like Work or Casual. Today shows your tops and bottoms sorted by how long since you last wore them, with the freshest pair already picked. Tap any other piece to switch. A **Dress** switch does the same for dresses.
- **See it before you wear it.** The picked top and bottom show together as a little flat lay. Copy each piece from Photos and paste it in, without the background. Pieces without a photo show as a shape in their colour.
- **Your photo from last time.** Tap **Wear this** with the camera to log the outfit and add an OOTD photo in one go. Whenever you pick that top and bottom again, the photo shows next to the picture with the date.
- **Shoes, bag and layer if you like.** Tap **+ Shoes**, **+ Bag** or **+ Layer** to add one. Nothing is added for you. Tops marked as needing a layer show a reminder.
- **No repeats too soon.** Each piece rests for a set number of days after you wear it. Resting pieces stay in the rows, dimmed and after the rested ones.
- **What goes together.** Tap **Doesn't go** and that top and bottom are never picked together. **Goes together** marks the ones you like. From a piece's page in Closet you can also tick, top by top, which bottoms go with it.
- **Laundry.** At the end of the day, choose **Hang** or **Basket** for each piece you wore. It starts on Basket for a top, and for a bottom on its third wear. The **Laundry** tab shows what's in the basket and what's hanging, and pieces in the basket move to the end of the picker until you tap **Laundry done**. Shoes and bags never go to the laundry.
- **Plan the week.** In **Week**, tap a day to plan it with the same picker, or let it fill the empty days with the freshest pairs. Planned outfits count as worn, so a skirt you need on Sunday isn't used up earlier in the week.
- **Private.** Your closet, history and photos stay on the phone. No sign-up, no internet needed after the first open.

## Put it online (GitHub Pages, free)

1. Sign in at github.com.
2. Create a new repository named `rotation`, set to **Public**.
3. On the empty repo page, click **uploading an existing file**. Drag in everything inside this folder (the files and the `icons` folder, not the outer folder itself). Click **Commit changes**.
4. Go to **Settings > Pages**. Set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**. Save.
5. After a minute the site is live at `https://YOUR-USERNAME.github.io/rotation/`.

The repo holds only the app. Your clothes are never in it.

## Install on your iPhone

1. Open that address in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open it once from the new icon while online. After that it works offline.

Always open it from the home-screen icon. Its data is kept separately from Safari.

The first time you open it, a short welcome shows what Rotation does and ends with importing your closet. You can see it again any time in **More > Welcome tour**.

## Bring in your closet

The app opens with a small sample closet so you can try it. When you're ready, fill in the template and import it.

1. Download [`rotation-template.xlsx`](rotation-template.xlsx) (also in **More > Import a closet > Template**).
2. On the **Closet** sheet, replace the example rows with your own, one row per piece:

| Column | What goes in it |
| --- | --- |
| Name | What you call the piece. The only column you must fill in. |
| Type | Top, Bottom, Dress, Layer, Shoes or Bag. Blank means it's guessed from the name. |
| Colour | Pick from the list. Blank means it's guessed from the name. |
| One column per occasion | Put **x** where a piece fits. Rename, add or delete these columns. Days in brackets, like `Work (Mon-Fri)`, make an occasion the default on those days. |
| Last worn | Optional. The last date you wore it. |
| Needs a layer | Put **x** for pieces you always wear under a cardigan or outer. Leave it blank for shoes and bags. |

3. In Rotation, tap **Import closet** and pick the file. A CSV with the same headers works too.

Check the types on the import screen before you confirm. You can fix anything later in **Closet**, and change each occasion's days in **More**. Pieces with no occasion ticked only show under **Any** until you tag them.

Importing again later only adds new pieces and new wear dates. It never removes anything.

## Day to day

- **Today** picks the occasion set for that day of the week. Tap another one any time.
- The freshest top and bottom are already picked. Tap any other one in the rows to switch. If you pick a top, the bottom follows with the freshest one that goes with it, until you pick a bottom yourself.
- **Wear this** logs the outfit. The second **Wear this**, with the camera, logs it and then asks for a photo. Change the date first to plan tomorrow or to log a past day.
- From 5pm, Today asks **Hang or basket?** for what you wore. Pick for each piece and tap **Save**. Skipped days stay in the **Laundry** tab for three days, and the wear limits in More are used if you never choose.
- **Log something else** is for anything the picker doesn't cover, like two layers.
- In **Closet**, open any piece to edit it, mark it out of rotation, or add it to a day's outfit. **Match bottoms** on a top's page lets you tick the bottoms that go with it. Leave *Only pair it with the ticked bottoms* on to rule out everything else.
- **Add photo** on today's outfit, or in **Log an outfit**, saves an OOTD photo. Tap any photo to see it full screen.
- **Week** shows the next eight days. Tap **Pick an outfit** on a day to plan it with the picker, or tap a planned day to change it. Set a day first (say Sunday), then tap **Plan empty days** and the rest are picked around it. Tap a day's occasion to change it or set it to *No plan*. The × clears a planned day.
- In **Laundry**, move a piece between the basket and hanging any time. When you do the washing, tap **Laundry done** and tick what went in. Everything in the basket is ticked already.
- **More** has the rest days, the wears before washing, and your occasions with their days.

## Photos of your clothes

The easiest way is to let the iPhone's Photos app cut the clothing out, then paste it into Rotation.

1. Take a photo of the piece, ideally laid flat on a plain bed or floor in good light.
2. Open the photo in **Photos**. Touch and hold the clothing until a glowing outline appears, then let go and tap **Copy**.
3. In Rotation, open the piece in **Closet** and tap **Paste from Photos**. If a small **Paste** bubble pops up, tap it. The photo is saved straight away.

To do many pieces in one go, tap **Add photos** in Closet. It goes through every piece without a photo, one after another: copy in Photos, paste, and it moves on to the next. Tap **Skip** for any you don't have a photo of yet.

**Take or choose a photo** is the other way in. Rotation then removes the background itself, on the phone, and lets you tidy the edges with **Erase** and **Restore**. It uses the U²-Net model (Apache License 2.0, see `lib/LICENSE-U2Net.txt`) on the phone's GPU. No photo leaves the phone either way.

## Back up

**More > Back up > Save file** saves everything, outfit and clothing photos included, as one file you can keep in Files or iCloud Drive. **Copy** puts everything except photos on the clipboard as text. **Restore a backup** brings it back on a new phone.

Photos are shrunk to about 200 KB each and stay on the phone.

**Export closet as CSV** gives you a sheet in the same columns as the template, with last-worn dates and how often each piece was worn.
