<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-server](./kibana-plugin-server.md) &gt; [ScopedClusterClient](./kibana-plugin-server.scopedclusterclient.md)

## ScopedClusterClient class

Serves the same purpose as "normal" `ClusterClient` but exposes additional `callAsCurrentUser` method that doesn't use credentials of the Kibana internal user (as `callAsInternalUser` does) to request Elasticsearch API, but rather passes HTTP headers extracted from the current user request to the API.

See [ScopedClusterClient](./kibana-plugin-server.scopedclusterclient.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class ScopedClusterClient implements IScopedClusterClient 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(internalAPICaller, scopedAPICaller, headers)](./kibana-plugin-server.scopedclusterclient._constructor_.md) |  | Constructs a new instance of the <code>ScopedClusterClient</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [callAsCurrentUser(endpoint, clientParams, options)](./kibana-plugin-server.scopedclusterclient.callascurrentuser.md) |  | Calls specified <code>endpoint</code> with provided <code>clientParams</code> on behalf of the user initiated request to the Kibana server (via HTTP request headers). See [APICaller](./kibana-plugin-server.apicaller.md)<!-- -->. |
|  [callAsInternalUser(endpoint, clientParams, options)](./kibana-plugin-server.scopedclusterclient.callasinternaluser.md) |  | Calls specified <code>endpoint</code> with provided <code>clientParams</code> on behalf of the Kibana internal user. See [APICaller](./kibana-plugin-server.apicaller.md)<!-- -->. |
