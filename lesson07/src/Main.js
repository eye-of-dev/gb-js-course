window.addEventListener('load', () => {
    const questions = Questions;
    const board = new Board();
    const test = new Test();

    test.init(questions);

    board.init(questions, test);

    board.clearBoard();
    board.renderBoard();
    board.renderButtonRetult();
});