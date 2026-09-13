---
schema: wang-person/v1
id: p_t4r6xJhA7S53USBaqKsA6D
status: active
merged_into: null
display_name: 王敏文
cbdb_id: 1854
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_88Ye9oxtnYUCo6p8rkyhH1
        subject_person_id: p_t4r6xJhA7S53USBaqKsA6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏文，宋人物。籍贯峨眉，曾任轉運副使。（中国历代人物传记资料库 CBDB 1854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_cTr1Q5DyfqTayehbk3DzTA
          claim_id: c_88Ye9oxtnYUCo6p8rkyhH1
          source_id: s_k4cG5rN2dmbJBiGcNW8Vha
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_k4cG5rN2dmbJBiGcNW8Vha
            source_type: api_record
            title: 维基数据：王敏文（Q45359594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359594
            external_identifier: Q45359594
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_k1lDzhN18uAoW5z-_0NLPK
          claim_id: c_88Ye9oxtnYUCo6p8rkyhH1
          source_id: s_Mao9w7qeps5xXr2DFfhhhc
          stance: supports
          locator: CBDB:1854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mao9w7qeps5xXr2DFfhhhc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敏文（1854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1854&o=json
            external_identifier: CBDB:1854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.212Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xYbwqdghudKTb61dyckh8A
        subject_person_id: p_t4r6xJhA7S53USBaqKsA6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gvBzuUWCEuQLgdCtojkiFu
          claim_id: c_xYbwqdghudKTb61dyckh8A
          source_id: s_k4cG5rN2dmbJBiGcNW8Vha
          stance: supports
          locator: Q45359594
          quotation: null
          interpretation_note: null
          source:
            id: s_k4cG5rN2dmbJBiGcNW8Vha
            source_type: api_record
            title: 维基数据：王敏文（Q45359594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359594
            external_identifier: Q45359594
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_iULio9obbrhw1SZ8jeqBCQ
          claim_id: c_xYbwqdghudKTb61dyckh8A
          source_id: s_Mao9w7qeps5xXr2DFfhhhc
          stance: supports
          locator: Q45359594
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DkmcpwkWJVx1naboMBJ9ke
        subject_person_id: p_2hnAsxvMgKbcJuXTakDDKw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t4r6xJhA7S53USBaqKsA6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AZQGaW2iVAgzrA3uFqNySS
          claim_id: c_DkmcpwkWJVx1naboMBJ9ke
          source_id: s_B9rgNuKGrgQq9RDvYHtXnE
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B9rgNuKGrgQq9RDvYHtXnE
            source_type: api_record
            title: 维基数据：王端甫（Q45401684）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401684
            external_identifier: Q45401684
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:03.152Z
            metadata_json: null
        - id: cs_FWFpKeA9dnkqZCjy15AVFL
          claim_id: c_DkmcpwkWJVx1naboMBJ9ke
          source_id: s_k4cG5rN2dmbJBiGcNW8Vha
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_vsfpzCqGZBE3J8YkuNe4to
          claim_id: c_DkmcpwkWJVx1naboMBJ9ke
          source_id: s_7ugFxnAQuBfpLJy4NUT4za
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_7ugFxnAQuBfpLJy4NUT4za
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王端甫（22014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22014&o=json
            external_identifier: CBDB:22014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:03.304Z
            metadata_json: null
      object_person:
        id: p_2hnAsxvMgKbcJuXTakDDKw
        status: active
        display_name: 王端甫
        merged_into_person_id: null
  children:
    - claim:
        id: c_HDYSobSZRq3a4EnLHsFnB5
        subject_person_id: p_t4r6xJhA7S53USBaqKsA6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iMM7Ard2KxCJME8mktvmX
          claim_id: c_HDYSobSZRq3a4EnLHsFnB5
          source_id: s_sxwKoEhLTQLcbuwk4JJHoy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sxwKoEhLTQLcbuwk4JJHoy
            source_type: api_record
            title: 维基数据：王湘（Q45401685）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401685
            external_identifier: Q45401685
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_BVpJubESCEgv28mp9RBG5Z
          claim_id: c_HDYSobSZRq3a4EnLHsFnB5
          source_id: s_k4cG5rN2dmbJBiGcNW8Vha
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_x6AuxLcKDJYh4Z1YwHH3V3
          claim_id: c_HDYSobSZRq3a4EnLHsFnB5
          source_id: s_Mao9w7qeps5xXr2DFfhhhc
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_3Ai1qkYjUBdtWJB4qPpmzV
        status: active
        display_name: 王湘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敏文，宋人物。籍贯峨眉，曾任轉運副使。（中国历代人物传记资料库 CBDB 1854） | accepted |
| name.primary | 王敏文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hnAsxvMgKbcJuXTakDDKw | 王端甫 | accepted |
| children | p_3Ai1qkYjUBdtWJB4qPpmzV | 王湘 | accepted |

## 外部来源

- [维基数据：王端甫（Q45401684）](https://www.wikidata.org/wiki/Q45401684)
- [维基数据：王敏文（Q45359594）](https://www.wikidata.org/wiki/Q45359594)
- [维基数据：王湘（Q45401685）](https://www.wikidata.org/wiki/Q45401685)
- [CBDB 中国历代人物传记资料库：王端甫（22014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22014&o=json)
- [CBDB 中国历代人物传记资料库：王敏文（1854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1854&o=json)
