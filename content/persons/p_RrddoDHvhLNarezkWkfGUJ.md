---
schema: wang-person/v1
id: p_RrddoDHvhLNarezkWkfGUJ
status: active
merged_into: null
display_name: 王珤
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rZZ7ysTGe64x41Jx4uQpGj
        subject_person_id: p_RrddoDHvhLNarezkWkfGUJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珤，明人物。中国历代人物传记资料库（CBDB）以人物编号 279738 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_394CKK9hL1xEU4E9vEFgCT
          claim_id: c_rZZ7ysTGe64x41Jx4uQpGj
          source_id: s_51EvKaBbKzRW9e7MQ5tFVt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
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
        - id: cs_6Cfe6bJPm5YPa7vyyMoFt6
          claim_id: c_rZZ7ysTGe64x41Jx4uQpGj
          source_id: s_sfq3pZAEGp17V22FryiLBS
          stance: supports
          locator: CBDB:279738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sfq3pZAEGp17V22FryiLBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珤（279738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279738&o=json
            external_identifier: CBDB:279738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:40.718Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iCtLZrdq8n6bNGJmEx9NoP
        subject_person_id: p_RrddoDHvhLNarezkWkfGUJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珤
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MWBFuP9hm3JDNDLfQRz1eo
          claim_id: c_iCtLZrdq8n6bNGJmEx9NoP
          source_id: s_51EvKaBbKzRW9e7MQ5tFVt
          stance: supports
          locator: Q45537229
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
        - id: cs_isdXThDn4K3iGmgEwNyqkD
          claim_id: c_iCtLZrdq8n6bNGJmEx9NoP
          source_id: s_sfq3pZAEGp17V22FryiLBS
          stance: supports
          locator: Q45537229
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a2
        - id: cs_oVhLChwHykpchQwwPWNxGf
          claim_id: c_EFrxd8WTQdXNTmRcM3XnGv
          source_id: s_AA45WVqG4hFzN7CXKhKH8t
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
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
      object_person:
        id: p_C5E5FRAAqgq5bUt3aJdU9J
        status: active
        display_name: 王茕立
        merged_into_person_id: null
  children:
    - claim:
        id: c_wLQVL8uP8qn1LWEsK7fPrW
        subject_person_id: p_RrddoDHvhLNarezkWkfGUJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EjyKGn2xzs1X9jk5Hcjai6
          claim_id: c_wLQVL8uP8qn1LWEsK7fPrW
          source_id: s_vAk2x7KgBiFLSavEUvm6qT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vAk2x7KgBiFLSavEUvm6qT
            source_type: api_record
            title: 维基数据：王傅（Q45537293）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537293
            external_identifier: Q45537293
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_ACaNaLNMmGCFf8Ga2KqFG6
          claim_id: c_wLQVL8uP8qn1LWEsK7fPrW
          source_id: s_51EvKaBbKzRW9e7MQ5tFVt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_83yzu33D3zG1xGPeEb9Ebe
        status: active
        display_name: 王傅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王珤，明人物。中国历代人物传记资料库（CBDB）以人物编号 279738 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王珤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5E5FRAAqgq5bUt3aJdU9J | 王茕立 | accepted |
| children | p_83yzu33D3zG1xGPeEb9Ebe | 王傅 | accepted |

## 外部来源

- [维基数据：王珤（Q45537229）](https://www.wikidata.org/wiki/Q45537229)
- [维基数据：王傅（Q45537293）](https://www.wikidata.org/wiki/Q45537293)
- [维基数据：王茕立（Q45537167）](https://www.wikidata.org/wiki/Q45537167)
- [CBDB 中国历代人物传记资料库：王珤（279738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279738&o=json)
