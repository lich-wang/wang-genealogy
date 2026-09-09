---
schema: wang-person/v1
id: p_m1KPPjDFuB77sgosg8dB61
status: active
merged_into: null
display_name: 王有為
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cv8DSnCba2VJTpGgiCFp79
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ad5FjKjoQagoPtvcVYLsRt
          claim_id: c_cv8DSnCba2VJTpGgiCFp79
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: CBDB:203722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203722）
          source: &a1
            id: s_gQ1iyNseF56QiyBot1tdVq
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 203722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json
            external_identifier: CBDB:203722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7YhFRrX14JgQ87fWhDb1wz
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A5vqRrz4ZdtURqcia2zVa6
          claim_id: c_7YhFRrX14JgQ87fWhDb1wz
          source_id: s_gQ1iyNseF56QiyBot1tdVq
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
        id: c_yQijHMwbM3NkTfSixBuoNe
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
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
        - id: cs_TvDQQDfN8PquBMv5DAscg8
          claim_id: c_yQijHMwbM3NkTfSixBuoNe
          source_id: s_gQ1iyNseF56QiyBot1tdVq
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

# 王有為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有為 | accepted |
| birth.date | 1507年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
