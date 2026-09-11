---
schema: wang-person/v1
id: p_N9VZQUABvEyHYy8tZewpSw
status: active
merged_into: null
display_name: 王秉簶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NkDW13MdDmNAgqyARVSWHe
        subject_person_id: p_N9VZQUABvEyHYy8tZewpSw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉簶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R2aN7CbgjucvNMy1uMr2Ni
          claim_id: c_NkDW13MdDmNAgqyARVSWHe
          source_id: s_oh8KcN5xaWiMskZPab98Lb
          stance: supports
          locator: CBDB:639658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639658）
          source: &a1
            id: s_oh8KcN5xaWiMskZPab98Lb
            source_type: api_record
            title: 中国历代人物传记资料库：王秉簶（CBDB 639658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639658&o=json
            external_identifier: CBDB:639658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49NqbQ6LQHM4M2a4ETJpGC
        subject_person_id: p_N9VZQUABvEyHYy8tZewpSw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉簶，清人物。籍贯融縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 639658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zb1qU1xAg2X5Jo1uZyChfM
          claim_id: c_49NqbQ6LQHM4M2a4ETJpGC
          source_id: s_oh8KcN5xaWiMskZPab98Lb
          stance: supports
          locator: CBDB:639658
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

# 王秉簶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉簶 | accepted |
| bio.summary | 王秉簶，清人物。籍贯融縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 639658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉簶（CBDB 639658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639658&o=json)
