---
schema: wang-person/v1
id: p_cAiShWPq5ZHK7zJ2C7oeN4
status: active
merged_into: null
display_name: 王源永
cbdb_id: 175490
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AV1WUSFKgSZek2DN6NSBK8
        subject_person_id: p_cAiShWPq5ZHK7zJ2C7oeN4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源永（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175490 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dertvZ9F5LBuQZrqG7rD47
          claim_id: c_AV1WUSFKgSZek2DN6NSBK8
          source_id: s_zp21PNo6zWqr156dwfrj9E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zp21PNo6zWqr156dwfrj9E
            source_type: api_record
            title: 维基数据：王源永（Q45662751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662751
            external_identifier: Q45662751
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_-yyv5I-K5EsEJXmqm1HUR8
          claim_id: c_AV1WUSFKgSZek2DN6NSBK8
          source_id: s_Q15fCXs7ePEQAz75xS7Nsr
          stance: supports
          locator: CBDB:175490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Q15fCXs7ePEQAz75xS7Nsr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源永（175490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175490&o=json
            external_identifier: CBDB:175490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.803Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BYSbq9NhHB7RP622pN7vuT
        subject_person_id: p_cAiShWPq5ZHK7zJ2C7oeN4
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
        - id: cs_HA2KitNnhXxEPWknJ1zD3U
          claim_id: c_BYSbq9NhHB7RP622pN7vuT
          source_id: s_zp21PNo6zWqr156dwfrj9E
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zp21PNo6zWqr156dwfrj9E
            source_type: api_record
            title: 维基数据：王源永（Q45662751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662751
            external_identifier: Q45662751
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NZp1xM6vdHj478JQTbTpVH
        subject_person_id: p_cAiShWPq5ZHK7zJ2C7oeN4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源永
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MVcG73TxFN5vs6LkQ7iyQK
          claim_id: c_NZp1xM6vdHj478JQTbTpVH
          source_id: s_zp21PNo6zWqr156dwfrj9E
          stance: supports
          locator: Q45662751
          quotation: null
          interpretation_note: null
          source:
            id: s_zp21PNo6zWqr156dwfrj9E
            source_type: api_record
            title: 维基数据：王源永（Q45662751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662751
            external_identifier: Q45662751
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_bhV6y3FnHy6ty9F6ffaX8Q
          claim_id: c_NZp1xM6vdHj478JQTbTpVH
          source_id: s_Q15fCXs7ePEQAz75xS7Nsr
          stance: supports
          locator: Q45662751
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WLGgiJPMGKg2PF6atCY5g9
        subject_person_id: p_RntJXBiuJxcZMFp7Co29uq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cAiShWPq5ZHK7zJ2C7oeN4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_hdygjps4P4mLPAkw8K8N5U
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_5prxM5a8unW2MK6Jx2VuDX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5prxM5a8unW2MK6Jx2VuDX
            source_type: api_record
            title: 维基数据：王济（Q45662692）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662692
            external_identifier: Q45662692
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_sKx65iD9n9hf8HAcEkzzhW
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_GE4LTDmRWSam675rU54UCT
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_GE4LTDmRWSam675rU54UCT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王濟（175489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175489&o=json
            external_identifier: CBDB:175489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.840Z
            metadata_json: null
        - id: cs_HRrWmuSK65HAHf88iUnXyX
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_zp21PNo6zWqr156dwfrj9E
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zp21PNo6zWqr156dwfrj9E
            source_type: api_record
            title: 维基数据：王源永（Q45662751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662751
            external_identifier: Q45662751
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:29.641Z
            metadata_json: null
        - id: cs_s1X6Tk6EEcxhbv9yfS46sV
          claim_id: c_WLGgiJPMGKg2PF6atCY5g9
          source_id: s_Q15fCXs7ePEQAz75xS7Nsr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Q15fCXs7ePEQAz75xS7Nsr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源永（175490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175490&o=json
            external_identifier: CBDB:175490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:29.803Z
            metadata_json: null
      object_person:
        id: p_RntJXBiuJxcZMFp7Co29uq
        status: active
        display_name: 王济
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王源永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源永（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任參軍。中国历代人物传记资料库（CBDB）以人物编号 175490 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王源永 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RntJXBiuJxcZMFp7Co29uq | 王济 | accepted |

## 外部来源

- [维基数据：王济（Q45662692）](https://www.wikidata.org/wiki/Q45662692)
- [维基数据：王源永（Q45662751）](https://www.wikidata.org/wiki/Q45662751)
- [CBDB 中国历代人物传记资料库：王濟（175489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175489&o=json)
- [CBDB 中国历代人物传记资料库：王源永（175490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175490&o=json)
