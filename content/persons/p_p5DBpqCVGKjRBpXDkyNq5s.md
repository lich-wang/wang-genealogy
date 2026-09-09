---
schema: wang-person/v1
id: p_p5DBpqCVGKjRBpXDkyNq5s
status: active
merged_into: null
display_name: 王壎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Af15k695nEf9Lib5Pa7mLt
        subject_person_id: p_p5DBpqCVGKjRBpXDkyNq5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DDigpucPXHPeFjQRkk9Zuq
          claim_id: c_Af15k695nEf9Lib5Pa7mLt
          source_id: s_bqfHpgHLfzPAqJm8faPEna
          stance: supports
          locator: CBDB:71288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71288）
          source: &a1
            id: s_bqfHpgHLfzPAqJm8faPEna
            source_type: api_record
            title: 中国历代人物传记资料库：王壎（CBDB 71288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71288&o=json
            external_identifier: CBDB:71288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LVmfDEW3Ugivs1E9TvTB39
        subject_person_id: p_p5DBpqCVGKjRBpXDkyNq5s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJNNGR767M3bxbU2ysSsnE
          claim_id: c_LVmfDEW3Ugivs1E9TvTB39
          source_id: s_bqfHpgHLfzPAqJm8faPEna
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
        id: c_s4zRjN8frMCTfHTcQEZNZh
        subject_person_id: p_p5DBpqCVGKjRBpXDkyNq5s
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZywrDfeGP313Z9Jy3yUSS7
          claim_id: c_s4zRjN8frMCTfHTcQEZNZh
          source_id: s_bqfHpgHLfzPAqJm8faPEna
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
        id: c_TJVajsEUyeQDsARYt23qrr
        subject_person_id: p_p5DBpqCVGKjRBpXDkyNq5s
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
        - id: cs_nsmWZfcBMQkPCPcS6UoZhU
          claim_id: c_TJVajsEUyeQDsARYt23qrr
          source_id: s_bqfHpgHLfzPAqJm8faPEna
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

# 王壎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壎 | accepted |
| birth.date | 1623年 | accepted |
| death.date | 1669年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壎（CBDB 71288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71288&o=json)
