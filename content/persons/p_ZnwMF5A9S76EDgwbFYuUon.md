---
schema: wang-person/v1
id: p_ZnwMF5A9S76EDgwbFYuUon
status: active
merged_into: null
display_name: 王昌齡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JPD8oj4U2UUzmAk5U7ANUi
        subject_person_id: p_ZnwMF5A9S76EDgwbFYuUon
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F59s16uHrcRR4XhrRo6uy4
          claim_id: c_JPD8oj4U2UUzmAk5U7ANUi
          source_id: s_xKrCdds1YK4PTzmzaT6st4
          stance: supports
          locator: CBDB:281097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281097）
          source: &a1
            id: s_xKrCdds1YK4PTzmzaT6st4
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 281097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json
            external_identifier: CBDB:281097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_64uW9u2HQF1MYtzuncpEAk
        subject_person_id: p_ZnwMF5A9S76EDgwbFYuUon
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌齡，明人物。景泰五年進士，籍贯渾源州。（中国历代人物传记资料库 CBDB 281097）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9vKdAK1-pREDiRckuKwS7o
          claim_id: c_64uW9u2HQF1MYtzuncpEAk
          source_id: s_xKrCdds1YK4PTzmzaT6st4
          stance: supports
          locator: CBDB:281097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QK3uxFAauhIpeLyfzPbdFJ
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZnwMF5A9S76EDgwbFYuUon
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXILkezOIx9gVw1naFdNed
          claim_id: c_QK3uxFAauhIpeLyfzPbdFJ
          source_id: s_gB5kCgucMGuDBWkSV_h2il
          stance: supports
          locator: CBDB：兄弟 王上齡（198503）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌齡 与 王上齡 为同胞（CBDB 记「弟」），王上齡 之父／母即 王昌齡 之父／母。
          source:
            id: s_gB5kCgucMGuDBWkSV_h2il
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 281097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json
            external_identifier: CBDB:281097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eEdwVvDNjmkAGiPy1oDkFn
        status: active
        display_name: 王懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jIjJVnU6YT4Qm3P8ysbJaf
        subject_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZnwMF5A9S76EDgwbFYuUon
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IIqGeOmR-poUsvGcuQ2p-K
          claim_id: c_jIjJVnU6YT4Qm3P8ysbJaf
          source_id: s_gB5kCgucMGuDBWkSV_h2il
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198503 王上齡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gB5kCgucMGuDBWkSV_h2il
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 281097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json
            external_identifier: CBDB:281097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PNbNcPEUfkwixuHyP9PuYH
        status: active
        display_name: 王上齡
        merged_into_person_id: null
---

# 王昌齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌齡 | accepted |
| bio.summary | 王昌齡，明人物。景泰五年進士，籍贯渾源州。（中国历代人物传记资料库 CBDB 281097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eEdwVvDNjmkAGiPy1oDkFn | 王懋 | accepted |
| other | p_PNbNcPEUfkwixuHyP9PuYH | 王上齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌齡（CBDB 281097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json)
