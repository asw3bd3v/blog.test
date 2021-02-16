const initialState = {
    posts: [{
        category: {
            id: 2,
            title: "Наука",
            slug: "nauka",
            created_at: "2020-10-08 13:58:29",
            updated_at: "2020-10-08 13:58:29"
        },
        category_id: 2,
        content: "<p>Полное описание</p>",
        created_at: "2020-09-29 07:05:00",
        date: "02/09/20",
        description: "<p>Описание</p>",
        id: 1,
        image: "d3Ijo3QRF6.jpeg",
        is_featured: 0,
        slug: "testovaya-statya",
        src_image: "/uploads/d3Ijo3QRF6.jpeg",
        status: 0,
        tags: [{
            created_at: "2020-09-29 07:07:09",
            id: 1,
            pivot: {post_id: 1, tag_id: 1},
            slug: "teg-1",
            title: "Тег 1",
            updated_at: "2020-09-29 07:07:09",
        }],
        title: "Тестовая статья",
        updated_at: "2020-10-13 13:31:45",
        user_id: 1,
        views: 0,
    }]

}
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            console.log(action.payload)
            return {
                ...state,
                posts: action.payload,

                // ВОЗМОЖНО НУЖНО СКОПИРОВАТЬ ОБЪЕКТЫ БОЛЕЕ ГЛУБОКОГО УРОНЯ ВЛОЖЕННОСТИ
            }
        default:
            return {
                ...state
            }
    }
}
