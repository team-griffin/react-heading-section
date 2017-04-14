import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { HeadingRoot, HeadingSection, Heading, HeadingMatrix, H } from '../src';

storiesOf('Heading', module)
  .add('with text', () => {
    return (
      <HeadingRoot>
        <div>
          <HeadingSection>
            <div>
              <Heading
                component={(
                  <HeadingMatrix
                    h1={(<h1>My Title</h1>)}
                  />
                )}
              />
            <HeadingSection>
              <div>
                <Heading
                  component={(
                    <HeadingMatrix
                      h2={(<h2>My Title</h2>)}
                    />
                  )}
                />
              </div>
            </HeadingSection>
            </div>
          </HeadingSection>
          <HeadingSection>
            <div>
              <Heading
                component={(
                  <H>My Title</H>
                )}
              />

              <Heading
                component={(
                  <H>My Title</H>
                )}
              />

              <Heading
                component={(
                  <H>My Title</H>
                )}
              />

              <Heading
                component={(
                  <H>My Title</H>
                )}
              />

            <HeadingSection>
              <div>
                <Heading
                  component={(
                    <H>My Title</H>
                  )}
                />

                <Heading
                  component={(
                    <H>My Title</H>
                  )}
                />

                <Heading
                  component={(
                    <H>My Title</H>
                  )}
                />

                <Heading
                  component={(
                    <H>My Title</H>
                  )}
                />
              </div>
            </HeadingSection>
            </div>
          </HeadingSection>
        </div>
      </HeadingRoot>
    );
  })