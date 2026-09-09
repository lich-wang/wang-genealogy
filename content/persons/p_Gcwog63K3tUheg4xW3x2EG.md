---
schema: wang-person/v1
id: p_Gcwog63K3tUheg4xW3x2EG
status: active
merged_into: null
display_name: 王楚賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2id76aKutGsqCVQo63CH7e
        subject_person_id: p_Gcwog63K3tUheg4xW3x2EG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6tC5sK9BD4wYBTukBJQRxs
          claim_id: c_2id76aKutGsqCVQo63CH7e
          source_id: s_c2NxA6ibj9S4pM86uBHGmq
          stance: supports
          locator: CBDB:638763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638763）
          source: &a1
            id: s_c2NxA6ibj9S4pM86uBHGmq
            source_type: api_record
            title: 中国历代人物传记资料库：王楚賢（CBDB 638763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638763&o=json
            external_identifier: CBDB:638763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cM46RdnfXNTVQzV61HBaPn
        subject_person_id: p_Gcwog63K3tUheg4xW3x2EG
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
        - id: cs_JQAbB3WH1CQMDKSmQ4mE8D
          claim_id: c_cM46RdnfXNTVQzV61HBaPn
          source_id: s_c2NxA6ibj9S4pM86uBHGmq
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

# 王楚賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楚賢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楚賢（CBDB 638763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638763&o=json)
