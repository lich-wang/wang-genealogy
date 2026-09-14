---
schema: wang-person/v1
id: p_t8shTQbiML52cwU2H4T7BM
status: active
merged_into: null
display_name: 王其定
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vQfYm3AD4JfS65PdyzN4c
        subject_person_id: p_t8shTQbiML52cwU2H4T7BM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GRMGQCvjWR3MMyiKU7vkqG
          claim_id: c_4vQfYm3AD4JfS65PdyzN4c
          source_id: s_wEAMNnmCix2GsTbMihHCzm
          stance: supports
          locator: CBDB:556810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556810）
          source: &a1
            id: s_wEAMNnmCix2GsTbMihHCzm
            source_type: api_record
            title: 中国历代人物传记资料库：王其定（CBDB 556810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json
            external_identifier: CBDB:556810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2EtQVLydrq6PGmufiB9dQn
        subject_person_id: p_t8shTQbiML52cwU2H4T7BM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其定，史料所见人物。本项目依据《中国历代人物传记资料库：王其定（CBDB 556810）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HRt3gSyRKqSg6lPptcM1UG
          claim_id: c_2EtQVLydrq6PGmufiB9dQn
          source_id: s_wEAMNnmCix2GsTbMihHCzm
          stance: supports
          locator: CBDB:556810
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Kt-RssgJBHioskU7OMaOyv
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t8shTQbiML52cwU2H4T7BM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vv0IrqoDaArX-mFnU8kY1e
          claim_id: c_Kt-RssgJBHioskU7OMaOyv
          source_id: s_VCOVKG6aCuE7upvszEHg0Y
          stance: supports
          locator: CBDB：兄弟 王其宖（556806）之父／母 王績燦
          quotation: null
          interpretation_note: 由兄弟关系推断：王其定 与 王其宖 为同胞（CBDB 记「弟」），王其宖 之父／母即 王其定 之父／母。
          source:
            id: s_VCOVKG6aCuE7upvszEHg0Y
            source_type: api_record
            title: 中国历代人物传记资料库：王其定（CBDB 556810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json
            external_identifier: CBDB:556810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sKBWFhRDMwVtBQhCnhiP5H
        status: active
        display_name: 王績燦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0xyP6lbC2xW6ZtwRREQlk4
        subject_person_id: p_kWSA4pVK578quoZM6ya5Ji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t8shTQbiML52cwU2H4T7BM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_breXSOhPPB7keR-JnvVv9c
          claim_id: c_0xyP6lbC2xW6ZtwRREQlk4
          source_id: s_VCOVKG6aCuE7upvszEHg0Y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 556806 王其宖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VCOVKG6aCuE7upvszEHg0Y
            source_type: api_record
            title: 中国历代人物传记资料库：王其定（CBDB 556810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json
            external_identifier: CBDB:556810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kWSA4pVK578quoZM6ya5Ji
        status: active
        display_name: 王其宖
        merged_into_person_id: null
---

# 王其定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其定 | accepted |
| bio.summary | 王其定，史料所见人物。本项目依据《中国历代人物传记资料库：王其定（CBDB 556810）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sKBWFhRDMwVtBQhCnhiP5H | 王績燦 | accepted |
| other | p_kWSA4pVK578quoZM6ya5Ji | 王其宖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王其定（CBDB 556810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556810&o=json)
