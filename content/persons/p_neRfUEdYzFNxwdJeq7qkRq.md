---
schema: wang-person/v1
id: p_neRfUEdYzFNxwdJeq7qkRq
status: active
merged_into: null
display_name: 王愚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bcYA7PzBtcFATcSRGwPz6K
        subject_person_id: p_neRfUEdYzFNxwdJeq7qkRq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDkD7qMfB25SKP4DtnUqQc
          claim_id: c_bcYA7PzBtcFATcSRGwPz6K
          source_id: s_PV6vFghoN41XNJXvAWs15Z
          stance: supports
          locator: CBDB:276681
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276681）
          source: &a1
            id: s_PV6vFghoN41XNJXvAWs15Z
            source_type: api_record
            title: 中国历代人物传记资料库：王愚（CBDB 276681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276681&o=json
            external_identifier: CBDB:276681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KSLrkpdGNSPA82MBL6Y5q3
        subject_person_id: p_neRfUEdYzFNxwdJeq7qkRq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愚，明人物。正德六年進士，籍贯南昌府。（中国历代人物传记资料库 CBDB 276681）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VnUy-7WU5Afx75q2mLnHRC
          claim_id: c_KSLrkpdGNSPA82MBL6Y5q3
          source_id: s_PV6vFghoN41XNJXvAWs15Z
          stance: supports
          locator: CBDB:276681
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oDAfq3uOLKEXhU9-p40CLr
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_neRfUEdYzFNxwdJeq7qkRq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-b9ObjlwJyb5rFfJ2z2IqK
          claim_id: c_oDAfq3uOLKEXhU9-p40CLr
          source_id: s_a73Hg-vR5s6aU8pkRhNOOE
          stance: supports
          locator: CBDB：兄弟 王思（68065）之父／母 王俅
          quotation: null
          interpretation_note: 由兄弟关系推断：王愚 与 王思 为同胞（CBDB 记「弟」），王思 之父／母即 王愚 之父／母。
          source:
            id: s_a73Hg-vR5s6aU8pkRhNOOE
            source_type: api_record
            title: 中国历代人物传记资料库：王愚（CBDB 276681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276681&o=json
            external_identifier: CBDB:276681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xxLayHX5L9RnRbPwYHogx1
        status: active
        display_name: 王俅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e9_BV4wJpcLlP7VG2yWYC5
        subject_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_neRfUEdYzFNxwdJeq7qkRq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nV3LExAca-bYOLM4Zehz1U
          claim_id: c_e9_BV4wJpcLlP7VG2yWYC5
          source_id: s_a73Hg-vR5s6aU8pkRhNOOE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68065 王思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a73Hg-vR5s6aU8pkRhNOOE
            source_type: api_record
            title: 中国历代人物传记资料库：王愚（CBDB 276681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276681&o=json
            external_identifier: CBDB:276681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdY8PeNMMQnspsGSLcC9h4
        status: active
        display_name: 王思
        merged_into_person_id: null
---

# 王愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愚 | accepted |
| bio.summary | 王愚，明人物。正德六年進士，籍贯南昌府。（中国历代人物传记资料库 CBDB 276681） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xxLayHX5L9RnRbPwYHogx1 | 王俅 | accepted |
| other | p_TdY8PeNMMQnspsGSLcC9h4 | 王思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愚（CBDB 276681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276681&o=json)
