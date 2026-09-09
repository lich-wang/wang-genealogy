---
schema: wang-person/v1
id: p_sQVd7p11D4wrCHnR6TRGay
status: active
merged_into: null
display_name: 王慶祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6s8sFNHBp2DS4XRtQW4XPt
        subject_person_id: p_sQVd7p11D4wrCHnR6TRGay
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9WDEUK5NJzffWYLG4E2LD
          claim_id: c_6s8sFNHBp2DS4XRtQW4XPt
          source_id: s_8gyN8qLa9bZhQrXdDssM9M
          stance: supports
          locator: CBDB:117605
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117605）
          source: &a1
            id: s_8gyN8qLa9bZhQrXdDssM9M
            source_type: api_record
            title: 中国历代人物传记资料库：王慶祥（CBDB 117605）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117605&o=json
            external_identifier: CBDB:117605
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mhaUZC79Jpx39rrcdSa93a
        subject_person_id: p_sQVd7p11D4wrCHnR6TRGay
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uPFbMjzLtdURkgW7Qg3LV9
          claim_id: c_mhaUZC79Jpx39rrcdSa93a
          source_id: s_8gyN8qLa9bZhQrXdDssM9M
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

# 王慶祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶祥 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶祥（CBDB 117605）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117605&o=json)
