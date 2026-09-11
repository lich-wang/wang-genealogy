---
schema: wang-person/v1
id: p_CdYaqfRXAoxCJFykcvvXEY
status: active
merged_into: null
display_name: 王埜翁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E89u7vK8gxRfwkg6RADzn1
        subject_person_id: p_CdYaqfRXAoxCJFykcvvXEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜翁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vBg5sjNbBAYQqWZNFQLwVs
          claim_id: c_E89u7vK8gxRfwkg6RADzn1
          source_id: s_3BsZ7ZegdPeNH5KiAnVNRQ
          stance: supports
          locator: CBDB:16697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（16697）
          source: &a1
            id: s_3BsZ7ZegdPeNH5KiAnVNRQ
            source_type: api_record
            title: 中国历代人物传记资料库：王埜翁（CBDB 16697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16697&o=json
            external_identifier: CBDB:16697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AQiwowLNEAS52oHamQJ8V8
        subject_person_id: p_CdYaqfRXAoxCJFykcvvXEY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1240年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wasCh4kz52WS1yPVUJc1j4
          claim_id: c_AQiwowLNEAS52oHamQJ8V8
          source_id: s_3BsZ7ZegdPeNH5KiAnVNRQ
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
        id: c_D7MxbSkFPUQRTH4eAWHjTz
        subject_person_id: p_CdYaqfRXAoxCJFykcvvXEY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1300年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GRiuxV55a5YJUNFk3FzM7a
          claim_id: c_D7MxbSkFPUQRTH4eAWHjTz
          source_id: s_3BsZ7ZegdPeNH5KiAnVNRQ
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
        id: c_z1pPweXPFRzpm9WHALjSUx
        subject_person_id: p_CdYaqfRXAoxCJFykcvvXEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埜翁（1240年—1300年），元人物。籍贯婺源州，身份为詞人、經學家—易經，入仕徵辟，曾任學正。（中国历代人物传记资料库 CBDB 16697）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R-_YjKY6FX5JvGc5SAISbB
          claim_id: c_z1pPweXPFRzpm9WHALjSUx
          source_id: s_3BsZ7ZegdPeNH5KiAnVNRQ
          stance: supports
          locator: CBDB:16697
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

# 王埜翁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埜翁 | accepted |
| birth.date | 1240年 | accepted |
| death.date | 1300年 | accepted |
| bio.summary | 王埜翁（1240年—1300年），元人物。籍贯婺源州，身份为詞人、經學家—易經，入仕徵辟，曾任學正。（中国历代人物传记资料库 CBDB 16697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埜翁（CBDB 16697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16697&o=json)
