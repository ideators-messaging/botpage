
    // var sURL = window.location.href;
    // var urlURL = new URL(sURL);
    // var searchParams = new URLSearchParams(urlURL.search);
    // var sEndPoint = searchParams.get('endpoint');  
    // var sStream = searchParams.get('stream');  

    // if(! sEndPoint){ sEndPoint = "Treasure_Bank_Service";}
    // console.log(sEndPoint);

    // if(typeof sStream != "string" || sStream == null || sStream.length==0){ sStream = "dev";}
    // console.log(sStream);

	if(!window._genesys){
        window._genesys = {};
    }
       
	if(!window._gt){
        window._gt = [];
    }
    		         
	window._genesys.widgets = {
      main: {
            debug: true,
            theme: "light",
            lang: "en",
            //customStylesheetID: "genesys_widgets_custom",
            i18n: "/api/localization",
            preload: ["sidebar"]
      },
      sidebar:{
            showOnStartup: true, 
            position: 'right',
            expandOnHover: true,
        
            channels: [{
        
                    name: 'ChannelSelector', 
                    clickCommand: 'ChannelSelector.open', 
                    clickOptions: {}, 
        
                     //use your own static string or i18n query string for the below two display properties
                    displayName: 'Live Assist', 
                    displayTitle: 'Get live help',
        
                    icon: 'agent'
                }, 
        
                {
                    name: 'WebChat',
                    displayName: 'Message Agent', 
                }
            ]
      },
      webchat: {
            userData: {},
            emojis: true,
            cometD: {
                  enabled: false
            },
            autoInvite: {
                  enabled: false,
                  timeToInviteSeconds: 5,
                  inviteTimeoutSeconds: 30
            },
            chatButton: {
                  enabled: true,
                  openDelay: 1000,
                  effectDuration: 300,
                  hideDuringInvite: true
            },
            uploadsEnabled: false,
            enableCustomHeader: true,
            transport: {
                  dataURL: "https://digital.api01-westus2.prod001.genesysengage.com/nexus/v3/chat/sessions",
                  type: "pureengage-v3-rest",
                  endpoint: "d38_ChatEndpoint1",
                  headers: {
                        "x-api-key": "c729c2be-1add-49e2-9fe9-45fe7c24aeeb"
                  },
                  stream: "dev",
                  async: {

                    enabled: true, 
        
                    getSessionData: function(sessionData, Cookie, CookieOptions) {
        
                        // Note: You don't have to use cookies. You can, instead, store in a secured location like a database.
                        Cookie.set('customer-defined-session-cookie', JSON.stringify(sessionData), CookieOptions);
                    },
        
                    setSessionData: function(Open, Cookie, CookieOptions) {
        
                        // Retrieve from your secured location.
                        return Cookie.get('customer-defined-session-cookie');
                    }
                },
            },
            ajaxTimeout: 50000,
            form: {
                wrapper: "<table></table>",
                inputs: [
             
                    {
                        id: "cx_webchat_form_firstname",
                        name: "firstname",
                        maxlength: "100",
                        placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
                        label: "@i18n:webchat.ChatFormFirstName"
                    },
             
                    {
                        id: "cx_webchat_form_lastname",
                        name: "lastname",
                        maxlength: "100",
                        placeholder: "@i18n:webchat.ChatFormPlaceholderLastName",
                        label: "@i18n:webchat.ChatFormLastName"
                    },
             
                    {
                        id: "cx_webchat_form_email",
                        name: "email", 
                        maxlength: "100",
                        //placeholder: "@i18n:webchat.ChatFormPlaceholderEmail",
                        placeholder: "@i18n:webchat.ChatFormPlaceholderLastName",
                        label: "@i18n:webchat.ChatFormEmail",
                        validate: function(event, form, input, label, $, CXBus, Common){
                            let text = !!input ? input.val() : 'nok';
                            return text.includes("@");
                        }
                    },
             
                    {
                        id: "cx_webchat_form_subject", 
                        name: "subject", 
                        maxlength: "100",
                        placeholder: "@i18n:webchat.ChatFormPlaceholderSubject",
                        label: "@i18n:webchat.ChatFormSubject"
                    }
                ]
            }
      }
	};
	        