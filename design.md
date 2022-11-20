## Design
An implemation of https://the-one-api.dev/ API to consume The Lord of The Rings resource programmatically as npm module.

The current implemantion of the SDK based on singlton. Considering that you need autherization token for most of APIs. Requires to set the token in the constructor to enable use all interfaces without any issue.

As first iteration, the current version is simple and directly translate the API endpoints as it is.

### Limitaiton
- High memory usage in case you need certain interface.

## Future Features
- Make the SDK export each object definition independently
- Add sorting option in every service interface.
- Add pagination options (limit, page, offset) in every service interface.
- Add filtering options (match/negate, indclude/exclude, exists, regex, ><);
