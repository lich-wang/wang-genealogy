---
schema: wang-person/v1
id: p_4BkGHtvzcUNjJNE6pJ3kaG
status: active
merged_into: null
display_name: 王黼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_869Mf2o23x7VHvxgxscVTf
        subject_person_id: p_4BkGHtvzcUNjJNE6pJ3kaG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8H41nZva4wSrFPmSp4wka
          claim_id: c_869Mf2o23x7VHvxgxscVTf
          source_id: s_WiBM1HnJdBz1iaEyNSw3A4
          stance: supports
          locator: CBDB:8146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8146）
          source: &a1
            id: s_WiBM1HnJdBz1iaEyNSw3A4
            source_type: api_record
            title: 中国历代人物传记资料库：王黼（CBDB 8146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8146&o=json
            external_identifier: CBDB:8146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_q5f1kQ1wujsEM8RH5uyCVL
        subject_person_id: p_4BkGHtvzcUNjJNE6pJ3kaG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1079年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQUDc1X6JP61ECYwymP5Q5
          claim_id: c_q5f1kQ1wujsEM8RH5uyCVL
          source_id: s_WiBM1HnJdBz1iaEyNSw3A4
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
        id: c_AZ86SgjH5j3orLRxTtG7bP
        subject_person_id: p_4BkGHtvzcUNjJNE6pJ3kaG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSpK1tKnwGB8AAXHYx2f57
          claim_id: c_AZ86SgjH5j3orLRxTtG7bP
          source_id: s_WiBM1HnJdBz1iaEyNSw3A4
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
        id: c_gJ4gCUJ5Ey6sMZoBEd9Ksh
        subject_person_id: p_4BkGHtvzcUNjJNE6pJ3kaG
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
        - id: cs_vvtd2BuFtpWVjJ5y3bE9ZN
          claim_id: c_gJ4gCUJ5Ey6sMZoBEd9Ksh
          source_id: s_WiBM1HnJdBz1iaEyNSw3A4
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

# 王黼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王黼 | accepted |
| birth.date | 1079年 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王黼（CBDB 8146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8146&o=json)
