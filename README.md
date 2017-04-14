# react-heading-section

```sh
npm i --save @team-griffin/react-heading-section

yarn add @team-griffin/react-heading-section
```

This package's job is to automatically determine the depth of an H.
This is super useful if you have written a reusable component that could be rendered anywhere in the tree that should have an H in it.

## Usage

```javascript
import { HeadingRoot, HeadingSection, Heading, H } from '@team-griffin/react-heading-section';

return (
  <HeadingRoot>
    <HeadingSection>
      <div>
        <Heading
          component={(
            <H>This is an h1</H>
          )}
        />
        <HeadingSection>
          <div>
            <Heading
              component={(
                <H>This is an h2</H>
              )}
            />
          </div>
        </HeadingSection>
      </div>
    </HeadingSection>
  </HeadingRoot>
);

// -->
<div>
  <h1>This is an h1</h1>
  <div>
    <h2>This is an h2</h2>
  </div>
</div>

```

### Heading Root

Heading root's job is to setup the initial depth for the rest of the heading's down the tree.
It's inital depth is 0, as each descendant heading section increments from it.

Has no props.

### Heading Section

Heading section's job is to create a new scope. Any `<Heading>` rendered as a descedant of a `<HeadingSection>` will automatically know the scope / depth.

Heading sections can be as descendants of other heading sections. This will increment the depth even further.

```
HeadingRoot
-- HeadingSection
---- Heading (h1)
---- HeadingSection
------ Heading (h2)
---- Heading (h1)
---- HeadingSection
------ Heading (h2)
```

Has no props.

### Heading

Heading will get the current depth / scope and render a given component and pass along that depth.

```javascript
(
  <Heading component={(props) => {
    console.log(props.depth);
  }}>
)
```

Props:

- Component = (string / Element / Component Constructor)

### H

H is a utility component which will take a depth and spit out a an h(1-6).

This component passes through any other props you pass to it.

```javascript
(
  <H depth={1}>
    My Title
  </H>
)

// -->
<h1>My Title</h1>
```

Props:

- Depth

### Heading Matrix

Heading matrix will allow you yo specify what you want to render at a given depth.

But... if one isn't provided it will look up the closest (going up).

```javascript
(
  <HeadingMatrix
    depth={5}
    h1={(<MyFancyH1/>)}
    h2={(<MyFancyH2/>)}
    h3={(<MyFancyH3/>)}
    h4={(<MyFancyH4/>)}
    h5={(<MyFancyH5/>)}
    h6={(<MyFancyH6/>)}
  />
)
```

Props:

- Depth
- h1-h6