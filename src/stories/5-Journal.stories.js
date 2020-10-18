export default {
  title: 'Journal',
}

export const JournalForm = () => ` <section class="max-w-375">
<form action="submit" class="journal">
  <h2>Today, 19.10.20</h2>
  <span>Rating:</span>
  <div class="journal__stars">
    <input type="radio" name="rating" id="star5" />
    <label class="journal__star" for="star5"
      ><img src="./assets/Star@2x.svg" alt=""
    /></label>
    <input type="radio" name="rating" id="star4" />
    <label class="journal__star" for="star4"
      ><img src="./assets/Star@2x.svg" alt=""
    /></label>
    <input type="radio" name="rating" id="star3" />
    <label class="journal__star" for="star3"
      ><img src="./assets/Star@2x.svg" alt=""
    /></label>
    <input type="radio" name="rating" id="star2" />
    <label class="journal__star" for="star2"
      ><img src="./assets/Star@2x.svg" alt=""
    /></label>
    <input type="radio" name="rating" id="star1" />
    <label class="journal__star" for="star1"
      ><img src="./assets/Star@2x.svg" alt=""
    /></label>
  </div>
  <span> Comprehension: </span>
  <div class="journal__rectangles">
    <input type="radio" name="comprehension" id="sq-10" />
    <label for="sq-10" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-9" />
    <label for="sq-9" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-8" />
    <label for="sq-8" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-7" />
    <label for="sq-7" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-6" />
    <label for="sq-6" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-5" />
    <label for="sq-5" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-4" />
    <label for="sq-4" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-3" />
    <label for="sq-3" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-2" />
    <label for="sq-2" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
    <input type="radio" name="comprehension" id="sq-1" />
    <label for="sq-1" class="journal__rectangle"
      ><img src="assets/Rectangle@2x.svg" alt="square"
    /></label>
  </div>
  <label for="motto" class="journal__label journal__label--motto"
    >Motto:
    <input type="text" id="motto" name="motto" />
  </label>

  <label for="notes" class="journal__label journal__label--notes">
    Notes:
    <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
  </label>
  <button
    class="journal__button journal__button--white"
    data-js="cancel-button"
  >
    Cancel
  </button>
  <button
    class="journal__button journal__button--orange"
    data-js="save-button"
  >
    Save ✓
  </button>
</form>
</section>`
