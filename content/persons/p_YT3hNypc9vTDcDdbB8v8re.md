---
schema: wang-person/v1
id: p_YT3hNypc9vTDcDdbB8v8re
status: active
merged_into: null
display_name: 王纲
cbdb_id: 175422
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ssGbXV7p6LHmN53DESLTFX
        subject_person_id: p_YT3hNypc9vTDcDdbB8v8re
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纲（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175422 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_H2FCM8NUeL7ky26rQ2uKwm
          claim_id: c_ssGbXV7p6LHmN53DESLTFX
          source_id: s_NMwgJqK3DyF1HLyAqRFEsD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NMwgJqK3DyF1HLyAqRFEsD
            source_type: api_record
            title: 维基数据：王纲（Q45658706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658706
            external_identifier: Q45658706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_RiIKjYHzdSVSIA-fipqCUg
          claim_id: c_ssGbXV7p6LHmN53DESLTFX
          source_id: s_ymqKkhBgBJUYBNc1cXVKjz
          stance: supports
          locator: CBDB:175422
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ymqKkhBgBJUYBNc1cXVKjz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（175422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175422&o=json
            external_identifier: CBDB:175422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.256Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4MKN9Xq5sz2gK1zxWeynTB
        subject_person_id: p_YT3hNypc9vTDcDdbB8v8re
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g7GGQLa1xe1FPkVMUse2dB
          claim_id: c_4MKN9Xq5sz2gK1zxWeynTB
          source_id: s_NMwgJqK3DyF1HLyAqRFEsD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_NMwgJqK3DyF1HLyAqRFEsD
            source_type: api_record
            title: 维基数据：王纲（Q45658706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658706
            external_identifier: Q45658706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7n5Vwv1LCcdnb2Rw1evv7
        subject_person_id: p_YT3hNypc9vTDcDdbB8v8re
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4Vj97PSNeTDuRhPpvQcnKs
          claim_id: c_b7n5Vwv1LCcdnb2Rw1evv7
          source_id: s_ymqKkhBgBJUYBNc1cXVKjz
          stance: supports
          locator: Q45658706
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_WNm6mA3pUrEx2G2vaHG2qp
          claim_id: c_b7n5Vwv1LCcdnb2Rw1evv7
          source_id: s_NMwgJqK3DyF1HLyAqRFEsD
          stance: supports
          locator: Q45658706
          quotation: null
          interpretation_note: null
          source:
            id: s_NMwgJqK3DyF1HLyAqRFEsD
            source_type: api_record
            title: 维基数据：王纲（Q45658706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658706
            external_identifier: Q45658706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kMMR1WwfVXpNjPuMDV34BQ
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YT3hNypc9vTDcDdbB8v8re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_R19QRmHqDK6nhEv1kLHnHc
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_ydHBnBAERBfztGHErJ3fHY
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
        - id: cs_MC5SMcFNv6uKAA1F8h9Z3q
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_NMwgJqK3DyF1HLyAqRFEsD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NMwgJqK3DyF1HLyAqRFEsD
            source_type: api_record
            title: 维基数据：王纲（Q45658706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658706
            external_identifier: Q45658706
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_44Jru39pwwth5m3SyssAyp
          claim_id: c_kMMR1WwfVXpNjPuMDV34BQ
          source_id: s_ymqKkhBgBJUYBNc1cXVKjz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_ymqKkhBgBJUYBNc1cXVKjz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（175422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175422&o=json
            external_identifier: CBDB:175422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.256Z
            metadata_json: null
      object_person:
        id: p_ABttrGR9ETMfaUWfuE5Xsi
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纲（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175422 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王纲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ABttrGR9ETMfaUWfuE5Xsi | 王逸 | accepted |

## 外部来源

- [维基数据：王纲（Q45658706）](https://www.wikidata.org/wiki/Q45658706)
- [维基数据：王逸（Q45658647）](https://www.wikidata.org/wiki/Q45658647)
- [CBDB 中国历代人物传记资料库：王綱（175422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175422&o=json)
- [CBDB 中国历代人物传记资料库：王逸（175421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json)
