---
schema: wang-person/v1
id: p_SA1Cy3AMjvA4DEqRLoYzP9
status: active
merged_into: null
display_name: 王文某
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_itCam3EAxM8AL8pCu4Aagr
        subject_person_id: p_SA1Cy3AMjvA4DEqRLoYzP9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X7vLDvjB9eJuryQ8Uni6ZE
          claim_id: c_itCam3EAxM8AL8pCu4Aagr
          source_id: s_5dj9PmvfN9RriuwAhNp9Rh
          stance: supports
          locator: CBDB:166390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166390）
          source: &a1
            id: s_5dj9PmvfN9RriuwAhNp9Rh
            source_type: api_record
            title: 中国历代人物传记资料库：王文某（CBDB 166390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166390&o=json
            external_identifier: CBDB:166390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h5JZ6H93XgGAkFMZkFFFUW
        subject_person_id: p_SA1Cy3AMjvA4DEqRLoYzP9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z52Wtgsb9PivZbzeQt3GHB
          claim_id: c_h5JZ6H93XgGAkFMZkFFFUW
          source_id: s_5dj9PmvfN9RriuwAhNp9Rh
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

# 王文某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文某 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文某（CBDB 166390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166390&o=json)
