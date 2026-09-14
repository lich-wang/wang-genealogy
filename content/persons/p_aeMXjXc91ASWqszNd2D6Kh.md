---
schema: wang-person/v1
id: p_aeMXjXc91ASWqszNd2D6Kh
status: active
merged_into: null
display_name: 王慶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BkJ7SkNHMrgTMB7NBW2XNx
        subject_person_id: p_aeMXjXc91ASWqszNd2D6Kh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3ZZYrLH7gN1C85nwmq9vk
          claim_id: c_BkJ7SkNHMrgTMB7NBW2XNx
          source_id: s_aF97pNAEoUhf7wDH2YNiaa
          stance: supports
          locator: CBDB:301185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301185）
          source: &a1
            id: s_aF97pNAEoUhf7wDH2YNiaa
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 301185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301185&o=json
            external_identifier: CBDB:301185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_trz9faheeti86uopU6bcUj
        subject_person_id: p_aeMXjXc91ASWqszNd2D6Kh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 301185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_73M08WqXquzH_wNqNM4qnw
          claim_id: c_trz9faheeti86uopU6bcUj
          source_id: s_aF97pNAEoUhf7wDH2YNiaa
          stance: supports
          locator: CBDB:301185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_icheABuZzxiDZPnGWbnLmf
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aeMXjXc91ASWqszNd2D6Kh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGCUNdDAHJvCuvNdmkkjMw
          claim_id: c_icheABuZzxiDZPnGWbnLmf
          source_id: s_WJWVsI62Hnjq8ZlUURhJ9F
          stance: supports
          locator: CBDB：兄弟 王德（68161）之父／母 王浥
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王慶 之父／母。
          source:
            id: s_WJWVsI62Hnjq8ZlUURhJ9F
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 301185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301185&o=json
            external_identifier: CBDB:301185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rdQpvSEbMvzFVt6su4bz6E
        status: active
        display_name: 王浥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m1Sq5z-PFecekhF16fpfMn
        subject_person_id: p_aeMXjXc91ASWqszNd2D6Kh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ktDFb9fxWIHlH4L4GL3wG0
          claim_id: c_m1Sq5z-PFecekhF16fpfMn
          source_id: s_WJWVsI62Hnjq8ZlUURhJ9F
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68161 王德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WJWVsI62Hnjq8ZlUURhJ9F
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 301185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301185&o=json
            external_identifier: CBDB:301185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xq77ND3Yirb2ZWfhHcArnK
        status: active
        display_name: 王德
        merged_into_person_id: null
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | 王慶，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 301185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rdQpvSEbMvzFVt6su4bz6E | 王浥 | accepted |
| other | p_xq77ND3Yirb2ZWfhHcArnK | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 301185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301185&o=json)
