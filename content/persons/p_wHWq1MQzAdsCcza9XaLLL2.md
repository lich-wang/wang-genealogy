---
schema: wang-person/v1
id: p_wHWq1MQzAdsCcza9XaLLL2
status: active
merged_into: null
display_name: 王安定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wL2dQd8NZDq84hJndyUoS7
        subject_person_id: p_wHWq1MQzAdsCcza9XaLLL2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pPfBipFzrQN1vQnwgeWH4s
          claim_id: c_wL2dQd8NZDq84hJndyUoS7
          source_id: s_8TZJZK2yemiUCtrShGkjxK
          stance: supports
          locator: CBDB:637077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637077）
          source: &a1
            id: s_8TZJZK2yemiUCtrShGkjxK
            source_type: api_record
            title: 中国历代人物传记资料库：王安定（CBDB 637077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637077&o=json
            external_identifier: CBDB:637077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gf6XHsncKz61X4Y39w8vYJ
        subject_person_id: p_wHWq1MQzAdsCcza9XaLLL2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安定，清人物。籍贯無錫，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 637077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ttl7oCwI8ibkEB_lLEhqgC
          claim_id: c_gf6XHsncKz61X4Y39w8vYJ
          source_id: s_8TZJZK2yemiUCtrShGkjxK
          stance: supports
          locator: CBDB:637077
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

# 王安定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安定 | accepted |
| bio.summary | 王安定，清人物。籍贯無錫，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 637077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安定（CBDB 637077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637077&o=json)
