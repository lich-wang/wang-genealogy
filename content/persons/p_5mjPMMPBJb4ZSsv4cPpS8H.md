---
schema: wang-person/v1
id: p_5mjPMMPBJb4ZSsv4cPpS8H
status: active
merged_into: null
display_name: 王宗阮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vnoUUCeN3CfztqjkB2C89m
        subject_person_id: p_5mjPMMPBJb4ZSsv4cPpS8H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗阮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQeE6dam5RRRkqjfK9ookf
          claim_id: c_vnoUUCeN3CfztqjkB2C89m
          source_id: s_XGHSyHzmfu3EGrECpY1phX
          stance: supports
          locator: CBDB:383311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383311）
          source: &a1
            id: s_XGHSyHzmfu3EGrECpY1phX
            source_type: api_record
            title: 中国历代人物传记资料库：王宗阮（CBDB 383311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383311&o=json
            external_identifier: CBDB:383311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PUUY4eE7gEZJGw3eC2E3v9
        subject_person_id: p_5mjPMMPBJb4ZSsv4cPpS8H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗阮，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383311）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gwo2fF6bbTThLfaJYeJ43D
          claim_id: c_PUUY4eE7gEZJGw3eC2E3v9
          source_id: s_XGHSyHzmfu3EGrECpY1phX
          stance: supports
          locator: CBDB:383311
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

# 王宗阮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗阮 | accepted |
| bio.summary | 王宗阮，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383311） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗阮（CBDB 383311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383311&o=json)
