# Web Development Project 2 - *Flashcards*

Submitted by: **Han Le**

This web app: **Flashcards to learn more about Vietnamese food cuisine. You will be given a picture and identify the name of the dish. There will be 3 difficulty levels for you to learn Vietnamese dishes "pho real" now!**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
- [x] *visual style implemented*

The following **additional** features are implemented:

* [x] A 'back' button to go back to the previous card
* [x] A 'restart' button to reshuffle the card when the list is finished

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/han-hangoc-le/web102-project2-flashcards/blob/main/public/FlashcardPt1.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

Describe any challenges encountered while building the app.
- The hardest part is to figure out and apply the reference flipping card effect to my own cards
- I have learnt what are the key codes to create the flipping effect, creating the next button to traverse through an array (of cards) and to change the CSS based on a certain property of the element (in this case, the card difficulty)
- I also struggled a bit with implementing the restart function to the cards
- The challenging part of this project is to understand the use of useState and useEffect to implement the desired functionalities

## License

    Copyright [2025] [Han Le]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Web Development Project 3 - *Flashcards*

Submitted by: **Han Le**

This web app: **Flashcards to learn more about Vietnamese food cuisine. You will be given a picture and identify the name of the dish. There will be 3 difficulty levels for you to learn Vietnamese dishes "pho real" now!**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/han-hangoc-le/web102-project2-flashcards/blob/main/public/FlashcardPt2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

Describe any challenges encountered while building the app.
- This second part is easier compared to the first part, since I'm now more familiar with useState and useEffect.
- One new thing that I learned is how to format the input box to have a certain style based on the state of the answer.
- I also learned how to remove accents from Vietnamese words and use string-similiarity to create a threshold for correct answers.

## License

    Copyright [2025] [Han Le]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.