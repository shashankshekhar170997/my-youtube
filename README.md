- Started with npx create-react-app my-youtube
- Head
- Body

  - sidebar
    -- MenuItems
  - MainContainer
    --ButtonList
    -- VideoContainer
    ----videoCard

- Setup Redux store
- Setup React-router-dom
- implemented HOC
- impleemented search functionality

-- Debouncing -

- Suppose I press s in search box

  - component render
  - useEffect();
  - start timer => make an api call after 200ms

- Let suppose i press another key before 200ms
- component will destroy (return method) unmount will happen
- re-render the component
- useEffect();
- start timer => make api call after 200ms.

- In setTimeout i have provided the timer of 2000ms So, when i presss any keys with time gap then on every key press there will be api call.
  But when i click keys fast in that the the final api will call with the final result and all the keys api that came in b/w will be decline.
  NOTE - These all are comes in Debouncing.

-- Implemented cache(created slice(redux)) which will help in less api call. Suppose I searched iphone in youtube search section So this search will will store in redux. And next time when i will search iphone it will read the value from redux and not make an api call.

-- Comment section.
