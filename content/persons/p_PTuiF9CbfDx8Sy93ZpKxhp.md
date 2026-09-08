---
schema: wang-person/v1
id: p_PTuiF9CbfDx8Sy93ZpKxhp
status: active
merged_into: null
display_name: 王平子
cbdb_id: 175565
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JFAAGMW3MmvaiRocQo3N25
        subject_person_id: p_PTuiF9CbfDx8Sy93ZpKxhp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平子（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175565 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KhsUHFw55eF8c279kc3SMb
          claim_id: c_JFAAGMW3MmvaiRocQo3N25
          source_id: s_M3zLD9v5fPH116rtGVGygH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_M3zLD9v5fPH116rtGVGygH
            source_type: api_record
            title: 维基数据：王平子（Q45666827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666827
            external_identifier: Q45666827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_7x1POORufpmhkMGLgdQY9u
          claim_id: c_JFAAGMW3MmvaiRocQo3N25
          source_id: s_Jeqrq7vdPTaj5i2QnfhDFw
          stance: supports
          locator: CBDB:175565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Jeqrq7vdPTaj5i2QnfhDFw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王平子（175565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175565&o=json
            external_identifier: CBDB:175565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.850Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eN1w9wNAJGoEdiW4SqHDZR
        subject_person_id: p_PTuiF9CbfDx8Sy93ZpKxhp
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
        - id: cs_i6YNTwxQbvAeLZo6T97Ccm
          claim_id: c_eN1w9wNAJGoEdiW4SqHDZR
          source_id: s_M3zLD9v5fPH116rtGVGygH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_M3zLD9v5fPH116rtGVGygH
            source_type: api_record
            title: 维基数据：王平子（Q45666827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666827
            external_identifier: Q45666827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P4WZ1hgBguduJaJHjhwmRH
        subject_person_id: p_PTuiF9CbfDx8Sy93ZpKxhp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平子
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KpsRQk9248tHxepC2Pz7d1
          claim_id: c_P4WZ1hgBguduJaJHjhwmRH
          source_id: s_Jeqrq7vdPTaj5i2QnfhDFw
          stance: supports
          locator: Q45666827
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_bwas5n7JqLbYbc1zRX7YRH
          claim_id: c_P4WZ1hgBguduJaJHjhwmRH
          source_id: s_M3zLD9v5fPH116rtGVGygH
          stance: supports
          locator: Q45666827
          quotation: null
          interpretation_note: null
          source:
            id: s_M3zLD9v5fPH116rtGVGygH
            source_type: api_record
            title: 维基数据：王平子（Q45666827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666827
            external_identifier: Q45666827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NBJDUCdesgTh3snLuqEhMg
        subject_person_id: p_FPisTavdR1h9GP2xzczNXG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PTuiF9CbfDx8Sy93ZpKxhp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1a4n423ZADwLQHQfpGCGFv
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_Z6xkyBZUAF7wA6GtshtnYB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z6xkyBZUAF7wA6GtshtnYB
            source_type: api_record
            title: 维基数据：王宰（Q45666287）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666287
            external_identifier: Q45666287
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:35.625Z
            metadata_json: null
        - id: cs_VFV3fnAzmnuWtmsAGwXCBs
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_voSJPovZEpdxhCGcBmtgv9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_voSJPovZEpdxhCGcBmtgv9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宰（175555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json
            external_identifier: CBDB:175555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:35.807Z
            metadata_json: null
        - id: cs_PKGeadqhsF2n4is5f8vpBr
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_M3zLD9v5fPH116rtGVGygH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_M3zLD9v5fPH116rtGVGygH
            source_type: api_record
            title: 维基数据：王平子（Q45666827）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45666827
            external_identifier: Q45666827
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:04.683Z
            metadata_json: null
        - id: cs_7wL7CA8coNf71oPhGkcDtJ
          claim_id: c_NBJDUCdesgTh3snLuqEhMg
          source_id: s_Jeqrq7vdPTaj5i2QnfhDFw
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Jeqrq7vdPTaj5i2QnfhDFw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王平子（175565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175565&o=json
            external_identifier: CBDB:175565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:04.850Z
            metadata_json: null
      object_person:
        id: p_FPisTavdR1h9GP2xzczNXG
        status: active
        display_name: 王宰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王平子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王平子（卒于783年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175565 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 783年 | accepted |
| name.primary | 王平子 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FPisTavdR1h9GP2xzczNXG | 王宰 | accepted |

## 外部来源

- [维基数据：王平子（Q45666827）](https://www.wikidata.org/wiki/Q45666827)
- [维基数据：王宰（Q45666287）](https://www.wikidata.org/wiki/Q45666287)
- [CBDB 中国历代人物传记资料库：王平子（175565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175565&o=json)
- [CBDB 中国历代人物传记资料库：王宰（175555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175555&o=json)
