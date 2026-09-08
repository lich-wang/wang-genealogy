---
schema: wang-person/v1
id: p_rfNi35kMF1FSma9nVH7tNg
status: active
merged_into: null
display_name: 王彦祥
cbdb_id: 34584
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qnCj79g2qwM3knKq25Pjqo
        subject_person_id: p_rfNi35kMF1FSma9nVH7tNg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彦祥
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3x6FpiFeYWdXJMF28RRsoi
          claim_id: c_qnCj79g2qwM3knKq25Pjqo
          source_id: s_E8oVkWzicUr2oy7sEHXWz6
          stance: supports
          locator: Q45426420
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_E8oVkWzicUr2oy7sEHXWz6
            source_type: api_record
            title: 维基数据：王彦祥（Q45426420）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426420
            external_identifier: Q45426420
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_KxyVfDcVsNiPfRfDRVpany
          claim_id: c_qnCj79g2qwM3knKq25Pjqo
          source_id: s_nZGqGfQ2NF4qEVQNq979KR
          stance: supports
          locator: CBDB:34584
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_nZGqGfQ2NF4qEVQNq979KR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥祥（34584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34584&o=json
            external_identifier: CBDB:34584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fr6n9eiHRfBEo8Zo7qTtdC
        subject_person_id: p_rfNi35kMF1FSma9nVH7tNg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB=34584
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_67EdFG2XW97JvyrF9LXMAN
          claim_id: c_fr6n9eiHRfBEo8Zo7qTtdC
          source_id: s_E8oVkWzicUr2oy7sEHXWz6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GZ1tvDNLM4EVMbiMs4MRP9
        subject_person_id: p_rfNi35kMF1FSma9nVH7tNg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P2y97jJhXVBL5SrVuPH2Jb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YagnG2QbuqHvu58GfmarmG
          claim_id: c_GZ1tvDNLM4EVMbiMs4MRP9
          source_id: s_R7Q4MJBKETsoKXUfCBEiDk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_R7Q4MJBKETsoKXUfCBEiDk
            source_type: api_record
            title: 维基数据：王逵（Q45426376）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426376
            external_identifier: Q45426376
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_HJE3i4UZoWPJmPKumufF1y
          claim_id: c_GZ1tvDNLM4EVMbiMs4MRP9
          source_id: s_E8oVkWzicUr2oy7sEHXWz6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_P2y97jJhXVBL5SrVuPH2Jb
        status: active
        display_name: 王逵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彦祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彦祥 | accepted |
| bio.summary | Ming dynasty person CBDB=34584 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_P2y97jJhXVBL5SrVuPH2Jb | 王逵 | accepted |

## 外部来源

- [维基数据：王逵（Q45426376）](https://www.wikidata.org/wiki/Q45426376)
- [维基数据：王彦祥（Q45426420）](https://www.wikidata.org/wiki/Q45426420)
- [CBDB 中国历代人物传记资料库：王彥祥（34584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34584&o=json)
