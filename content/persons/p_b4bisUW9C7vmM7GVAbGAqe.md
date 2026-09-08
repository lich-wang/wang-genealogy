---
schema: wang-person/v1
id: p_b4bisUW9C7vmM7GVAbGAqe
status: active
merged_into: null
display_name: 王大韶
cbdb_id: 226560
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yAn9qcJBWwmfGgPSij11Az
        subject_person_id: p_b4bisUW9C7vmM7GVAbGAqe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大韶，明人物。CBDB 记录其曾任戶部主事、提刑按察使司僉事。中国历代人物传记资料库（CBDB）以人物编号 226560 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_WSDMJQvrJ1bUPVjDo2hN3W
          claim_id: c_yAn9qcJBWwmfGgPSij11Az
          source_id: s_F5JzhaMa2TmiGmre4CPs6s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_F5JzhaMa2TmiGmre4CPs6s
            source_type: api_record
            title: 维基数据：王大韶（Q45528350）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528350
            external_identifier: Q45528350
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.882Z
            metadata_json: null
        - id: cs_U_6R5S1ZbG19jVyMX2Y5q5
          claim_id: c_yAn9qcJBWwmfGgPSij11Az
          source_id: s_dMHH8ff3GjpjK53w9ptE9K
          stance: supports
          locator: CBDB:226560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dMHH8ff3GjpjK53w9ptE9K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王韶（226560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226560&o=json
            external_identifier: CBDB:226560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.065Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6GaBW81DdewNhKKpka22AY
        subject_person_id: p_b4bisUW9C7vmM7GVAbGAqe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大韶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CjcuYXfDZhoS1N5twao8DH
          claim_id: c_6GaBW81DdewNhKKpka22AY
          source_id: s_dMHH8ff3GjpjK53w9ptE9K
          stance: supports
          locator: Q45528350
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_awUxreg6sFoZeUKyMrBTeC
          claim_id: c_6GaBW81DdewNhKKpka22AY
          source_id: s_F5JzhaMa2TmiGmre4CPs6s
          stance: supports
          locator: Q45528350
          quotation: null
          interpretation_note: null
          source:
            id: s_F5JzhaMa2TmiGmre4CPs6s
            source_type: api_record
            title: 维基数据：王大韶（Q45528350）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528350
            external_identifier: Q45528350
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.882Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GRSq63ZFtB3CJb2a6XGnvH
        subject_person_id: p_vHxGMJM43NcWPazz5BoCUS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b4bisUW9C7vmM7GVAbGAqe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBzC7LaBMPFrFXXte3kqcV
          claim_id: c_GRSq63ZFtB3CJb2a6XGnvH
          source_id: s_hvAgjm9vMEKS19BtHNyBcU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_hvAgjm9vMEKS19BtHNyBcU
            source_type: api_record
            title: 维基数据：王易（Q45528290）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528290
            external_identifier: Q45528290
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_iGYvPh6TtFDokerJ6c6nHD
          claim_id: c_GRSq63ZFtB3CJb2a6XGnvH
          source_id: s_F5JzhaMa2TmiGmre4CPs6s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_vHxGMJM43NcWPazz5BoCUS
        status: active
        display_name: 王易
        merged_into_person_id: null
  children:
    - claim:
        id: c_5AKnU2bQWvDBBPyZwRKNGc
        subject_person_id: p_b4bisUW9C7vmM7GVAbGAqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSjMR61UdaE1z9Dgttw1jd
          claim_id: c_5AKnU2bQWvDBBPyZwRKNGc
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_tr5sLXmKQgj1khoKx3wE3J
          claim_id: c_5AKnU2bQWvDBBPyZwRKNGc
          source_id: s_F5JzhaMa2TmiGmre4CPs6s
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_qbWcARBwiNzFhFH7v3oZN5
        status: active
        display_name: 王桥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大韶，明人物。CBDB 记录其曾任戶部主事、提刑按察使司僉事。中国历代人物传记资料库（CBDB）以人物编号 226560 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王大韶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vHxGMJM43NcWPazz5BoCUS | 王易 | accepted |
| children | p_qbWcARBwiNzFhFH7v3oZN5 | 王桥 | accepted |

## 外部来源

- [维基数据：王大韶（Q45528350）](https://www.wikidata.org/wiki/Q45528350)
- [维基数据：王桥（Q16925823）](https://www.wikidata.org/wiki/Q16925823)
- [维基数据：王易（Q45528290）](https://www.wikidata.org/wiki/Q45528290)
- [CBDB 中国历代人物传记资料库：王韶（226560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226560&o=json)
