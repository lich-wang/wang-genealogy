---
schema: wang-person/v1
id: p_yWDRw7oTPCC7FMqXqU4YFm
status: active
merged_into: null
display_name: 王贾
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hj9kEwry1eb1ApDQu2YyWG
        subject_person_id: p_yWDRw7oTPCC7FMqXqU4YFm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贾（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175497 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5SN1RgQRuMpUEvQvv69hiz
          claim_id: c_Hj9kEwry1eb1ApDQu2YyWG
          source_id: s_VYDRif3qN9qAwo3tR4D1zZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VYDRif3qN9qAwo3tR4D1zZ
            source_type: api_record
            title: 维基数据：王贾（Q45663152）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663152
            external_identifier: Q45663152
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_jdfpGfu4pKCf32SmWwdk4S
          claim_id: c_Hj9kEwry1eb1ApDQu2YyWG
          source_id: s_M8xV2wkVumdKDs1SctqRso
          stance: supports
          locator: CBDB:175497
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M8xV2wkVumdKDs1SctqRso
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賈（175497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175497&o=json
            external_identifier: CBDB:175497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.223Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T3bFmXDtKhzkr7a8yWoaP5
        subject_person_id: p_yWDRw7oTPCC7FMqXqU4YFm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jC8GLAxot9CLzceSE7uori
          claim_id: c_T3bFmXDtKhzkr7a8yWoaP5
          source_id: s_VYDRif3qN9qAwo3tR4D1zZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VYDRif3qN9qAwo3tR4D1zZ
            source_type: api_record
            title: 维基数据：王贾（Q45663152）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663152
            external_identifier: Q45663152
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1daDQkXWZJ86N3kQMsEqJf
        subject_person_id: p_yWDRw7oTPCC7FMqXqU4YFm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e1E7tiDEdjeYCGESRTGUXY
          claim_id: c_1daDQkXWZJ86N3kQMsEqJf
          source_id: s_M8xV2wkVumdKDs1SctqRso
          stance: supports
          locator: Q45663152
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_seEcRKTVRqmsmfgQNpAc1j
          claim_id: c_1daDQkXWZJ86N3kQMsEqJf
          source_id: s_VYDRif3qN9qAwo3tR4D1zZ
          stance: supports
          locator: Q45663152
          quotation: null
          interpretation_note: null
          source:
            id: s_VYDRif3qN9qAwo3tR4D1zZ
            source_type: api_record
            title: 维基数据：王贾（Q45663152）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663152
            external_identifier: Q45663152
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cMeMRykVchsEBkNRNpyK8h
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yWDRw7oTPCC7FMqXqU4YFm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SuQV3Azqf7VMkjEioAjZXd
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_ThyhqPykzQggENXt3LaMaP
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_kE4LmC77wNuKjCpQUtuoZL
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_VYDRif3qN9qAwo3tR4D1zZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VYDRif3qN9qAwo3tR4D1zZ
            source_type: api_record
            title: 维基数据：王贾（Q45663152）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663152
            external_identifier: Q45663152
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_p4CkA65nS4Ns6z9PJJAupn
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_M8xV2wkVumdKDs1SctqRso
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8xV2wkVumdKDs1SctqRso
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賈（175497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175497&o=json
            external_identifier: CBDB:175497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.223Z
            metadata_json: null
      object_person:
        id: p_SDFpyQ9WQCR839CKSQL9E1
        status: active
        display_name: 王鲁卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贾（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175497 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王贾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SDFpyQ9WQCR839CKSQL9E1 | 王鲁卿 | accepted |

## 外部来源

- [维基数据：王贾（Q45663152）](https://www.wikidata.org/wiki/Q45663152)
- [维基数据：王鲁卿（Q45662864）](https://www.wikidata.org/wiki/Q45662864)
- [CBDB 中国历代人物传记资料库：王賈（175497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175497&o=json)
- [CBDB 中国历代人物传记资料库：王魯卿（175492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json)
