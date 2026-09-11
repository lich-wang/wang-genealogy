---
schema: wang-person/v1
id: p_SF5HR61i1DbpbFP1374WWk
status: active
merged_into: null
display_name: 王德鸞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y529GuJSSJSWHFgNKQ7XQd
        subject_person_id: p_SF5HR61i1DbpbFP1374WWk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德鸞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SXRRKidi3pavcLgXRDDHYJ
          claim_id: c_y529GuJSSJSWHFgNKQ7XQd
          source_id: s_y1j1M773nf6PbJm7LLgaZX
          stance: supports
          locator: CBDB:637726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637726）
          source: &a1
            id: s_y1j1M773nf6PbJm7LLgaZX
            source_type: api_record
            title: 中国历代人物传记资料库：王德鸞（CBDB 637726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637726&o=json
            external_identifier: CBDB:637726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWNGumBqFMHDDrtMNMSk5H
        subject_person_id: p_SF5HR61i1DbpbFP1374WWk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德鸞，清人物。籍贯富順，曾任主事。（中国历代人物传记资料库 CBDB 637726）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p5zcn_nwoqhAP5FMztKG19
          claim_id: c_KWNGumBqFMHDDrtMNMSk5H
          source_id: s_y1j1M773nf6PbJm7LLgaZX
          stance: supports
          locator: CBDB:637726
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

# 王德鸞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德鸞 | accepted |
| bio.summary | 王德鸞，清人物。籍贯富順，曾任主事。（中国历代人物传记资料库 CBDB 637726） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德鸞（CBDB 637726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637726&o=json)
