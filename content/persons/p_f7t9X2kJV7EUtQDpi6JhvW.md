---
schema: wang-person/v1
id: p_f7t9X2kJV7EUtQDpi6JhvW
status: active
merged_into: null
display_name: 王惟政
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiKsFRygZuRq47Cm5dX8yw
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UdkNfQ8DfhUkrdRP89a5Jq
          claim_id: c_AiKsFRygZuRq47Cm5dX8yw
          source_id: s_KzNgEHS7rKsuVitqrYih7c
          stance: supports
          locator: CBDB:250447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250447）
          source: &a1
            id: s_KzNgEHS7rKsuVitqrYih7c
            source_type: api_record
            title: 中国历代人物传记资料库：王惟政（CBDB 250447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250447&o=json
            external_identifier: CBDB:250447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rcDQkSvcUwC2WjmjtBR4Z8
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟政，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250447）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EppZ2__dQTJRs8o9DS7Yp2
          claim_id: c_rcDQkSvcUwC2WjmjtBR4Z8
          source_id: s_KzNgEHS7rKsuVitqrYih7c
          stance: supports
          locator: CBDB:250447
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6NT56CaO4mSUIh9ohCmHin
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hX4-w4ITQ9FCfwCGtBCj3
          claim_id: c_6NT56CaO4mSUIh9ohCmHin
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MUxq2FyJ4QRyAx99MTCU4A
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 126638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json
            external_identifier: CBDB:126638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
    - claim:
        id: c_AsIRM30taRcN4bjTUaErnt
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4CiJFoEfv4MDKNaJyWGj49
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3LAnJABIng_qeGupFvbc9n
          claim_id: c_AsIRM30taRcN4bjTUaErnt
          source_id: s_TFpwkpQJuRww-UNXgpxD77
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王璠 与 王珩 为同胞（CBDB 记「兄」），王珩 之父／母即 王璠 之父／母。
          source:
            id: s_TFpwkpQJuRww-UNXgpxD77
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 250461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250461&o=json
            external_identifier: CBDB:250461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4CiJFoEfv4MDKNaJyWGj49
        status: active
        display_name: 王璠
        merged_into_person_id: null
    - claim:
        id: c_E6PypPXDkvdhio68dGv-Ri
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GkiAoxDqABDWgMhLPJXhp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8xmO3xSzy8jDRT-Bwh-85
          claim_id: c_E6PypPXDkvdhio68dGv-Ri
          source_id: s_UbCGDhoXSRi8o9a7kP7qW-
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑛 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王瑛 之父／母。
          source:
            id: s_UbCGDhoXSRi8o9a7kP7qW-
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 250452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250452&o=json
            external_identifier: CBDB:250452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6GkiAoxDqABDWgMhLPJXhp
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_JLs_KizYkCy6hgbxEA26KF
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9GqYDwUT1GRiLwK1k1Mib9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NOFRD_7Ol7XgOy-NybqCwN
          claim_id: c_JLs_KizYkCy6hgbxEA26KF
          source_id: s_N75947SeIaM3XaeGb1-IPJ
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王璣 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王璣 之父／母。
          source:
            id: s_N75947SeIaM3XaeGb1-IPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 250456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250456&o=json
            external_identifier: CBDB:250456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9GqYDwUT1GRiLwK1k1Mib9
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_M6FDy61sBwmVZlAEy2WzCu
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dcUnzLUF_Xa852OIbjI_gZ
          claim_id: c_M6FDy61sBwmVZlAEy2WzCu
          source_id: s_vCjRQFItXMxjZgCzFVooNl
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王珙 与 王珩 为同胞（CBDB 记「兄」），王珩 之父／母即 王珙 之父／母。
          source:
            id: s_vCjRQFItXMxjZgCzFVooNl
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 250460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json
            external_identifier: CBDB:250460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_4uexWFHSBXxukJ5uWpkDnb
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fy3r2A3KPWx1RETDQshWb8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l5C7XXFlEw1-u-tSk3NF-s
          claim_id: c_4uexWFHSBXxukJ5uWpkDnb
          source_id: s_fj1PBPcWIOF472Pyd2yNmn
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王瑄 之父／母。
          source:
            id: s_fj1PBPcWIOF472Pyd2yNmn
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 250455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json
            external_identifier: CBDB:250455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fy3r2A3KPWx1RETDQshWb8
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_yVLvmXJf9-5imWPE7psRQ8
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NDMKBG4yUXHkQAQFh6Q82w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OiK89X61GAfJ6Oo6tU6FVC
          claim_id: c_yVLvmXJf9-5imWPE7psRQ8
          source_id: s_AdvzUgAJTiiHqlKFZxU_c5
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓃 与 王珩 为同胞（CBDB 记「兄」），王珩 之父／母即 王瓃 之父／母。
          source:
            id: s_AdvzUgAJTiiHqlKFZxU_c5
            source_type: api_record
            title: 中国历代人物传记资料库：王瓃（CBDB 250459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json
            external_identifier: CBDB:250459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NDMKBG4yUXHkQAQFh6Q82w
        status: active
        display_name: 王瓃
        merged_into_person_id: null
    - claim:
        id: c_-OadWDMBUgZXWe3qRuvVst
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YRqt1snj1duk1df2ZTawrQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J9cW4NhV1OiZxt29MeaIBl
          claim_id: c_-OadWDMBUgZXWe3qRuvVst
          source_id: s_X8qBa73IjmeUOWzZrQfuBS
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王琮 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王琮 之父／母。
          source:
            id: s_X8qBa73IjmeUOWzZrQfuBS
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 250457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250457&o=json
            external_identifier: CBDB:250457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YRqt1snj1duk1df2ZTawrQ
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_I2lqhrbach5zzJCL0CIyck
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dUmLyCykqJ6DShm19k8X72
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__OAe0h_4pH0zL8kBS_GH5W
          claim_id: c_I2lqhrbach5zzJCL0CIyck
          source_id: s_AFKNQMf2Xpp5rawx5svp5e
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王琳 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王琳 之父／母。
          source:
            id: s_AFKNQMf2Xpp5rawx5svp5e
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 250458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250458&o=json
            external_identifier: CBDB:250458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dUmLyCykqJ6DShm19k8X72
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_d3_N8RBLSLrx8ec3F9E-CK
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmRYd5AgCCYrVeM4nez3uw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qZPmVDy2sgv_770Gaj2GuA
          claim_id: c_d3_N8RBLSLrx8ec3F9E-CK
          source_id: s_pbNDfXOfrZA72XhgDFbvg7
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王珩 为同胞（CBDB 记「弟」），王珩 之父／母即 王璽 之父／母。
          source:
            id: s_pbNDfXOfrZA72XhgDFbvg7
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 250453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250453&o=json
            external_identifier: CBDB:250453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmRYd5AgCCYrVeM4nez3uw
        status: active
        display_name: 王璽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟政 | accepted |
