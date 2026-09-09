---
schema: wang-person/v1
id: p_XR2vLngReApeX9AQ8f6DVq
status: active
merged_into: null
display_name: 王紳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZSDLoAsDnpU9GB8R42ARF
        subject_person_id: p_XR2vLngReApeX9AQ8f6DVq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cTMA8gb1BkwvBjRdrRG77A
          claim_id: c_FZSDLoAsDnpU9GB8R42ARF
          source_id: s_dboN8Y9B6q5BxxRhEiHvBL
          stance: supports
          locator: CBDB:275666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275666）
          source: &a1
            id: s_dboN8Y9B6q5BxxRhEiHvBL
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 275666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275666&o=json
            external_identifier: CBDB:275666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_263KLutELJVaop5UcbqkgY
        subject_person_id: p_XR2vLngReApeX9AQ8f6DVq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qS3A43aHVfT4GmtMrngyx
          claim_id: c_263KLutELJVaop5UcbqkgY
          source_id: s_dboN8Y9B6q5BxxRhEiHvBL
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

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 275666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275666&o=json)
