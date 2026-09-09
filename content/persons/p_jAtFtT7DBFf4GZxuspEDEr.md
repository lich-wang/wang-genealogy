---
schema: wang-person/v1
id: p_jAtFtT7DBFf4GZxuspEDEr
status: active
merged_into: null
display_name: 王煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V4yxSx9e3W3XdZKV8bg7JY
        subject_person_id: p_jAtFtT7DBFf4GZxuspEDEr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MKWaC3dY4yRSW8Nt1J4Vrn
          claim_id: c_V4yxSx9e3W3XdZKV8bg7JY
          source_id: s_rvh25C8SyVZwN8SCo8n3R6
          stance: supports
          locator: CBDB:36351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36351）
          source: &a1
            id: s_rvh25C8SyVZwN8SCo8n3R6
            source_type: api_record
            title: 中国历代人物传记资料库：王煜（CBDB 36351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36351&o=json
            external_identifier: CBDB:36351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pc8igBUPoSo3cN1o5N79i4
        subject_person_id: p_jAtFtT7DBFf4GZxuspEDEr
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
        - id: cs_FqiQFZzvxN7LBgFra9tdE6
          claim_id: c_Pc8igBUPoSo3cN1o5N79i4
          source_id: s_rvh25C8SyVZwN8SCo8n3R6
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

# 王煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煜（CBDB 36351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36351&o=json)
