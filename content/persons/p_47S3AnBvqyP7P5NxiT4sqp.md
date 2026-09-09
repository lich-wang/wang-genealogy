---
schema: wang-person/v1
id: p_47S3AnBvqyP7P5NxiT4sqp
status: active
merged_into: null
display_name: 王參
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ny9XLUoqb6mGNhC1U6QCCr
        subject_person_id: p_47S3AnBvqyP7P5NxiT4sqp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2at3iMT7GmguVgJoVQ9Rdu
          claim_id: c_ny9XLUoqb6mGNhC1U6QCCr
          source_id: s_CweF7n2RmMwkYRqCR2wnLk
          stance: supports
          locator: CBDB:445511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445511）
          source: &a1
            id: s_CweF7n2RmMwkYRqCR2wnLk
            source_type: api_record
            title: 中国历代人物传记资料库：王參（CBDB 445511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445511&o=json
            external_identifier: CBDB:445511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3rYKqiyJE25o62EV1rpENP
        subject_person_id: p_47S3AnBvqyP7P5NxiT4sqp
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
        - id: cs_uaEjVhS2jfg6nwVHSQY7t9
          claim_id: c_3rYKqiyJE25o62EV1rpENP
          source_id: s_CweF7n2RmMwkYRqCR2wnLk
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

# 王參

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王參 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王參（CBDB 445511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445511&o=json)
