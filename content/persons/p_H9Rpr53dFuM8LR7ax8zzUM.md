---
schema: wang-person/v1
id: p_H9Rpr53dFuM8LR7ax8zzUM
status: active
merged_into: null
display_name: 王科
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5o4ukTHf9pSHcJhNEbsBE6
        subject_person_id: p_H9Rpr53dFuM8LR7ax8zzUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HcNBGzhkrrMbSXABiJUHAh
          claim_id: c_5o4ukTHf9pSHcJhNEbsBE6
          source_id: s_hGnAF6aSEkU88Y6fjiEmVK
          stance: supports
          locator: CBDB:283105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283105）
          source: &a1
            id: s_hGnAF6aSEkU88Y6fjiEmVK
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 283105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json
            external_identifier: CBDB:283105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s12tq9sLpuSAfum7kixcG6
        subject_person_id: p_H9Rpr53dFuM8LR7ax8zzUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3R62MY86Y__O_LRv5dYymp
          claim_id: c_s12tq9sLpuSAfum7kixcG6
          source_id: s_hGnAF6aSEkU88Y6fjiEmVK
          stance: supports
          locator: CBDB:283105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bziGCBS8zLWtJDmDJAvo4V
        subject_person_id: p_VJQopdY7QNQGYKuXURfXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H9Rpr53dFuM8LR7ax8zzUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPEaNPoDwCjPjFSqDIMJ8I
          claim_id: c_bziGCBS8zLWtJDmDJAvo4V
          source_id: s_NoyW6WNBhIeiVUgvrUj_O-
          stance: supports
          locator: CBDB：兄弟 王積（126838）之父／母 王成
          quotation: null
          interpretation_note: 由兄弟关系推断：王科 与 王積 为同胞（CBDB 记「兄」），王積 之父／母即 王科 之父／母。
          source:
            id: s_NoyW6WNBhIeiVUgvrUj_O-
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 283105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json
            external_identifier: CBDB:283105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VJQopdY7QNQGYKuXURfXDN
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CrpnuAisVIXfF0ckF5dpJT
        subject_person_id: p_H9Rpr53dFuM8LR7ax8zzUM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_La7EdP44YnMK6A7Gvg2W3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e7q0E9J9WQLm9lYqcO1zsv
          claim_id: c_CrpnuAisVIXfF0ckF5dpJT
          source_id: s_NoyW6WNBhIeiVUgvrUj_O-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126838 王積）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NoyW6WNBhIeiVUgvrUj_O-
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 283105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json
            external_identifier: CBDB:283105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_La7EdP44YnMK6A7Gvg2W3D
        status: active
        display_name: 王積
        merged_into_person_id: null
---

# 王科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王科 | accepted |
| bio.summary | 王科，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VJQopdY7QNQGYKuXURfXDN | 王成 | accepted |
| other | p_La7EdP44YnMK6A7Gvg2W3D | 王積 | accepted |

## 外部来源

- [中国历代人物传记资料库：王科（CBDB 283105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283105&o=json)
