---
schema: wang-person/v1
id: p_AVokvaBcicFqKENfNAQXYP
status: active
merged_into: null
display_name: 王洇
cbdb_id: 486216
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C3AHq8tMXTY4LmDmfd8B7v
        subject_person_id: p_AVokvaBcicFqKENfNAQXYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洇，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 486216）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_B5LlA90MOJo0bFRNGANeFW
          claim_id: c_C3AHq8tMXTY4LmDmfd8B7v
          source_id: s_a4dgM4w1ma1UGdFzory5u3
          stance: supports
          locator: CBDB:486216
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a4dgM4w1ma1UGdFzory5u3
            source_type: api_record
            title: 中国历代人物传记资料库：王洇（CBDB 486216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486216&o=json
            external_identifier: CBDB:486216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3avKD916H8E7LxVPCPfz18
        subject_person_id: p_AVokvaBcicFqKENfNAQXYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Sk3TP8NB3Az9nDHkYC49Bh
          claim_id: c_3avKD916H8E7LxVPCPfz18
          source_id: s_a4dgM4w1ma1UGdFzory5u3
          stance: supports
          locator: CBDB:486216
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 明
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

# 王洇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洇，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 486216） | accepted |
| name.primary | 王洇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洇（CBDB 486216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486216&o=json)
