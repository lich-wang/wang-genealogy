---
schema: wang-person/v1
id: p_Jw3V9gcCZgE2uB8eYMnY58
status: active
merged_into: null
display_name: 王絲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_29gdVH1eDNJtX49oqvGNnM
        subject_person_id: p_Jw3V9gcCZgE2uB8eYMnY58
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vEuawEFN2rBmG4D3rT81vR
          claim_id: c_29gdVH1eDNJtX49oqvGNnM
          source_id: s_GtG9A2SyQ1ek7ar6jy3MbJ
          stance: supports
          locator: CBDB:327964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327964）
          source: &a1
            id: s_GtG9A2SyQ1ek7ar6jy3MbJ
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 327964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json
            external_identifier: CBDB:327964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i5dgSmy1uea6LaZRK6k3HN
        subject_person_id: p_Jw3V9gcCZgE2uB8eYMnY58
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絲，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B64qNtzFeDDv7H41pQ5QD3
          claim_id: c_i5dgSmy1uea6LaZRK6k3HN
          source_id: s_GtG9A2SyQ1ek7ar6jy3MbJ
          stance: supports
          locator: CBDB:327964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EW9JwGEmTyZjmaLg8JzQ0u
        subject_person_id: p_SJyiQsStHWbHq3jTTvu2vD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jw3V9gcCZgE2uB8eYMnY58
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FwRL5CVTuqK1BPI1p1_MCR
          claim_id: c_EW9JwGEmTyZjmaLg8JzQ0u
          source_id: s_TrMHkXuU21FF9msb42A1se
          stance: supports
          locator: CBDB：兄弟 王以纁（205075）之父／母 王楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王絲 与 王以纁 为同胞（CBDB 记「兄」），王以纁 之父／母即 王絲 之父／母。
          source:
            id: s_TrMHkXuU21FF9msb42A1se
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 327964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json
            external_identifier: CBDB:327964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJyiQsStHWbHq3jTTvu2vD
        status: active
        display_name: 王楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nFMsYTy5NvwK92x6C-FiT0
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Jw3V9gcCZgE2uB8eYMnY58
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bEZ8VwC1w4huKeEpVyWEjp
          claim_id: c_nFMsYTy5NvwK92x6C-FiT0
          source_id: s_TrMHkXuU21FF9msb42A1se
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205075 王以纁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TrMHkXuU21FF9msb42A1se
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 327964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json
            external_identifier: CBDB:327964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
---

# 王絲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王絲 | accepted |
| bio.summary | 王絲，明人物。嘉靖四十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 327964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJyiQsStHWbHq3jTTvu2vD | 王楫 | accepted |
| other | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王絲（CBDB 327964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327964&o=json)
