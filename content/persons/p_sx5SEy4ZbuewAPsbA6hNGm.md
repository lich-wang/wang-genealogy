---
schema: wang-person/v1
id: p_sx5SEy4ZbuewAPsbA6hNGm
status: active
merged_into: null
display_name: 王希古
cbdb_id: 175440
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_poXWodWtERGPzZQqs9ykHw
        subject_person_id: p_sx5SEy4ZbuewAPsbA6hNGm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希古（卒于931年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175440 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8GWsYeJChqDtmp5qT3BSXL
          claim_id: c_poXWodWtERGPzZQqs9ykHw
          source_id: s_3M8Dy1kb99taDVaqW5Vd6h
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3M8Dy1kb99taDVaqW5Vd6h
            source_type: api_record
            title: 维基数据：王希古（Q45659772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659772
            external_identifier: Q45659772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_PpxxHLjcsZU6JxrsjLbdm5
          claim_id: c_poXWodWtERGPzZQqs9ykHw
          source_id: s_3JgZSJks7wC7GLB1XA4Fjy
          stance: supports
          locator: CBDB:175440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3JgZSJks7wC7GLB1XA4Fjy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希古（175440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175440&o=json
            external_identifier: CBDB:175440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.714Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_t5EaMVGcpPppdHJFXpviNK
        subject_person_id: p_sx5SEy4ZbuewAPsbA6hNGm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 931年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0931-01-01
            latest: 0931-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mfN1soDtq17gPPQ4FAu7WH
          claim_id: c_t5EaMVGcpPppdHJFXpviNK
          source_id: s_3M8Dy1kb99taDVaqW5Vd6h
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_3M8Dy1kb99taDVaqW5Vd6h
            source_type: api_record
            title: 维基数据：王希古（Q45659772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659772
            external_identifier: Q45659772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GFv7W8p6yV7uQKUYSEM36t
        subject_person_id: p_sx5SEy4ZbuewAPsbA6hNGm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希古
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FJRmSLhV2J3vodAP1YWZVN
          claim_id: c_GFv7W8p6yV7uQKUYSEM36t
          source_id: s_3M8Dy1kb99taDVaqW5Vd6h
          stance: supports
          locator: Q45659772
          quotation: null
          interpretation_note: null
          source:
            id: s_3M8Dy1kb99taDVaqW5Vd6h
            source_type: api_record
            title: 维基数据：王希古（Q45659772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659772
            external_identifier: Q45659772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_fUxVxk7FGmRAP4a5oLEy4a
          claim_id: c_GFv7W8p6yV7uQKUYSEM36t
          source_id: s_3JgZSJks7wC7GLB1XA4Fjy
          stance: supports
          locator: Q45659772
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MXCU89BWsgNhX3iDBPDv9N
        subject_person_id: p_kV8VX5GGaT2N2wTmkZoPM2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sx5SEy4ZbuewAPsbA6hNGm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_S3SFGPy8J8rBtvWFCXs3a4
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_5tBeZoikUSXNz2QHdno8G8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5tBeZoikUSXNz2QHdno8G8
            source_type: api_record
            title: 维基数据：王潀（Q45659594）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659594
            external_identifier: Q45659594
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:10.336Z
            metadata_json: null
        - id: cs_pCpqUWvucugfWicL5Y6P9F
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_mFWBf4QkzW5W2Spkfrwe8e
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_mFWBf4QkzW5W2Spkfrwe8e
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潀（175437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json
            external_identifier: CBDB:175437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:10.478Z
            metadata_json: null
        - id: cs_h1QLy7bLHnfXooLBjMSnNx
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_3M8Dy1kb99taDVaqW5Vd6h
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3M8Dy1kb99taDVaqW5Vd6h
            source_type: api_record
            title: 维基数据：王希古（Q45659772）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659772
            external_identifier: Q45659772
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:41.554Z
            metadata_json: null
        - id: cs_jNKeAvmGkvYPEGda8hYY82
          claim_id: c_MXCU89BWsgNhX3iDBPDv9N
          source_id: s_3JgZSJks7wC7GLB1XA4Fjy
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3JgZSJks7wC7GLB1XA4Fjy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希古（175440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175440&o=json
            external_identifier: CBDB:175440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:41.714Z
            metadata_json: null
      object_person:
        id: p_kV8VX5GGaT2N2wTmkZoPM2
        status: active
        display_name: 王潀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希古（卒于931年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175440 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 931年 | accepted |
| name.primary | 王希古 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kV8VX5GGaT2N2wTmkZoPM2 | 王潀 | accepted |

## 外部来源

- [维基数据：王潀（Q45659594）](https://www.wikidata.org/wiki/Q45659594)
- [维基数据：王希古（Q45659772）](https://www.wikidata.org/wiki/Q45659772)
- [CBDB 中国历代人物传记资料库：王潀（175437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175437&o=json)
- [CBDB 中国历代人物传记资料库：王希古（175440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175440&o=json)
