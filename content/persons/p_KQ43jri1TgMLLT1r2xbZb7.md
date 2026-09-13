---
schema: wang-person/v1
id: p_KQ43jri1TgMLLT1r2xbZb7
status: active
merged_into: null
display_name: 王家材
cbdb_id: 233440
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KW7NM2nbBnmRao8YB9XpzS
        subject_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家材，明人物。籍贯海鹽，入仕庠生，曾任鄉飲賓。（中国历代人物传记资料库 CBDB 233440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PaOsUz7OdVmJi1nHEUQZ97
          claim_id: c_KW7NM2nbBnmRao8YB9XpzS
          source_id: s_iTBAJ1tio1ic9vPQKZ2mS7
          stance: supports
          locator: CBDB:233440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iTBAJ1tio1ic9vPQKZ2mS7
            source_type: api_record
            title: 中国历代人物传记资料库：王家材（CBDB 233440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json
            external_identifier: CBDB:233440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbARyUYEXbupMqu4hetg1k
        subject_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_455z8zB2J6hWs65Q7BCRiz
          claim_id: c_hbARyUYEXbupMqu4hetg1k
          source_id: s_iTBAJ1tio1ic9vPQKZ2mS7
          stance: supports
          locator: CBDB:233440
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
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

# 王家材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家材，明人物。籍贯海鹽，入仕庠生，曾任鄉飲賓。（中国历代人物传记资料库 CBDB 233440） | accepted |
| name.primary | 王家材 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家材（CBDB 233440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json)
