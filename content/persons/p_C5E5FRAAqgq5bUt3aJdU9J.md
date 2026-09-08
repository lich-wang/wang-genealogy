---
schema: wang-person/v1
id: p_C5E5FRAAqgq5bUt3aJdU9J
status: active
merged_into: null
display_name: 王茕立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3L1REfYGeDCHMKxPRVkfZ4
        subject_person_id: p_C5E5FRAAqgq5bUt3aJdU9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茕立
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KLACM4bsYyHu6mCGDb3M66
          claim_id: c_3L1REfYGeDCHMKxPRVkfZ4
          source_id: s_AA45WVqG4hFzN7CXKhKH8t
          stance: supports
          locator: Q45537167
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_AA45WVqG4hFzN7CXKhKH8t
            source_type: api_record
            title: 维基数据：王茕立（Q45537167）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537167
            external_identifier: Q45537167
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_MQJJ8ZvMW4JTyfqMDQ9Eav
          claim_id: c_3L1REfYGeDCHMKxPRVkfZ4
          source_id: s_RAp71VxGC3WareDw2fzQTr
          stance: supports
          locator: CBDB:279737
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_RAp71VxGC3WareDw2fzQTr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王煢立（279737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279737&o=json
            external_identifier: CBDB:279737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8rfqPCwCo29BYCWgiBjNjk
        subject_person_id: p_C5E5FRAAqgq5bUt3aJdU9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 279737
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cgX7zAzBodqDR7p6ghQk81
          claim_id: c_8rfqPCwCo29BYCWgiBjNjk
          source_id: s_AA45WVqG4hFzN7CXKhKH8t
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
        id: c_EFrxd8WTQdXNTmRcM3XnGv
        subject_person_id: p_C5E5FRAAqgq5bUt3aJdU9J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RrddoDHvhLNarezkWkfGUJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7EosipJWifDtvo4bAjCGUN
          claim_id: c_EFrxd8WTQdXNTmRcM3XnGv
          source_id: s_51EvKaBbKzRW9e7MQ5tFVt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_51EvKaBbKzRW9e7MQ5tFVt
            source_type: api_record
            title: 维基数据：王珤（Q45537229）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537229
            external_identifier: Q45537229
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_oVhLChwHykpchQwwPWNxGf
          claim_id: c_EFrxd8WTQdXNTmRcM3XnGv
          source_id: s_AA45WVqG4hFzN7CXKhKH8t
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_RrddoDHvhLNarezkWkfGUJ
        status: active
        display_name: 王珤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茕立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茕立 | accepted |
| bio.summary | Ming dynasty person CBDB = 279737 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RrddoDHvhLNarezkWkfGUJ | 王珤 | accepted |

## 外部来源

- [维基数据：王珤（Q45537229）](https://www.wikidata.org/wiki/Q45537229)
- [维基数据：王茕立（Q45537167）](https://www.wikidata.org/wiki/Q45537167)
- [CBDB 中国历代人物传记资料库：王煢立（279737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279737&o=json)
