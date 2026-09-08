---
schema: wang-person/v1
id: p_DHTj2ddRuwji9ZADTAyCpD
status: active
merged_into: null
display_name: 王璆
cbdb_id: 175415
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9zf58J4AH4nHRD9chmFgHP
        subject_person_id: p_DHTj2ddRuwji9ZADTAyCpD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璆（卒于931年），唐人物。CBDB 记录其曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175415 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Cge1ZFN9AkYYokyQqcqpnw
          claim_id: c_9zf58J4AH4nHRD9chmFgHP
          source_id: s_tyUcW5ZMyXn6Z67m8qWd7R
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tyUcW5ZMyXn6Z67m8qWd7R
            source_type: api_record
            title: 维基数据：王璆（Q45658286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658286
            external_identifier: Q45658286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_49GahtawzY55z5af_cUhRO
          claim_id: c_9zf58J4AH4nHRD9chmFgHP
          source_id: s_hzujyNHdnZCJ4ZVtw6uCY7
          stance: supports
          locator: CBDB:175415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hzujyNHdnZCJ4ZVtw6uCY7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璆（175415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175415&o=json
            external_identifier: CBDB:175415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.919Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q72BEMeA51smAGvfKAWnBn
        subject_person_id: p_DHTj2ddRuwji9ZADTAyCpD
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
        - id: cs_gf7VM3Ytu56MHAJ6EGZJvT
          claim_id: c_Q72BEMeA51smAGvfKAWnBn
          source_id: s_tyUcW5ZMyXn6Z67m8qWd7R
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tyUcW5ZMyXn6Z67m8qWd7R
            source_type: api_record
            title: 维基数据：王璆（Q45658286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658286
            external_identifier: Q45658286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FGYucrpUpHxgpqdCzFE63Q
        subject_person_id: p_DHTj2ddRuwji9ZADTAyCpD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璆
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_voZmxpPBnh5NQBZEsTc5y6
          claim_id: c_FGYucrpUpHxgpqdCzFE63Q
          source_id: s_tyUcW5ZMyXn6Z67m8qWd7R
          stance: supports
          locator: Q45658286
          quotation: null
          interpretation_note: null
          source:
            id: s_tyUcW5ZMyXn6Z67m8qWd7R
            source_type: api_record
            title: 维基数据：王璆（Q45658286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658286
            external_identifier: Q45658286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_xxhS8My98Ts5QcRGvctpYG
          claim_id: c_FGYucrpUpHxgpqdCzFE63Q
          source_id: s_hzujyNHdnZCJ4ZVtw6uCY7
          stance: supports
          locator: Q45658286
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7CyaSo2NL7LmDRKeMoyaNN
        subject_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHTj2ddRuwji9ZADTAyCpD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3ALqTEK6wUsbhuyf4iu9gu
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
        - id: cs_DTnN7ZVdxTt2HR53yHHKL6
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_1wy3HPdznLZChAR8b952TG
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_tyUcW5ZMyXn6Z67m8qWd7R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tyUcW5ZMyXn6Z67m8qWd7R
            source_type: api_record
            title: 维基数据：王璆（Q45658286）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658286
            external_identifier: Q45658286
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.616Z
            metadata_json: null
        - id: cs_QZmmHD88nCnoUPZJpJVPQ8
          claim_id: c_7CyaSo2NL7LmDRKeMoyaNN
          source_id: s_hzujyNHdnZCJ4ZVtw6uCY7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_hzujyNHdnZCJ4ZVtw6uCY7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璆（175415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175415&o=json
            external_identifier: CBDB:175415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.919Z
            metadata_json: null
      object_person:
        id: p_EfKCuLgqrSjtEomjPoc4j2
        status: active
        display_name: 王知蕴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璆（卒于931年），唐人物。CBDB 记录其曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175415 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 931年 | accepted |
| name.primary | 王璆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EfKCuLgqrSjtEomjPoc4j2 | 王知蕴 | accepted |

## 外部来源

- [维基数据：王璆（Q45658286）](https://www.wikidata.org/wiki/Q45658286)
- [维基数据：王知蕴（Q45450093）](https://www.wikidata.org/wiki/Q45450093)
- [CBDB 中国历代人物传记资料库：王璆（175415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175415&o=json)
- [CBDB 中国历代人物传记资料库：王知蘊（145209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json)
