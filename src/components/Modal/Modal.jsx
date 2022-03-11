import React, { useState } from "react";
import "../Modal/Modal.css";

const Modal = ({ modalState, setModalState, users, setUsers }) => {
  const [inputNameValue, setInputNameValue] = useState();
  const [inputSurnameValue, setInputSurnameValue] = useState();
  const [inputNumberValue, setInputNumberValue] = useState();
  const [inputBirthDateValue, setInputBirthDateValue] = useState();
  const [inputRoleValue, SetInputRoleValue] = useState("modelchi");

  function handleSelect(e) {
    SetInputRoleValue(e.target.value);
  }

  function handleSaveButton() {
    setUsers((prev) => {
      return [
        ...prev,
        {
          name: inputNameValue.target.value,
          surname: inputSurnameValue.target.value,
          phoneNumber: inputNumberValue.target.value,
          birthDate: inputBirthDateValue.target.value,
          role: inputRoleValue.value,
        },
      ];
    });
    setInputNameValue((inputNameValue.target.value = null));
    setInputSurnameValue((inputSurnameValue.target.value = null));
    setInputNumberValue((inputNumberValue.target.value = null));
    setInputBirthDateValue((inputBirthDateValue.target.value = null));

    setModalState(false);
  }

  return (
    <>
      <div onClick={(e) => setModalState(false)} className="overlay"></div>
      <div className={`modal `}>
        <h2 className="modal__title">Ma'lumotlarni o'zgartirish</h2>

        {/* Form */}
        <form className="form">
          {/* Left inputs of the form */}
          <div className="form__content-left">
            {/* User Name */}
            <label for="input-name" class="form__label-name">
              Ism
            </label>
            <input
              onChange={(e) => setInputNameValue(e)}
              type="text"
              class="form__input-name"
              name="input-name"
              id="input-name"
              placeholder="Ismingiz"
              required
            />
            {/* User Surname */}
            <label for="input-surname" class="form__label-surname">
              Familiya
            </label>
            <input
              onChange={(e) => setInputSurnameValue(e)}
              type="text"
              class="form__input-surname"
              name="input-surname"
              id="input-surname"
              placeholder="Familiyangiz"
              required
            />

            {/* User Phone Number */}
            <label for="input-number" class="form__label-number">
              Telefon raqam
            </label>
            <input
              onChange={(e) => setInputNumberValue(e)}
              type="number"
              class="form__input-number"
              name="input-number"
              id="input-number"
              placeholder="Telefon raqamingiz"
              required
            />
          </div>
          {/* Right inputs of the form */}
          <div className="form__content-right">
            {/* User Birth Date */}
            <label for="input-birth-date" class="birth-date">
              Tug'ulgan sana
            </label>
            <input
              onChange={(e) => setInputBirthDateValue(e)}
              type="text"
              class="birth-date"
              id="birth-date"
              placeholder="Tug'ulgan sana"
              required
            />

            {/* User Choice */}
            <label>Rollar</label>
            <select
              defaultValue={"modelchi"}
              onChange={handleSelect}
              className="form__select"
              required
            >
              <option value="modelchi">modelchi</option>
              <option value="artist">artist</option>
            </select>
          </div>
        </form>
        {/* Button group */}
        <div className="modal__btn-group">
          {/* Save Button */}
          <button
            onClick={(e) => handleSaveButton()}
            className="modal__save-btn"
          >
            O’zgarishlarni saqlash
          </button>

          {/* Cancel Button */}
          <button
            onClick={(e) => setModalState(false)}
            className="modal__cancel-btn"
          >
            Bekor qilish
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
