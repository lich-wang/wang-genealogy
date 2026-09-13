---
schema: wang-person/v1
id: p_z9CRsNnooiFQRCG4ksEvqr
status: active
merged_into: null
display_name: 王膺
cbdb_id: 186789
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L4Q8xcWXuPvXEpAF7XTKV5
        subject_person_id: p_z9CRsNnooiFQRCG4ksEvqr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王膺（卒于837年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 186789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_njp2o5mSMVXn2jXq6jZD4L
          claim_id: c_L4Q8xcWXuPvXEpAF7XTKV5
          source_id: s_G4Way71n1nfiCh75MWnnPk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G4Way71n1nfiCh75MWnnPk
            source_type: api_record
            title: 维基数据：王膺（Q45688304）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688304
            external_identifier: Q45688304
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_WwbbN-XV5qaD8NjrRFY94S
          claim_id: c_L4Q8xcWXuPvXEpAF7XTKV5
          source_id: s_vRCfmeibMJ3SPKfbCTF9ec
          stance: supports
          locator: CBDB:186789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vRCfmeibMJ3SPKfbCTF9ec
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王膺（186789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186789&o=json
            external_identifier: CBDB:186789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.277Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_i25YPRBTD71XQYoyFU7HED
        subject_person_id: p_z9CRsNnooiFQRCG4ksEvqr
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
        - id: cs_GL6XXZmDDxt5tCaJuCo5Li
          claim_id: c_i25YPRBTD71XQYoyFU7HED
          source_id: s_G4Way71n1nfiCh75MWnnPk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G4Way71n1nfiCh75MWnnPk
            source_type: api_record
            title: 维基数据：王膺（Q45688304）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688304
            external_identifier: Q45688304
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rBJVoT7hc6SDGNRzBNU1om
        subject_person_id: p_z9CRsNnooiFQRCG4ksEvqr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王膺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aYyiBNHoqBCi2Rd5iVYkfa
          claim_id: c_rBJVoT7hc6SDGNRzBNU1om
          source_id: s_G4Way71n1nfiCh75MWnnPk
          stance: supports
          locator: Q45688304
          quotation: null
          interpretation_note: null
          source:
            id: s_G4Way71n1nfiCh75MWnnPk
            source_type: api_record
            title: 维基数据：王膺（Q45688304）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688304
            external_identifier: Q45688304
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_ggJSfrnZ961H7dbJCtV61k
          claim_id: c_rBJVoT7hc6SDGNRzBNU1om
          source_id: s_vRCfmeibMJ3SPKfbCTF9ec
          stance: supports
          locator: Q45688304
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QKbLZ8EEYKjX1ABFFXNJ8s
        subject_person_id: p_YTkrtC1SG3UCyQcRpy3dg3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z9CRsNnooiFQRCG4ksEvqr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q3YFXM56vptgmiw9vnwuKa
          claim_id: c_QKbLZ8EEYKjX1ABFFXNJ8s
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
        - id: cs_hggrfY9DfHZa18FWniwwoH
          claim_id: c_QKbLZ8EEYKjX1ABFFXNJ8s
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
        - id: cs_v3UCPSTFx72cnhDLjUL73d
          claim_id: c_QKbLZ8EEYKjX1ABFFXNJ8s
          source_id: s_G4Way71n1nfiCh75MWnnPk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G4Way71n1nfiCh75MWnnPk
            source_type: api_record
            title: 维基数据：王膺（Q45688304）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45688304
            external_identifier: Q45688304
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_3srRHHsnYsprzEtdijpRH2
          claim_id: c_QKbLZ8EEYKjX1ABFFXNJ8s
          source_id: s_vRCfmeibMJ3SPKfbCTF9ec
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_vRCfmeibMJ3SPKfbCTF9ec
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王膺（186789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186789&o=json
            external_identifier: CBDB:186789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.277Z
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

# 王膺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王膺（卒于837年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 186789） | accepted |
| death.date | 837年 | accepted |
| name.primary | 王膺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YTkrtC1SG3UCyQcRpy3dg3 | 王绾 | accepted |

## 外部来源

- [维基数据：王绾（Q45458523）](https://www.wikidata.org/wiki/Q45458523)
- [维基数据：王膺（Q45688304）](https://www.wikidata.org/wiki/Q45688304)
- [CBDB 中国历代人物传记资料库：王綰（145389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145389&o=json)
- [CBDB 中国历代人物传记资料库：王膺（186789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186789&o=json)
