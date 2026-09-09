---
schema: wang-person/v1
id: p_XjALsq7Jm9wF7qbECn1oH4
status: active
merged_into: null
display_name: 王建立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEsuANCuAzgRJFthDbu3Zs
        subject_person_id: p_XjALsq7Jm9wF7qbECn1oH4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GoDHFev3V1iKpNqNQ87Grt
          claim_id: c_AEsuANCuAzgRJFthDbu3Zs
          source_id: s_C9qdTHX7hnz8tYjCWVpCWU
          stance: supports
          locator: CBDB:45448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45448）
          source: &a1
            id: s_C9qdTHX7hnz8tYjCWVpCWU
            source_type: api_record
            title: 中国历代人物传记资料库：王建立（CBDB 45448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45448&o=json
            external_identifier: CBDB:45448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_X6dZUKUdNpcweXEK94P1j2
        subject_person_id: p_XjALsq7Jm9wF7qbECn1oH4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 871年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hNNQfAzSdsR4nieb7Vravf
          claim_id: c_X6dZUKUdNpcweXEK94P1j2
          source_id: s_C9qdTHX7hnz8tYjCWVpCWU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_r17yrtPfV6DNeXM7DWLP5r
        subject_person_id: p_XjALsq7Jm9wF7qbECn1oH4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 940年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfxVXF3hEXuK7Qe9vqvefz
          claim_id: c_r17yrtPfV6DNeXM7DWLP5r
          source_id: s_C9qdTHX7hnz8tYjCWVpCWU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1pbKhTNKqXjaf2CH5zjtG
        subject_person_id: p_XjALsq7Jm9wF7qbECn1oH4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZMJ7E9WkwFgtTFGHviUBX
          claim_id: c_u1pbKhTNKqXjaf2CH5zjtG
          source_id: s_C9qdTHX7hnz8tYjCWVpCWU
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

# 王建立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建立 | accepted |
| birth.date | 871年 | accepted |
| death.date | 940年 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建立（CBDB 45448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45448&o=json)
