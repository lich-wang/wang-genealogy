---
schema: wang-person/v1
id: p_p7yx3PZF9e8ob221v6WFA8
status: active
merged_into: null
display_name: 王遵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vaHyGd3WTLKvmJFkATpTH
        subject_person_id: p_p7yx3PZF9e8ob221v6WFA8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mVJXezscZEKhScWYJmBbLP
          claim_id: c_4vaHyGd3WTLKvmJFkATpTH
          source_id: s_FnETK9mgeMe6U1bNBoHMC5
          stance: supports
          locator: CBDB:310369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310369）
          source: &a1
            id: s_FnETK9mgeMe6U1bNBoHMC5
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 310369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310369&o=json
            external_identifier: CBDB:310369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bbQboLN35yT725ofVUNZas
        subject_person_id: p_p7yx3PZF9e8ob221v6WFA8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵，明人物。嘉靖二十六年進士，籍贯霸州。（中国历代人物传记资料库 CBDB 310369）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G0BgVFf38q6O8yEXBUlkYy
          claim_id: c_bbQboLN35yT725ofVUNZas
          source_id: s_FnETK9mgeMe6U1bNBoHMC5
          stance: supports
          locator: CBDB:310369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6zp2skGWG1inbLzjwidSkA
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p7yx3PZF9e8ob221v6WFA8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tV8qb4Dw5RFxD45HKSSuFv
          claim_id: c_6zp2skGWG1inbLzjwidSkA
          source_id: s_sp-m0GU1dGX_0G0C0bE3wb
          stance: supports
          locator: CBDB：兄弟 王遴（124734）之父／母 王宗義
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵 与 王遴 为同胞（CBDB 记「弟」），王遴 之父／母即 王遵 之父／母。
          source:
            id: s_sp-m0GU1dGX_0G0C0bE3wb
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 310369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310369&o=json
            external_identifier: CBDB:310369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BM46tZGN4EBcE7FUMvw1gL
        status: active
        display_name: 王宗義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fhWt-qTzN0vXfenRn0tj6E
        subject_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p7yx3PZF9e8ob221v6WFA8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_de0bH6ysZSz1y9kORS3qTF
          claim_id: c_fhWt-qTzN0vXfenRn0tj6E
          source_id: s_sp-m0GU1dGX_0G0C0bE3wb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124734 王遴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sp-m0GU1dGX_0G0C0bE3wb
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 310369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310369&o=json
            external_identifier: CBDB:310369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SHuk9Lfw4VDtH93mbkHP9q
        status: active
        display_name: 王遴
        merged_into_person_id: null
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| bio.summary | 王遵，明人物。嘉靖二十六年進士，籍贯霸州。（中国历代人物传记资料库 CBDB 310369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BM46tZGN4EBcE7FUMvw1gL | 王宗義 | accepted |
| other | p_SHuk9Lfw4VDtH93mbkHP9q | 王遴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 310369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310369&o=json)
