const chatNavbar = document.querySelector(".chat");
const openBtn = document.getElementById("chat-open");
const chatBlock = document.querySelector(".chat__wrapper");
const app = document.querySelector(".app");
const close = document.querySelector(".navbar-close");
const users = document.querySelectorAll(".navbar__chat-item");

const deleteChatModal = document.querySelector(".modal__delete-chat");
const modalDelete = document.querySelector(".modal__delete-chat .modal__menu");

const reportChatModal = document.querySelector(".modal__report-chat");
const modalReport = document.querySelector(".modal__report-chat .modal__menu");

const cancelTaskChatModal = document.querySelector(".modal__cancel-task");
const modalCancelTask = document.querySelector(
  ".modal__cancel-task .modal__menu"
);

// order
const cancelOrderModal = document.querySelector(".modal__chat-accept");
const modalOrderTask = document.querySelector(
  ".modal__chat-accept .modal__accept-wrapper"
);

let activeUser = null;

// modals
// delete
function initializeDeleteChatButton() {
  const deleteChat = document.querySelector(".chat-delete");

  modalDelete.addEventListener("click", (e) => e.stopPropagation());

  deleteChatModal.addEventListener("click", () => {
    deleteChatModal.classList.remove("active");
  });

  if (deleteChat) {
    deleteChat.addEventListener("click", () => {
      deleteChatModal.classList.add("active");
    });
  }
}

// report
function initializeReportChatButton() {
  const reportChat = document.querySelector(".chat-report");

  modalReport.addEventListener("click", (e) => e.stopPropagation());

  reportChatModal.addEventListener("click", () => {
    reportChatModal.classList.remove("active");
  });

  if (reportChat) {
    reportChat.addEventListener("click", () => {
      reportChatModal.classList.add("active");
    });
  }
}

// cancel task
// cancelTaskChatModal modalCancelTask

function initializeCancelTaskButton() {
  const cancelTask = document.querySelector(".cancel-task");

  modalCancelTask.addEventListener("click", (e) => e.stopPropagation());

  cancelTaskChatModal.addEventListener("click", () => {
    cancelTaskChatModal.classList.remove("active");
  });

  if (cancelTask) {
    cancelTask.addEventListener("click", () => {
      cancelTaskChatModal.classList.add("active");
    });
  }
}

// open order
function initializeOrderButton() {
  const orderAccept = document.querySelector(".button__order-accept");

  modalOrderTask.addEventListener("click", (e) => e.stopPropagation());

  if (!orderAccept) {
    return;
  }

  cancelOrderModal.addEventListener("click", () => {
    console.log("Closing modal");
    cancelOrderModal.classList.remove("open");
  });

  orderAccept.addEventListener("click", () => {
    cancelOrderModal.classList.add("open");
  });
}

// chat

openBtn.addEventListener("click", openChat);
app.addEventListener("click", closeChat);
close.addEventListener("click", closeChat);

chatNavbar.addEventListener("click", (e) => e.stopPropagation());

users.forEach((item) => {
  item.addEventListener("click", () => {
    if (activeUser) {
      activeUser.classList.remove("active");
    }

    item.classList.add("active");

    activeUser = item;

    app.classList.add("chat-open");
    chatNavbar.classList.add("open");
    chatBlock.classList.add("open");

    openUserChat(item);

    // модалки
    initializeDeleteChatButton();
    initializeReportChatButton();
    initializeCancelTaskButton();
    initializeOrderButton();
  });
});

function closeChat() {
  app.classList.remove("chat-open");
  chatNavbar.classList.remove("open");
  chatBlock.classList.remove("open");

  removeClassUser();
  activeUser = null;
}

function openChat() {
  app.classList.add("chat-open");
  chatNavbar.classList.add("open");
}

function removeClassUser() {
  users.forEach((user) => {
    user.classList.remove("active");
  });
}

