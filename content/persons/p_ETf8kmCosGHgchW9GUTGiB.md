---
schema: wang-person/v1
id: p_ETf8kmCosGHgchW9GUTGiB
status: active
merged_into: null
display_name: 王絕
cbdb_id: 285657
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFWft7pStorHNFAozgsc8Z
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絕，明人物。正德十六年進士，籍贯開州，曾任大夫。（中国历代人物传记资料库 CBDB 285657）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_e-UpYulnujGOW72hwsRj_F
          claim_id: c_fFWft7pStorHNFAozgsc8Z
          source_id: s_zjKNo48iNJhzY3juEcyiQD
          stance: supports
          locator: CBDB:285657
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zjKNo48iNJhzY3juEcyiQD
            source_type: api_record
            title: 中国历代人物传记资料库：王絕（CBDB 285657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285657&o=json
            external_identifier: CBDB:285657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mkGeAGoQPdwTXehDSsyKCF
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iXbczFzfexpWkvp2wwGemZ
          claim_id: c_mkGeAGoQPdwTXehDSsyKCF
          source_id: s_zjKNo48iNJhzY3juEcyiQD
          stance: supports
          locator: CBDB:285657
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vBhMhdTDiW1Q-4XDAkxDTw
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yo3ha0PfpgGhc6UvYuPKGs
          claim_id: c_vBhMhdTDiW1Q-4XDAkxDTw
          source_id: s_zjKNo48iNJhzY3juEcyiQD
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zjKNo48iNJhzY3juEcyiQD
            source_type: api_record
            title: 中国历代人物传记资料库：王絕（CBDB 285657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285657&o=json
            external_identifier: CBDB:285657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AoR8GkNH17NPVQc7r3ceML
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_HQXoB9a2EqswL0bTG7uo0j
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7L6vTEhn2FkQkWTc6fQMiM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TOsRWQ-NqDc13Kr_tRd3ON
          claim_id: c_HQXoB9a2EqswL0bTG7uo0j
          source_id: s_g-xHIqhkj5zGUt_fu2_EFW
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王紀 为同胞（CBDB 记「弟」），王紀 之父／母即 王紳 之父／母。
          source:
            id: s_g-xHIqhkj5zGUt_fu2_EFW
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 285664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285664&o=json
            external_identifier: CBDB:285664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7L6vTEhn2FkQkWTc6fQMiM
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_0-gynM3WPbyYO0VWyR5iOk
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kQgVN3FjWf6BR7HACAhWz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XwokYChuQPWqzFKfa3f2Bv
          claim_id: c_0-gynM3WPbyYO0VWyR5iOk
          source_id: s_x8epU5eB4Vrd3s5Sw78bsf
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王綬 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王綬 之父／母。
          source:
            id: s_x8epU5eB4Vrd3s5Sw78bsf
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 285667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json
            external_identifier: CBDB:285667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kQgVN3FjWf6BR7HACAhWz
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_IktJDAarkkvYP7ldDCe4Zm
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DPFCgxr4LairETxw54Hxu7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aX7tSHqWzyZxiW9ypI42o
          claim_id: c_IktJDAarkkvYP7ldDCe4Zm
          source_id: s_4Q9fe69WTT-3AzW9CidemO
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王組 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王組 之父／母。
          source:
            id: s_4Q9fe69WTT-3AzW9CidemO
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 285666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json
            external_identifier: CBDB:285666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DPFCgxr4LairETxw54Hxu7
        status: active
        display_name: 王組
        merged_into_person_id: null
    - claim:
        id: c_S91kHRFtK0hot5kmyrdI5H
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P6LNk8B5uiXAQwdqQEiL1Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ojYL3s1dkAS1y5kq0Fjhz
          claim_id: c_S91kHRFtK0hot5kmyrdI5H
          source_id: s_I3G1U62OJrjkWAFE-EF2FF
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王紀 为同胞（CBDB 记「弟」），王紀 之父／母即 王縉 之父／母。
          source:
            id: s_I3G1U62OJrjkWAFE-EF2FF
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 285663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285663&o=json
            external_identifier: CBDB:285663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P6LNk8B5uiXAQwdqQEiL1Y
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_evHsBy4DOX9HEAGH7Wl-9L
        subject_person_id: p_ETf8kmCosGHgchW9GUTGiB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XSYooHTQmpa4a4YSkV3US8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E6s_bh_qciZGRstYB-bYVk
          claim_id: c_evHsBy4DOX9HEAGH7Wl-9L
          source_id: s_ZFJT6X1Ug1wuglxMM3UUqr
          stance: supports
          locator: CBDB：兄弟 王紀（202256）之父／母 王絕
          quotation: null
          interpretation_note: 由兄弟关系推断：王紋 与 王紀 为同胞（CBDB 记「兄」），王紀 之父／母即 王紋 之父／母。
          source:
            id: s_ZFJT6X1Ug1wuglxMM3UUqr
            source_type: api_record
            title: 中国历代人物传记资料库：王紋（CBDB 285665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285665&o=json
            external_identifier: CBDB:285665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XSYooHTQmpa4a4YSkV3US8
        status: active
        display_name: 王紋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王絕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王絕，明人物。正德十六年進士，籍贯開州，曾任大夫。（中国历代人物传记资料库 CBDB 285657） | accepted |
| name.primary | 王絕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AoR8GkNH17NPVQc7r3ceML | 王紀 | accepted |
| children | p_7L6vTEhn2FkQkWTc6fQMiM | 王紳 | accepted |
| children | p_8kQgVN3FjWf6BR7HACAhWz | 王綬 | accepted |
| children | p_DPFCgxr4LairETxw54Hxu7 | 王組 | accepted |
| children | p_P6LNk8B5uiXAQwdqQEiL1Y | 王縉 | accepted |
| children | p_XSYooHTQmpa4a4YSkV3US8 | 王紋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 285663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285663&o=json)
- [中国历代人物传记资料库：王絕（CBDB 285657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285657&o=json)
- [中国历代人物传记资料库：王紳（CBDB 285664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285664&o=json)
- [中国历代人物传记资料库：王綬（CBDB 285667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285667&o=json)
- [中国历代人物传记资料库：王紋（CBDB 285665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285665&o=json)
- [中国历代人物传记资料库：王組（CBDB 285666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285666&o=json)
