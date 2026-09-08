---
schema: wang-person/v1
id: p_CssBwdEzPxaEJMK9H91FMQ
status: active
merged_into: null
display_name: 王云
cbdb_id: 257532
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vdUR49JBBL9GVBrzXajcWE
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王云
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Meu9TrJ7B2CeKWfouQpERr
          claim_id: c_vdUR49JBBL9GVBrzXajcWE
          source_id: s_rjRAs59DSneY65g9D1nKaZ
          stance: supports
          locator: Q45491686
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_rjRAs59DSneY65g9D1nKaZ
            source_type: api_record
            title: 维基数据：王云（Q45491686）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491686
            external_identifier: Q45491686
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_EqPxWbCDZeeKVH3Hnt4VhM
          claim_id: c_vdUR49JBBL9GVBrzXajcWE
          source_id: s_bArSiao4yC2E1DUMgeQxjT
          stance: supports
          locator: CBDB:257532
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_bArSiao4yC2E1DUMgeQxjT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王雲（257532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257532&o=json
            external_identifier: CBDB:257532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9JVyLpJ7hk7DKQx2sGMw7
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 257532
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nxdxGryu9XDSDjCVDMgb2E
          claim_id: c_x9JVyLpJ7hk7DKQx2sGMw7
          source_id: s_rjRAs59DSneY65g9D1nKaZ
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
        id: c_1CgNRuWYNfA5p7LyymRog9
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EsV4MpDSbRVm6PYgD8azUG
          claim_id: c_1CgNRuWYNfA5p7LyymRog9
          source_id: s_rjRAs59DSneY65g9D1nKaZ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_CvRDwqXCFU8guyg1yWJX4W
          claim_id: c_1CgNRuWYNfA5p7LyymRog9
          source_id: s_zRCWanQ9G8TMGENN7UWk8v
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zRCWanQ9G8TMGENN7UWk8v
            source_type: api_record
            title: 维基数据：王成（Q45491751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45491751
            external_identifier: Q45491751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_Ns4Cdmr9SZRQforztCwkrA
        status: active
        display_name: 王成
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王云

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王云 | accepted |
| bio.summary | Ming dynasty person CBDB = 257532 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Ns4Cdmr9SZRQforztCwkrA | 王成 | accepted |

## 外部来源

- [维基数据：王成（Q45491751）](https://www.wikidata.org/wiki/Q45491751)
- [维基数据：王云（Q45491686）](https://www.wikidata.org/wiki/Q45491686)
- [CBDB 中国历代人物传记资料库：王雲（257532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257532&o=json)
