---
schema: wang-person/v1
id: p_imSBxxNjvQXpQgsSbo4yZp
status: active
merged_into: null
display_name: 王銘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kPKANzc3g89nS6f2Fg5FYM
        subject_person_id: p_imSBxxNjvQXpQgsSbo4yZp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XqNVrhrDmVB9mSUZZSifgi
          claim_id: c_kPKANzc3g89nS6f2Fg5FYM
          source_id: s_9DxLfXaKAdX8ENBRgmkBGC
          stance: supports
          locator: CBDB:335744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335744）
          source: &a1
            id: s_9DxLfXaKAdX8ENBRgmkBGC
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 335744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335744&o=json
            external_identifier: CBDB:335744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Wf6cANCFvG6p7Y4ExG4wB
        subject_person_id: p_imSBxxNjvQXpQgsSbo4yZp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335744）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gjQulwP5vDU2JVkojkj6fv
          claim_id: c_7Wf6cANCFvG6p7Y4ExG4wB
          source_id: s_9DxLfXaKAdX8ENBRgmkBGC
          stance: supports
          locator: CBDB:335744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fbhF7uw9TUyphX366oip_O
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_imSBxxNjvQXpQgsSbo4yZp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-UBSoWZzJ2Wil2CRJrVW_B
          claim_id: c_fbhF7uw9TUyphX366oip_O
          source_id: s__F7gY7DbmqKhYfTD1JHU2l
          stance: supports
          locator: CBDB：兄弟 王之臣（205596）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王銘 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王銘 之父／母。
          source:
            id: s__F7gY7DbmqKhYfTD1JHU2l
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 335744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335744&o=json
            external_identifier: CBDB:335744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymucX7NT8ppRqzhncqq8Wc
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rod2SDgQw5Ed8G5NwIGNw0
        subject_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_imSBxxNjvQXpQgsSbo4yZp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XztQh-z-RoRZSBjQD4Cs-w
          claim_id: c_rod2SDgQw5Ed8G5NwIGNw0
          source_id: s__F7gY7DbmqKhYfTD1JHU2l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205596 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__F7gY7DbmqKhYfTD1JHU2l
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 335744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335744&o=json
            external_identifier: CBDB:335744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| bio.summary | 王銘，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymucX7NT8ppRqzhncqq8Wc | 王鼎 | accepted |
| other | p_6fvA7tcbJ3QZeAtYpG1JUJ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 335744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335744&o=json)
