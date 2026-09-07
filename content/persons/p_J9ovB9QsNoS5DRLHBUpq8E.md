---
schema: wang-person/v1
id: p_J9ovB9QsNoS5DRLHBUpq8E
status: active
merged_into: null
display_name: 王源矩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W1AZeR4E87AZZtEYcMJQNS
        subject_person_id: p_J9ovB9QsNoS5DRLHBUpq8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源矩（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175592 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6gBTw7fC5oiZHm88Wb7gVm
          claim_id: c_W1AZeR4E87AZZtEYcMJQNS
          source_id: s_5G99rLiQGCxmF4J3idARm8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5G99rLiQGCxmF4J3idARm8
            source_type: api_record
            title: 维基数据：王源矩（Q45668170）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668170
            external_identifier: Q45668170
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_vWoyk9j_uHujT70x2cqNyU
          claim_id: c_W1AZeR4E87AZZtEYcMJQNS
          source_id: s_qWhjWZqJz5pR9VW4NSSnLZ
          stance: supports
          locator: CBDB:175592
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qWhjWZqJz5pR9VW4NSSnLZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源矩（175592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175592&o=json
            external_identifier: CBDB:175592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.992Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ipefFVHS6V9NKQqQyk5Ngx
        subject_person_id: p_J9ovB9QsNoS5DRLHBUpq8E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6aWwqbbmCiWv1osNsU2yH2
          claim_id: c_ipefFVHS6V9NKQqQyk5Ngx
          source_id: s_5G99rLiQGCxmF4J3idARm8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5G99rLiQGCxmF4J3idARm8
            source_type: api_record
            title: 维基数据：王源矩（Q45668170）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668170
            external_identifier: Q45668170
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kKm1ZRNeTzr1f48DcCr8L
        subject_person_id: p_J9ovB9QsNoS5DRLHBUpq8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源矩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Svute4ts76RAr1ka4mGxhi
          claim_id: c_3kKm1ZRNeTzr1f48DcCr8L
          source_id: s_qWhjWZqJz5pR9VW4NSSnLZ
          stance: supports
          locator: Q45668170
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tDm5YxrEsVsS681z7PQ1Br
          claim_id: c_3kKm1ZRNeTzr1f48DcCr8L
          source_id: s_5G99rLiQGCxmF4J3idARm8
          stance: supports
          locator: Q45668170
          quotation: null
          interpretation_note: null
          source:
            id: s_5G99rLiQGCxmF4J3idARm8
            source_type: api_record
            title: 维基数据：王源矩（Q45668170）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668170
            external_identifier: Q45668170
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5RS3qCd6Xi5cdc7jT6JU36
        subject_person_id: p_G13YPoCU5cj4XERmwK9pm6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9ovB9QsNoS5DRLHBUpq8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_B4uiRjS57tgkih5cmA4Cyp
          claim_id: c_5RS3qCd6Xi5cdc7jT6JU36
          source_id: s_n87MvNpCcfqwZ5keZ5Cwf1
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_n87MvNpCcfqwZ5keZ5Cwf1
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王溥（175591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175591&o=json
            external_identifier: CBDB:175591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.912Z
            metadata_json: null
        - id: cs_vJfr32dWN37Hn327mpMzAj
          claim_id: c_5RS3qCd6Xi5cdc7jT6JU36
          source_id: s_AAYt4Ds2HhAes8BnEpCqNr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AAYt4Ds2HhAes8BnEpCqNr
            source_type: api_record
            title: 维基数据：王溥（Q45668121）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668121
            external_identifier: Q45668121
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.700Z
            metadata_json: null
        - id: cs_i3mJqGa4pHCC5k3yhfcjiR
          claim_id: c_5RS3qCd6Xi5cdc7jT6JU36
          source_id: s_5G99rLiQGCxmF4J3idARm8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5G99rLiQGCxmF4J3idARm8
            source_type: api_record
            title: 维基数据：王源矩（Q45668170）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45668170
            external_identifier: Q45668170
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:39.824Z
            metadata_json: null
        - id: cs_jmGSKQe3qGEjJgTJgYnSxj
          claim_id: c_5RS3qCd6Xi5cdc7jT6JU36
          source_id: s_qWhjWZqJz5pR9VW4NSSnLZ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qWhjWZqJz5pR9VW4NSSnLZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源矩（175592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175592&o=json
            external_identifier: CBDB:175592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:39.992Z
            metadata_json: null
      object_person:
        id: p_G13YPoCU5cj4XERmwK9pm6
        status: active
        display_name: 王溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源矩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源矩（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175592 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源矩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_G13YPoCU5cj4XERmwK9pm6 | 王溥 | accepted |

## 外部来源

- [维基数据：王溥（Q45668121）](https://www.wikidata.org/wiki/Q45668121)
- [维基数据：王源矩（Q45668170）](https://www.wikidata.org/wiki/Q45668170)
- [CBDB 中国历代人物传记资料库：王溥（175591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175591&o=json)
- [CBDB 中国历代人物传记资料库：王源矩（175592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175592&o=json)
