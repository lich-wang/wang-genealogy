---
schema: wang-person/v1
id: p_fZbxFn7bwWhxetr3LG6dJj
status: active
merged_into: null
display_name: 王雨謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9QGSus3YMPHnAqt736NKqy
        subject_person_id: p_fZbxFn7bwWhxetr3LG6dJj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雨謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bwv95nPQ95YWBCm6jqcP6h
          claim_id: c_9QGSus3YMPHnAqt736NKqy
          source_id: s_GRp9G5c9doBrFFqDbzBJvG
          stance: supports
          locator: CBDB:71741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71741）
          source: &a1
            id: s_GRp9G5c9doBrFFqDbzBJvG
            source_type: api_record
            title: 中国历代人物传记资料库：王雨謙（CBDB 71741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71741&o=json
            external_identifier: CBDB:71741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Jq45NEt195vCPAnLiEmsXp
        subject_person_id: p_fZbxFn7bwWhxetr3LG6dJj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XmpK8Szo4mPD1jmbpeqezX
          claim_id: c_Jq45NEt195vCPAnLiEmsXp
          source_id: s_GRp9G5c9doBrFFqDbzBJvG
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
        id: c_G8KL1V4M15FPvoKZSTE3E7
        subject_person_id: p_fZbxFn7bwWhxetr3LG6dJj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zo4ibPUL9MoyB6YjJMU6p5
          claim_id: c_G8KL1V4M15FPvoKZSTE3E7
          source_id: s_GRp9G5c9doBrFFqDbzBJvG
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
        id: c_px5LxnXQk3nA1oik9ynT4v
        subject_person_id: p_fZbxFn7bwWhxetr3LG6dJj
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
        - id: cs_VCdcQ9HB93RVnfhkCUSMzK
          claim_id: c_px5LxnXQk3nA1oik9ynT4v
          source_id: s_GRp9G5c9doBrFFqDbzBJvG
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

# 王雨謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雨謙 | accepted |
| birth.date | 1599年 | accepted |
| death.date | 1688年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雨謙（CBDB 71741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71741&o=json)
