---
schema: wang-person/v1
id: p_eM83t1HAqttP48fDCqKDat
status: active
merged_into: null
display_name: 王仲愚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QYaqqdhMYKyRmhMsymCRuR
        subject_person_id: p_eM83t1HAqttP48fDCqKDat
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QSVzAx8hQB6MPaz5MPmPNT
          claim_id: c_QYaqqdhMYKyRmhMsymCRuR
          source_id: s_yJuHFB326d3ResbcfiT33P
          stance: supports
          locator: CBDB:71581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71581）
          source: &a1
            id: s_yJuHFB326d3ResbcfiT33P
            source_type: api_record
            title: 中国历代人物传记资料库：王仲愚（CBDB 71581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71581&o=json
            external_identifier: CBDB:71581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qXaa2tp1RibRqktTmCPUgK
        subject_person_id: p_eM83t1HAqttP48fDCqKDat
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1736年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gm8b4FaPzwUAZszskzC9C
          claim_id: c_qXaa2tp1RibRqktTmCPUgK
          source_id: s_yJuHFB326d3ResbcfiT33P
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
        id: c_xJ5XhBx6boyZBEuEoRwNQh
        subject_person_id: p_eM83t1HAqttP48fDCqKDat
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1782年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eh6XkwLSy7hNVz3Qanee4t
          claim_id: c_xJ5XhBx6boyZBEuEoRwNQh
          source_id: s_yJuHFB326d3ResbcfiT33P
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
        id: c_mZU3zEh37tKJsWiTNo7Cjo
        subject_person_id: p_eM83t1HAqttP48fDCqKDat
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲愚（1736年—1782年），清人物。籍贯濟寧直隸州。（中国历代人物传记资料库 CBDB 71581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcUw01qw_pnc3KSPrqWdFy
          claim_id: c_mZU3zEh37tKJsWiTNo7Cjo
          source_id: s_yJuHFB326d3ResbcfiT33P
          stance: supports
          locator: CBDB:71581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王仲愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲愚 | accepted |
| birth.date | 1736年 | accepted |
| death.date | 1782年 | accepted |
| bio.summary | 王仲愚（1736年—1782年），清人物。籍贯濟寧直隸州。（中国历代人物传记资料库 CBDB 71581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲愚（CBDB 71581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71581&o=json)
