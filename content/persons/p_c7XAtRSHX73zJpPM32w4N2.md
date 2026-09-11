---
schema: wang-person/v1
id: p_c7XAtRSHX73zJpPM32w4N2
status: active
merged_into: null
display_name: 王嘉言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aKrxQ9wvDQhTa1owvu8q25
        subject_person_id: p_c7XAtRSHX73zJpPM32w4N2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nMCfve1KsB1oUKj4adSMc6
          claim_id: c_aKrxQ9wvDQhTa1owvu8q25
          source_id: s_w3zZGkxCL1rVmDxMoBsuoz
          stance: supports
          locator: CBDB:17915
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17915）
          source: &a1
            id: s_w3zZGkxCL1rVmDxMoBsuoz
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 17915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17915&o=json
            external_identifier: CBDB:17915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_shhHDQJiYxSKPbHF5Wrd7g
        subject_person_id: p_c7XAtRSHX73zJpPM32w4N2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 991年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2JAM16x85GHTWr1FgnxR81
          claim_id: c_shhHDQJiYxSKPbHF5Wrd7g
          source_id: s_w3zZGkxCL1rVmDxMoBsuoz
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
        id: c_sCF4LqHC72vzi5yrM3bMXi
        subject_person_id: p_c7XAtRSHX73zJpPM32w4N2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1037年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7yPEi4r4mNvRbj39MLPp9f
          claim_id: c_sCF4LqHC72vzi5yrM3bMXi
          source_id: s_w3zZGkxCL1rVmDxMoBsuoz
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
        id: c_gbSKkqP9f6DuUuMojXNi4y
        subject_person_id: p_c7XAtRSHX73zJpPM32w4N2
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
        - id: cs_JEPVB1bauSUSWsiG6ff5YL
          claim_id: c_gbSKkqP9f6DuUuMojXNi4y
          source_id: s_w3zZGkxCL1rVmDxMoBsuoz
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
  descendants:
    - claim:
        id: c_BcyX_LAhx7r05qMbSl-9Gb
        subject_person_id: p_c7XAtRSHX73zJpPM32w4N2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LT924GXoGnFWCYjaK3sjCr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__dOkqyk5MAvwGEm79l3IUM
          claim_id: c_BcyX_LAhx7r05qMbSl-9Gb
          source_id: s_w3zZGkxCL1rVmDxMoBsuoz
          stance: supports
          locator: CBDB 双向互证（孫 王淑 ⇄ 祖父 王嘉言）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_LT924GXoGnFWCYjaK3sjCr
        status: active
        display_name: 王淑
        merged_into_person_id: null
  other: []
---

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 991年 | accepted |
| death.date | 1037年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LT924GXoGnFWCYjaK3sjCr | 王淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉言（CBDB 17915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17915&o=json)
