---
schema: wang-person/v1
id: p_X3QXbrc4tizNzCZ5iuGGCc
status: active
merged_into: null
display_name: 王金鏞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijzMK28PebtpdS5H4zhqm3
        subject_person_id: p_X3QXbrc4tizNzCZ5iuGGCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mk1vxwX3FNu59xKcmHFyGw
          claim_id: c_ijzMK28PebtpdS5H4zhqm3
          source_id: s_JJSDxeAYWeEsvkT1m6QeFv
          stance: supports
          locator: CBDB:640535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640535）
          source: &a1
            id: s_JJSDxeAYWeEsvkT1m6QeFv
            source_type: api_record
            title: 中国历代人物传记资料库：王金鏞（CBDB 640535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640535&o=json
            external_identifier: CBDB:640535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d864ehL4Gg9GbJBmJ8JXuz
        subject_person_id: p_X3QXbrc4tizNzCZ5iuGGCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金鏞，清人物。籍贯阜陽，入仕廩貢生，曾任主事。（中国历代人物传记资料库 CBDB 640535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MEmVvo7lp3wL6lvTSsXNSP
          claim_id: c_d864ehL4Gg9GbJBmJ8JXuz
          source_id: s_JJSDxeAYWeEsvkT1m6QeFv
          stance: supports
          locator: CBDB:640535
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

# 王金鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金鏞 | accepted |
| bio.summary | 王金鏞，清人物。籍贯阜陽，入仕廩貢生，曾任主事。（中国历代人物传记资料库 CBDB 640535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金鏞（CBDB 640535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640535&o=json)
