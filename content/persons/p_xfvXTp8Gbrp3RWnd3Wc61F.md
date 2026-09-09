---
schema: wang-person/v1
id: p_xfvXTp8Gbrp3RWnd3Wc61F
status: active
merged_into: null
display_name: 王恤民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A8ws5qEh9YFcB1ecem5fBr
        subject_person_id: p_xfvXTp8Gbrp3RWnd3Wc61F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恤民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AUrxj4JCngYrLK2PJAycbE
          claim_id: c_A8ws5qEh9YFcB1ecem5fBr
          source_id: s_JKLuLzT9NB94oAvL5pRwQc
          stance: supports
          locator: CBDB:578511
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578511）
          source: &a1
            id: s_JKLuLzT9NB94oAvL5pRwQc
            source_type: api_record
            title: 中国历代人物传记资料库：王恤民（CBDB 578511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578511&o=json
            external_identifier: CBDB:578511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YH3fSxnQNTSm6FA7Y2yAX1
        subject_person_id: p_xfvXTp8Gbrp3RWnd3Wc61F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1882年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UE59Vi2MrF1c1kxnBBv5Nc
          claim_id: c_YH3fSxnQNTSm6FA7Y2yAX1
          source_id: s_JKLuLzT9NB94oAvL5pRwQc
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
        id: c_qZqXvHSvdQmDknVhuvMZTo
        subject_person_id: p_xfvXTp8Gbrp3RWnd3Wc61F
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
        - id: cs_oPM34rMUEGv8Mg1tDwvDJS
          claim_id: c_qZqXvHSvdQmDknVhuvMZTo
          source_id: s_JKLuLzT9NB94oAvL5pRwQc
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

# 王恤民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恤民 | accepted |
| birth.date | 1882年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恤民（CBDB 578511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578511&o=json)
