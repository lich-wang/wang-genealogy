---
schema: wang-person/v1
id: p_tf7gWSaDVPC6TL9Xq55fTQ
status: active
merged_into: null
display_name: 王桂蟾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sGYpkFRFxMP23LmpNqk6L5
        subject_person_id: p_tf7gWSaDVPC6TL9Xq55fTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂蟾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DkmEwPA8C8BJccqWcWV1fT
          claim_id: c_sGYpkFRFxMP23LmpNqk6L5
          source_id: s_QWNMyXbNwgMFA6xHYQY2pD
          stance: supports
          locator: CBDB:56772
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56772）
          source: &a1
            id: s_QWNMyXbNwgMFA6xHYQY2pD
            source_type: api_record
            title: 中国历代人物传记资料库：王桂蟾（CBDB 56772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56772&o=json
            external_identifier: CBDB:56772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ueBtBBcnvqJsWYg3HXDu7Z
        subject_person_id: p_tf7gWSaDVPC6TL9Xq55fTQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂蟾，史料所见人物。本项目依据《中国历代人物传记资料库：王桂蟾（CBDB 56772）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vvdSg06zpqI9_0O9Li9kia
          claim_id: c_ueBtBBcnvqJsWYg3HXDu7Z
          source_id: s_QWNMyXbNwgMFA6xHYQY2pD
          stance: supports
          locator: CBDB:56772
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王桂蟾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂蟾 | accepted |
| bio.summary | 王桂蟾，史料所见人物。本项目依据《中国历代人物传记资料库：王桂蟾（CBDB 56772）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂蟾（CBDB 56772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56772&o=json)
