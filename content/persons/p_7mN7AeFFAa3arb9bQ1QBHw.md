---
schema: wang-person/v1
id: p_7mN7AeFFAa3arb9bQ1QBHw
status: active
merged_into: null
display_name: 王同仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97dgZZKKUX9cGbo2MQevy6
        subject_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gcEG7Fj3LUbLoUG48B4XCF
          claim_id: c_97dgZZKKUX9cGbo2MQevy6
          source_id: s_gqXD9Ue8x3PFGx1FKhRJp8
          stance: supports
          locator: CBDB:237757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237757）
          source: &a1
            id: s_gqXD9Ue8x3PFGx1FKhRJp8
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 237757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json
            external_identifier: CBDB:237757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WKfmHV8GDqKneuLTG5PbPf
        subject_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FTbvVBswPTPgcQqJonZWVM
          claim_id: c_WKfmHV8GDqKneuLTG5PbPf
          source_id: s_gqXD9Ue8x3PFGx1FKhRJp8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王同仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同仁（CBDB 237757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json)
