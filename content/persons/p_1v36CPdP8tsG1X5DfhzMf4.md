---
schema: wang-person/v1
id: p_1v36CPdP8tsG1X5DfhzMf4
status: active
merged_into: null
display_name: 王瓚
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kjrAmxL9hUp5HsBpeF5EiF
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VzHwEVHnTMQA1zmMjTZmgQ
          claim_id: c_kjrAmxL9hUp5HsBpeF5EiF
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: CBDB:298814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298814）
          source: &a1
            id: s_FJtEgs9bbiRiw48hNDodxR
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 298814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298814&o=json
            external_identifier: CBDB:298814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U6D87tGNuyB5ZLNQjjfBNk
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，明人物。嘉靖十七年進士，籍贯永嘉，曾任禮部尚書、禮部左侍郎。（中国历代人物传记资料库 CBDB 298814）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dKyxAlgnxoMo2Luj_12-sE
          claim_id: c_U6D87tGNuyB5ZLNQjjfBNk
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: CBDB:298814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__ywE885zfnmlbWUYrniV6z
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AM-P3C9Z1T52-9gexZ7Xer
          claim_id: c__ywE885zfnmlbWUYrniV6z
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
    - claim:
        id: c_BtPfjapDr_gqSngmZf7TOR
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8pyUGDMUqETtZkePgMzuVT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSPFf2us-Tce5mi1Kv_1Lf
          claim_id: c_BtPfjapDr_gqSngmZf7TOR
          source_id: s_kOUA6JSdSR3LPkg_19X-Cd
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王傅 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王傅 之父／母。
          source:
            id: s_kOUA6JSdSR3LPkg_19X-Cd
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 298821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json
            external_identifier: CBDB:298821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8pyUGDMUqETtZkePgMzuVT
        status: active
        display_name: 王傅
        merged_into_person_id: null
    - claim:
        id: c_AI50VWsWaStutuqZ1WGMO0
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DCTL2KdbqC55Qvd9udxpGV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vIYTcowbS4iJtPrhmxJqpK
          claim_id: c_AI50VWsWaStutuqZ1WGMO0
          source_id: s_6kOIqOBOzIwa6iPAct1lQh
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王僿 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王僿 之父／母。
          source:
            id: s_6kOIqOBOzIwa6iPAct1lQh
            source_type: api_record
            title: 中国历代人物传记资料库：王僿（CBDB 298817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298817&o=json
            external_identifier: CBDB:298817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCTL2KdbqC55Qvd9udxpGV
        status: active
        display_name: 王僿
        merged_into_person_id: null
    - claim:
        id: c_XUoFOTIF642-FwdTi1rrfB
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ENcVm1Xc9hsauEptkENJPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T8E_fxaij3ljMcyCBh_Nvw
          claim_id: c_XUoFOTIF642-FwdTi1rrfB
          source_id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王備 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王備 之父／母。
          source:
            id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 298820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json
            external_identifier: CBDB:298820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ENcVm1Xc9hsauEptkENJPS
        status: active
        display_name: 王備
        merged_into_person_id: null
    - claim:
        id: c_KN0fTMWPCjF5csQA2Kp_uE
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EYJr83fN6aXrMNRiFcSTF3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aRye2RFCWTvB9hzpjWLCW3
          claim_id: c_KN0fTMWPCjF5csQA2Kp_uE
          source_id: s_DuX4LcV8i0RWSr-IUmofgr
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王倖 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王倖 之父／母。
          source:
            id: s_DuX4LcV8i0RWSr-IUmofgr
            source_type: api_record
            title: 中国历代人物传记资料库：王倖（CBDB 298826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298826&o=json
            external_identifier: CBDB:298826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EYJr83fN6aXrMNRiFcSTF3
        status: active
        display_name: 王倖
        merged_into_person_id: null
    - claim:
        id: c_GFcIXryd7DTpL6f_KEIaPm
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ky9HmtkWbmCLQKLiK4XwgP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fc99bfk-ZQvAaC1zL2ShuW
          claim_id: c_GFcIXryd7DTpL6f_KEIaPm
          source_id: s_Nrpm0zV0gBwq5cnRJjuFvi
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王儯 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王儯 之父／母。
          source:
            id: s_Nrpm0zV0gBwq5cnRJjuFvi
            source_type: api_record
            title: 中国历代人物传记资料库：王儯（CBDB 298822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298822&o=json
            external_identifier: CBDB:298822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ky9HmtkWbmCLQKLiK4XwgP
        status: active
        display_name: 王儯
        merged_into_person_id: null
    - claim:
        id: c_W5xRdpibi1blE78quN1Sdc
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QE4D5w4qGuBkMD37cTA1Pi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QuZRpoFbjuaQDMp3yuvpxh
          claim_id: c_W5xRdpibi1blE78quN1Sdc
          source_id: s_BIU0ZOccC8OsznPJkqw0Wa
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王偶 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王偶 之父／母。
          source:
            id: s_BIU0ZOccC8OsznPJkqw0Wa
            source_type: api_record
            title: 中国历代人物传记资料库：王偶（CBDB 298818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298818&o=json
            external_identifier: CBDB:298818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QE4D5w4qGuBkMD37cTA1Pi
        status: active
        display_name: 王偶
        merged_into_person_id: null
    - claim:
        id: c_biu8NMbWQXhz8gkpnWmViV
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UaHT2ezxNJi4QPQ7dPMc26
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-jJGzkz62bpzUKELbhy3PA
          claim_id: c_biu8NMbWQXhz8gkpnWmViV
          source_id: s_UNVPx8xJbrgWmEwlsvB_is
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王儌 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王儌 之父／母。
          source:
            id: s_UNVPx8xJbrgWmEwlsvB_is
            source_type: api_record
            title: 中国历代人物传记资料库：王儌（CBDB 298823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json
            external_identifier: CBDB:298823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UaHT2ezxNJi4QPQ7dPMc26
        status: active
        display_name: 王儌
        merged_into_person_id: null
    - claim:
        id: c_wudEO11pDNxtP6CPWPnSs6
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WTHnYizj7FG4VTeGe9h9Rv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0rK-5GS3zVbxVpUM635gIl
          claim_id: c_wudEO11pDNxtP6CPWPnSs6
          source_id: s_8YkDop3iXZ-cGcV7ZIcuFq
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王僑 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王僑 之父／母。
          source:
            id: s_8YkDop3iXZ-cGcV7ZIcuFq
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 298819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298819&o=json
            external_identifier: CBDB:298819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WTHnYizj7FG4VTeGe9h9Rv
        status: active
        display_name: 王僑
        merged_into_person_id: null
    - claim:
        id: c_eZDAQ3N59UvdD56o1ir7I_
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zio9CvRTuTX6rm19G8kKZP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cChDuHpcIfT5ww81W6rM5W
          claim_id: c_eZDAQ3N59UvdD56o1ir7I_
          source_id: s_0Ni4g4V0mC23vwYNCiU5l7
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王健 为同胞（CBDB 记「兄」），王健 之父／母即 王佐 之父／母。
          source:
            id: s_0Ni4g4V0mC23vwYNCiU5l7
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 298827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json
            external_identifier: CBDB:298827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zio9CvRTuTX6rm19G8kKZP
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_ajAhOe-WQJE4KvZ8f_kzcb
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r6hCv1GK56pMnx7zLTbGLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWz-q2yZLCKo5SyU56R1rA
          claim_id: c_ajAhOe-WQJE4KvZ8f_kzcb
          source_id: s_KpRASkFWoHHRO1z0M1qdhx
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王侹 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王侹 之父／母。
          source:
            id: s_KpRASkFWoHHRO1z0M1qdhx
            source_type: api_record
            title: 中国历代人物传记资料库：王侹（CBDB 298825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json
            external_identifier: CBDB:298825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r6hCv1GK56pMnx7zLTbGLW
        status: active
        display_name: 王侹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，明人物。嘉靖十七年進士，籍贯永嘉，曾任禮部尚書、禮部左侍郎。（中国历代人物传记资料库 CBDB 298814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |
