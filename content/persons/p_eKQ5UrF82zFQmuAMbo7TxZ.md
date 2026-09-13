---
schema: wang-person/v1
id: p_eKQ5UrF82zFQmuAMbo7TxZ
status: active
merged_into: null
display_name: 王涣
cbdb_id: 175361
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4mGDWH2GuyRoz4PgdgS5Tv
        subject_person_id: p_eKQ5UrF82zFQmuAMbo7TxZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣（卒于807年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175361）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uzeGK3GT1jtA6WBLovLHri
          claim_id: c_4mGDWH2GuyRoz4PgdgS5Tv
          source_id: s_DxGa2azeyp16CDMT6GpLv6
          stance: supports
          locator: null
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
        - id: cs_p4hV13X7tE8szhSxNgilZq
          claim_id: c_4mGDWH2GuyRoz4PgdgS5Tv
          source_id: s_9B4ziRd9xZkUZgwwpDmzbz
          stance: supports
          locator: CBDB:175361
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8mnSAx3vEstxjNZCmsg9zd
        subject_person_id: p_eKQ5UrF82zFQmuAMbo7TxZ
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
        - id: cs_LR3MFBcBbVxpxVDt6454Pn
          claim_id: c_8mnSAx3vEstxjNZCmsg9zd
          source_id: s_DxGa2azeyp16CDMT6GpLv6
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vy4MvyS3zQwn8QNh5Y4bkX
        subject_person_id: p_eKQ5UrF82zFQmuAMbo7TxZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JVtMm4ZVFH6HCNqA54KLD1
          claim_id: c_Vy4MvyS3zQwn8QNh5Y4bkX
          source_id: s_9B4ziRd9xZkUZgwwpDmzbz
          stance: supports
          locator: Q45655227
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qydr19Mj7vic85Bd5JA4Ku
          claim_id: c_Vy4MvyS3zQwn8QNh5Y4bkX
          source_id: s_DxGa2azeyp16CDMT6GpLv6
          stance: supports
          locator: Q45655227
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_MTnHxih66t5Q2EU2gmw6Yp
        status: active
        display_name: 王绮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王涣（卒于807年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175361） | accepted |
| death.date | 807年 | accepted |
| name.primary | 王涣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MTnHxih66t5Q2EU2gmw6Yp | 王绮 | accepted |

## 外部来源

- [维基数据：王涣（Q45655227）](https://www.wikidata.org/wiki/Q45655227)
- [维基数据：王绮（Q45655107）](https://www.wikidata.org/wiki/Q45655107)
- [CBDB 中国历代人物传记资料库：王渙（175361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175361&o=json)
- [CBDB 中国历代人物传记资料库：王綺（175359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json)
