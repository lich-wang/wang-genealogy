---
schema: wang-person/v1
id: p_emPwtQi6CHNrUCRS7KLbeq
status: active
merged_into: null
display_name: 王銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bn8Y7zecp56nNHAFZpRDUV
        subject_person_id: p_emPwtQi6CHNrUCRS7KLbeq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qLPzXCmGBJ5F5ACA9KQGB5
          claim_id: c_bn8Y7zecp56nNHAFZpRDUV
          source_id: s_X2JaT66X9TPpkVtT3wQdEk
          stance: supports
          locator: CBDB:66298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66298）
          source: &a1
            id: s_X2JaT66X9TPpkVtT3wQdEk
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 66298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66298&o=json
            external_identifier: CBDB:66298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1x7SdbKcvUYgFo97wQR4Fb
        subject_person_id: p_emPwtQi6CHNrUCRS7KLbeq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1393年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VBCVBE1frfamcZxsUHHj5a
          claim_id: c_1x7SdbKcvUYgFo97wQR4Fb
          source_id: s_X2JaT66X9TPpkVtT3wQdEk
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
        id: c_eVgSJ2RdDbKQ8MyTp4h5oR
        subject_person_id: p_emPwtQi6CHNrUCRS7KLbeq
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
        - id: cs_JuKR7CUKcuZF38pTQZmwSu
          claim_id: c_eVgSJ2RdDbKQ8MyTp4h5oR
          source_id: s_X2JaT66X9TPpkVtT3wQdEk
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

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| death.date | 1393年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 66298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66298&o=json)
