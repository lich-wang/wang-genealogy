---
schema: wang-person/v1
id: p_xT91PgYZaQ28ZWS5H1F1Pb
status: active
merged_into: null
display_name: 王文幹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWGnAw7RSpWECdM52tAkzm
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gyaYvY3p6EoZzqGgQ3kAAG
          claim_id: c_hWGnAw7RSpWECdM52tAkzm
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: CBDB:141823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141823）
          source: &a1
            id: s_1SQTm9bfti1Cf4E7AWrBph
            source_type: api_record
            title: 中国历代人物传记资料库：王文幹（CBDB 141823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json
            external_identifier: CBDB:141823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C4uNnQeXRNN7wNxRActgwo
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2cRYWbZGxGgfso6FDfH6h
          claim_id: c_C4uNnQeXRNN7wNxRActgwo
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
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
        id: c_ueH7jsyKvaRSmoiC4NNL4b
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 844年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZbMyfjZPFgyHwMMWfvqc9
          claim_id: c_ueH7jsyKvaRSmoiC4NNL4b
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
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
        id: c_T6wmP2WGZoMKNBMUTLCUPf
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rcSR8QdutXqGNoPmXzhi7
          claim_id: c_T6wmP2WGZoMKNBMUTLCUPf
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
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

# 王文幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文幹 | accepted |
| birth.date | 792年 | accepted |
| death.date | 844年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文幹（CBDB 141823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json)
