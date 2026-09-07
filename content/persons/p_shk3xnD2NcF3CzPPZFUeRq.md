---
schema: wang-person/v1
id: p_shk3xnD2NcF3CzPPZFUeRq
status: active
merged_into: null
display_name: 王坦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RuyD5XmNrnxGQqFEmVnGks
        subject_person_id: p_shk3xnD2NcF3CzPPZFUeRq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175366 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Kva5rLJ8s4QYNC2nhXKGad
          claim_id: c_RuyD5XmNrnxGQqFEmVnGks
          source_id: s_MzhrdsMwo2rmy4QVY5T3F1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MzhrdsMwo2rmy4QVY5T3F1
            source_type: api_record
            title: 维基数据：王坦（Q45655529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655529
            external_identifier: Q45655529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.471Z
            metadata_json: null
        - id: cs_Dw0B8zn-Wo2YOvhHXsgH3V
          claim_id: c_RuyD5XmNrnxGQqFEmVnGks
          source_id: s_h8EnGwTLriyNQbVJgPehB8
          stance: supports
          locator: CBDB:175366
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h8EnGwTLriyNQbVJgPehB8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王坦（175366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175366&o=json
            external_identifier: CBDB:175366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:44.610Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZB6rnzRvufyjpc56xADWzY
        subject_person_id: p_shk3xnD2NcF3CzPPZFUeRq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 807年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0807-01-01
            latest: 0807-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pWkKRFNWoAVLMts23ajWKU
          claim_id: c_ZB6rnzRvufyjpc56xADWzY
          source_id: s_MzhrdsMwo2rmy4QVY5T3F1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MzhrdsMwo2rmy4QVY5T3F1
            source_type: api_record
            title: 维基数据：王坦（Q45655529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655529
            external_identifier: Q45655529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.471Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n94GHEUZZ8dx6vhTxfqDQ5
        subject_person_id: p_shk3xnD2NcF3CzPPZFUeRq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7pL5P2zmnibRic4hMJfCcH
          claim_id: c_n94GHEUZZ8dx6vhTxfqDQ5
          source_id: s_h8EnGwTLriyNQbVJgPehB8
          stance: supports
          locator: Q45655529
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_r6NogLrtt5FAAt7LBcdQqF
          claim_id: c_n94GHEUZZ8dx6vhTxfqDQ5
          source_id: s_MzhrdsMwo2rmy4QVY5T3F1
          stance: supports
          locator: Q45655529
          quotation: null
          interpretation_note: null
          source:
            id: s_MzhrdsMwo2rmy4QVY5T3F1
            source_type: api_record
            title: 维基数据：王坦（Q45655529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655529
            external_identifier: Q45655529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.471Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xG9tnTMMwMEjhpiB6NqpMJ
        subject_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_shk3xnD2NcF3CzPPZFUeRq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_idrBLAq4ThUsKEEWvkTQe2
          claim_id: c_xG9tnTMMwMEjhpiB6NqpMJ
          source_id: s_qH333uLySYa6KQbZBj9j2g
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qH333uLySYa6KQbZBj9j2g
            source_type: api_record
            title: 维基数据：王绪（Q45655469）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655469
            external_identifier: Q45655469
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:48.584Z
            metadata_json: null
        - id: cs_w55Svwg3dFfNGP1kmZ96B7
          claim_id: c_xG9tnTMMwMEjhpiB6NqpMJ
          source_id: s_x8W9a8Aas8KB2KfiQ1DFoK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_x8W9a8Aas8KB2KfiQ1DFoK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緒（175365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175365&o=json
            external_identifier: CBDB:175365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:48.746Z
            metadata_json: null
        - id: cs_PpWAoXev9mMgVphU5BEzUJ
          claim_id: c_xG9tnTMMwMEjhpiB6NqpMJ
          source_id: s_MzhrdsMwo2rmy4QVY5T3F1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MzhrdsMwo2rmy4QVY5T3F1
            source_type: api_record
            title: 维基数据：王坦（Q45655529）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655529
            external_identifier: Q45655529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.471Z
            metadata_json: null
        - id: cs_9ooLPixcSA7pN7woWxdQPj
          claim_id: c_xG9tnTMMwMEjhpiB6NqpMJ
          source_id: s_h8EnGwTLriyNQbVJgPehB8
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_h8EnGwTLriyNQbVJgPehB8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王坦（175366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175366&o=json
            external_identifier: CBDB:175366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:44.610Z
            metadata_json: null
      object_person:
        id: p_GBBpSDJRZ2o5sLt8iDjMAK
        status: active
        display_name: 王绪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王坦（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175366 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王坦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GBBpSDJRZ2o5sLt8iDjMAK | 王绪 | accepted |

## 外部来源

- [维基数据：王坦（Q45655529）](https://www.wikidata.org/wiki/Q45655529)
- [维基数据：王绪（Q45655469）](https://www.wikidata.org/wiki/Q45655469)
- [CBDB 中国历代人物传记资料库：王坦（175366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175366&o=json)
- [CBDB 中国历代人物传记资料库：王緒（175365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175365&o=json)
