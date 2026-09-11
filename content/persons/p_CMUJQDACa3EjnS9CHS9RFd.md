---
schema: wang-person/v1
id: p_CMUJQDACa3EjnS9CHS9RFd
status: active
merged_into: null
display_name: 王繼之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGcnYewD14nMU8EEyQ2kLX
        subject_person_id: p_CMUJQDACa3EjnS9CHS9RFd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sQsq1zxV253ETMA6c9QxV8
          claim_id: c_pGcnYewD14nMU8EEyQ2kLX
          source_id: s_GD74EvtruyWSvw5wYaKp9s
          stance: supports
          locator: CBDB:639863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639863）
          source: &a1
            id: s_GD74EvtruyWSvw5wYaKp9s
            source_type: api_record
            title: 中国历代人物传记资料库：王繼之（CBDB 639863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639863&o=json
            external_identifier: CBDB:639863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wotNLrHAuKjSTEmpKpD6Lc
        subject_person_id: p_CMUJQDACa3EjnS9CHS9RFd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼之，清人物。籍贯常州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639863）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZyNr4sT5JVnkmAm_8Cs-kI
          claim_id: c_wotNLrHAuKjSTEmpKpD6Lc
          source_id: s_GD74EvtruyWSvw5wYaKp9s
          stance: supports
          locator: CBDB:639863
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

# 王繼之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼之 | accepted |
| bio.summary | 王繼之，清人物。籍贯常州府，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639863） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼之（CBDB 639863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639863&o=json)
