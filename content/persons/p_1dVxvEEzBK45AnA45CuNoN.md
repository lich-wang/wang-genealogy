---
schema: wang-person/v1
id: p_1dVxvEEzBK45AnA45CuNoN
status: active
merged_into: null
display_name: 王昶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8obdnqTamBjTEwKAUByEfM
        subject_person_id: p_1dVxvEEzBK45AnA45CuNoN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L84tjSZ1ZUBJo2CgBTu35r
          claim_id: c_8obdnqTamBjTEwKAUByEfM
          source_id: s_YEA2ZAYCTQ8Dxi7iHzQ1rB
          stance: supports
          locator: CBDB:33556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33556）
          source: &a1
            id: s_YEA2ZAYCTQ8Dxi7iHzQ1rB
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 33556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33556&o=json
            external_identifier: CBDB:33556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gufMZzREZbbSnqseArksEQ
        subject_person_id: p_1dVxvEEzBK45AnA45CuNoN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1724年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSigBTNXQMNW4oL9ckLySZ
          claim_id: c_gufMZzREZbbSnqseArksEQ
          source_id: s_YEA2ZAYCTQ8Dxi7iHzQ1rB
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
        id: c_UPYGVPR8E94LTyiX3FEPNC
        subject_person_id: p_1dVxvEEzBK45AnA45CuNoN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1806年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bAH1K2sKA16wmBzPyg5FMP
          claim_id: c_UPYGVPR8E94LTyiX3FEPNC
          source_id: s_YEA2ZAYCTQ8Dxi7iHzQ1rB
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
        id: c_Bhfs7NgvbTyJNXfhi9RseY
        subject_person_id: p_1dVxvEEzBK45AnA45CuNoN
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
        - id: cs_xCAyDKjY7gAN8j4BepjSxV
          claim_id: c_Bhfs7NgvbTyJNXfhi9RseY
          source_id: s_YEA2ZAYCTQ8Dxi7iHzQ1rB
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

# 王昶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昶 | accepted |
| birth.date | 1724年 | accepted |
| death.date | 1806年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 33556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33556&o=json)
