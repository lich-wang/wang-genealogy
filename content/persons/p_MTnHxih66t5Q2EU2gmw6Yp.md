---
schema: wang-person/v1
id: p_MTnHxih66t5Q2EU2gmw6Yp
status: active
merged_into: null
display_name: 王绮
cbdb_id: 175359
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xm5or8p4BuHMdXxLCFk4hc
        subject_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绮（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任倉曹、州倉曹參軍。中国历代人物传记资料库（CBDB）以人物编号 175359 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XfKdq2FpQF727d1qBP2aC3
          claim_id: c_Xm5or8p4BuHMdXxLCFk4hc
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_Kd14oD-Y1uaii6yRfEN1u1
          claim_id: c_Xm5or8p4BuHMdXxLCFk4hc
          source_id: s_4GW5k2HUiZQ22sUMCsXvaD
          stance: supports
          locator: CBDB:175359
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4GW5k2HUiZQ22sUMCsXvaD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綺（175359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json
            external_identifier: CBDB:175359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.043Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VNJ81pNn62wA2CYev8DjbB
        subject_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
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
        - id: cs_Ww92TJRFfBof5yFSzGN5uS
          claim_id: c_VNJ81pNn62wA2CYev8DjbB
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V2bxgHqRGvWfSBhwNBxs4R
        subject_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5xZ9BJfBqwGA8kzGt9VVkG
          claim_id: c_V2bxgHqRGvWfSBhwNBxs4R
          source_id: s_4GW5k2HUiZQ22sUMCsXvaD
          stance: supports
          locator: Q45655107
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pTpnB6kcyEX7dPemo9vqSS
          claim_id: c_V2bxgHqRGvWfSBhwNBxs4R
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: Q45655107
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ssJvJvZ3EDomEM1rT2sCmo
        subject_person_id: p_x7oJfELhd7NSvt2eNbNHmH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7DsEfN9qGor3NERzwbQmFi
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
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
        - id: cs_Sq7PFJSYEScLABcD54AYQi
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
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
        - id: cs_e9hZZDfJKkAbi4offsRKYm
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_Lr8E8vCbFMrw7rjxx13A11
          claim_id: c_ssJvJvZ3EDomEM1rT2sCmo
          source_id: s_4GW5k2HUiZQ22sUMCsXvaD
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4GW5k2HUiZQ22sUMCsXvaD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綺（175359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json
            external_identifier: CBDB:175359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.043Z
            metadata_json: null
      object_person:
        id: p_x7oJfELhd7NSvt2eNbNHmH
        status: active
        display_name: 王景
        merged_into_person_id: null
  children:
    - claim:
        id: c_4K6JV1E43WbfDhiAc3GNps
        subject_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7hYGg2HEWoVWy98Ce12JpB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Y89cFCMEV7Pvq5XQVz99ua
          claim_id: c_4K6JV1E43WbfDhiAc3GNps
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_x2w7MUbb9mo1cSeAFn16td
          claim_id: c_4K6JV1E43WbfDhiAc3GNps
          source_id: s_4GW5k2HUiZQ22sUMCsXvaD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4GW5k2HUiZQ22sUMCsXvaD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綺（175359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json
            external_identifier: CBDB:175359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.043Z
            metadata_json: null
        - id: cs_NHCdy1YPQN7Zyo5KSxvN7r
          claim_id: c_4K6JV1E43WbfDhiAc3GNps
          source_id: s_j7rYDjpK9692LGUo5onneE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_j7rYDjpK9692LGUo5onneE
            source_type: api_record
            title: 维基数据：王浩（Q45655166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655166
            external_identifier: Q45655166
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:42.561Z
            metadata_json: null
        - id: cs_kiYyhMx5cf2qz1JACsKZVb
          claim_id: c_4K6JV1E43WbfDhiAc3GNps
          source_id: s_8LdbbBgvMhPoChG3QGngPN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8LdbbBgvMhPoChG3QGngPN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王浩（175360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175360&o=json
            external_identifier: CBDB:175360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:42.880Z
            metadata_json: null
      object_person:
        id: p_7hYGg2HEWoVWy98Ce12JpB
        status: active
        display_name: 王浩
        merged_into_person_id: null
    - claim:
        id: c_7VJb6UXqpdzQZRkA6ngrLF
        subject_person_id: p_MTnHxih66t5Q2EU2gmw6Yp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eKQ5UrF82zFQmuAMbo7TxZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YqyuZW8EDSrYubPs214s7L
          claim_id: c_7VJb6UXqpdzQZRkA6ngrLF
          source_id: s_4GW5k2HUiZQ22sUMCsXvaD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4GW5k2HUiZQ22sUMCsXvaD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綺（175359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json
            external_identifier: CBDB:175359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:47.043Z
            metadata_json: null
        - id: cs_wwJHjq7Fu3tWDV5M2QLCzS
          claim_id: c_7VJb6UXqpdzQZRkA6ngrLF
          source_id: s_uko3BmFDUM2ZfvumVYRJJx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_uko3BmFDUM2ZfvumVYRJJx
            source_type: api_record
            title: 维基数据：王绮（Q45655107）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655107
            external_identifier: Q45655107
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:46.888Z
            metadata_json: null
        - id: cs_1ce46tEMSi4xH3RZdZQG5p
          claim_id: c_7VJb6UXqpdzQZRkA6ngrLF
          source_id: s_DxGa2azeyp16CDMT6GpLv6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DxGa2azeyp16CDMT6GpLv6
            source_type: api_record
            title: 维基数据：王涣（Q45655227）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655227
            external_identifier: Q45655227
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:44.470Z
            metadata_json: null
        - id: cs_4idCqDp4q1okm27oGe2aof
          claim_id: c_7VJb6UXqpdzQZRkA6ngrLF
          source_id: s_9B4ziRd9xZkUZgwwpDmzbz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_9B4ziRd9xZkUZgwwpDmzbz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王渙（175361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175361&o=json
            external_identifier: CBDB:175361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:44.629Z
            metadata_json: null
      object_person:
        id: p_eKQ5UrF82zFQmuAMbo7TxZ
        status: active
        display_name: 王涣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绮（卒于770年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任倉曹、州倉曹參軍。中国历代人物传记资料库（CBDB）以人物编号 175359 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 770年 | accepted |
| name.primary | 王绮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x7oJfELhd7NSvt2eNbNHmH | 王景 | accepted |
| children | p_7hYGg2HEWoVWy98Ce12JpB | 王浩 | accepted |
| children | p_eKQ5UrF82zFQmuAMbo7TxZ | 王涣 | accepted |

## 外部来源

- [维基数据：王浩（Q45655166）](https://www.wikidata.org/wiki/Q45655166)
- [维基数据：王涣（Q45655227）](https://www.wikidata.org/wiki/Q45655227)
- [维基数据：王景（Q45654870）](https://www.wikidata.org/wiki/Q45654870)
- [维基数据：王绮（Q45655107）](https://www.wikidata.org/wiki/Q45655107)
- [CBDB 中国历代人物传记资料库：王浩（175360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175360&o=json)
- [CBDB 中国历代人物传记资料库：王渙（175361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175361&o=json)
- [CBDB 中国历代人物传记资料库：王景（175355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175355&o=json)
- [CBDB 中国历代人物传记资料库：王綺（175359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json)
