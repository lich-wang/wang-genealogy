---
schema: wang-person/v1
id: p_Gdmh45jJhX65RN3Eky2yAo
status: active
merged_into: null
display_name: 王敖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4eYnDVNb1D2gGFquz3P7Ub
        subject_person_id: p_Gdmh45jJhX65RN3Eky2yAo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_895KdsXoQCejGGKc9fuLDn
          claim_id: c_4eYnDVNb1D2gGFquz3P7Ub
          source_id: s_KoGYxpYrpBDonK55MAYqvu
          stance: supports
          locator: CBDB:484425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（484425）
          source: &a1
            id: s_KoGYxpYrpBDonK55MAYqvu
            source_type: api_record
            title: 中国历代人物传记资料库：王敖（CBDB 484425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484425&o=json
            external_identifier: CBDB:484425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qNS58Wpk8toMFMVw2iL3cE
        subject_person_id: p_Gdmh45jJhX65RN3Eky2yAo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DdFmzsaK69UM5JE6ojrr5u
          claim_id: c_qNS58Wpk8toMFMVw2iL3cE
          source_id: s_KoGYxpYrpBDonK55MAYqvu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敖（CBDB 484425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=484425&o=json)
