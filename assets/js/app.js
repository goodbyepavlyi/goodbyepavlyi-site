$(document).ready(async function() {
    let request = await fetch('https://discordid.eu/api?key=did_ZSkpmnZW5hG3ssB7RShCXR6ltqOYUApIEF9QdLZbjlSpQnAHBSFY8WvNpsY0&id=755473025209466950');
    if (request.status != 200) return;

    let response = await request.json();
    if (response.error) return;

    $('.card img').attr('src', `${response.avatar}?size=1024`);
});
