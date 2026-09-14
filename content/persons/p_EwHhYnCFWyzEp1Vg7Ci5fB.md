---
schema: wang-person/v1
id: p_EwHhYnCFWyzEp1Vg7Ci5fB
status: active
merged_into: null
display_name: 王珙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dm4kKZUgq5WuwbfQaN52Fv
        subject_person_id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dkv9Qip2HHxSLJDGGyiid5
          claim_id: c_Dm4kKZUgq5WuwbfQaN52Fv
          source_id: s_x2efQ3TGTqg77zStu6FDWD
          stance: supports
          locator: CBDB:250460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250460）
          source: &a1
            id: s_x2efQ3TGTqg77zStu6FDWD
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 250460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json
            external_identifier: CBDB:250460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GjAWmModDLX687kVjRwAqr
        subject_person_id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250460）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qYb5fgjqi1ei0ht6slmnXU
          claim_id: c_GjAWmModDLX687kVjRwAqr
          source_id: s_x2efQ3TGTqg77zStu6FDWD
          stance: supports
          locator: CBDB:250460
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M6FDy61sBwmVZlAEy2WzCu
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dcUnzLUF_Xa852OIbjI_gZ
          claim_id: c_M6FDy61sBwmVZlAEy2WzCu
          source_id: s_vCjRQFItXMxjZgCzFVooNl
          stance: supports
          locator: CBDB：兄弟 王珩（126638）之父／母 王惟政
          quotation: null
          interpretation_note: 由兄弟关系推断：王珙 与 王珩 为同胞（CBDB 记「兄」），王珩 之父／母即 王珙 之父／母。
          source:
            id: s_vCjRQFItXMxjZgCzFVooNl
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 250460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json
            external_identifier: CBDB:250460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f7t9X2kJV7EUtQDpi6JhvW
        status: active
        display_name: 王惟政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LplrBo0MSAEJWahqVz9Vky
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l4XiX2yi2gnZt9-Hh5ImzE
          claim_id: c_LplrBo0MSAEJWahqVz9Vky
          source_id: s_vCjRQFItXMxjZgCzFVooNl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vCjRQFItXMxjZgCzFVooNl
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 250460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json
            external_identifier: CBDB:250460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
---

# 王珙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珙 | accepted |
| bio.summary | 王珙，明人物。成化十一年進士，籍贯趙州。（中国历代人物传记资料库 CBDB 250460） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f7t9X2kJV7EUtQDpi6JhvW | 王惟政 | accepted |
| other | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珙（CBDB 250460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json)
