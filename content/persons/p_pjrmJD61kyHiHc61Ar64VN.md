---
schema: wang-person/v1
id: p_pjrmJD61kyHiHc61Ar64VN
status: active
merged_into: null
display_name: 王棣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GspXNAZW1tQLiKaksyJ2Ha
        subject_person_id: p_pjrmJD61kyHiHc61Ar64VN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DwzzXdGydy2ye9Kf6DvhU9
          claim_id: c_GspXNAZW1tQLiKaksyJ2Ha
          source_id: s_HaxmDZdyr5vCvjvHorA4xV
          stance: supports
          locator: CBDB:314303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314303）
          source: &a1
            id: s_HaxmDZdyr5vCvjvHorA4xV
            source_type: api_record
            title: 中国历代人物传记资料库：王棣（CBDB 314303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314303&o=json
            external_identifier: CBDB:314303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RnTq714xQJ9vb4yWr51xwh
        subject_person_id: p_pjrmJD61kyHiHc61Ar64VN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棣，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314303）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wax0VZ2cz-GDoCP6SkQSrg
          claim_id: c_RnTq714xQJ9vb4yWr51xwh
          source_id: s_HaxmDZdyr5vCvjvHorA4xV
          stance: supports
          locator: CBDB:314303
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

# 王棣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棣 | accepted |
| bio.summary | 王棣，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314303） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棣（CBDB 314303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314303&o=json)
