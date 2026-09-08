---
schema: wang-person/v1
id: p_JPEJYGsiuiJBwk27xa3sJt
status: active
merged_into: null
display_name: 王赓
cbdb_id: 186790
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mLcPMNZJ4MK6JjwdjbbTGX
        subject_person_id: p_JPEJYGsiuiJBwk27xa3sJt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王赓（卒于837年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 186790 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_59ei1MBoXHPUyx2ppw6MA7
          claim_id: c_mLcPMNZJ4MK6JjwdjbbTGX
          source_id: s_8va4aKb5GNQkkJRGnow8NS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8va4aKb5GNQkkJRGnow8NS
            source_type: api_record
            title: 维基数据：王赓（Q45688333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688333
            external_identifier: Q45688333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:25.790Z
            metadata_json: null
        - id: cs_umzCF-SQpQ1J6zYwuEFZXa
          claim_id: c_mLcPMNZJ4MK6JjwdjbbTGX
          source_id: s_LBtNYsebBMjLdjq1dyYjnn
          stance: supports
          locator: CBDB:186790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LBtNYsebBMjLdjq1dyYjnn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賡（186790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186790&o=json
            external_identifier: CBDB:186790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:25.937Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sQpsXTPc46wEs4JbR8zTi7
        subject_person_id: p_JPEJYGsiuiJBwk27xa3sJt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 837年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0837-01-01
            latest: 0837-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5FmsfJdxkADQYRjHQk5KhG
          claim_id: c_sQpsXTPc46wEs4JbR8zTi7
          source_id: s_8va4aKb5GNQkkJRGnow8NS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8va4aKb5GNQkkJRGnow8NS
            source_type: api_record
            title: 维基数据：王赓（Q45688333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688333
            external_identifier: Q45688333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:25.790Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ErnE7TTxeEpkuLbfqoaJpU
        subject_person_id: p_JPEJYGsiuiJBwk27xa3sJt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王赓
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bLnB3pG7d7an2GxwgTTZCB
          claim_id: c_ErnE7TTxeEpkuLbfqoaJpU
          source_id: s_LBtNYsebBMjLdjq1dyYjnn
          stance: supports
          locator: Q45688333
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_phvmCUUtp7r3PmCHWuBvuC
          claim_id: c_ErnE7TTxeEpkuLbfqoaJpU
          source_id: s_8va4aKb5GNQkkJRGnow8NS
          stance: supports
          locator: Q45688333
          quotation: null
          interpretation_note: null
          source:
            id: s_8va4aKb5GNQkkJRGnow8NS
            source_type: api_record
            title: 维基数据：王赓（Q45688333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688333
            external_identifier: Q45688333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:25.790Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2dWB811pGAsaQQYVvfZc8c
        subject_person_id: p_YTkrtC1SG3UCyQcRpy3dg3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPEJYGsiuiJBwk27xa3sJt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FtUPutLMGBoyhp2Tv6ezRT
          claim_id: c_2dWB811pGAsaQQYVvfZc8c
          source_id: s_C53tiXM1rEUxa17UogJ73G
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_C53tiXM1rEUxa17UogJ73G
            source_type: api_record
            title: 维基数据：王绾（Q45458523）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45458523
            external_identifier: Q45458523
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:49.386Z
            metadata_json: null
        - id: cs_Q4V5DN7katZBQ2epHkY5JQ
          claim_id: c_2dWB811pGAsaQQYVvfZc8c
          source_id: s_BG9ffhEZvcbCs6QsWWqsTw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_BG9ffhEZvcbCs6QsWWqsTw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綰（145389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json
            external_identifier: CBDB:145389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:49.537Z
            metadata_json: null
        - id: cs_nEnGA2QBChH6GvfVr7Tbyz
          claim_id: c_2dWB811pGAsaQQYVvfZc8c
          source_id: s_8va4aKb5GNQkkJRGnow8NS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8va4aKb5GNQkkJRGnow8NS
            source_type: api_record
            title: 维基数据：王赓（Q45688333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688333
            external_identifier: Q45688333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:25.790Z
            metadata_json: null
        - id: cs_cNan9MtDzR9vSan2pZftHV
          claim_id: c_2dWB811pGAsaQQYVvfZc8c
          source_id: s_LBtNYsebBMjLdjq1dyYjnn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_LBtNYsebBMjLdjq1dyYjnn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賡（186790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186790&o=json
            external_identifier: CBDB:186790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:25.937Z
            metadata_json: null
      object_person:
        id: p_YTkrtC1SG3UCyQcRpy3dg3
        status: active
        display_name: 王绾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王赓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王赓（卒于837年），唐人物。CBDB 记录其籍贯记录为萬年。中国历代人物传记资料库（CBDB）以人物编号 186790 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 837年 | accepted |
| name.primary | 王赓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YTkrtC1SG3UCyQcRpy3dg3 | 王绾 | accepted |

## 外部来源

- [维基数据：王赓（Q45688333）](https://www.wikidata.org/wiki/Q45688333)
- [维基数据：王绾（Q45458523）](https://www.wikidata.org/wiki/Q45458523)
- [CBDB 中国历代人物传记资料库：王賡（186790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186790&o=json)
- [CBDB 中国历代人物传记资料库：王綰（145389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json)
