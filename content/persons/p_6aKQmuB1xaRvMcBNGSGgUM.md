---
schema: wang-person/v1
id: p_6aKQmuB1xaRvMcBNGSGgUM
status: active
merged_into: null
display_name: 王齐望
cbdb_id: 175855
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R5oWbbBQELPD8vWZpG5J77
        subject_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齐望
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAr26GG5xh3CMai1E54NFQ
          claim_id: c_R5oWbbBQELPD8vWZpG5J77
          source_id: s_Gs49s3KoJikFjSgs8G2jos
          stance: supports
          locator: Q45677679
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_Gs49s3KoJikFjSgs8G2jos
            source_type: api_record
            title: 维基数据：王齐望（Q45677679）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677679
            external_identifier: Q45677679
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_vujU3MLAE6oqTyJqJi1j9P
          claim_id: c_R5oWbbBQELPD8vWZpG5J77
          source_id: s_dBAfnRcpqG7NrGSKmqBytQ
          stance: supports
          locator: CBDB:175855
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_dBAfnRcpqG7NrGSKmqBytQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王齊望（175855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175855&o=json
            external_identifier: CBDB:175855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7dVaZvHKVEUsaZ1DxtM5Mu
        subject_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Tang dynasty person CBDB = 175855
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_weD6Z8ybyQmBadHpA9VWdf
          claim_id: c_7dVaZvHKVEUsaZ1DxtM5Mu
          source_id: s_Gs49s3KoJikFjSgs8G2jos
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WLrfwoP1fBM6aUrn3v7qNC
        subject_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 704年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9PPAAVgT3H67BhiyQcBpV
          claim_id: c_WLrfwoP1fBM6aUrn3v7qNC
          source_id: s_Gs49s3KoJikFjSgs8G2jos
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2iXexZ9gNwvbhjwnDEUWVF
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iUSZA9TG2QzQpp2ENgTZH
          claim_id: c_2iXexZ9gNwvbhjwnDEUWVF
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e6LDhxKxZyo3PzSjXeRfWW
            source_type: api_record
            title: 维基数据：王崇基（Q45422606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422606
            external_identifier: Q45422606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_wgwvRHZJCWXF62nZ4Yq2LL
          claim_id: c_2iXexZ9gNwvbhjwnDEUWVF
          source_id: s_Gs49s3KoJikFjSgs8G2jos
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_JfWbDHNGFyJz6Cq8yoPLva
        status: active
        display_name: 王崇基
        merged_into_person_id: null
    - claim:
        id: c_ZraI7Zm287kyV4wczT7nsZ
        subject_person_id: p_GU488tBH2h7FCyggoG8b1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3efMvKlZ3eaOZH_t4VlLGu
          claim_id: c_ZraI7Zm287kyV4wczT7nsZ
          source_id: s_dBAfnRcpqG7NrGSKmqBytQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_GU488tBH2h7FCyggoG8b1C
        status: active
        display_name: 王崇基
        merged_into_person_id: null
  children:
    - claim:
        id: c_zZJdBbpP60OD7yWxglg3MF
        subject_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6FiYr9HtsB6xqct233x4x9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r-hDVqN4gHeJGr01p2yOg6
          claim_id: c_zZJdBbpP60OD7yWxglg3MF
          source_id: s_LCV6R6ezTfM5qzJM1HMKtV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LCV6R6ezTfM5qzJM1HMKtV
            source_type: api_record
            title: 中国历代人物传记资料库：王旭（CBDB 175856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175856&o=json
            external_identifier: CBDB:175856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6FiYr9HtsB6xqct233x4x9
        status: active
        display_name: 王旭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王齐望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齐望 | accepted |
| bio.summary | Tang dynasty person CBDB = 175855 | accepted |
| death.date | 704年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JfWbDHNGFyJz6Cq8yoPLva | 王崇基 | accepted |
| parents | p_GU488tBH2h7FCyggoG8b1C | 王崇基 | accepted |
| children | p_6FiYr9HtsB6xqct233x4x9 | 王旭 | accepted |

## 外部来源

- [维基数据：王崇基（Q45422606）](https://www.wikidata.org/wiki/Q45422606)
- [维基数据：王齐望（Q45677679）](https://www.wikidata.org/wiki/Q45677679)
- [中国历代人物传记资料库：王旭（CBDB 175856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175856&o=json)
- [CBDB 中国历代人物传记资料库：王齊望（175855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175855&o=json)
