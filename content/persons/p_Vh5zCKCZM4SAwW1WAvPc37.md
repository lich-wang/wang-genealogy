---
schema: wang-person/v1
id: p_Vh5zCKCZM4SAwW1WAvPc37
status: active
merged_into: null
display_name: 王槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M2gp5XCKXGSsuPEFNmSUAH
        subject_person_id: p_Vh5zCKCZM4SAwW1WAvPc37
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eKZY65ud781UDQ4dWgy97N
          claim_id: c_M2gp5XCKXGSsuPEFNmSUAH
          source_id: s_EN5g3aKcUWPkc9HgvAxqpX
          stance: supports
          locator: CBDB:490933
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490933）
          source: &a1
            id: s_EN5g3aKcUWPkc9HgvAxqpX
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 490933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490933&o=json
            external_identifier: CBDB:490933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJiiCbmdYdG39wLjhh9VmZ
        subject_person_id: p_Vh5zCKCZM4SAwW1WAvPc37
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，清人物。入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 490933）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iT2MQNzS5o-47LL0sD1QUu
          claim_id: c_jJiiCbmdYdG39wLjhh9VmZ
          source_id: s_EN5g3aKcUWPkc9HgvAxqpX
          stance: supports
          locator: CBDB:490933
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

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，清人物。入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 490933） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槐（CBDB 490933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490933&o=json)
