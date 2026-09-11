---
schema: wang-person/v1
id: p_21mcVq7Xt6u1gPQfobtDW1
status: active
merged_into: null
display_name: 王作
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6EYxd5zD5u4LXHkJWM34CY
        subject_person_id: p_21mcVq7Xt6u1gPQfobtDW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C54BbQWZA65zm9cwivw5BX
          claim_id: c_6EYxd5zD5u4LXHkJWM34CY
          source_id: s_HogPhNJkcLeKrVk7B5pYhz
          stance: supports
          locator: CBDB:214685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214685）
          source: &a1
            id: s_HogPhNJkcLeKrVk7B5pYhz
            source_type: api_record
            title: 中国历代人物传记资料库：王作（CBDB 214685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214685&o=json
            external_identifier: CBDB:214685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_djhuEVdLBnkRjguMuEMHRw
        subject_person_id: p_21mcVq7Xt6u1gPQfobtDW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214685）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1-FrEm9GyoF_MRCJXGwH3V
          claim_id: c_djhuEVdLBnkRjguMuEMHRw
          source_id: s_HogPhNJkcLeKrVk7B5pYhz
          stance: supports
          locator: CBDB:214685
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

# 王作

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作 | accepted |
| bio.summary | 王作，明人物。萬曆二年進士，籍贯孟津。（中国历代人物传记资料库 CBDB 214685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作（CBDB 214685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214685&o=json)
