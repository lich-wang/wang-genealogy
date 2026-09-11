---
schema: wang-person/v1
id: p_sGhU1nAS1nnKeW7A434jYj
status: active
merged_into: null
display_name: 王姜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zapbo5uuiTDSaHoQg2Ly44
        subject_person_id: p_sGhU1nAS1nnKeW7A434jYj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王姜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxn12fNT1Dd46zeNDYraJF
          claim_id: c_zapbo5uuiTDSaHoQg2Ly44
          source_id: s_cGJJmJCYYW5CKUaGB7KyqL
          stance: supports
          locator: CBDB:566425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（566425）
          source: &a1
            id: s_cGJJmJCYYW5CKUaGB7KyqL
            source_type: api_record
            title: 中国历代人物传记资料库：王姜（CBDB 566425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566425&o=json
            external_identifier: CBDB:566425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AtGLoPFkKUCHkLpc9n5Wyw
        subject_person_id: p_sGhU1nAS1nnKeW7A434jYj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王姜，明人物。籍贯榆林衛。（中国历代人物传记资料库 CBDB 566425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZdRmp2grusbN6Xw92tpTN5
          claim_id: c_AtGLoPFkKUCHkLpc9n5Wyw
          source_id: s_cGJJmJCYYW5CKUaGB7KyqL
          stance: supports
          locator: CBDB:566425
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

# 王姜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王姜 | accepted |
| bio.summary | 王姜，明人物。籍贯榆林衛。（中国历代人物传记资料库 CBDB 566425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王姜（CBDB 566425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=566425&o=json)
