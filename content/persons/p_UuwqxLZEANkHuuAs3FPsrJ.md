---
schema: wang-person/v1
id: p_UuwqxLZEANkHuuAs3FPsrJ
status: active
merged_into: null
display_name: 王得榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t4FPR2yiQAhJJMeQrzxLz1
        subject_person_id: p_UuwqxLZEANkHuuAs3FPsrJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J5eNeWmHWm7KDcMoXWGhJW
          claim_id: c_t4FPR2yiQAhJJMeQrzxLz1
          source_id: s_TTGASbFTnLgor7JXPUdEJm
          stance: supports
          locator: CBDB:637646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637646）
          source: &a1
            id: s_TTGASbFTnLgor7JXPUdEJm
            source_type: api_record
            title: 中国历代人物传记资料库：王得榮（CBDB 637646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637646&o=json
            external_identifier: CBDB:637646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RrLWhw6kELAovkNN31EFER
        subject_person_id: p_UuwqxLZEANkHuuAs3FPsrJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得榮，清人物。籍贯江蘇省，曾任主事。（中国历代人物传记资料库 CBDB 637646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iMKepRsYYjSqsV5l9vY8YT
          claim_id: c_RrLWhw6kELAovkNN31EFER
          source_id: s_TTGASbFTnLgor7JXPUdEJm
          stance: supports
          locator: CBDB:637646
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

# 王得榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得榮 | accepted |
| bio.summary | 王得榮，清人物。籍贯江蘇省，曾任主事。（中国历代人物传记资料库 CBDB 637646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得榮（CBDB 637646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637646&o=json)
