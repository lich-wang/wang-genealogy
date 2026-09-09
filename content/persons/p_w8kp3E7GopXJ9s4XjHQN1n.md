---
schema: wang-person/v1
id: p_w8kp3E7GopXJ9s4XjHQN1n
status: active
merged_into: null
display_name: 王哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d11gjPRDBRNTKEdVTsRe7L
        subject_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sPSNPpTNQQRmd15TbPhY8d
          claim_id: c_d11gjPRDBRNTKEdVTsRe7L
          source_id: s_rkCn4vsGs2tPCNdKBz1UJb
          stance: supports
          locator: CBDB:198811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198811）
          source: &a1
            id: s_rkCn4vsGs2tPCNdKBz1UJb
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 198811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198811&o=json
            external_identifier: CBDB:198811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.514Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3X5efMn3QrK5FDLuCL4vmN
        subject_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1427年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Yi81c6DdLyWvAQdU4kNWE
          claim_id: c_3X5efMn3QrK5FDLuCL4vmN
          source_id: s_rkCn4vsGs2tPCNdKBz1UJb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PfbbRyDDLgD1ZJ3KSDpuQP
        subject_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
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
        - id: cs_tVC8kQ5z65UTp2eBnwPn8M
          claim_id: c_PfbbRyDDLgD1ZJ3KSDpuQP
          source_id: s_rkCn4vsGs2tPCNdKBz1UJb
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

# 王哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王哲 | accepted |
| birth.date | 1427年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王哲（CBDB 198811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198811&o=json)
