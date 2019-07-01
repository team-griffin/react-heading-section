import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeadingRoot, HeadingSection, Heading, H } from '../';

storiesOf('Heading Root', module)
  .add('h1-6', () => {
    return (
      <HeadingRoot>
        <HeadingSection>
          <div>
            <Heading component={<H>This is an h1</H>}/>
            <HeadingSection>
              <div>
                <Heading component={<H>This is an h2</H>}/>
                <HeadingSection>
                  <div>
                    <Heading component={<H>This is an h3</H>}/>
                    <HeadingSection>
                      <div>
                        <Heading component={<H>This is an h4</H>}/>
                        <HeadingSection>
                          <div>
                            <Heading component={<H>This is an h5</H>}/>
                            <HeadingSection>
                              <div>
                                <Heading component={<H>This is an h6</H>}/>
                              </div>
                            </HeadingSection>
                          </div>
                        </HeadingSection>
                      </div>
                    </HeadingSection>
                  </div>
                </HeadingSection>
              </div>
            </HeadingSection>
          </div>
        </HeadingSection>
      </HeadingRoot>
    );
  });