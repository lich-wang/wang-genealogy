---
schema: wang-person/v1
id: p_m75VvDC3sRAZLmgAeYZoPt
status: active
merged_into: null
display_name: 王師伋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UMuE9iXit69VzX6QQpDgKj
        subject_person_id: p_m75VvDC3sRAZLmgAeYZoPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師伋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HD6dTf3wMrYNrPNya48GR6
          claim_id: c_UMuE9iXit69VzX6QQpDgKj
          source_id: s_UWvQyXRz4o9DSSAMHcb6hc
          stance: supports
          locator: CBDB:555355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555355）
          source: &a1
            id: s_UWvQyXRz4o9DSSAMHcb6hc
            source_type: api_record
            title: 中国历代人物传记资料库：王師伋（CBDB 555355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555355&o=json
            external_identifier: CBDB:555355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qC6GoPCNSFVSjn2G4TLD9M
        subject_person_id: p_m75VvDC3sRAZLmgAeYZoPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_df7htDGMepc4LFnb1R9LMD
          claim_id: c_qC6GoPCNSFVSjn2G4TLD9M
          source_id: s_UWvQyXRz4o9DSSAMHcb6hc
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

# 王師伋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師伋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師伋（CBDB 555355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555355&o=json)
