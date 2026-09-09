---
schema: wang-person/v1
id: p_Low32hGh4igacNx7mDwuE9
status: active
merged_into: null
display_name: 王烈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kVgZdgKL5AFM5Etwbp2Jw2
        subject_person_id: p_Low32hGh4igacNx7mDwuE9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4cZoHbXSgMyPB8ea7qNPqd
          claim_id: c_kVgZdgKL5AFM5Etwbp2Jw2
          source_id: s_m7jBFeJYc1DWE2ExpqcHBN
          stance: supports
          locator: CBDB:71157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71157）
          source: &a1
            id: s_m7jBFeJYc1DWE2ExpqcHBN
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 71157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71157&o=json
            external_identifier: CBDB:71157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YAGNsGi8Dp2uJREcotwzVn
        subject_person_id: p_Low32hGh4igacNx7mDwuE9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2h21KpScrpKyEEmcEx3y9
          claim_id: c_YAGNsGi8Dp2uJREcotwzVn
          source_id: s_m7jBFeJYc1DWE2ExpqcHBN
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
        id: c_CmF6LauTdRqL1GTYY3NFpK
        subject_person_id: p_Low32hGh4igacNx7mDwuE9
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
        - id: cs_tjRsw2E6zAATN267X27W9L
          claim_id: c_CmF6LauTdRqL1GTYY3NFpK
          source_id: s_m7jBFeJYc1DWE2ExpqcHBN
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

# 王烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烈 | accepted |
| birth.date | 1836年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 71157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71157&o=json)
