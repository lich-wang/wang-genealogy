---
schema: wang-person/v1
id: p_ni8t5ZDEQs5Q3QrWmnFVCM
status: active
merged_into: null
display_name: 王灝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQQRriAMBMhkArXTU6gKxb
        subject_person_id: p_ni8t5ZDEQs5Q3QrWmnFVCM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hzs2yTNYbyg4KY1jCdL3FP
          claim_id: c_mQQRriAMBMhkArXTU6gKxb
          source_id: s_AKzFNNfYWy3TNTBWp6TQov
          stance: supports
          locator: CBDB:71306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71306）
          source: &a1
            id: s_AKzFNNfYWy3TNTBWp6TQov
            source_type: api_record
            title: 中国历代人物传记资料库：王灝（CBDB 71306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71306&o=json
            external_identifier: CBDB:71306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZrJgtamJXZ5g8NXnnb9yRw
        subject_person_id: p_ni8t5ZDEQs5Q3QrWmnFVCM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mt8MGZp8Rg7bRZg5hZ2Txk
          claim_id: c_ZrJgtamJXZ5g8NXnnb9yRw
          source_id: s_AKzFNNfYWy3TNTBWp6TQov
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
        id: c_89zvnEafJsps2CFKMDe2ZF
        subject_person_id: p_ni8t5ZDEQs5Q3QrWmnFVCM
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
        - id: cs_FcuFsHSvYoQeig3RG24Ckk
          claim_id: c_89zvnEafJsps2CFKMDe2ZF
          source_id: s_AKzFNNfYWy3TNTBWp6TQov
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

# 王灝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灝 | accepted |
| birth.date | 1688年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王灝（CBDB 71306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71306&o=json)
