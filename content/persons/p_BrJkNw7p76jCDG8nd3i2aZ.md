---
schema: wang-person/v1
id: p_BrJkNw7p76jCDG8nd3i2aZ
status: active
merged_into: null
display_name: 王鑒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Qi1DyYy8B2p9rWJNckWr8
        subject_person_id: p_BrJkNw7p76jCDG8nd3i2aZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5cTah16gArF5mbAXtHFiHr
          claim_id: c_5Qi1DyYy8B2p9rWJNckWr8
          source_id: s_EfeVGSDwR9GDMtg2QAmU3t
          stance: supports
          locator: CBDB:45853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45853）
          source: &a1
            id: s_EfeVGSDwR9GDMtg2QAmU3t
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 45853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45853&o=json
            external_identifier: CBDB:45853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g69J7uEPhkBqi6q967Sity
        subject_person_id: p_BrJkNw7p76jCDG8nd3i2aZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒，宋人物。曾任宣德郎、皇城副使。（中国历代人物传记资料库 CBDB 45853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OrZfftVZLbRyY2nnUG43Oi
          claim_id: c_g69J7uEPhkBqi6q967Sity
          source_id: s_EfeVGSDwR9GDMtg2QAmU3t
          stance: supports
          locator: CBDB:45853
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

# 王鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒 | accepted |
| bio.summary | 王鑒，宋人物。曾任宣德郎、皇城副使。（中国历代人物传记资料库 CBDB 45853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 45853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45853&o=json)
