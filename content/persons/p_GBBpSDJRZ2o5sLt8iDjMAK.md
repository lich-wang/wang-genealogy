---
schema: wang-person/v1
id: p_GBBpSDJRZ2o5sLt8iDjMAK
status: active
merged_into: null
display_name: 王绪
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jH27r3PtpCJFP6W9jHMMLj
        subject_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绪（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任秘書郎。中国历代人物传记资料库（CBDB）以人物编号 175365 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HRUVCDwF8UCo66JLbqNevM
          claim_id: c_jH27r3PtpCJFP6W9jHMMLj
          source_id: s_qH333uLySYa6KQbZBj9j2g
          stance: supports
          locator: null
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
        - id: cs_2eSsmJmVmWFB6jC-q_ZLZP
          claim_id: c_jH27r3PtpCJFP6W9jHMMLj
          source_id: s_x8W9a8Aas8KB2KfiQ1DFoK
          stance: supports
          locator: CBDB:175365
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mT6F2Cd2Vk5BnzEufBEo2J
        subject_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0770-01-01
            latest: 0770-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C6mB6ffHYbHrGR29TnJXr7
          claim_id: c_mT6F2Cd2Vk5BnzEufBEo2J
          source_id: s_qH333uLySYa6KQbZBj9j2g
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PnbrXFRp8bgf9jvTgJuiB7
        subject_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4BC4CPNd6YAgQ7U3akgaex
          claim_id: c_PnbrXFRp8bgf9jvTgJuiB7
          source_id: s_qH333uLySYa6KQbZBj9j2g
          stance: supports
          locator: Q45655469
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
        - id: cs_Spys7U83z9SetsF2BKJBYM
          claim_id: c_PnbrXFRp8bgf9jvTgJuiB7
          source_id: s_x8W9a8Aas8KB2KfiQ1DFoK
          stance: supports
          locator: Q45655469
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EXU4bCT7ghnoGasEYh2M7w
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SRstfVuc39UkNC6Meys2V5
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_qZACLc9edrwCBZHy8db65x
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qZACLc9edrwCBZHy8db65x
            source_type: api_record
            title: 维基数据：王景（Q45654870）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45654870
            external_identifier: Q45654870
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:32.651Z
            metadata_json: null
        - id: cs_unSggrBJs2QUM7e4RFTWQx
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_7E1ug3Kpns8EmbLJFG6nt6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7E1ug3Kpns8EmbLJFG6nt6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王景（175355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json
            external_identifier: CBDB:175355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:32.816Z
            metadata_json: null
        - id: cs_9GG542wrNDyXHPAxPQF9Ss
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_qH333uLySYa6KQbZBj9j2g
          stance: supports
          locator: P22（父）
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
        - id: cs_osac8gAgDN4wkNLGimtvW5
          claim_id: c_EXU4bCT7ghnoGasEYh2M7w
          source_id: s_x8W9a8Aas8KB2KfiQ1DFoK
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
  children:
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
        id: p_shk3xnD2NcF3CzPPZFUeRq
        status: active
        display_name: 王坦
        merged_into_person_id: null
    - claim:
        id: c_o4akdFof7uXxG93Zyz9EmH
        subject_person_id: p_GBBpSDJRZ2o5sLt8iDjMAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_grrACL5ZPd2Rn5X19Yqwo5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Kaa89o5PYZPrDuTWGJGdtS
          claim_id: c_o4akdFof7uXxG93Zyz9EmH
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
        - id: cs_jQ8rkPjMTQnTZ1YgMZ2LSp
          claim_id: c_o4akdFof7uXxG93Zyz9EmH
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
        - id: cs_GYD2BJ7ep1CTgu9MHpmjfh
          claim_id: c_o4akdFof7uXxG93Zyz9EmH
          source_id: s_awN7tACiqbXHfMLpP8SZEb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_awN7tACiqbXHfMLpP8SZEb
            source_type: api_record
            title: 维基数据：王洧（Q45655588）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655588
            external_identifier: Q45655588
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:46.267Z
            metadata_json: null
        - id: cs_zTCeb8qrFbdJcbvoKBgNS9
          claim_id: c_o4akdFof7uXxG93Zyz9EmH
          source_id: s_soirzDiBsJk2RkoeListjk
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_soirzDiBsJk2RkoeListjk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王洧（175367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175367&o=json
            external_identifier: CBDB:175367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:46.437Z
            metadata_json: null
      object_person:
        id: p_grrACL5ZPd2Rn5X19Yqwo5
        status: active
        display_name: 王洧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绪（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任秘書郎。中国历代人物传记资料库（CBDB）以人物编号 175365 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王绪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |
| children | p_shk3xnD2NcF3CzPPZFUeRq | 王坦 | accepted |
| children | p_grrACL5ZPd2Rn5X19Yqwo5 | 王洧 | accepted |

## 外部来源

- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王坦（Q45655529）](https://www.wikidata.org/wiki/Q45655529)
- [维基数据：王洧（Q45655588）](https://www.wikidata.org/wiki/Q45655588)
- [维基数据：王绪（Q45655469）](https://www.wikidata.org/wiki/Q45655469)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王坦（175366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175366&o=json)
- [CBDB 中国历代人物传记资料库：王洧（175367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175367&o=json)
- [CBDB 中国历代人物传记资料库：王緒（175365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175365&o=json)
