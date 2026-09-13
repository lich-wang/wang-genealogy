---
schema: wang-person/v1
id: p_jUTkQfMDCr3w6FBBG7qpZK
status: active
merged_into: null
display_name: 王永盛
cbdb_id: 69121
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DA7MCpuwdpgkY7mc6X3iYo
        subject_person_id: p_jUTkQfMDCr3w6FBBG7qpZK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永盛，清人物。籍贯秦安。（中国历代人物传记资料库 CBDB 69121）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Xt96ZFkmn-keRt5UEAV3pj
          claim_id: c_DA7MCpuwdpgkY7mc6X3iYo
          source_id: s_rAwPYydL4jKLpi4ut8AY4E
          stance: supports
          locator: CBDB:69121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rAwPYydL4jKLpi4ut8AY4E
            source_type: api_record
            title: 中国历代人物传记资料库：王永盛（CBDB 69121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69121&o=json
            external_identifier: CBDB:69121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ndeg7CQXaCz7mge8CyUjjU
        subject_person_id: p_jUTkQfMDCr3w6FBBG7qpZK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L81dEqESzxoianGFdawFcj
          claim_id: c_Ndeg7CQXaCz7mge8CyUjjU
          source_id: s_rAwPYydL4jKLpi4ut8AY4E
          stance: supports
          locator: CBDB:69121
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
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

# 王永盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永盛，清人物。籍贯秦安。（中国历代人物传记资料库 CBDB 69121） | accepted |
| name.primary | 王永盛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永盛（CBDB 69121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69121&o=json)
