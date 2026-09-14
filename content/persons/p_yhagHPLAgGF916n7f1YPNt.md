---
schema: wang-person/v1
id: p_yhagHPLAgGF916n7f1YPNt
status: active
merged_into: null
display_name: 王士嘉
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKUTAd4wBgp1RDdQ4h8DEw
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j2T2ttpk1PDe1855zrEaP4
          claim_id: c_LKUTAd4wBgp1RDdQ4h8DEw
          source_id: s_mYMiPT2bL7r1D3Gp4R5Hoh
          stance: supports
          locator: CBDB:322438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322438）
          source: &a1
            id: s_mYMiPT2bL7r1D3Gp4R5Hoh
            source_type: api_record
            title: 中国历代人物传记资料库：王士嘉（CBDB 322438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322438&o=json
            external_identifier: CBDB:322438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADRqL3pm67S5kEFLc3xiyt
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士嘉，明人物。宣德五年進士，籍贯武城，曾任工部郎中。（中国历代人物传记资料库 CBDB 322438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wWQV3KxhDwzaOcaT0kwb4k
          claim_id: c_ADRqL3pm67S5kEFLc3xiyt
          source_id: s_mYMiPT2bL7r1D3Gp4R5Hoh
          stance: supports
          locator: CBDB:322438
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wUaeEhGB00kfPjwgr4ld1F
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vMHM62tMEACNN1HhRp5f5c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cFW93QBh-hfc4n0cfXiFNY
          claim_id: c_wUaeEhGB00kfPjwgr4ld1F
          source_id: s_mYMiPT2bL7r1D3Gp4R5Hoh
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vMHM62tMEACNN1HhRp5f5c
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_MLy7nDfEUd38gD5SkmEuU8
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7W5wop8E2dzdL4okMppNdT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0RNB8k7JzDhcSlm7xQ-IhF
          claim_id: c_MLy7nDfEUd38gD5SkmEuU8
          source_id: s_Ezl0huATSnZuAFnOTsExtX
          stance: supports
          locator: CBDB：兄弟 王玉（204676）之父／母 王士嘉
          quotation: null
          interpretation_note: 由兄弟关系推断：王子璵 与 王玉 为同胞（CBDB 记「兄」），王玉 之父／母即 王子璵 之父／母。
          source:
            id: s_Ezl0huATSnZuAFnOTsExtX
            source_type: api_record
            title: 中国历代人物传记资料库：王子璵（CBDB 322445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322445&o=json
            external_identifier: CBDB:322445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7W5wop8E2dzdL4okMppNdT
        status: active
        display_name: 王子璵
        merged_into_person_id: null
    - claim:
        id: c_8mtvx9_3nU4lQCwrhShgja
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MXg4UCAMup5Mq41SMENQtD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkQ4-LpNkDNoRoEH_gn1jF
          claim_id: c_8mtvx9_3nU4lQCwrhShgja
          source_id: s_IzouslvWx766iRL0lP9XTu
          stance: supports
          locator: CBDB：兄弟 王玉（204676）之父／母 王士嘉
          quotation: null
          interpretation_note: 由兄弟关系推断：王子傑 与 王玉 为同胞（CBDB 记「弟」），王玉 之父／母即 王子傑 之父／母。
          source:
            id: s_IzouslvWx766iRL0lP9XTu
            source_type: api_record
            title: 中国历代人物传记资料库：王子傑（CBDB 322444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322444&o=json
            external_identifier: CBDB:322444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MXg4UCAMup5Mq41SMENQtD
        status: active
        display_name: 王子傑
        merged_into_person_id: null
    - claim:
        id: c_VqPOkD-UbsIkFK6k0Z4-AZ
        subject_person_id: p_yhagHPLAgGF916n7f1YPNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m7HWh1Tt2cCo4YGL9UUTHK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCHT7U24SHhIFouF3PzLlG
          claim_id: c_VqPOkD-UbsIkFK6k0Z4-AZ
          source_id: s_mECnBqQucPhKhx6hmfR8On
          stance: supports
          locator: CBDB：兄弟 王玉（204676）之父／母 王士嘉
          quotation: null
          interpretation_note: 由兄弟关系推断：王子英 与 王玉 为同胞（CBDB 记「弟」），王玉 之父／母即 王子英 之父／母。
          source:
            id: s_mECnBqQucPhKhx6hmfR8On
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 322443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322443&o=json
            external_identifier: CBDB:322443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m7HWh1Tt2cCo4YGL9UUTHK
        status: active
        display_name: 王子英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士嘉 | accepted |
| bio.summary | 王士嘉，明人物。宣德五年進士，籍贯武城，曾任工部郎中。（中国历代人物传记资料库 CBDB 322438） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vMHM62tMEACNN1HhRp5f5c | 王玉 | accepted |
| children | p_7W5wop8E2dzdL4okMppNdT | 王子璵 | accepted |
| children | p_MXg4UCAMup5Mq41SMENQtD | 王子傑 | accepted |
| children | p_m7HWh1Tt2cCo4YGL9UUTHK | 王子英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士嘉（CBDB 322438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322438&o=json)
- [中国历代人物传记资料库：王子傑（CBDB 322444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322444&o=json)
- [中国历代人物传记资料库：王子英（CBDB 322443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322443&o=json)
- [中国历代人物传记资料库：王子璵（CBDB 322445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322445&o=json)
