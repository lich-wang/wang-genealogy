---
schema: wang-person/v1
id: p_RRZuE21H2Z9728UGo3kUPT
status: active
merged_into: null
display_name: 王邦俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vf8mtQZx6k2bAMgZLkzP24
        subject_person_id: p_RRZuE21H2Z9728UGo3kUPT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NbA252BCP3a5kMACEM5kpv
          claim_id: c_Vf8mtQZx6k2bAMgZLkzP24
          source_id: s_2Kf76qGjwb83JiY3ndEfR1
          stance: supports
          locator: CBDB:206190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206190）
          source: &a1
            id: s_2Kf76qGjwb83JiY3ndEfR1
            source_type: api_record
            title: 中国历代人物传记资料库：王邦俊（CBDB 206190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206190&o=json
            external_identifier: CBDB:206190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VfKW8HSSQNPHFCW1nRPVhV
        subject_person_id: p_RRZuE21H2Z9728UGo3kUPT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJpMFYqdx9v5B11egUWjj5
          claim_id: c_VfKW8HSSQNPHFCW1nRPVhV
          source_id: s_2Kf76qGjwb83JiY3ndEfR1
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
        id: c_qSPoPPAa5DdBp8F7HCye8T
        subject_person_id: p_RRZuE21H2Z9728UGo3kUPT
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
        - id: cs_3FY29eG2Sy3bBfBq4vQrp5
          claim_id: c_qSPoPPAa5DdBp8F7HCye8T
          source_id: s_2Kf76qGjwb83JiY3ndEfR1
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

# 王邦俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦俊 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦俊（CBDB 206190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206190&o=json)
