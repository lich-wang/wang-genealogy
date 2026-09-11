---
schema: wang-person/v1
id: p_HLzZFSewHmDfokAkGQfA96
status: active
merged_into: null
display_name: 王國澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ox4tDUYBVS2cPbjRN7HtD9
        subject_person_id: p_HLzZFSewHmDfokAkGQfA96
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e4SjGnb4HbNt7xF7yqbH3f
          claim_id: c_ox4tDUYBVS2cPbjRN7HtD9
          source_id: s_KvnViYrGksLPU8QsFue3GB
          stance: supports
          locator: CBDB:636661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636661）
          source: &a1
            id: s_KvnViYrGksLPU8QsFue3GB
            source_type: api_record
            title: 中国历代人物传记资料库：王國澄（CBDB 636661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636661&o=json
            external_identifier: CBDB:636661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCjD4W8gP6gacikVrmSg8u
        subject_person_id: p_HLzZFSewHmDfokAkGQfA96
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國澄，清人物。籍贯代州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636661）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iuCrqXx8IN7aDs7-tp1pPa
          claim_id: c_dCjD4W8gP6gacikVrmSg8u
          source_id: s_KvnViYrGksLPU8QsFue3GB
          stance: supports
          locator: CBDB:636661
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

# 王國澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國澄 | accepted |
| bio.summary | 王國澄，清人物。籍贯代州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 636661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國澄（CBDB 636661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636661&o=json)
