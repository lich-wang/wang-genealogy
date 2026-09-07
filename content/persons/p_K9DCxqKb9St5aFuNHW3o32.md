---
schema: wang-person/v1
id: p_K9DCxqKb9St5aFuNHW3o32
status: active
merged_into: null
display_name: 王德文
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a4QA3wJrhpqa8GQDiSmZS3
        subject_person_id: p_K9DCxqKb9St5aFuNHW3o32
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德文（卒于844年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175369 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4ub58ukPVy4LTC9cCrZ5HH
          claim_id: c_a4QA3wJrhpqa8GQDiSmZS3
          source_id: s_QFqEp9nDXs3bnCutnYvc61
          stance: supports
          locator: null
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
        - id: cs_cbbNttr-G2Shl9KlC26GFp
          claim_id: c_a4QA3wJrhpqa8GQDiSmZS3
          source_id: s_Np6ntDfPuXpjW6ystyQWGc
          stance: supports
          locator: CBDB:175369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sqe31FLDt9HS6E9FuvsCFJ
        subject_person_id: p_K9DCxqKb9St5aFuNHW3o32
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 844年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0844-01-01
            latest: 0844-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FUKJW5rT6hoptxA7hJ8D2M
          claim_id: c_sqe31FLDt9HS6E9FuvsCFJ
          source_id: s_QFqEp9nDXs3bnCutnYvc61
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5DTse9QnXETAssPrCi4G7g
        subject_person_id: p_K9DCxqKb9St5aFuNHW3o32
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LeHCaVMZNtL41EFbaEWHbQ
          claim_id: c_5DTse9QnXETAssPrCi4G7g
          source_id: s_QFqEp9nDXs3bnCutnYvc61
          stance: supports
          locator: Q45655706
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
        - id: cs_iEuWNixjJ1FxS4AGkEiVXy
          claim_id: c_5DTse9QnXETAssPrCi4G7g
          source_id: s_Np6ntDfPuXpjW6ystyQWGc
          stance: supports
          locator: Q45655706
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_grrACL5ZPd2Rn5X19Yqwo5
        status: active
        display_name: 王洧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德文（卒于844年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175369 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 844年 | accepted |
| name.primary | 王德文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_grrACL5ZPd2Rn5X19Yqwo5 | 王洧 | accepted |

## 外部来源

- [维基数据：王德文（Q45655706）](https://www.wikidata.org/wiki/Q45655706)
- [维基数据：王洧（Q45655588）](https://www.wikidata.org/wiki/Q45655588)
- [CBDB 中国历代人物传记资料库：王德文（175369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175369&o=json)
- [CBDB 中国历代人物传记资料库：王洧（175367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175367&o=json)