function openUserChat(item) {
  const chatWrapper = document.querySelector(".chat__wrapper");

  const userName = item.querySelector(".chat-name").innerText;
  const userId = item.getAttribute("user-id");

  let chatContent;

  if (userId === "2") {
    chatContent = `
      <div class="chat__message chat__message-task">
        <div class="chat__message-task__inner">
          <div class="chat__message-head">
              <div class="message-data">
                <div class="message__task-img">
                  <svg width="23" height="14">
                    <use href="../../assets/icon/icons.svg#chat-eye"></use>
                  </svg>
                </div>
                <div class="message__user-data message__task-data">
                  <h3 class="message-username">У вас создан новый заказ</h3>

                  <a href="#" class="order-number">#56431</a>
                  <div class="task-timer">
                    <span>
                      <svg width="20" height="20">
                        <use href="../../assets/icon/icons.svg#attention"></use>
                      </svg>
                    </span>
                    03:46
                  </div>
                </div>
              </div>
              <div class="message-info">
                <div class="message__info-date">12:00</div>
                <div class="message-status">
                  <svg width="22" height="13">
                    <use href="../../assets/icon/icons.svg#read"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="task__message-content">
              <ul class="task__list">
                <li class="task__list-item">
                  <p class="task-name">Игра</p>
                  <div class="task-item task__item-game">
                    <div class="game-icon">
                      <img src="../../assets/images/game-2.png" alt="game" />
                    </div>
                    Дота 2
                  </div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Категория</p>
                  <div class="task-item task__item-category">Rent time</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Начало</p>
                  <div class="task-item task__item-start">17:30</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Длительность</p>
                  <div class="task-item task__item-duration">2 ч</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Часы</p>
                  <div class="task-item task__item-watch">2</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Количество людей</p>
                  <div class="task-item task__item-people">
                    <div class="people-block">
                      <div class="people-img">
                        <img
                          src="../../assets/images/subscribers-2.png"
                          alt="people"
                        />
                      </div>
                      <div class="people-img">
                        <img
                          src="../../assets/images/subscribers-3.png"
                          alt="people"
                        />
                      </div>
                    </div>
                    <span class="count-people">2</span>
                  </div>
                </li>
                <li class="task__list-item">
                  <p class="task-name task__name-total">Итого:</p>
                  <div class="task-item task__item-total">$240</div>
                </li>
              </ul>
            </div>
            <div class="task__message-button">
              <button class="ui-button task__button-black cancel-task">Отменить запрос</button>
              <button class="ui-button task__button-white">Принять</button>
            </div>
        </div>
      </div>
      `;
  } else if (userId === "3") {
    chatContent = `
      <div class="chat__message chat__message-task">
        <div class="chat__message-task__inner bg">
          <div class="chat__message-head">
              <div class="message-data">
                <div class="message__task-img">
                  <svg width="23" height="14">
                    <use href="../../assets/icon/icons.svg#chat-eye"></use>
                  </svg>
                </div>
                <div class="message__user-data message__task-data">
                  <h3 class="message-username">У вас создан новый заказ</h3>

                  <a href="#" class="order-number">#56431</a>
                </div>
              </div>
              <div class="message-info">
                <div class="message__info-date">12:00</div>
                <div class="message-status">
                  <svg width="22" height="13">
                    <use href="../../assets/icon/icons.svg#read"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="task__message-content">
              <ul class="task__list">
                <li class="task__list-item">
                  <p class="task-name">Игра</p>
                  <div class="task-item task__item-game">
                    <div class="game-icon">
                      <img src="../../assets/images/game-2.png" alt="game" />
                    </div>
                    Дота 2
                  </div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Категория</p>
                  <div class="task-item task__item-category">Rent time</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Начало</p>
                  <div class="task-item task__item-start">17:30</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Длительность</p>
                  <div class="task-item task__item-duration">2 ч</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Часы</p>
                  <div class="task-item task__item-watch">2</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Количество людей</p>
                  <div class="task-item task__item-people">
                    <div class="people-block">
                      <div class="people-img">
                        <img
                          src="../../assets/images/subscribers-2.png"
                          alt="people"
                        />
                      </div>
                      <div class="people-img">
                        <img
                          src="../../assets/images/subscribers-3.png"
                          alt="people"
                        />
                      </div>
                    </div>
                    <span class="count-people">2</span>
                  </div>
                </li>
                <li class="task__list-item">
                  <p class="task-name task__name-total">Итого:</p>
                  <div class="task-item task__item-total">$240</div>
                </li>
              </ul>
            </div>
            <div class="task__message-button">
              <button class="ui-button button-black cancel-task">Отменить запрос</button>
              <button class="ui-button button-white button__order-accept">Принять</button>
            </div>
        </div>
      </div>
    `;
  } else if (userId === "4") {
    chatContent = `
      <div class="chat__message">
        <div class="task__cancelled">
          <div class="task__cancelled-inner">
            <div class="cancelled-block">
              <div class="cancelled-icon">
                <svg width="60" height="60">
                  <use
                    href="../../../assets/icon/icons.svg#cancelled"
                  ></use>
                </svg>
              </div>
              <p class="cancelled-message">К сожалению заказ был отменен</p>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (userId === "5") {
    chatContent = `
            <div class="chat__message chat__message-task">
        <div class="chat__message-task__inner bg">
          <div class="chat__message-head">
              <div class="message-data">
                <div class="message__task-img">
                  <svg width="23" height="14">
                    <use href="../../assets/icon/icons.svg#chat-eye"></use>
                  </svg>
                </div>
                <div class="message__user-data message__task-data">
                  <h3 class="message-username">У вас создан новый заказ</h3>

                  <a href="#" class="order-number">#56431</a>
                </div>
              </div>
              <div class="message-info">
                <div class="message__info-date">12:00</div>
                <div class="message-status">
                  <svg width="22" height="13">
                    <use href="../../assets/icon/icons.svg#read"></use>
                  </svg>
                </div>
              </div>
            </div>
            <div class="task__message-content">
              <ul class="task__list">
                <li class="task__list-item">
                  <p class="task-name">Игра</p>
                  <div class="task-item task__item-game">
                    <div class="game-icon">
                      <img src="../../assets/images/game-2.png" alt="game" />
                    </div>
                    Дота 2
                  </div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Категория</p>
                  <div class="task-item task__item-category">Rent time</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Начало</p>
                  <div class="task-item task__item-start">17:30</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Длительность</p>
                  <div class="task-item task__item-duration">2 ч</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Часы</p>
                  <div class="task-item task__item-watch">2</div>
                </li>
                <li class="task__list-item">
                  <p class="task-name">Количество людей</p>
                  <div class="task-item task__item-people">
                    <div class="people-block">
                      <div class="people-img">
                        <img
                          src="../../assets/images/subscribers-2.png"
                          alt="people"
                        />
                      </div>
                      <div class="people-img">
                        <img
                          src="../../assets/images/subscribers-3.png"
                          alt="people"
                        />
                      </div>
                    </div>
                    <span class="count-people">2</span>
                  </div>
                </li>
                <li class="task__list-item">
                  <p class="task-name task__name-total">Итого:</p>
                  <div class="task-item task__item-total">$240</div>
                </li>
              </ul>
            </div>
            <div class="task__message-button">
              <button class="ui-button task__button-black task__button-cancel cancel-task">Отменить запрос</button>
            </div>
        </div>
      </div>

      <!-- User Message -->
      <div class="chat__message">
                  <div class="chat__message-head">
                    <div class="message-data">
                      <div class="message__user-img">
                        <img
                          src="../../assets/images/subscribers-7.png"
                          alt="user"
                        />
                      </div>
                      <div class="message__user-data">
                        <h3 class="message-username">${userName}</h3>
                          <div class="message__text">
                            <p class="message-text">Давай перенесем</p>
                          </div>
                        </div>
                      </div>
                      <div class="message-info">
                        <div class="message__info-date">12:00</div>
                        <div class="message-status">
                          <svg width="22" height="13">
                            <use
                              href="../../assets/icon/icons.svg#read"
                            ></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
    `;
  } else {
    chatContent = `
          <div class="chat__messages">
            <div class="chat__messages-wrapper">
              <!-- messages -->
              <div class="chat__messages-message">
                <!-- message 1 -->
                <div class="chat__message">
                  <div class="chat__message-head">
                    <div class="message-data">
                      <div class="message__user-img">
                        <img
                          src="../../assets/images/subscribers-1.png"
                          alt="user"
                        />
                      </div>
                      <div class="message__user-data">
                        <h3 class="message-username">Author</h3>
                          <div class="message__text">
                            <p class="message-text">Hello, Eva</p>
                          </div>
                        </div>
                      </div>
                      <div class="message-info">
                        <div class="message__info-date">12:00</div>
                        <div class="message-status">
                          <svg width="22" height="13">
                            <use
                              href="../../assets/icon/icons.svg#read"
                            ></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                <!-- message 2 -->
                    <div class="chat__message">
                      <div class="chat__message-head">
                        <div class="message-data">
                          <div class="message__user-img">
                            <img
                              src="../../assets/images/subscribers-1.png"
                              alt="user"
                            />
                          </div>
                          <div class="message__user-data">
                            <h3 class="message-username">Author</h3>
                            <div class="message__text">
                              <p class="message-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="message-info">
                          <div class="message__info-date">12:00</div>
                          <div class="message-status">
                            <svg width="22" height="13">
                              <use
                                href="../../assets/icon/icons.svg#received"
                              ></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- message 3 -->
                    <div class="chat__message">
                      <div class="chat__message-head">
                        <div class="message-data">
                          <div class="message__user-img">
                            <img
                              src="../../assets/images/subscribers-1.png"
                              alt="user"
                            />
                          </div>
                          <div class="message__user-data">
                            <h3 class="message-username">Author</h3>

                            <div class="message__text">
                              <p class="message-text message__text-bold">
                                What are you doing?
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="message-info">
                          <div class="message__info-date">12:00</div>
                          <div class="message-status">
                            <svg width="22" height="13">
                              <use
                                href="../../assets/icon/icons.svg#read"
                              ></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- message 4 -->
                    <div class="chat__message">
                      <div class="chat__message-head">
                        <div class="message-data">
                          <div class="message__user-img">
                            <img
                              src="../../assets/images/subscribers-1.png"
                              alt="user"
                            />
                          </div>
                          <div class="message__user-data">
                            <h3 class="message-username">Author</h3>
                            <div class="message__text">
                              <p class="message-text">i'm cooking</p>
                            </div>
                          </div>
                        </div>
                        <div class="message-info">
                          <div class="message__info-date">12:00</div>
                          <div class="message-status">
                            <svg width="22" height="13">
                              <use
                                href="../../assets/icon/icons.svg#received"
                              ></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="chat__message-contents">
                        <img
                          class="chat__content-img"
                          src="../../assets/images/order-content.png"
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `;
  }

  chatWrapper.innerHTML = `
    <div class="chat__inner">
      <!-- head -->
        <div class="chat__head">
          <div class="chat__head-inner">
            <div class="chat__user-info">
              <div class="chat__user-img">
                <img
                  src="${item.querySelector("img").src}"
                  alt="user"
                />
              </div>
              <div class="chat__user-info__name">
                <h4>${userName}</h4>
                <p>Был/а в сети 2 минуты назад</p>
              </div>
            </div>
            <div class="chat__head-buttons">
              <button class="chat-button friend">
                <svg width="24" height="24">
                  <use href="../../assets/icon/icons.svg#friend"></use>
                </svg>
              </button>
              <button class="chat-button complaint chat-report">
                <svg width="24" height="24">
                  <use href="../../assets/icon/icons.svg#complaint"></use>
                </svg>
              </button>
              <button class="chat-button chat-delete">
                Удалить чат
                <span>
                  <svg width="24" height="24">
                    <use
                      href="../../assets/icon/icons.svg#chat-delete"
                    ></use>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

      <!-- chat content -->
      <div class="chat__content">${chatContent}</div>

      <!-- send message -->
      <div class="chat__send-message chat-send">
        <div class="send__message-inner">
          ${
            userId === "4"
              ? `
              <div class="send__message-blocked">
                <p class="message-blocked">Вы не можете общаться пока Egirl не подтвердит сделку</p>
              </div>`
              : `<!-- buttons -->
          <div class="send__message-buttons">
            <!-- загрузить документ/кртинку -->
            <button class="message-button upload-button">
              <svg width="24" height="24">
                <use href="../../assets/icon/icons.svg#upload"></use>
              </svg>
            </button>
            <!-- выбор смайликов -->
            <button class="message-button icon-button">
              <svg width="24" height="24">
                <use href="../../assets/icon/icons.svg#chat-icon"></use>
              </svg>
            </button>
          </div>

          <!-- write message -->
          <div class="write-message">
            <input
              class="write-message__input"
              type="text"
              name="message"
              placeholder="Напишите сообщение..."
            />
          </div>

          <!-- buttons -->
          <div class="send__message-buttons">
            <!-- записать голосовое -->
            <button class="message-button voice-button">
              <svg width="24" height="24">
                <use
                  href="../../assets/icon/icons.svg#voice-message"
                ></use>
              </svg>
            </button>
            <!-- отправить сообщение -->
            <button class="message-button send-button">
              <svg width="24" height="24">
                <use
                  href="../../assets/icon/icons.svg#send-message"
                ></use>
              </svg>
            </button>
          </div>
        </div>`
          }
        </div>
      </div>
    </div>
  `;
}
