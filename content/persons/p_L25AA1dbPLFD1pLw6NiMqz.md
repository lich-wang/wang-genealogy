---
schema: wang-person/v1
id: p_L25AA1dbPLFD1pLw6NiMqz
status: active
merged_into: null
display_name: 王璠
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z7XBRPgSJpfHuYPsitAx2h
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e7YSwxBaViqnoZFCMxJZDT
          claim_id: c_z7XBRPgSJpfHuYPsitAx2h
          source_id: s_i1uZY6NhK22gAokU3QjXqb
          stance: supports
          locator: CBDB:287959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287959）
          source: &a1
            id: s_i1uZY6NhK22gAokU3QjXqb
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 287959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287959&o=json
            external_identifier: CBDB:287959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mufru98aTxEuZ3gwzWDhJZ
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，明人物。嘉靖八年進士，籍贯南充，曾任奉政大夫、戶部郎中。（中国历代人物传记资料库 CBDB 287959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jkiP5xUxRpwMa3-qrdLdnv
          claim_id: c_mufru98aTxEuZ3gwzWDhJZ
          source_id: s_i1uZY6NhK22gAokU3QjXqb
          stance: supports
          locator: CBDB:287959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_W4hbEssPjs64LhUZjkg7MP
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N11h--bLGKedzQiUeI-5WQ
          claim_id: c_W4hbEssPjs64LhUZjkg7MP
          source_id: s_i1uZY6NhK22gAokU3QjXqb
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_91mfo9pBnGu6yNqPS5SH4s
        status: active
        display_name: 王養正
        merged_into_person_id: null
    - claim:
        id: c_Z6iDnmlJ-1Wc7qyqGln0AU
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JFCMn29RFWw99L547unXBG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WX8OvyeWBvT3riYNhuoXtl
          claim_id: c_Z6iDnmlJ-1Wc7qyqGln0AU
          source_id: s_i1uZY6NhK22gAokU3QjXqb
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JFCMn29RFWw99L547unXBG
        status: active
        display_name: 王養浩
        merged_into_person_id: null
    - claim:
        id: c_zt6RK1TkxgnJ5I1eS5pJSc
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ac1QB97Qd839svGrqdwqxL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c71DTaktO9T4L4U0Vs6A1r
          claim_id: c_zt6RK1TkxgnJ5I1eS5pJSc
          source_id: s_K3PRUZZBghSk0MEwfQE-LB
          stance: supports
          locator: CBDB：兄弟 王養浩（203320）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王養濂 与 王養浩 为同胞（CBDB 记「兄」），王養浩 之父／母即 王養濂 之父／母。
          source:
            id: s_K3PRUZZBghSk0MEwfQE-LB
            source_type: api_record
            title: 中国历代人物传记资料库：王養濂（CBDB 303033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303033&o=json
            external_identifier: CBDB:303033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ac1QB97Qd839svGrqdwqxL
        status: active
        display_name: 王養濂
        merged_into_person_id: null
    - claim:
        id: c_CHVvS_yIbNGYkLbjRcLxOI
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fj2FWE18U3HUHwm4FacqQR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t7mC1BXGEZocyMQA5wEq3y
          claim_id: c_CHVvS_yIbNGYkLbjRcLxOI
          source_id: s_RU2dRo9SUK4OIkrKaFJWfX
          stance: supports
          locator: CBDB：兄弟 王養正（202427）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王養素 与 王養正 为同胞（CBDB 记「兄」），王養正 之父／母即 王養素 之父／母。
          source:
            id: s_RU2dRo9SUK4OIkrKaFJWfX
            source_type: api_record
            title: 中国历代人物传记资料库：王養素（CBDB 287965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json
            external_identifier: CBDB:287965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fj2FWE18U3HUHwm4FacqQR
        status: active
        display_name: 王養素
        merged_into_person_id: null
    - claim:
        id: c_QtXPdsbFM9Y_iNah27kCR2
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u458xMHFN5Z27VY2fzxC4e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rmmcB3eicGSuYCgnaGIi6D
          claim_id: c_QtXPdsbFM9Y_iNah27kCR2
          source_id: s_VfHDru5s9GGnrB_-KF0RkC
          stance: supports
          locator: CBDB：兄弟 王養正（202427）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王養賢 与 王養正 为同胞（CBDB 记「兄」），王養正 之父／母即 王養賢 之父／母。
          source:
            id: s_VfHDru5s9GGnrB_-KF0RkC
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u458xMHFN5Z27VY2fzxC4e
        status: active
        display_name: 王養賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，明人物。嘉靖八年進士，籍贯南充，曾任奉政大夫、戶部郎中。（中国历代人物传记资料库 CBDB 287959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_91mfo9pBnGu6yNqPS5SH4s | 王養正 | accepted |
| children | p_JFCMn29RFWw99L547unXBG | 王養浩 | accepted |
| children | p_Ac1QB97Qd839svGrqdwqxL | 王養濂 | accepted |
| children | p_Fj2FWE18U3HUHwm4FacqQR | 王養素 | accepted |
| children | p_u458xMHFN5Z27VY2fzxC4e | 王養賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 287959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287959&o=json)
- [中国历代人物传记资料库：王養濂（CBDB 303033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303033&o=json)
- [中国历代人物传记资料库：王養素（CBDB 287965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287965&o=json)
- [中国历代人物传记资料库：王養賢（CBDB 287963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json)
