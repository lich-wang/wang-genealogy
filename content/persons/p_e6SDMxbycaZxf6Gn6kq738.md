---
schema: wang-person/v1
id: p_e6SDMxbycaZxf6Gn6kq738
status: active
merged_into: null
display_name: 王審禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kzpFA7G5zG5zsEW9Gjnhn
        subject_person_id: p_e6SDMxbycaZxf6Gn6kq738
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GmZjEvwAkQ833dQv315pno
          claim_id: c_3kzpFA7G5zG5zsEW9Gjnhn
          source_id: s_fa2GTrgEcWmnT634HeQFSe
          stance: supports
          locator: CBDB:12128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12128）
          source: &a1
            id: s_fa2GTrgEcWmnT634HeQFSe
            source_type: api_record
            title: 中国历代人物传记资料库：王審禮（CBDB 12128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12128&o=json
            external_identifier: CBDB:12128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.588Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8H1LS5cFLaEi5KKJCs7iQX
        subject_person_id: p_e6SDMxbycaZxf6Gn6kq738
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
        - id: cs_EuMRiqMYrNANDBGk32nKvU
          claim_id: c_8H1LS5cFLaEi5KKJCs7iQX
          source_id: s_fa2GTrgEcWmnT634HeQFSe
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

# 王審禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審禮 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王審禮（CBDB 12128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12128&o=json)
