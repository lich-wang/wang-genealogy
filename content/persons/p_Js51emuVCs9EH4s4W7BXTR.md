---
schema: wang-person/v1
id: p_Js51emuVCs9EH4s4W7BXTR
status: active
merged_into: null
display_name: 王鉉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n6HSQJadCix69P6dqJyikQ
        subject_person_id: p_Js51emuVCs9EH4s4W7BXTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7KgmEB8sirUqEy7F3sMsdC
          claim_id: c_n6HSQJadCix69P6dqJyikQ
          source_id: s_Fc5FDJ8bUAEpC5AwZvMe1T
          stance: supports
          locator: CBDB:247849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247849）
          source: &a1
            id: s_Fc5FDJ8bUAEpC5AwZvMe1T
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 247849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json
            external_identifier: CBDB:247849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.146Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YHvD7ijyCWjtmNWgqfsoXn
        subject_person_id: p_Js51emuVCs9EH4s4W7BXTR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_paR6g6U3tNKvoI4HzidJrV
          claim_id: c_YHvD7ijyCWjtmNWgqfsoXn
          source_id: s_Fc5FDJ8bUAEpC5AwZvMe1T
          stance: supports
          locator: CBDB:247849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fd6B3NeSuv_eTctXAyvA8z
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Js51emuVCs9EH4s4W7BXTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__fzNFkuu42vdJ2PUh4z_Rj
          claim_id: c_fd6B3NeSuv_eTctXAyvA8z
          source_id: s_OqXxhcAA9GAttQE9dwRDU2
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉉 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王鉉 之父／母。
          source:
            id: s_OqXxhcAA9GAttQE9dwRDU2
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 247849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json
            external_identifier: CBDB:247849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
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
        id: c_nvoY7cU6Q9kUM8BFrZrYms
        subject_person_id: p_Js51emuVCs9EH4s4W7BXTR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmuocLW7UzSUcxpIgdNSDB
          claim_id: c_nvoY7cU6Q9kUM8BFrZrYms
          source_id: s_OqXxhcAA9GAttQE9dwRDU2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OqXxhcAA9GAttQE9dwRDU2
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 247849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json
            external_identifier: CBDB:247849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | 王鉉，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 247849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247849&o=json)
