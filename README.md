# PoC NgRX - Printer Templates

This is a PoC to test NgRx store.

While learning NgRx I was looking for a use case I have met in the past where I could really benefit from NgRx.

I found this use case at a previous company I worked where we created a management application for POS systems.
With this application it was possible to create a printer template which could be used by the POS system to print
tickets.

Not only could you create a printer template, you could also preview it, making it extra hard of course to sync state.

On top of all that we didn't use any framework (it was done with JQuery) and the design was very confusing because
we couldn't make it dynamic because of lacking state management.

So, the need to sync, no state management, no framework and the fact that the design could be made better made this the 
perfect candidate for a PoC.

## How to run

The application uses a json webserver to persist everything, to start it run: `npm run json-server`

Afterwards you can start the application: `npm start`

The webserver is started on `localhost:3004` and a proxy is created by the angular application.

You can change this settings in `proxy.conf.json`

## This is work in progress

Not everything works yet. And in some pages the design is broken, I know.

What can you do already:
* You can see an overview of all created templates
* You can create a new one by clicking the create button
* You can already play a little with the previewing and adding components to the printer template

The last bullet point needs the most work. You can already go in to edit mode, but it will always start from a
blank template and you can't save it yet.
