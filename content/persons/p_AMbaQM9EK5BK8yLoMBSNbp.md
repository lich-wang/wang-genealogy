---
schema: wang-person/v1
id: p_AMbaQM9EK5BK8yLoMBSNbp
status: active
merged_into: null
display_name: 王絲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yUm13sYWQ13uUo9h3XEsZE
        subject_person_id: p_AMbaQM9EK5BK8yLoMBSNbp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TDU6nVwgotHxuupMi6Ugdk
          claim_id: c_yUm13sYWQ13uUo9h3XEsZE
          source_id: s_mmvgM4Bmzg1ukVoVqoA8s7
          stance: supports
          locator: CBDB:1879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1879）
          source: &a1
            id: s_mmvgM4Bmzg1ukVoVqoA8s7
            source_type: api_record
            title: 中国历代人物传记资料库：王絲（CBDB 1879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1879&o=json
            external_identifier: CBDB:1879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iJfQS1SC6L4QK5TAQwXvxB
        subject_person_id: p_AMbaQM9EK5BK8yLoMBSNbp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 989年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKVDTUvPZFV3sU3Jm3HeJd
          claim_id: c_iJfQS1SC6L4QK5TAQwXvxB
          source_id: s_mmvgM4Bmzg1ukVoVqoA8s7
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
        id: c_4ooEvFUJrmmucoFHxJNxJD
        subject_person_id: p_AMbaQM9EK5BK8yLoMBSNbp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1049年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VtG51D1XDgG5rF8rwyVR54
          claim_id: c_4ooEvFUJrmmucoFHxJNxJD
          source_id: s_mmvgM4Bmzg1ukVoVqoA8s7
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
        id: c_3JvG98J9ft9oz5p52QpCWm
        subject_person_id: p_AMbaQM9EK5BK8yLoMBSNbp
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
        - id: cs_A6x1okhBt6B6tHnajBr8Mx
          claim_id: c_3JvG98J9ft9oz5p52QpCWm
          source_id: s_mmvgM4Bmzg1ukVoVqoA8s7
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

# 王絲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王絲 | accepted |
| birth.date | 989年 | accepted |
| death.date | 1049年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王絲（CBDB 1879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1879&o=json)
