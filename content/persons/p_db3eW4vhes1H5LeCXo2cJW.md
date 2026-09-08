---
schema: wang-person/v1
id: p_db3eW4vhes1H5LeCXo2cJW
status: active
merged_into: null
display_name: 王给
cbdb_id: 175435
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ktE2deBdNvhN1vFGiZJPW
        subject_person_id: p_db3eW4vhes1H5LeCXo2cJW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王给（卒于931年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任法曹參軍。中国历代人物传记资料库（CBDB）以人物编号 175435 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9fCziGXExWV6tLqAE2mYwd
          claim_id: c_4ktE2deBdNvhN1vFGiZJPW
          source_id: s_uFByyJYWsPNmZD7dqow13Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uFByyJYWsPNmZD7dqow13Z
            source_type: api_record
            title: 维基数据：王给（Q45659475）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659475
            external_identifier: Q45659475
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_az9lAChSyN_EW1K8ada59W
          claim_id: c_4ktE2deBdNvhN1vFGiZJPW
          source_id: s_HL6wqhttEANPCMqo16KdpR
          stance: supports
          locator: CBDB:175435
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HL6wqhttEANPCMqo16KdpR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王給（175435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175435&o=json
            external_identifier: CBDB:175435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.710Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gNq39hsmvruiJeeRFDZece
        subject_person_id: p_db3eW4vhes1H5LeCXo2cJW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0931-01-01
            latest: 0931-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_37u1r5gsCkEXWWU85fzbQA
          claim_id: c_gNq39hsmvruiJeeRFDZece
          source_id: s_uFByyJYWsPNmZD7dqow13Z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uFByyJYWsPNmZD7dqow13Z
            source_type: api_record
            title: 维基数据：王给（Q45659475）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659475
            external_identifier: Q45659475
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JnK3NQhtzAPW9JaxYCuY54
        subject_person_id: p_db3eW4vhes1H5LeCXo2cJW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王给
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LYJAiFsaNNMftUKd7P4Tdo
          claim_id: c_JnK3NQhtzAPW9JaxYCuY54
          source_id: s_uFByyJYWsPNmZD7dqow13Z
          stance: supports
          locator: Q45659475
          quotation: null
          interpretation_note: null
          source:
            id: s_uFByyJYWsPNmZD7dqow13Z
            source_type: api_record
            title: 维基数据：王给（Q45659475）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659475
            external_identifier: Q45659475
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_PknhVGBdRgNDEHtP8sBzSB
          claim_id: c_JnK3NQhtzAPW9JaxYCuY54
          source_id: s_HL6wqhttEANPCMqo16KdpR
          stance: supports
          locator: Q45659475
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3ohkV6B5EtXCrM73etTAAz
        subject_person_id: p_MnDiqNwWr2tdGy1C6WX8aV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_db3eW4vhes1H5LeCXo2cJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FStthQXCBgdKPeAPLfdf63
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_qWCLM4GUM5Dc4TNLi13srp
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qWCLM4GUM5Dc4TNLi13srp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昌嗣（175434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json
            external_identifier: CBDB:175434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.519Z
            metadata_json: null
        - id: cs_n2b3NuT7gwNK6A5UgUbBAw
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_CrUodSAYP8bgb4mJTT77VB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CrUodSAYP8bgb4mJTT77VB
            source_type: api_record
            title: 维基数据：王昌嗣（Q45659415）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659415
            external_identifier: Q45659415
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_w6oBYC9pFtzABVmuHM26BX
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_uFByyJYWsPNmZD7dqow13Z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uFByyJYWsPNmZD7dqow13Z
            source_type: api_record
            title: 维基数据：王给（Q45659475）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659475
            external_identifier: Q45659475
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_H6eo83WAZv87ryC3Z1wV6y
          claim_id: c_3ohkV6B5EtXCrM73etTAAz
          source_id: s_HL6wqhttEANPCMqo16KdpR
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HL6wqhttEANPCMqo16KdpR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王給（175435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175435&o=json
            external_identifier: CBDB:175435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.710Z
            metadata_json: null
      object_person:
        id: p_MnDiqNwWr2tdGy1C6WX8aV
        status: active
        display_name: 王昌嗣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王给

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王给（卒于931年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任法曹參軍。中国历代人物传记资料库（CBDB）以人物编号 175435 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 931年 | accepted |
| name.primary | 王给 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MnDiqNwWr2tdGy1C6WX8aV | 王昌嗣 | accepted |

## 外部来源

- [维基数据：王昌嗣（Q45659415）](https://www.wikidata.org/wiki/Q45659415)
- [维基数据：王给（Q45659475）](https://www.wikidata.org/wiki/Q45659475)
- [CBDB 中国历代人物传记资料库：王昌嗣（175434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175434&o=json)
- [CBDB 中国历代人物传记资料库：王給（175435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175435&o=json)
