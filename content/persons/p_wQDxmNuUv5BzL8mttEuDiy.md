---
schema: wang-person/v1
id: p_wQDxmNuUv5BzL8mttEuDiy
status: active
merged_into: null
display_name: 王复
cbdb_id: 175580
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DFEtLZfkrpMUpj9dsGU4Vn
        subject_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王复（卒于783年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LN6bQjNUz8J1VTtCWzq4d7
          claim_id: c_DFEtLZfkrpMUpj9dsGU4Vn
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zK4CvFoJFcwzEFgeyp1exU
            source_type: api_record
            title: 维基数据：王复（Q45667560）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667560
            external_identifier: Q45667560
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_W79D6hjed9WwL5Qp3tPf_u
          claim_id: c_DFEtLZfkrpMUpj9dsGU4Vn
          source_id: s_f1AMQ559ZBRHT5bk9Aq7jX
          stance: supports
          locator: CBDB:175580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_f1AMQ559ZBRHT5bk9Aq7jX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王復（175580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json
            external_identifier: CBDB:175580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.444Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oX8mizBz7o57VRY4o9GC1o
        subject_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 783年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0783-01-01
            latest: 0783-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C3aw9yuZQDZQA7Y3vL66xK
          claim_id: c_oX8mizBz7o57VRY4o9GC1o
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zK4CvFoJFcwzEFgeyp1exU
            source_type: api_record
            title: 维基数据：王复（Q45667560）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667560
            external_identifier: Q45667560
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sT8HZfB9xFYAKGCotXaUM2
        subject_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王复
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8Me1DQnKmgD2t1D88xXbUq
          claim_id: c_sT8HZfB9xFYAKGCotXaUM2
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: Q45667560
          quotation: null
          interpretation_note: null
          source:
            id: s_zK4CvFoJFcwzEFgeyp1exU
            source_type: api_record
            title: 维基数据：王复（Q45667560）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667560
            external_identifier: Q45667560
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_pQ5UrSf44QQgYr8uJKp6Qu
          claim_id: c_sT8HZfB9xFYAKGCotXaUM2
          source_id: s_f1AMQ559ZBRHT5bk9Aq7jX
          stance: supports
          locator: Q45667560
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6K8FyMW3YCxLpgXti1owKc
        subject_person_id: p_NEX3V7ji6CnpRpuLcDnCPx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_degyUf8MJDyMqEgdnL1QmV
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_8vFzQGwKDDpx148f99y6kS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8vFzQGwKDDpx148f99y6kS
            source_type: api_record
            title: 维基数据：王份（Q45667510）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667510
            external_identifier: Q45667510
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:38.290Z
            metadata_json: null
        - id: cs_oTUGKJ2Zb9CLg86jUNMmEH
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_hT1ik3fzWZsGvMMc989rK3
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hT1ik3fzWZsGvMMc989rK3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王份（175579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json
            external_identifier: CBDB:175579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:38.466Z
            metadata_json: null
        - id: cs_ETCcmLWGJ9fYBzhhkt51Z8
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zK4CvFoJFcwzEFgeyp1exU
            source_type: api_record
            title: 维基数据：王复（Q45667560）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667560
            external_identifier: Q45667560
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_qG134mQJ7hfSzQcRXBkkcy
          claim_id: c_6K8FyMW3YCxLpgXti1owKc
          source_id: s_f1AMQ559ZBRHT5bk9Aq7jX
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_f1AMQ559ZBRHT5bk9Aq7jX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王復（175580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json
            external_identifier: CBDB:175580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.444Z
            metadata_json: null
      object_person:
        id: p_NEX3V7ji6CnpRpuLcDnCPx
        status: active
        display_name: 王份
        merged_into_person_id: null
  children:
    - claim:
        id: c_9QApVX2HAk6MGuKBpopee9
        subject_person_id: p_wQDxmNuUv5BzL8mttEuDiy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DxjskV5QQbWK43XQQTjaRU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3auSa62HVfKfEr2QBsD3HB
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_zK4CvFoJFcwzEFgeyp1exU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zK4CvFoJFcwzEFgeyp1exU
            source_type: api_record
            title: 维基数据：王复（Q45667560）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667560
            external_identifier: Q45667560
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_Qhm9XGyG2DQuQqL4yDvqqE
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_f1AMQ559ZBRHT5bk9Aq7jX
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_f1AMQ559ZBRHT5bk9Aq7jX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王復（175580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json
            external_identifier: CBDB:175580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.444Z
            metadata_json: null
        - id: cs_Za7Pq7BpMkpA9XBSgmeM5j
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_VpdBV6QZDhMwUaasUPfayi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VpdBV6QZDhMwUaasUPfayi
            source_type: api_record
            title: 维基数据：王宗卿（Q45667611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667611
            external_identifier: Q45667611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.178Z
            metadata_json: null
        - id: cs_YWmgJG6SrwpYj4TWZouvto
          claim_id: c_9QApVX2HAk6MGuKBpopee9
          source_id: s_jx9HvVkoYWDRb8fQYEb1Nz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jx9HvVkoYWDRb8fQYEb1Nz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宗卿（175581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json
            external_identifier: CBDB:175581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.332Z
            metadata_json: null
      object_person:
        id: p_DxjskV5QQbWK43XQQTjaRU
        status: active
        display_name: 王宗卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王复

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王复（卒于783年），唐人物。籍贯咸陽，曾任未詳。（中国历代人物传记资料库 CBDB 175580） | accepted |
| death.date | 783年 | accepted |
| name.primary | 王复 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NEX3V7ji6CnpRpuLcDnCPx | 王份 | accepted |
| children | p_DxjskV5QQbWK43XQQTjaRU | 王宗卿 | accepted |

## 外部来源

- [维基数据：王份（Q45667510）](https://www.wikidata.org/wiki/Q45667510)
- [维基数据：王复（Q45667560）](https://www.wikidata.org/wiki/Q45667560)
- [维基数据：王宗卿（Q45667611）](https://www.wikidata.org/wiki/Q45667611)
- [CBDB 中国历代人物传记资料库：王份（175579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175579&o=json)
- [CBDB 中国历代人物传记资料库：王復（175580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175580&o=json)
- [CBDB 中国历代人物传记资料库：王宗卿（175581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175581&o=json)
