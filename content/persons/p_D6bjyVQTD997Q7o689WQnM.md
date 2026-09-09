---
schema: wang-person/v1
id: p_D6bjyVQTD997Q7o689WQnM
status: active
merged_into: null
display_name: 王景峨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5oAbp7jaFjnKbfyFoPhFPh
        subject_person_id: p_D6bjyVQTD997Q7o689WQnM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景峨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UZ4cKbzLi7aNBp8ptjYHbB
          claim_id: c_5oAbp7jaFjnKbfyFoPhFPh
          source_id: s_S2uQqrV8gT9GpupauiA8C3
          stance: supports
          locator: CBDB:343488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343488）
          source: &a1
            id: s_S2uQqrV8gT9GpupauiA8C3
            source_type: api_record
            title: 中国历代人物传记资料库：王景峨（CBDB 343488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343488&o=json
            external_identifier: CBDB:343488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.369Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HiDBYp3nBETxAQHaiH7qz5
        subject_person_id: p_D6bjyVQTD997Q7o689WQnM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Spa5qSs2VX4M375XBdBshy
          claim_id: c_HiDBYp3nBETxAQHaiH7qz5
          source_id: s_S2uQqrV8gT9GpupauiA8C3
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

# 王景峨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景峨 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景峨（CBDB 343488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343488&o=json)
