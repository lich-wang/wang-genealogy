---
schema: wang-person/v1
id: p_MmHa3r1KxWqnTHyPbbJ4r7
status: active
merged_into: null
display_name: 王阜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ntc5VwXrQVB1bFzrSRDwdp
        subject_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王阜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sn51SHpe481Wz6i7PN4qBd
          claim_id: c_Ntc5VwXrQVB1bFzrSRDwdp
          source_id: s_a61QKMjn3b7koxMK1ayGW7
          stance: supports
          locator: CBDB:10125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10125）
          source: &a1
            id: s_a61QKMjn3b7koxMK1ayGW7
            source_type: api_record
            title: 中国历代人物传记资料库：王阜（CBDB 10125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10125&o=json
            external_identifier: CBDB:10125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5WuhoZneP14g1brKdTavJx
        subject_person_id: p_MmHa3r1KxWqnTHyPbbJ4r7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X3rGHx5GZDN2kt6TZZda83
          claim_id: c_5WuhoZneP14g1brKdTavJx
          source_id: s_a61QKMjn3b7koxMK1ayGW7
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

# 王阜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王阜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王阜（CBDB 10125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10125&o=json)
