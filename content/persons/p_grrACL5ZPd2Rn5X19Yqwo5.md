---
schema: wang-person/v1
id: p_grrACL5ZPd2Rn5X19Yqwo5
status: active
merged_into: null
display_name: 王洧
cbdb_id: 175367
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AF3yRFvjTgcCvnGL9PcVK9
        subject_person_id: p_grrACL5ZPd2Rn5X19Yqwo5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175367 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XUeBpxmHjiGaDGcFvCMmMD
          claim_id: c_AF3yRFvjTgcCvnGL9PcVK9
          source_id: s_awN7tACiqbXHfMLpP8SZEb
          stance: supports
          locator: null
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
        - id: cs_659MFTRqM_gGrpbFrHxbk5
          claim_id: c_AF3yRFvjTgcCvnGL9PcVK9
          source_id: s_soirzDiBsJk2RkoeListjk
          stance: supports
          locator: CBDB:175367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Lfb6S9N7y2okpB9abdZGWP
        subject_person_id: p_grrACL5ZPd2Rn5X19Yqwo5
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
        - id: cs_5cGUANt9LnCMAbWh5Pf56N
          claim_id: c_Lfb6S9N7y2okpB9abdZGWP
          source_id: s_awN7tACiqbXHfMLpP8SZEb
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N1y8nWRFy7tuhoogQvWJWq
        subject_person_id: p_grrACL5ZPd2Rn5X19Yqwo5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_deptFytRJhqgDTLyUU8Fvq
          claim_id: c_N1y8nWRFy7tuhoogQvWJWq
          source_id: s_awN7tACiqbXHfMLpP8SZEb
          stance: supports
          locator: Q45655588
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
        - id: cs_mCFCzB1HCND8E5C1F9xgqz
          claim_id: c_N1y8nWRFy7tuhoogQvWJWq
          source_id: s_soirzDiBsJk2RkoeListjk
          stance: supports
          locator: Q45655588
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_GBBpSDJRZ2o5sLt8iDjMAK
        status: active
        display_name: 王绪
        merged_into_person_id: null
  children:
    - claim:
        id: c_CGqfsTT11LcJztrbNZ3svo
        subject_person_id: p_grrACL5ZPd2Rn5X19Yqwo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H7ns8jh8DhEowp66zfpsNk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pYgHmaTUNZtdQ2hAu3eTwh
          claim_id: c_CGqfsTT11LcJztrbNZ3svo
          source_id: s_soirzDiBsJk2RkoeListjk
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_zyNxCbPqJYo4FA9dsn4LR6
          claim_id: c_CGqfsTT11LcJztrbNZ3svo
          source_id: s_awN7tACiqbXHfMLpP8SZEb
          stance: supports
          locator: P40（子女）
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
        - id: cs_EKQv5ECxP2R9deYMUkjR4C
          claim_id: c_CGqfsTT11LcJztrbNZ3svo
          source_id: s_csZBLg1yBXDm8VAqDThGMq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_csZBLg1yBXDm8VAqDThGMq
            source_type: api_record
            title: 维基数据：王源广（Q45655647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655647
            external_identifier: Q45655647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.595Z
            metadata_json: null
        - id: cs_tHfAYPHU2kLK75iM6xpAut
          claim_id: c_CGqfsTT11LcJztrbNZ3svo
          source_id: s_CfromoRKb6A7GsxA5hpGYs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CfromoRKb6A7GsxA5hpGYs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源廣（175368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175368&o=json
            external_identifier: CBDB:175368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.904Z
            metadata_json: null
      object_person:
        id: p_H7ns8jh8DhEowp66zfpsNk
        status: active
        display_name: 王源广
        merged_into_person_id: null
    - claim:
        id: c_4opVorxpSfgCQPAuQcGfWm
        subject_person_id: p_grrACL5ZPd2Rn5X19Yqwo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K9DCxqKb9St5aFuNHW3o32
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5RtHAQw6bRDMNtUKPDCDAG
          claim_id: c_4opVorxpSfgCQPAuQcGfWm
          source_id: s_soirzDiBsJk2RkoeListjk
          stance: supports
          locator: 亲属关系：子
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
        - id: cs_mnu5Wqt4p7DEsiWPRRkJjw
          claim_id: c_4opVorxpSfgCQPAuQcGfWm
          source_id: s_awN7tACiqbXHfMLpP8SZEb
          stance: supports
          locator: P40（子女）
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
        - id: cs_FDYoegZgjZrsCkQEpQagFh
          claim_id: c_4opVorxpSfgCQPAuQcGfWm
          source_id: s_QFqEp9nDXs3bnCutnYvc61
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QFqEp9nDXs3bnCutnYvc61
            source_type: api_record
            title: 维基数据：王德文（Q45655706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655706
            external_identifier: Q45655706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.596Z
            metadata_json: null
        - id: cs_Es4XA3wL2XmtU118Z3mfKb
          claim_id: c_4opVorxpSfgCQPAuQcGfWm
          source_id: s_Np6ntDfPuXpjW6ystyQWGc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Np6ntDfPuXpjW6ystyQWGc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王德文（175369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175369&o=json
            external_identifier: CBDB:175369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.912Z
            metadata_json: null
      object_person:
        id: p_K9DCxqKb9St5aFuNHW3o32
        status: active
        display_name: 王德文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洧（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175367 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王洧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GBBpSDJRZ2o5sLt8iDjMAK | 王绪 | accepted |
| children | p_H7ns8jh8DhEowp66zfpsNk | 王源广 | accepted |
| children | p_K9DCxqKb9St5aFuNHW3o32 | 王德文 | accepted |

## 外部来源

- [维基数据：王德文（Q45655706）](https://www.wikidata.org/wiki/Q45655706)
- [维基数据：王洧（Q45655588）](https://www.wikidata.org/wiki/Q45655588)
- [维基数据：王绪（Q45655469）](https://www.wikidata.org/wiki/Q45655469)
- [维基数据：王源广（Q45655647）](https://www.wikidata.org/wiki/Q45655647)
- [CBDB 中国历代人物传记资料库：王德文（175369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175369&o=json)
- [CBDB 中国历代人物传记资料库：王洧（175367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175367&o=json)
- [CBDB 中国历代人物传记资料库：王緒（175365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175365&o=json)
- [CBDB 中国历代人物传记资料库：王源廣（175368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175368&o=json)
