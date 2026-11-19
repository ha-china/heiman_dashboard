# Supported devices

Snapshot: 2026-11-19. 83 product presets.

Zigbee2MQTT presets come from the pinned [HEIMAN converter](https://github.com/Koenkk/zigbee-herdsman-converters/tree/6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc/src/devices/heiman.ts). ZHA evidence comes from pinned [HEIMAN quirks](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman). ZHA has no exhaustive supported-device list. **Quirk** means a matching upstream handler exists; **Standard entities** means this card can display the device if ZHA exposes its standard HA entities, not verified device compatibility. Quirks on the development branch may require a newer Home Assistant release. No physical devices have been certified by this project.

All presets work through HA entities; the card does not pair Zigbee devices or install quirks. A shared marketing name does not guarantee equal capabilities across firmware or integrations. Only entities actually exposed by your integration are displayed.

| Model | Type | Z2M | ZHA evidence | Zigbee model aliases |
| --- | --- | --- | --- | --- |
| HS1MIS-3.0 | motion | Converter | Standard entities | PIRILLSensor-EF-3.0 |
| HS1CA-M | co | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/smoke.py) | CO_V15, CO_YDLV10, CO_V16, 1ccaa94c49a84abaa9e38687913947ba, CO_CTPG |
| HS-720ES-ZB | co | Converter | Standard entities | JM720ES-EF-3.0 |
| HS3MS | motion | Converter | Standard entities | PIRSensor-N, PIRSensor-N-3.0, PIRSensor-EM, PIRSensor-EF-3.0, PIR_TPV13 |
| HS2SK | plug | Converter | Standard entities | SmartPlug, SmartPlug-EF-3.0 |
| HS2SK_nxp | plug | Converter | Standard entities | SmartPlug-N |
| HS1SA-E | smoke | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/smoke.py) | SMOK_V16, SMOK_V15, b5db59bfd81e4f1f95dc57fdbba17931, 98293058552c49f38ad0748541ee96ba, SMOK_YDLV10, FB56-SMF02HM1.4, SmokeSensor-N-3.0, 319fa36e7384414a9ea62cba8f6e7626, c3442b4ac59b4ba1a83119d938f283ab, SmokeSensor-EF-3.0, SMOK_HV14, SMOK_YDLV10N |
| HS3SA/HS1SA | smoke | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/smoke.py) | SmokeSensor-N, SmokeSensor-EM, HS3SA, HS1SA |
| HS2SA-EF-3.0 | smoke | Converter | Standard entities |  |
| HS3CG | gas | Converter | Standard entities | GASSensor-N, GASSensor-N-3.0, d90d7c61c44d468a8e906ca0841e0a0c |
| HS1CG-M | gas | Converter | Standard entities | GASSensor-EN |
| HS1CG_H | gas | Converter | Standard entities | HY0022 |
| HS1CG | gas | Converter | Standard entities | RH3070 |
| HS1CG_M | gas | Converter | Standard entities | GAS_V15 |
| HS3DS | contact | Converter | Standard entities | DoorSensor-N, DoorSensor-N-3.0 |
| HS8DS-EFA | contact | Converter | Standard entities | HS8DS-EF2-3.0 |
| D1-EFA | contact | Converter | Standard entities | D1-EF2-3.0 |
| D1-E | contact | Converter | Standard entities |  |
| HS1DS | contact | Converter | Standard entities | DoorSensor-EM, DoorSensor-EF-3.0 |
| Heiman-M1 | contact | Converter | Standard entities | DOOR_TPV13, DOOR_TPV12 |
| HS1WL/HS3WL | leak | Converter | Standard entities | WaterSensor-N, WaterSensor-EM, WaterSensor-N-3.0, WaterSensor-EF-3.0, WATER_TPV13, TY0207, HS1WL, HS3WL |
| HS2WL | leak | Converter | Standard entities | WaterSensor2-EF-3.0 |
| L1-E | leak | Converter | Standard entities |  |
| HS1RC-N | remote | Converter | Standard entities | RC-N |
| HM1RC-2-E | remote | Converter | Standard entities | RC-EF-3.0 |
| HS1RC-EM | remote | Converter | Standard entities | RC-EM |
| HS1CA-E | co | Converter | Standard entities | COSensor-EM, COSensor-N, COSensor-EF-3.0 |
| HS2WD-E | siren | Converter | Standard entities | WarningDevice, WarningDevice-EF-3.0 |
| HS1HT | climate | Converter | Standard entities | HT-EM, TH-EM, TH-T_V14 |
| HS1HT-N | climate | Converter | Standard entities | HT-N, HT-EF-3.0 |
| HS2ESK-E | plug | Converter | Standard entities | E_Socket, E8331510SSZB_C1 |
| HS1EB/HS1EB-E | remote | Converter | Standard entities | SOS-EM, SOS-EF-3.0, HS1EB, HS1EB-E |
| HS2SS | remote | Converter | Standard entities | SceneSwitch-EM-3.0, SceneSwitch-EF-3.0 |
| HS2WDSC-E | remote | Converter | Standard entities | TempDimmerSw-EM-3.0 |
| HS2WDSR-E | remote | Converter | Standard entities | ColorDimmerSw-EM-3.0 |
| HS3HT | climate | Converter | Standard entities | HS3HT-EFA-3.0 |
| H1-E | climate | Converter | Standard entities |  |
| HS1CG-E | gas | Converter | Standard entities | GASSensor-EM, 358e4e3e03c644709905034dae81433e |
| HS1CG-E_3.0 | gas | Converter | Standard entities | GASSensor-EFR-3.0, GASSensor-EF-3.0 |
| HS1VS-N | vibration | Converter | Standard entities | Vibration-N |
| HS1VS-EF | vibration | Converter | Standard entities | Vibration-EF_3.0, Vibration-EF-3.0 |
| HS2AQ-EM | air | Converter | Standard entities | HS2AQ-EM-3.0 |
| HS1IRC | remote | Converter | Standard entities | IRControl-EM |
| HS2IRC | remote | Converter | Standard entities | IRControl2-EF-3.0 |
| HS2SW1A/HS2SW1A-N | switch | Converter | Standard entities | HS2SW1L-EF-3.0, HS2SW1L-EFR-3.0, HS2SW1A-N, HS6SW1A-W-EF-3.0, HS5SW1A-W-EF-3.0, HS2SW1A-EF-3.0, HS2SW1A-EFR-3.0, HS2SW1A |
| HS2SW2A/HS2SW2A-N | switch | Converter | Standard entities | HS2SW2L-EF-3.0, HS2SW2L-EFR-3.0, HS2SW2A-N, HS6SW2A-W-EF-3.0, HS5SW2A-W-EF-3.0, RT0102, HS2SW2A-EF-3.0, HS2SW2A-EFR-3.0, HS2SW2A |
| HS2SW3A/HS2SW3A-N | switch | Converter | Standard entities | HS2SW3L-EF-3.0, HS2SW3L-EFR-3.0, HS2SW3A-N, HS6SW3A-W-EF-3.0, HS5SW3A-W-EF-3.0, HS2SW3A-EF-3.0, HS2SW3A-EFR-3.0, HS2SW3A |
| HS1RM-E | switch | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/hs1rm_e.py) | RelayModule-EF-3.0 |
| HS2WDS | light | Converter | Standard entities | TemperLight |
| HS1RGB | light | Converter | Standard entities | ColorLight |
| HS2CM-N-DC | cover | Converter | Standard entities | CurtainMo-EF-3.0, CurtainMo-EF |
| HS1MS-M | motion | Converter | Standard entities | PIR_TPV16 |
| HS1MS-EF | motion | Converter | Standard entities | TY0202 |
| HS9MS-E | motion | Converter | Standard entities |  |
| HS2DB | remote | Converter | Standard entities | DoorBell-EM |
| HS2SS-E_V03 | remote | Converter | Standard entities | DoorBell-EF-3.0 |
| HS3AQ | air | Converter | Standard entities | HS3AQ-EFA-3.0 |
| HS2RNL | light | Converter | Standard entities | RouteLight-EF-3.0 |
| PIR_TPV12 | motion | Converter | Standard entities |  |
| HS15A-M | smoke | Converter | Standard entities |  |
| HS2FD-EF1-3.0 | fall | Converter | Standard entities |  |
| HS8OS-EF1-3.0 | motion | Converter | Standard entities |  |
| HS8MIS-EF1-3.0 | motion | Converter | Standard entities |  |
| HS8MLS-EF1-3.0 | motion | Converter | Standard entities | HS8MIS-86-EF1-3.0 |
| HS2AQ-EF-3.0 | air | Converter | Standard entities |  |
| HS1SA-E-PLUS | smoke | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/hs1sa_efa.py) | HS1SA-EF-3.0 |
| S1-TL | smoke | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/s1_tl.py) |  |
| S1-M | smoke | Converter | Standard entities |  |
| S1-TL-AI | smoke | Converter | Standard entities | SC6-EF2-AI |
| S2-E | smoke | Converter | Standard entities |  |
| HM-722ESY-E Plus | co | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/hm_722_esy_e_plus.py) | HM-722ESY-E-PLUS |
| HS1CA-E-PLUS | co | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/hs1ca_e_plus.py) | HS1CA-E PLUS |
| C1-M | co | Converter | Standard entities |  |
| HS1SA-E Lover | smoke | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/hs1sa_e_lover.py) | Smokesensor-EF2-3.0, SmokeSensor-EF2-3.0 |
| HM-636THV-AC-M | smoke_co | Converter | [Quirk](https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee/zhaquirks/heiman/hm_636thv_ac_m.py) |  |
| SC6 | smoke_co | Converter | Standard entities |  |
| HS2WD-EF | siren | Converter | Standard entities | WarningDevice-EFA1-3.0 |
| M1P-E | motion | Converter | Standard entities | M1-PE |
| HM-5HA-E | heat | Converter | Standard entities | HM-5HA-EF-3.0 |
| HS2VTD | contact | Converter | Standard entities |  |
| HS2TD | contact | Converter | Standard entities |  |
| HS2HT | climate | Converter | Standard entities |  |
| HS2NLV | light | Converter | Standard entities |  |

## Updating

Run `npm run catalog:update`, review the diff and upstream capabilities, then run `npm run check` and `npm run test:browser`. Unknown product types or unmatched ZHA models stop generation for review. Commit the catalog and this table together. Source revisions are stored in `src/data/catalog.json`. Generation is a development task; installed cards never fetch upstream data.
