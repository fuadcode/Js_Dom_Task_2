

document.addEventListener("DOMContentLoaded", function() {
    const list1 = document.getElementById("list1").getElementsByTagName("li");
    const list2 = document.getElementById("list2").getElementsByTagName("li");
    const HtmlList = document.getElementById("HtmlJsList");

    const List = [...list1, ...list2].reduce((ListOne, ListTwo) => {
        const text = ListTwo.textContent.trim();
        if (!ListOne.some(item => item.textContent.trim() === text)) {
            ListOne.push(ListTwo.cloneNode(true));
        }
        return ListOne;
    }, []);

    List.forEach(item => HtmlList.appendChild(item));
});
