---
schema: wang-person/v1
id: p_ywPyejdWUMZBTa7FQwbhg2
status: active
merged_into: null
display_name: 王德明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4revWV1qEfYpHecTGYr7dM
        subject_person_id: p_ywPyejdWUMZBTa7FQwbhg2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5bW8wWZwUiqvH7cSA6AG3M
          claim_id: c_4revWV1qEfYpHecTGYr7dM
          source_id: s_vbBcNBn3i7DPyRGFgVmHZL
          stance: supports
          locator: CBDB:126818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126818）
          source: &a1
            id: s_vbBcNBn3i7DPyRGFgVmHZL
            source_type: api_record
            title: 中国历代人物传记资料库：王德明（CBDB 126818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126818&o=json
            external_identifier: CBDB:126818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9EpcvPtXm5u3vCGZAuJwLm
        subject_person_id: p_ywPyejdWUMZBTa7FQwbhg2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1482年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1uMRrSm5HDWtVLM26nqzE
          claim_id: c_9EpcvPtXm5u3vCGZAuJwLm
          source_id: s_vbBcNBn3i7DPyRGFgVmHZL
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
        id: c_NRtbw15rQRes3q4EbGYAJo
        subject_person_id: p_ywPyejdWUMZBTa7FQwbhg2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gh9u8efvFk1w8p7qH9JLUr
          claim_id: c_NRtbw15rQRes3q4EbGYAJo
          source_id: s_vbBcNBn3i7DPyRGFgVmHZL
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
        id: c_h3JL98ArWLKzSAKG3Ghtwk
        subject_person_id: p_ywPyejdWUMZBTa7FQwbhg2
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
        - id: cs_rytVN6HCVFZ2G2P7BrPxHY
          claim_id: c_h3JL98ArWLKzSAKG3Ghtwk
          source_id: s_vbBcNBn3i7DPyRGFgVmHZL
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

# 王德明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德明 | accepted |
| birth.date | 1482年 | accepted |
| death.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德明（CBDB 126818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126818&o=json)