| bio.summary | 王惟政，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |
| children | p_4CiJFoEfv4MDKNaJyWGj49 | 王璠 | accepted |
| children | p_6GkiAoxDqABDWgMhLPJXhp | 王瑛 | accepted |
| children | p_9GqYDwUT1GRiLwK1k1Mib9 | 王璣 | accepted |
| children | p_EwHhYnCFWyzEp1Vg7Ci5fB | 王珙 | accepted |
| children | p_Fy3r2A3KPWx1RETDQshWb8 | 王瑄 | accepted |
| children | p_NDMKBG4yUXHkQAQFh6Q82w | 王瓃 | accepted |
| children | p_YRqt1snj1duk1df2ZTawrQ | 王琮 | accepted |
| children | p_dUmLyCykqJ6DShm19k8X72 | 王琳 | accepted |
| children | p_hmRYd5AgCCYrVeM4nez3uw | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 250457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250457&o=json)
- [中国历代人物传记资料库：王璠（CBDB 250461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250461&o=json)
- [中国历代人物传记资料库：王珙（CBDB 250460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json)
- [中国历代人物传记资料库：王珩（CBDB 126638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json)
- [中国历代人物传记资料库：王璣（CBDB 250456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250456&o=json)
- [中国历代人物传记资料库：王瓃（CBDB 250459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json)
- [中国历代人物传记资料库：王琳（CBDB 250458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250458&o=json)
- [中国历代人物传记资料库：王惟政（CBDB 250447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250447&o=json)
- [中国历代人物传记资料库：王璽（CBDB 250453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250453&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 250455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 250452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250452&o=json)
