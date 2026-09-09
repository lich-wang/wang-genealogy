---
schema: wang-person/v1
id: p_dU6PvGgbaH45Bh79md732t
status: active
merged_into: null
display_name: 王彥隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qw8erRq3jJ54mX7Yj7yyPt
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7YYg7DeWbZKXVo6B4h6uEu
          claim_id: c_qw8erRq3jJ54mX7Yj7yyPt
          source_id: s_c3num1yraFAopsmZwfvCcU
          stance: supports
          locator: CBDB:17821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17821）
          source: &a1
            id: s_c3num1yraFAopsmZwfvCcU
            source_type: api_record
            title: 中国历代人物传记资料库：王彥隆（CBDB 17821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17821&o=json
            external_identifier: CBDB:17821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NY2z7dLdbrozZzfJPnGCQM
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1078年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dAv672JnF85JpxpQ5aoun
          claim_id: c_NY2z7dLdbrozZzfJPnGCQM
          source_id: s_c3num1yraFAopsmZwfvCcU
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
        id: c_MbsufFnN2aUGHw5PnSLR4D
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1128年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VuZFokUbY7Y1SqdLsU6iS
          claim_id: c_MbsufFnN2aUGHw5PnSLR4D
          source_id: s_c3num1yraFAopsmZwfvCcU
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
        id: c_i9RXUxZgYhEBHCtD7tt9CC
        subject_person_id: p_dU6PvGgbaH45Bh79md732t
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
        - id: cs_DVDgFiMoqsUPGLxoCsGNKt
          claim_id: c_i9RXUxZgYhEBHCtD7tt9CC
          source_id: s_c3num1yraFAopsmZwfvCcU
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

# 王彥隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥隆 | accepted |
| birth.date | 1078年 | accepted |
| death.date | 1128年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥隆（CBDB 17821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17821&o=json)
