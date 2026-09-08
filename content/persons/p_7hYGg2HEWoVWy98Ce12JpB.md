---
schema: wang-person/v1
id: p_7hYGg2HEWoVWy98Ce12JpB
status: active
merged_into: null
display_name: 王浩
cbdb_id: 175360
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_652CyiF4EHUwKaz3bU6hMk
        subject_person_id: p_7hYGg2HEWoVWy98Ce12JpB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175360 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fwLYjPk8bkj2pQQkWVGpA3
          claim_id: c_652CyiF4EHUwKaz3bU6hMk
          source_id: s_j7rYDjpK9692LGUo5onneE
          stance: supports
          locator: null
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
        - id: cs_-j8D74TXXJsxSf8WU1eWks
          claim_id: c_652CyiF4EHUwKaz3bU6hMk
          source_id: s_8LdbbBgvMhPoChG3QGngPN
          stance: supports
          locator: CBDB:175360
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kQvkWBrV3KzEfrA3BvXgu6
        subject_person_id: p_7hYGg2HEWoVWy98Ce12JpB
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
        - id: cs_2hy4UdkMHTUvnxc6W2hfHs
          claim_id: c_kQvkWBrV3KzEfrA3BvXgu6
          source_id: s_j7rYDjpK9692LGUo5onneE
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y8qds7DbLRscnra5E5ZC3z
        subject_person_id: p_7hYGg2HEWoVWy98Ce12JpB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c5kaFvUFaVFkxoNL46U4hF
          claim_id: c_y8qds7DbLRscnra5E5ZC3z
          source_id: s_j7rYDjpK9692LGUo5onneE
          stance: supports
          locator: Q45655166
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
        - id: cs_fAANUE3CjsU1YAp19mpseC
          claim_id: c_y8qds7DbLRscnra5E5ZC3z
          source_id: s_8LdbbBgvMhPoChG3QGngPN
          stance: supports
          locator: Q45655166
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王浩（卒于807年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175360 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 807年 | accepted |
| name.primary | 王浩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MTnHxih66t5Q2EU2gmw6Yp | 王绮 | accepted |

## 外部来源

- [维基数据：王浩（Q45655166）](https://www.wikidata.org/wiki/Q45655166)
- [维基数据：王绮（Q45655107）](https://www.wikidata.org/wiki/Q45655107)
- [CBDB 中国历代人物传记资料库：王浩（175360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175360&o=json)
- [CBDB 中国历代人物传记资料库：王綺（175359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175359&o=json)
