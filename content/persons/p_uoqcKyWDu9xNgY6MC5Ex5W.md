---
schema: wang-person/v1
id: p_uoqcKyWDu9xNgY6MC5Ex5W
status: active
merged_into: null
display_name: 王鵾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9eArb6E9GvKcjp5EctNkJ4
        subject_person_id: p_uoqcKyWDu9xNgY6MC5Ex5W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CkCuS5YZGanQ7tPpwTuB56
          claim_id: c_9eArb6E9GvKcjp5EctNkJ4
          source_id: s_M1cGdXdAHLEY5yLh1f4u63
          stance: supports
          locator: CBDB:501629
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501629）
          source: &a1
            id: s_M1cGdXdAHLEY5yLh1f4u63
            source_type: api_record
            title: 中国历代人物传记资料库：王鵾（CBDB 501629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501629&o=json
            external_identifier: CBDB:501629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6g8xBgXQ56UtJF5yX5zfsq
        subject_person_id: p_uoqcKyWDu9xNgY6MC5Ex5W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵾，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 501629）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2C75a_7c-x7k1eVHqVhBWT
          claim_id: c_6g8xBgXQ56UtJF5yX5zfsq
          source_id: s_M1cGdXdAHLEY5yLh1f4u63
          stance: supports
          locator: CBDB:501629
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

# 王鵾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵾 | accepted |
| bio.summary | 王鵾，明人物。入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 501629） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵾（CBDB 501629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501629&o=json)
