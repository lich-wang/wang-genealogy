---
schema: wang-person/v1
id: p_e58PAAbNT1rmaNc6DQb55X
status: active
merged_into: null
display_name: 王敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKv7oJHQkPY6hQX581Yw5L
        subject_person_id: p_e58PAAbNT1rmaNc6DQb55X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FEVQJtUPPVcbDoMPonrjhL
          claim_id: c_rKv7oJHQkPY6hQX581Yw5L
          source_id: s_YNVZxGpN7g6wGLmkjyQL9Y
          stance: supports
          locator: CBDB:239888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239888）
          source: &a1
            id: s_YNVZxGpN7g6wGLmkjyQL9Y
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 239888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json
            external_identifier: CBDB:239888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DcrJYDmCRUPg2ZXkVXSLaR
        subject_person_id: p_e58PAAbNT1rmaNc6DQb55X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NA9YwnsKtKwJiS2ngWC9q6
          claim_id: c_DcrJYDmCRUPg2ZXkVXSLaR
          source_id: s_YNVZxGpN7g6wGLmkjyQL9Y
          stance: supports
          locator: CBDB:239888
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uQnQyPfREu_i9jsmUOgAB8
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e58PAAbNT1rmaNc6DQb55X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bcex7hQlxVIvwxMSTaNel2
          claim_id: c_uQnQyPfREu_i9jsmUOgAB8
          source_id: s_GHA4wDibuxjCPEf668CrRC
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王敞 为同胞（CBDB 记「弟」），王敞 之父／母即 王敏 之父／母。
          source:
            id: s_GHA4wDibuxjCPEf668CrRC
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 239888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json
            external_identifier: CBDB:239888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_14ogWJ1NeYn1acYejdfnia
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HTHTzUvpFEFN2yzyqCXNo6
        subject_person_id: p_e58PAAbNT1rmaNc6DQb55X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LPWlYFmISpC8OWvunUkzjQ
          claim_id: c_HTHTzUvpFEFN2yzyqCXNo6
          source_id: s_GHA4wDibuxjCPEf668CrRC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GHA4wDibuxjCPEf668CrRC
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 239888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json
            external_identifier: CBDB:239888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8Zr493vi2djpmCUjmBf8z
        status: active
        display_name: 王敞
        merged_into_person_id: null
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14ogWJ1NeYn1acYejdfnia | 王斌 | accepted |
| other | p_e8Zr493vi2djpmCUjmBf8z | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 239888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239888&o=json)
