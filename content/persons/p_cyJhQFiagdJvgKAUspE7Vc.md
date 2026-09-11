---
schema: wang-person/v1
id: p_cyJhQFiagdJvgKAUspE7Vc
status: active
merged_into: null
display_name: 王心純
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtPe46jbjgRpr3GjvVvtF1
        subject_person_id: p_cyJhQFiagdJvgKAUspE7Vc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Q2i9kcmSq8m5XMDeoFjVT
          claim_id: c_BtPe46jbjgRpr3GjvVvtF1
          source_id: s_Q9L34Mt4xrLU4JEgXgPyr7
          stance: supports
          locator: CBDB:470537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470537）
          source: &a1
            id: s_Q9L34Mt4xrLU4JEgXgPyr7
            source_type: api_record
            title: 中国历代人物传记资料库：王心純（CBDB 470537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470537&o=json
            external_identifier: CBDB:470537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.154Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CDevevKLhZTSFHXZQTBto
        subject_person_id: p_cyJhQFiagdJvgKAUspE7Vc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心純，明人物。曾任兵備道。（中国历代人物传记资料库 CBDB 470537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AgKSGR-cDv92roJ1tpzWVr
          claim_id: c_7CDevevKLhZTSFHXZQTBto
          source_id: s_Q9L34Mt4xrLU4JEgXgPyr7
          stance: supports
          locator: CBDB:470537
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

# 王心純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心純 | accepted |
| bio.summary | 王心純，明人物。曾任兵備道。（中国历代人物传记资料库 CBDB 470537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心純（CBDB 470537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470537&o=json)
