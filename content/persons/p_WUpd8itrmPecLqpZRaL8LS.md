---
schema: wang-person/v1
id: p_WUpd8itrmPecLqpZRaL8LS
status: active
merged_into: null
display_name: 王基鴻
cbdb_id: 414152
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQbzAL1ofAMCH558Q5XfGw
        subject_person_id: p_WUpd8itrmPecLqpZRaL8LS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基鴻，清人物。曾任知州。（中国历代人物传记资料库 CBDB 414152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JP7c3RzxnaUdWMWn-a_sYv
          claim_id: c_eQbzAL1ofAMCH558Q5XfGw
          source_id: s_U94FUJKZW2bPcrBHeyQT2N
          stance: supports
          locator: CBDB:414152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_U94FUJKZW2bPcrBHeyQT2N
            source_type: api_record
            title: 中国历代人物传记资料库：王基鴻（CBDB 414152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414152&o=json
            external_identifier: CBDB:414152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:28.654Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yYGK8zc6MR7jPA7wsLRJFd
        subject_person_id: p_WUpd8itrmPecLqpZRaL8LS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yjCXgUymqQsSUWcQH8M542
          claim_id: c_yYGK8zc6MR7jPA7wsLRJFd
          source_id: s_U94FUJKZW2bPcrBHeyQT2N
          stance: supports
          locator: CBDB:414152
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5201-5300）｜历史性依据：CBDB 朝代 = 清
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

# 王基鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王基鴻，清人物。曾任知州。（中国历代人物传记资料库 CBDB 414152） | accepted |
| name.primary | 王基鴻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王基鴻（CBDB 414152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414152&o=json)
