import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

const Community = () => {

  const COMMUNITIES = [
    {
      "name": "Voolith",
      "slogan": "repurpose 24/365 experiences",
      "profileColor": "#4a5bcf",
      "totalMembers": 1822,
      "members": [
        "https://robohash.org/autemutquam.png?size=50x50&set=set1",
        "https://robohash.org/ipsamquisquamqui.png?size=50x50&set=set1",
        "https://robohash.org/temporaautet.png?size=50x50&set=set1",
        "https://robohash.org/vellaborumdoloribus.png?size=50x50&set=set1",
        "https://robohash.org/molestiaeatconsequatur.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Buzzdog",
      "slogan": "synergize sticky e-commerce",
      "profileColor": "#2a8add",
      "totalMembers": 1192,
      "members": [
        "https://robohash.org/exercitationemquiconsectetur.png?size=50x50&set=set1",
        "https://robohash.org/enimipsumeos.png?size=50x50&set=set1",
        "https://robohash.org/hicmagniut.png?size=50x50&set=set1",
        "https://robohash.org/veniamdoloremexercitationem.png?size=50x50&set=set1",
        "https://robohash.org/impediteanobis.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Yombu",
      "slogan": "engage cutting-edge functionalities",
      "profileColor": "#e1013c",
      "totalMembers": 507,
      "members": [
        "https://robohash.org/enimvoluptatesamet.png?size=50x50&set=set1",
        "https://robohash.org/autconsequaturearum.png?size=50x50&set=set1",
        "https://robohash.org/fugiatomnisdeleniti.png?size=50x50&set=set1",
        "https://robohash.org/autemsintat.png?size=50x50&set=set1",
        "https://robohash.org/officianihilpossimus.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Jamia",
      "slogan": "architect bleeding-edge schemas",
      "profileColor": "#985da5",
      "totalMembers": 632,
      "members": [
        "https://robohash.org/illoaliquidpariatur.png?size=50x50&set=set1",
        "https://robohash.org/optioetdolor.png?size=50x50&set=set1",
        "https://robohash.org/dolorveniamperferendis.png?size=50x50&set=set1",
        "https://robohash.org/minusaliasipsa.png?size=50x50&set=set1",
        "https://robohash.org/voluptatemvoluptatemnam.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Dazzlesphere",
      "slogan": "deliver turn-key schemas",
      "profileColor": "#8b5f52",
      "totalMembers": 4073,
      "members": [
        "https://robohash.org/doloresiustonobis.png?size=50x50&set=set1",
        "https://robohash.org/totamvoluptatesquia.png?size=50x50&set=set1",
        "https://robohash.org/voluptasetsequi.png?size=50x50&set=set1",
        "https://robohash.org/dolorestemporeipsum.png?size=50x50&set=set1",
        "https://robohash.org/nostrumautoptio.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Layo",
      "slogan": "matrix turn-key networks",
      "profileColor": "#e48415",
      "totalMembers": 1333,
      "members": [
        "https://robohash.org/asperioresnatusaut.png?size=50x50&set=set1",
        "https://robohash.org/illoaliquiddolorum.png?size=50x50&set=set1",
        "https://robohash.org/autquasdolores.png?size=50x50&set=set1",
        "https://robohash.org/doloreinnobis.png?size=50x50&set=set1",
        "https://robohash.org/molestiaeiuredolores.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Twitterbridge",
      "slogan": "matrix one-to-one markets",
      "profileColor": "#55b96c",
      "totalMembers": 1817,
      "members": [
        "https://robohash.org/voluptasdoloresdoloribus.png?size=50x50&set=set1",
        "https://robohash.org/quiacumquemagnam.png?size=50x50&set=set1",
        "https://robohash.org/etinciduntanimi.png?size=50x50&set=set1",
        "https://robohash.org/quositlaudantium.png?size=50x50&set=set1",
        "https://robohash.org/repellatofficiisenim.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Eidel",
      "slogan": "harness strategic partnerships",
      "profileColor": "#8b283c",
      "totalMembers": 4129,
      "members": [
        "https://robohash.org/velenimquasi.png?size=50x50&set=set1",
        "https://robohash.org/delenitiinnisi.png?size=50x50&set=set1",
        "https://robohash.org/quisquisquamratione.png?size=50x50&set=set1",
        "https://robohash.org/possimusaliquambeatae.png?size=50x50&set=set1",
        "https://robohash.org/rerummagnamreprehenderit.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Skipstorm",
      "slogan": "generate ubiquitous portals",
      "profileColor": "#b159ad",
      "totalMembers": 762,
      "members": [
        "https://robohash.org/recusandaesedquisquam.png?size=50x50&set=set1",
        "https://robohash.org/etvelitmollitia.png?size=50x50&set=set1",
        "https://robohash.org/atquedolorumlabore.png?size=50x50&set=set1",
        "https://robohash.org/incupiditateminus.png?size=50x50&set=set1",
        "https://robohash.org/delectuseaaut.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Skiptube",
      "slogan": "cultivate intuitive niches",
      "profileColor": "#aba500",
      "totalMembers": 1184,
      "members": [
        "https://robohash.org/inquiaa.png?size=50x50&set=set1",
        "https://robohash.org/saepequoin.png?size=50x50&set=set1",
        "https://robohash.org/idintempore.png?size=50x50&set=set1",
        "https://robohash.org/quamquiaipsum.png?size=50x50&set=set1",
        "https://robohash.org/omniseiuspraesentium.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Skidoo",
      "slogan": "seize integrated portals",
      "profileColor": "#fc983b",
      "totalMembers": 2687,
      "members": [
        "https://robohash.org/magniexercitationeminventore.png?size=50x50&set=set1",
        "https://robohash.org/facerequidemdignissimos.png?size=50x50&set=set1",
        "https://robohash.org/utistenumquam.png?size=50x50&set=set1",
        "https://robohash.org/eaquenatusab.png?size=50x50&set=set1",
        "https://robohash.org/corporisquidemconsequatur.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Thoughtworks",
      "slogan": "engineer B2B paradigms",
      "profileColor": "#67cc47",
      "totalMembers": 4526,
      "members": [
        "https://robohash.org/magnisitsed.png?size=50x50&set=set1",
        "https://robohash.org/itaqueculpaex.png?size=50x50&set=set1",
        "https://robohash.org/doloremsequisimilique.png?size=50x50&set=set1",
        "https://robohash.org/quofacilisnatus.png?size=50x50&set=set1",
        "https://robohash.org/accusamusdelenititemporibus.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Rhycero",
      "slogan": "extend compelling e-tailers",
      "profileColor": "#79622e",
      "totalMembers": 1948,
      "members": [
        "https://robohash.org/autreprehenderitvoluptatem.png?size=50x50&set=set1",
        "https://robohash.org/enimexcepturipraesentium.png?size=50x50&set=set1",
        "https://robohash.org/corruptivoluptasomnis.png?size=50x50&set=set1",
        "https://robohash.org/optiocummolestiae.png?size=50x50&set=set1",
        "https://robohash.org/utquiapraesentium.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Flashpoint",
      "slogan": "drive virtual web services",
      "profileColor": "#75ce52",
      "totalMembers": 728,
      "members": [
        "https://robohash.org/sequietvoluptas.png?size=50x50&set=set1",
        "https://robohash.org/totamettenetur.png?size=50x50&set=set1",
        "https://robohash.org/delectussuntad.png?size=50x50&set=set1",
        "https://robohash.org/recusandaesintprovident.png?size=50x50&set=set1",
        "https://robohash.org/animiutunde.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Dynazzy",
      "slogan": "innovate user-centric web-readiness",
      "profileColor": "#52706e",
      "totalMembers": 298,
      "members": [
        "https://robohash.org/minimadoloreadipisci.png?size=50x50&set=set1",
        "https://robohash.org/utplaceatveniam.png?size=50x50&set=set1",
        "https://robohash.org/istearchitectomolestiae.png?size=50x50&set=set1",
        "https://robohash.org/eaipsameligendi.png?size=50x50&set=set1",
        "https://robohash.org/quasiaspernaturincidunt.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Feedbug",
      "slogan": "facilitate one-to-one web-readiness",
      "profileColor": "#d931ad",
      "totalMembers": 3316,
      "members": [
        "https://robohash.org/odioautsunt.png?size=50x50&set=set1",
        "https://robohash.org/atqueaccusantiumaliquam.png?size=50x50&set=set1",
        "https://robohash.org/laboriosamdoloresequi.png?size=50x50&set=set1",
        "https://robohash.org/animinemoea.png?size=50x50&set=set1",
        "https://robohash.org/etquiaex.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Meetz",
      "slogan": "generate open-source users",
      "profileColor": "#286345",
      "totalMembers": 4133,
      "members": [
        "https://robohash.org/utquaebeatae.png?size=50x50&set=set1",
        "https://robohash.org/delenitiexplicabosit.png?size=50x50&set=set1",
        "https://robohash.org/consequaturvelitsimilique.png?size=50x50&set=set1",
        "https://robohash.org/nonerrordolor.png?size=50x50&set=set1",
        "https://robohash.org/quiaautemquia.png?size=50x50&set=set1",
      ]
    }, {
      "name": "LiveZ",
      "slogan": "transform bleeding-edge supply-chains",
      "profileColor": "#c98009",
      "totalMembers": 1273,
      "members": [
        "https://robohash.org/quibusdamvoluptatequi.png?size=50x50&set=set1",
        "https://robohash.org/doloremquepariaturmolestiae.png?size=50x50&set=set1",
        "https://robohash.org/corporisaliaset.png?size=50x50&set=set1",
        "https://robohash.org/perferendisdoloribusplaceat.png?size=50x50&set=set1",
        "https://robohash.org/veniamlaborenumquam.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Livetube",
      "slogan": "enhance dynamic mindshare",
      "profileColor": "#53a1cf",
      "totalMembers": 1740,
      "members": [
        "https://robohash.org/nesciuntevenietprovident.png?size=50x50&set=set1",
        "https://robohash.org/repudiandaeliberoid.png?size=50x50&set=set1",
        "https://robohash.org/culpavelquo.png?size=50x50&set=set1",
        "https://robohash.org/impeditprovidentratione.png?size=50x50&set=set1",
        "https://robohash.org/temporibusfugiatneque.png?size=50x50&set=set1",
      ]
    }, {
      "name": "Yakitri",
      "slogan": "matrix magnetic web-readiness",
      "profileColor": "#14e57f",
      "totalMembers": 1074,
      "members": [
        "https://robohash.org/sapienteetfugit.png?size=50x50&set=set1",
        "https://robohash.org/culpaminusodit.png?size=50x50&set=set1",
        "https://robohash.org/possimusprovidentnihil.png?size=50x50&set=set1",
        "https://robohash.org/quivoluptatibuseos.png?size=50x50&set=set1",
        "https://robohash.org/remvoluptatibuscorrupti.png?size=50x50&set=set1",
      ]
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161B23' }}>
      <ScrollView overScrollMode='never'>
        <View style={{ flex: 1, paddingVertical: 25, paddingBottom: 100, flexDirection: 'row', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', }}>
          {COMMUNITIES.map((community, index) => (
            <View key={index} style={{ width: '45%', height: 'auto', aspectRatio: 1 / 1, borderWidth: 1, backgroundColor: community.profileColor + 'AA', borderRadius: 20, padding: 5, gap: 15, justifyContent: 'center', }}>
              <View style={{ alignItems: 'center', gap: 3 }}>
                <Text style={{ fontSize: 20, fontWeight: '900', color: '#FFF' }}>{community.name}</Text>
                <Text style={{ color: '#DDD' }}>{community.totalMembers} Members</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
                {(community.members).map((member, ind) => (
                  <Image key={ind} source={{ uri: member }} style={{
                    width: 30, height: 30, borderRadius: 30, backgroundColor: '#232323', borderWidth: 1.5, borderColor: 'lavender',
                    transform: [{ translateX: (ind - 2) * -10 }], zIndex: -ind
                  }} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Community