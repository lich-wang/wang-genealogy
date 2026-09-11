---
schema: wang-person/v1
id: p_xDr4NHjZFUhRWbvucZtNmA
status: active
merged_into: null
display_name: 王銳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1rPKwap4uJ1HNC91s6W4T3
        subject_person_id: p_xDr4NHjZFUhRWbvucZtNmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bPLF7V479GL8Tvu5dMXrDG
          claim_id: c_1rPKwap4uJ1HNC91s6W4T3
          source_id: s_pk3d1sHZS1Jy4cHqh2hxQQ
          stance: supports
          locator: CBDB:239115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239115）
          source: &a1
            id: s_pk3d1sHZS1Jy4cHqh2hxQQ
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 239115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239115&o=json
            external_identifier: CBDB:239115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g3RKCyG61pbmsHHghasS3J
        subject_person_id: p_xDr4NHjZFUhRWbvucZtNmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，明人物。正统十年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 239115）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SAEudryYgI_21NnRD9fXIP
          claim_id: c_g3RKCyG61pbmsHHghasS3J
          source_id: s_pk3d1sHZS1Jy4cHqh2hxQQ
          stance: supports
          locator: CBDB:239115
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

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，明人物。正统十年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 239115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 239115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239115&o=json)
