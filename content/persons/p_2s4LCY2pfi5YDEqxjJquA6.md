---
schema: wang-person/v1
id: p_2s4LCY2pfi5YDEqxjJquA6
status: active
merged_into: null
display_name: 王剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sTpJweLgkyQJA7n6EAHpEm
        subject_person_id: p_2s4LCY2pfi5YDEqxjJquA6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6YyLRZzNJAZ6jeV6PHLKG8
          claim_id: c_sTpJweLgkyQJA7n6EAHpEm
          source_id: s_xtsBziQ9QP5pddd5fJiVSa
          stance: supports
          locator: CBDB:474848
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474848）
          source: &a1
            id: s_xtsBziQ9QP5pddd5fJiVSa
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 474848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474848&o=json
            external_identifier: CBDB:474848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sYGG8AtsfhWdQbd9UJ8H2s
        subject_person_id: p_2s4LCY2pfi5YDEqxjJquA6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛，清人物。曾任把總。（中国历代人物传记资料库 CBDB 474848）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ji20OCIlfNwNIqd-oSkwGE
          claim_id: c_sYGG8AtsfhWdQbd9UJ8H2s
          source_id: s_xtsBziQ9QP5pddd5fJiVSa
          stance: supports
          locator: CBDB:474848
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

# 王剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛 | accepted |
| bio.summary | 王剛，清人物。曾任把總。（中国历代人物传记资料库 CBDB 474848） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 474848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474848&o=json)
