# Rotation

Keeps track of what you wear and suggests outfits you haven't repeated too soon. It runs entirely on the phone.

- **Suggestions by occasion.** Pick an occasion, like Work or Casual, and get five outfit ideas: a top and a bottom, or a dress, with a cardigan or other layer when it fits.
- **Shoes and bags.** Add them to your closet and each idea comes with a pair of shoes and a bag that suit it. They rotate too, rested ones first. If every pair is still resting, the most rested one is picked, so an idea never comes without shoes. They never go to the laundry.
- **No repeats too soon.** Each piece rests for a set number of days after you wear it. The exact same top and bottom also rest as a pair, so an outfit doesn't come back even when both pieces are free again.
- **You decide what goes together.** In **Pairs**, go through your tops one by one and tick the bottoms that go with each, or cross out the ones that don't. Set a top to *only these* and it's never paired with anything else.
- **See outfits before you wear them.** Copy each piece from Photos and paste it in, without the background. Ideas show as a little flat lay, and **Pairs > Mix & match** lets you try any top, bottom, dress and layer together. Pieces without a photo show as a shape in their colour.
- **OOTD photos.** Add a photo when you log an outfit. When the same top and bottom (or dress) comes up as an idea again, the photo shows on it so you can see how it looked.
- **Laundry.** A top goes to the laundry after one wear and a bottom after three. Pieces in the laundry aren't suggested until you tap **Laundry done**.
- **Plan the week.** Plan days ahead in **Week**, or let it fill the empty days for you. Planned outfits count as worn, so a skirt you need on Sunday isn't used up earlier in the week.
- **Learns as you go.** Tap **Doesn't work** on an idea and tick the pieces that clash. They won't be paired again. Tap the heart on pairings you like and they come up a bit more often.
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

Check the types on the import screen before you confirm. You can fix anything later in **Closet**, and change each occasion's days in **More**. Pieces with no occasion ticked are only suggested under **Any** until you tag them.

Importing again later only adds new pieces and new wear dates. It never removes anything.

## Day to day

- **Today** picks the occasion set for that day of the week. Tap another one any time.
- Tap the swap arrows on a piece to try the next best option in that slot, shoes and bag included. Tap **Add** on a suggested layer to include it, or the × to leave the shoes or bag out.
- **Wear this** logs the outfit. Change the date first to plan tomorrow or to log a past day.
- **Log a different outfit** is for when you wore something else.
- In **Closet**, open any piece to edit it, mark it out of rotation, or add it to a day's outfit.
- **Pairs > Match tops** walks you through each top. Tick the bottoms that go with it, cross out the ones that don't, then **Save and next top**. Leave *Only pair it with the ticked bottoms* on to rule out everything else, or turn it off to just prefer the ticked ones. **Match bottoms** works the same way from the other side.
- **Add photo** on today's outfit, or in **Log an outfit**, saves an OOTD photo. Tap any photo to see it full screen.
- **Week** shows the next eight days. Set a day first (say Sunday), then tap **Plan empty days** and the rest are picked around it. Tap a day's occasion to change it or set it to *No plan*. The × clears a planned day.
- When you do the washing, tap **Laundry done** in Week or Closet and tick what went in. You can also mark a single piece as washed from its page in Closet.
- **More** has the rest days (shoes and bags have their own), the wears before washing, and your occasions with their days.

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
