---
schema: wang-person/v1
id: p_ovcNw2cCKn5NamDgXnnXPJ
status: active
merged_into: null
display_name: 王潨
cbdb_id: 175438
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9HHV5wQZd9fQzT4CKpk7EK
        subject_person_id: p_ovcNw2cCKn5NamDgXnnXPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潨（卒于931年），唐人物。籍贯臨沂，曾任令。（中国历代人物传记资料库 CBDB 175438）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Srs5Db6xwDJ8ZQ88hw4wrX
          claim_id: c_9HHV5wQZd9fQzT4CKpk7EK
          source_id: s_mMUETYouNV6RfDQHhCL3Wh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mMUETYouNV6RfDQHhCL3Wh
            source_type: api_record
            title: 维基数据：王潨（Q45659654）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659654
            external_identifier: Q45659654
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_7vkX55I3RrlpiN_375AI9W
          claim_id: c_9HHV5wQZd9fQzT4CKpk7EK
          source_id: s_sZtCqj2FsN7wEWyNd1a5Em
          stance: supports
          locator: CBDB:175438
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sZtCqj2FsN7wEWyNd1a5Em
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潨（175438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175438&o=json
            external_identifier: CBDB:175438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.725Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vGSzbQE84QBXLDJAd4EQg3
        subject_person_id: p_ovcNw2cCKn5NamDgXnnXPJ
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
        - id: cs_ADQseVvXWTmvzHeB9jR7eS
          claim_id: c_vGSzbQE84QBXLDJAd4EQg3
          source_id: s_mMUETYouNV6RfDQHhCL3Wh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mMUETYouNV6RfDQHhCL3Wh
            source_type: api_record
            title: 维基数据：王潨（Q45659654）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659654
            external_identifier: Q45659654
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v373WtiFwXeSmQ1TpGEVcN
        subject_person_id: p_ovcNw2cCKn5NamDgXnnXPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3R6UBmzgCWKj717Abkczv6
          claim_id: c_v373WtiFwXeSmQ1TpGEVcN
          source_id: s_sZtCqj2FsN7wEWyNd1a5Em
          stance: supports
          locator: Q45659654
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ZEPhcw653n1LHDsUaFoPSu
          claim_id: c_v373WtiFwXeSmQ1TpGEVcN
          source_id: s_mMUETYouNV6RfDQHhCL3Wh
          stance: supports
          locator: Q45659654
          quotation: null
          interpretation_note: null
          source:
            id: s_mMUETYouNV6RfDQHhCL3Wh
            source_type: api_record
            title: 维基数据：王潨（Q45659654）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659654
            external_identifier: Q45659654
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eA5C316WqoMgsgf2DSJqgB
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ovcNw2cCKn5NamDgXnnXPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bBqQwy9Kk2zHEzoApuiRFJ
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mFWBf4QkzW5W2Spkfrwe8e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潀（175437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json
            external_identifier: CBDB:175437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.478Z
            metadata_json: null
        - id: cs_mAar49ffH545Zt1PHoeMEB
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5tBeZoikUSXNz2QHdno8G8
            source_type: api_record
            title: 维基数据：王潀（Q45659594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659594
            external_identifier: Q45659594
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_D9h3nuo8W72MAYqBk1629V
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_mMUETYouNV6RfDQHhCL3Wh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mMUETYouNV6RfDQHhCL3Wh
            source_type: api_record
            title: 维基数据：王潨（Q45659654）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659654
            external_identifier: Q45659654
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.553Z
            metadata_json: null
        - id: cs_HUrYDF34K8wfMzG2RRHMB7
          claim_id: c_eA5C316WqoMgsgf2DSJqgB
          source_id: s_sZtCqj2FsN7wEWyNd1a5Em
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_sZtCqj2FsN7wEWyNd1a5Em
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潨（175438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175438&o=json
            external_identifier: CBDB:175438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.725Z
            metadata_json: null
      object_person:
        id: p_kV8VX5GGaT2N2wTmkZoPM2
        status: active
        display_name: 王潀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王潨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王潨（卒于931年），唐人物。籍贯臨沂，曾任令。（中国历代人物传记资料库 CBDB 175438） | accepted |
| death.date | 931年 | accepted |
| name.primary | 王潨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kV8VX5GGaT2N2wTmkZoPM2 | 王潀 | accepted |

## 外部来源

- [维基数据：王潀（Q45659594）](https://www.wikidata.org/wiki/Q45659594)
- [维基数据：王潨（Q45659654）](https://www.wikidata.org/wiki/Q45659654)
- [CBDB 中国历代人物传记资料库：王潀（175437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json)
- [CBDB 中国历代人物传记资料库：王潨（175438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175438&o=json)
