    import React from 'react';
    import * as s from './Country.styles';

    const Country = props => {
        const country = props.match.params.country;
        console.log(country);

        const countries = {
            canada: {
                img: '/images/countries/canada.jpg',
                description: 'Canada is chilly'
            },
            brazil: {
                img: '/images/countries/brazil.jpg',
                description: 'Canada is chilly'
            },
            australia: {
                img: '/images/countries/australia.jpg',
                description: 'Canada is chilly'
            },
            india: {
                img: '/images/countries/india.jpg',
                description: 'Canada is chilly'
            },
            moldova: {
                img: '/images/countries/moldova.jpg',
                description: 'Canada is chilly'
            },
            kenya: {
                img: '/images/countries/kenya.jpg',
                description: 'Canada is chilly'
            }
        }


        return (
            <s.CountryContainer>
                <s.CountryImage img={countries[country]['img']}/>
                <s.CountryDescription>
                    {countries[country]['description']}
                </s.CountryDescription>
            </s.CountryContainer>
        )
    }

    export default Country;