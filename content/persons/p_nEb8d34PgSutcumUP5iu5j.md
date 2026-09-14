---
schema: wang-person/v1
id: p_nEb8d34PgSutcumUP5iu5j
status: active
merged_into: null
display_name: 王道立
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b76eUUuPhDQwqsTvyf9xRf
        subject_person_id: p_nEb8d34PgSutcumUP5iu5j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAQL9fJ9E9eGpbmiCAqyFQ
          claim_id: c_b76eUUuPhDQwqsTvyf9xRf
          source_id: s_6YKJJm3uP7jiDTZJdKq8aM
          stance: supports
          locator: CBDB:321157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321157）
          source: &a1
            id: s_6YKJJm3uP7jiDTZJdKq8aM
            source_type: api_record
            title: 中国历代人物传记资料库：王道立（CBDB 321157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321157&o=json
            external_identifier: CBDB:321157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D4PP4t3s4arG2j38a2RtEH
        subject_person_id: p_nEb8d34PgSutcumUP5iu5j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道立，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QPq36CtomJ0YIl213CDCLz
          claim_id: c_D4PP4t3s4arG2j38a2RtEH
          source_id: s_6YKJJm3uP7jiDTZJdKq8aM
          stance: supports
          locator: CBDB:321157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zQhZUvluCjUQ1kam0YQB5D
        subject_person_id: p_VLfme2j6JVKmdY6bLRnUg5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nEb8d34PgSutcumUP5iu5j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xc_appvGZIyYhRplRNQ64G
          claim_id: c_zQhZUvluCjUQ1kam0YQB5D
          source_id: s_OIJ1FrxxDrlQxSwgH8PpoJ
          stance: supports
          locator: CBDB：兄弟 王道充（204586）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王道立 与 王道充 为同胞（CBDB 记「弟」），王道充 之父／母即 王道立 之父／母。
          source:
            id: s_OIJ1FrxxDrlQxSwgH8PpoJ
            source_type: api_record
            title: 中国历代人物传记资料库：王道立（CBDB 321157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321157&o=json
            external_identifier: CBDB:321157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLfme2j6JVKmdY6bLRnUg5
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iPqpljh4gzlIPUcW24Tj1J
        subject_person_id: p_T3W95sW7SgUDh6EEZUezDy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nEb8d34PgSutcumUP5iu5j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H32oNCXTIgoLlh0Lb5D_sR
          claim_id: c_iPqpljh4gzlIPUcW24Tj1J
          source_id: s_OIJ1FrxxDrlQxSwgH8PpoJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204586 王道充）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OIJ1FrxxDrlQxSwgH8PpoJ
            source_type: api_record
            title: 中国历代人物传记资料库：王道立（CBDB 321157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321157&o=json
            external_identifier: CBDB:321157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3W95sW7SgUDh6EEZUezDy
        status: active
        display_name: 王道充
        merged_into_person_id: null
---

# 王道立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道立 | accepted |
| bio.summary | 王道立，明人物。嘉靖三十五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 321157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLfme2j6JVKmdY6bLRnUg5 | 王法 | accepted |
| other | p_T3W95sW7SgUDh6EEZUezDy | 王道充 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道立（CBDB 321157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321157&o=json)
