---
schema: wang-person/v1
id: p_q7UBZ21PbGajLSvGoNYBpd
status: active
merged_into: null
display_name: 王士鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XcmcbHqtdwePDJj7ZuG5sY
        subject_person_id: p_q7UBZ21PbGajLSvGoNYBpd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pb9GwMDA5BmxrAVPrQq99T
          claim_id: c_XcmcbHqtdwePDJj7ZuG5sY
          source_id: s_CA4pFfrj4EDmLLWh6vEkW9
          stance: supports
          locator: CBDB:71320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71320）
          source: &a1
            id: s_CA4pFfrj4EDmLLWh6vEkW9
            source_type: api_record
            title: 中国历代人物传记资料库：王士鍾（CBDB 71320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71320&o=json
            external_identifier: CBDB:71320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i9HqCK1eqMQmhNzktzVoZe
        subject_person_id: p_q7UBZ21PbGajLSvGoNYBpd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1756年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RhoQcSKzs2DKrxxeR8CAkM
          claim_id: c_i9HqCK1eqMQmhNzktzVoZe
          source_id: s_CA4pFfrj4EDmLLWh6vEkW9
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
        id: c_4j69SRD4KZNqFFsMaUNpmQ
        subject_person_id: p_q7UBZ21PbGajLSvGoNYBpd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZY7zALfTkqaypBqDJE2xEH
          claim_id: c_4j69SRD4KZNqFFsMaUNpmQ
          source_id: s_CA4pFfrj4EDmLLWh6vEkW9
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
        id: c_5HEXuJVFiHtvMDUoT61eqV
        subject_person_id: p_q7UBZ21PbGajLSvGoNYBpd
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
        - id: cs_f6SZSAUpA6FQRNor5ni3qF
          claim_id: c_5HEXuJVFiHtvMDUoT61eqV
          source_id: s_CA4pFfrj4EDmLLWh6vEkW9
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

# 王士鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士鍾 | accepted |
| birth.date | 1756年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士鍾（CBDB 71320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71320&o=json)
