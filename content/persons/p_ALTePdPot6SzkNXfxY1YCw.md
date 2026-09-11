---
schema: wang-person/v1
id: p_ALTePdPot6SzkNXfxY1YCw
status: active
merged_into: null
display_name: 王煥熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FzdrWoBHiy5B4MbYEYuFEC
        subject_person_id: p_ALTePdPot6SzkNXfxY1YCw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3jubgcsJi2UDUm36s8DQWN
          claim_id: c_FzdrWoBHiy5B4MbYEYuFEC
          source_id: s_THJhY3f5PHyP7Na2UdDXk2
          stance: supports
          locator: CBDB:639301
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639301）
          source: &a1
            id: s_THJhY3f5PHyP7Na2UdDXk2
            source_type: api_record
            title: 中国历代人物传记资料库：王煥熙（CBDB 639301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639301&o=json
            external_identifier: CBDB:639301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n1NzP1zwJLMqmLTeCMf76b
        subject_person_id: p_ALTePdPot6SzkNXfxY1YCw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王煥熙，清人物。籍贯永嘉，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 639301）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FEkIIhXQKVJH-2IotyKUdC
          claim_id: c_n1NzP1zwJLMqmLTeCMf76b
          source_id: s_THJhY3f5PHyP7Na2UdDXk2
          stance: supports
          locator: CBDB:639301
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

# 王煥熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥熙 | accepted |
| bio.summary | 王煥熙，清人物。籍贯永嘉，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 639301） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥熙（CBDB 639301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639301&o=json)
