---
schema: wang-person/v1
id: p_D4bYYLXvkr1LLZ1UVLG1dr
status: active
merged_into: null
display_name: 王秬香
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yi367VVjHQcZj3yNXsCKAJ
        subject_person_id: p_D4bYYLXvkr1LLZ1UVLG1dr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬香
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bgoAWWucWovMcLGaeMNq4Q
          claim_id: c_Yi367VVjHQcZj3yNXsCKAJ
          source_id: s_7hAokaEn3t8JRoFyz8M3y2
          stance: supports
          locator: CBDB:639677
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639677）
          source: &a1
            id: s_7hAokaEn3t8JRoFyz8M3y2
            source_type: api_record
            title: 中国历代人物传记资料库：王秬香（CBDB 639677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639677&o=json
            external_identifier: CBDB:639677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.014Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q4XVG4q1XurruhkeZZACt6
        subject_person_id: p_D4bYYLXvkr1LLZ1UVLG1dr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬香，清人物。籍贯青州府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ohQFHE_0LDdgf8EtIxkT9C
          claim_id: c_Q4XVG4q1XurruhkeZZACt6
          source_id: s_7hAokaEn3t8JRoFyz8M3y2
          stance: supports
          locator: CBDB:639677
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

# 王秬香

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秬香 | accepted |
| bio.summary | 王秬香，清人物。籍贯青州府，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639677） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秬香（CBDB 639677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639677&o=json)
