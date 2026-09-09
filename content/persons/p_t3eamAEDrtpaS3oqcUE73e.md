---
schema: wang-person/v1
id: p_t3eamAEDrtpaS3oqcUE73e
status: active
merged_into: null
display_name: 王安貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QonVZMJmWPASbkExFF2moa
        subject_person_id: p_t3eamAEDrtpaS3oqcUE73e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s3hPkQrEAPz3QUrDSLxSY8
          claim_id: c_QonVZMJmWPASbkExFF2moa
          source_id: s_ZKSJh6aMMu5WmHPVwbqnwL
          stance: supports
          locator: CBDB:101171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101171）
          source: &a1
            id: s_ZKSJh6aMMu5WmHPVwbqnwL
            source_type: api_record
            title: 中国历代人物传记资料库：王安貞（CBDB 101171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101171&o=json
            external_identifier: CBDB:101171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iKdGkLQM7pYdWZXJB73zK1
        subject_person_id: p_t3eamAEDrtpaS3oqcUE73e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1259年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGrPwtEjNZfiaQ9xy5rndJ
          claim_id: c_iKdGkLQM7pYdWZXJB73zK1
          source_id: s_ZKSJh6aMMu5WmHPVwbqnwL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UAE8WZecWVGrotTdurbsb7
        subject_person_id: p_t3eamAEDrtpaS3oqcUE73e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1320年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7MrPqjMyGpLxXfchnFaA6
          claim_id: c_UAE8WZecWVGrotTdurbsb7
          source_id: s_ZKSJh6aMMu5WmHPVwbqnwL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DPrcrbxxMwA2y3DVhNAYC9
        subject_person_id: p_t3eamAEDrtpaS3oqcUE73e
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
        - id: cs_ogQkj9cV2Q9MNLqFuHmSyJ
          claim_id: c_DPrcrbxxMwA2y3DVhNAYC9
          source_id: s_ZKSJh6aMMu5WmHPVwbqnwL
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

# 王安貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安貞 | accepted |
| birth.date | 1259年 | accepted |
| death.date | 1320年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安貞（CBDB 101171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101171&o=json)
