---
title: Position Schema
description: 
layout: default
---

Positions join people to organizations.

## Schema

``` javascript
{
  "id":          "4f9ea1326e8770d854c45a23",
  "title":        "President",
  "person":       "4f9ea1316e8770d854c45a1e",
  "organization": "4f9ea1326e8770d854c45a21",
  "meta": {
    "api_url":  "http://instance.example.org:3000/api/v0.1/position/4f9ea1326e8770d854c45a23",
    "edit_url": "http://instance.example.org:3000/position/4f9ea1326e8770d854c45a23"
  }
}
```

## ID

This is assigned by the database. It cannot be changed and will never change.

## Title

Required. Free form string. In the PopIt admin this is auto-completed to an existing entry to help with preventing duplicates.

## Person and Organization

The id of the person and organization that this position is linked to.

## To be added

Start and end dates
