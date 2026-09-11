---
schema: wang-person/v1
id: p_XZHwAfofVnA9Yr7Xv81tqe
status: active
merged_into: null
display_name: 王朝雍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WNSaUAFNiXUuHjMXp4kRST
        subject_person_id: p_XZHwAfofVnA9Yr7Xv81tqe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a93ZbyhxoNt5JtNNw8P78P
          claim_id: c_WNSaUAFNiXUuHjMXp4kRST
          source_id: s_JfZtHg3sXGhsqM2aVT7AAA
          stance: supports
          locator: CBDB:282728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282728）
          source: &a1
            id: s_JfZtHg3sXGhsqM2aVT7AAA
            source_type: api_record
            title: 中国历代人物传记资料库：王朝雍（CBDB 282728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282728&o=json
            external_identifier: CBDB:282728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZFjh4Fn5FH4i2eGUB45DtA
        subject_person_id: p_XZHwAfofVnA9Yr7Xv81tqe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝雍，明人物。正德十二年進士，籍贯朝邑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 282728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xE2PhQHoCwEg-tvniI9xtu
          claim_id: c_ZFjh4Fn5FH4i2eGUB45DtA
          source_id: s_JfZtHg3sXGhsqM2aVT7AAA
          stance: supports
          locator: CBDB:282728
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

# 王朝雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝雍 | accepted |
| bio.summary | 王朝雍，明人物。正德十二年進士，籍贯朝邑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 282728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝雍（CBDB 282728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282728&o=json)
