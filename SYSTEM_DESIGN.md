## General Requirements

- user can view list of characters
- user can search characters
- user can filter characters
- user can view detailed character information
- user can edit character information

## Functional Requirements

- SPA web application
- Edit character locally
- Using ui-kit

## Component Architeture

![Component Architecture Diagram](./resources/Component%20Architecture.jpg)

## Component Hierarchy

![Component Hierarchy Diagram](./resources/Component%20Hierarchy.jpg)

## Data

### Data Entities

```ts
type Character = {
  id: number
  height: number
  mass: number
  hairColor: string
  skinColor: string
  eyeColor: string
  birthYear: string
  gender: string
  homeworld: string
  films: FilmId[]
  species: SpeciesId[]
  vehicles: VehicleId[]
  starships: StartshipId[]
}

type Film = {
  id: string
  title: string
}

type Species = {
  id: string
  name: string
}

type Vehicle = {
  id: string
  name: string
}

type Starship = {
  id: string
  name: string
}
```

### Api Methods

```
getCharacters(page, pageSize, search, filters)
getCharacter(characterId)
updateCharacter(characterId, data)
```

### State Design

#### Pages State

```ts
{
  characterListPage: {
    state: 'loading' | 'data' | 'error';
    filter: { [characterField]: any  };
    list: Character[],
    totalCharacters: number;
  };

  characterPage: {
    state: "loading" | "error" | "data" | "edit" | "update"
    character: Character
  };
}
```

#### Route State

```ts
{
  pagination: {
    page: number;
    perPage: number;
  }

  filters: { [filterName]: string }

  search: string;
}
```

### Storage Service

![Storage Service Diagram](./resources/Storage%20Service.jpg)

###

```
character_store: { [characterId]: Character }
film_store: { [filmId]: Film }
species_store: { [speciesId]: Species }
vehicle_store: { [vehicleId]: Vehicle }
starship_store: { [starshipId]: Starship }
```

## SWApi Analysis

API is poorly designed for pagination and filtering.

### Pagination

It doesn't allow to specify pagination parameters like page_size and offset in query string. It provides us only prev/next link in response. So using only API we can't implement the pagination with user defined parameters.

### Filtering

API provides the parameter only for searching by a name and no parameters for filtering by other fields.

To solve these two problems we can fetch all resources and store the data in the browser. It will allow us to make the pagination and filters as we want. It isn't a good solution in general because in real project there can be a lot of data and it can change constantly. But with this API the data is quite small, so it's a suitable solution.

Fortunately there is a library "swapi-ts" that solves these problems for us.
