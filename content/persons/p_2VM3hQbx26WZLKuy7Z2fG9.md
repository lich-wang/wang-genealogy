---
schema: wang-person/v1
id: p_2VM3hQbx26WZLKuy7Z2fG9
status: active
merged_into: null
display_name: 王珽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4nK9ffXaqB98FeK3W6e3Nt
        subject_person_id: p_2VM3hQbx26WZLKuy7Z2fG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QLRL3mgUTEtonJwv9fq9La
          claim_id: c_4nK9ffXaqB98FeK3W6e3Nt
          source_id: s_AHVbxEvqt2WT7dKMBy9xYU
          stance: supports
          locator: CBDB:71153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71153）
          source: &a1
            id: s_AHVbxEvqt2WT7dKMBy9xYU
            source_type: api_record
            title: 中国历代人物传记资料库：王珽（CBDB 71153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71153&o=json
            external_identifier: CBDB:71153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZHC9D5dx7NVNEBVHW6cAvi
        subject_person_id: p_2VM3hQbx26WZLKuy7Z2fG9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dj4NA3dLEFQ3DA7cab4KL
          claim_id: c_ZHC9D5dx7NVNEBVHW6cAvi
          source_id: s_AHVbxEvqt2WT7dKMBy9xYU
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
        id: c_8PU37V5gaM8BrkCLzEEDCw
        subject_person_id: p_2VM3hQbx26WZLKuy7Z2fG9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Leubyec4vhTi6zuugE7zH2
          claim_id: c_8PU37V5gaM8BrkCLzEEDCw
          source_id: s_AHVbxEvqt2WT7dKMBy9xYU
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
        id: c_iyy5P2KpptLLNHLmVry116
        subject_person_id: p_2VM3hQbx26WZLKuy7Z2fG9
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
        - id: cs_rRV4WBhWnxTwDdgM1hYS4B
          claim_id: c_iyy5P2KpptLLNHLmVry116
          source_id: s_AHVbxEvqt2WT7dKMBy9xYU
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

# 王珽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珽 | accepted |
| birth.date | 1644年 | accepted |
| death.date | 1699年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珽（CBDB 71153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71153&o=json)