| children | p_8pyUGDMUqETtZkePgMzuVT | 王傅 | accepted |
| children | p_DCTL2KdbqC55Qvd9udxpGV | 王僿 | accepted |
| children | p_ENcVm1Xc9hsauEptkENJPS | 王備 | accepted |
| children | p_EYJr83fN6aXrMNRiFcSTF3 | 王倖 | accepted |
| children | p_Ky9HmtkWbmCLQKLiK4XwgP | 王儯 | accepted |
| children | p_QE4D5w4qGuBkMD37cTA1Pi | 王偶 | accepted |
| children | p_UaHT2ezxNJi4QPQ7dPMc26 | 王儌 | accepted |
| children | p_WTHnYizj7FG4VTeGe9h9Rv | 王僑 | accepted |
| children | p_Zio9CvRTuTX6rm19G8kKZP | 王佐 | accepted |
| children | p_r6hCv1GK56pMnx7zLTbGLW | 王侹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王備（CBDB 298820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json)
- [中国历代人物传记资料库：王傅（CBDB 298821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json)
- [中国历代人物传记资料库：王儌（CBDB 298823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json)
- [中国历代人物传记资料库：王偶（CBDB 298818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298818&o=json)
- [中国历代人物传记资料库：王僑（CBDB 298819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298819&o=json)
- [中国历代人物传记资料库：王僿（CBDB 298817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298817&o=json)
- [中国历代人物传记资料库：王儯（CBDB 298822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298822&o=json)
- [中国历代人物传记资料库：王侹（CBDB 298825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json)
- [中国历代人物传记资料库：王倖（CBDB 298826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298826&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 298814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298814&o=json)
- [中国历代人物传记资料库：王佐（CBDB 298827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json)
