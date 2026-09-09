---
schema: wang-person/v1
id: p_2ivdyuT2PUd95aURm25j3Y
status: active
merged_into: null
display_name: 王俸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qqAEwtjPczGmX2XZtLx3CH
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h89fzjZXiKpYpfZ3GJHyC3
          claim_id: c_qqAEwtjPczGmX2XZtLx3CH
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: CBDB:200767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200767）
          source: &a1
            id: s_yBSfQfimThTBXufFM9ub6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 200767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json
            external_identifier: CBDB:200767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tNJvVAYMaNe4TtCsSPUC3G
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGFdFcJfB4rynxfphXZhd2
          claim_id: c_tNJvVAYMaNe4TtCsSPUC3G
          source_id: s_yBSfQfimThTBXufFM9ub6Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bFfYWeyByiHWZ14dcvTHok
        subject_person_id: p_2ivdyuT2PUd95aURm25j3Y
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
        - id: cs_SZ3hMwS2fEd1q9P1HzGbEs
          claim_id: c_bFfYWeyByiHWZ14dcvTHok
          source_id: s_yBSfQfimThTBXufFM9ub6Q
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

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 200767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200767&o=json)
