---
schema: wang-person/v1
id: p_ShbQcKbhPZJtYL14xZXyTR
status: active
merged_into: null
display_name: 王佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sW5HGfEVQ5UQPP1Y3pyyuD
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CvvRRvvfr85ZuXVYrURc1E
          claim_id: c_sW5HGfEVQ5UQPP1Y3pyyuD
          source_id: s_wm2ikfL3duojoSSPK4pyUC
          stance: supports
          locator: CBDB:202809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202809）
          source: &a1
            id: s_wm2ikfL3duojoSSPK4pyUC
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 202809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202809&o=json
            external_identifier: CBDB:202809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R8393u9V6557EWTShpuBbv
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VvAMdhg7vvwP7HzAFDFQb
          claim_id: c_R8393u9V6557EWTShpuBbv
          source_id: s_wm2ikfL3duojoSSPK4pyUC
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
        id: c_bCAEUZZD6v5ZCW4dyzTQfo
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
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
        - id: cs_m2M53WMRxXr7PxHwS8yBfj
          claim_id: c_bCAEUZZD6v5ZCW4dyzTQfo
          source_id: s_wm2ikfL3duojoSSPK4pyUC
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

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 202809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202809&o=json)
