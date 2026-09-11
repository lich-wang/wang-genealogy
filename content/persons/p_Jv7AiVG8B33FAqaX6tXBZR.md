---
schema: wang-person/v1
id: p_Jv7AiVG8B33FAqaX6tXBZR
status: active
merged_into: null
display_name: 王鑰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6nqcZSqqdDSNzmwTWLcC39
        subject_person_id: p_Jv7AiVG8B33FAqaX6tXBZR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2CQb1WUe6tpMD5PpMPFZ4U
          claim_id: c_6nqcZSqqdDSNzmwTWLcC39
          source_id: s_qox7DosHn4JRtX1PXGkUQJ
          stance: supports
          locator: CBDB:551134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551134）
          source: &a1
            id: s_qox7DosHn4JRtX1PXGkUQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 551134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551134&o=json
            external_identifier: CBDB:551134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_67XXn4V8jPhTDC4QTNQ6E1
        subject_person_id: p_Jv7AiVG8B33FAqaX6tXBZR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1638年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CwkR9AEhY7n6jyeXSzHb5K
          claim_id: c_67XXn4V8jPhTDC4QTNQ6E1
          source_id: s_qox7DosHn4JRtX1PXGkUQJ
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
        id: c_zqpka5BPPTbJBrqr36h5Cn
        subject_person_id: p_Jv7AiVG8B33FAqaX6tXBZR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰（卒于1638年），明人物。籍贯武功，曾任尚寶司卿、縣教諭、知縣。（中国历代人物传记资料库 CBDB 551134）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6ZO8Mqx8h6OE7A1d7J4SG-
          claim_id: c_zqpka5BPPTbJBrqr36h5Cn
          source_id: s_qox7DosHn4JRtX1PXGkUQJ
          stance: supports
          locator: CBDB:551134
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

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| death.date | 1638年 | accepted |
| bio.summary | 王鑰（卒于1638年），明人物。籍贯武功，曾任尚寶司卿、縣教諭、知縣。（中国历代人物传记资料库 CBDB 551134） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑰（CBDB 551134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551134&o=json)
