---
schema: wang-person/v1
id: p_gAEUdzLME1DHpB9aLkEdq8
status: active
merged_into: null
display_name: 王怡善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2LLWyhLY33osadyVvU6xju
        subject_person_id: p_gAEUdzLME1DHpB9aLkEdq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RZF1E4y3oK9s2WEvEq7yP9
          claim_id: c_2LLWyhLY33osadyVvU6xju
          source_id: s_74J32HYgA8T4aNJ4WLMuvf
          stance: supports
          locator: CBDB:637818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637818）
          source: &a1
            id: s_74J32HYgA8T4aNJ4WLMuvf
            source_type: api_record
            title: 中国历代人物传记资料库：王怡善（CBDB 637818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637818&o=json
            external_identifier: CBDB:637818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tXbUDUEbbj8FTXgtYkG6Vu
        subject_person_id: p_gAEUdzLME1DHpB9aLkEdq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡善，清人物。籍贯上虞，曾任知縣。（中国历代人物传记资料库 CBDB 637818）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lDwAN8sSp-mm1O21AugQcc
          claim_id: c_tXbUDUEbbj8FTXgtYkG6Vu
          source_id: s_74J32HYgA8T4aNJ4WLMuvf
          stance: supports
          locator: CBDB:637818
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

# 王怡善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡善 | accepted |
| bio.summary | 王怡善，清人物。籍贯上虞，曾任知縣。（中国历代人物传记资料库 CBDB 637818） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡善（CBDB 637818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637818&o=json)
