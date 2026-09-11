---
schema: wang-person/v1
id: p_fNnEAvuY1BBmarjaAEXknF
status: active
merged_into: null
display_name: 王時和
cbdb_id: 207820
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JeeCbsaNJNUrZQaao2F98A
        subject_person_id: p_fNnEAvuY1BBmarjaAEXknF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時和（生于1581年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207820 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_AFjlf48EXDJypu5ssb6cMj
          claim_id: c_JeeCbsaNJNUrZQaao2F98A
          source_id: s_CZQGjtXFhVy912H5wJYnRP
          stance: supports
          locator: CBDB:207820
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_CZQGjtXFhVy912H5wJYnRP
            source_type: api_record
            title: 中国历代人物传记资料库：王時和（CBDB 207820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207820&o=json
            external_identifier: CBDB:207820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wYJh9yT613p8QdGxraxvMs
        subject_person_id: p_fNnEAvuY1BBmarjaAEXknF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1581年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1581-01-01
            latest: 1581-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ASnyAZSm27znQ7SBADgDMk
          claim_id: c_wYJh9yT613p8QdGxraxvMs
          source_id: s_CZQGjtXFhVy912H5wJYnRP
          stance: supports
          locator: CBDB:207820
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1581
          source:
            id: s_CZQGjtXFhVy912H5wJYnRP
            source_type: api_record
            title: 中国历代人物传记资料库：王時和（CBDB 207820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207820&o=json
            external_identifier: CBDB:207820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tqN8H5hC4L22BAQJH34TDf
        subject_person_id: p_fNnEAvuY1BBmarjaAEXknF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fWdoY6159wEDqhS6mn97Fu
          claim_id: c_tqN8H5hC4L22BAQJH34TDf
          source_id: s_CZQGjtXFhVy912H5wJYnRP
          stance: supports
          locator: CBDB:207820
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1581
          source:
            id: s_CZQGjtXFhVy912H5wJYnRP
            source_type: api_record
            title: 中国历代人物传记资料库：王時和（CBDB 207820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207820&o=json
            external_identifier: CBDB:207820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T0wjXWgqFBxXHqQWuXThBD
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13YxwCgI-DyOw01y6qb0Fo
          claim_id: c_T0wjXWgqFBxXHqQWuXThBD
          source_id: s_WbCQ4Zq3N7evq78wfesLMK
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WbCQ4Zq3N7evq78wfesLMK
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 236517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236517&o=json
            external_identifier: CBDB:236517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9wDw1cnSCGgEg7vtH1AinD
        status: active
        display_name: 王思忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_LlzIlzWINDf0fjjm_5WLWB
        subject_person_id: p_fNnEAvuY1BBmarjaAEXknF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ehAQTX99pWAsbKpM9FwW96
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LA1ldb6MN_7K_wALRhf8g-
          claim_id: c_LlzIlzWINDf0fjjm_5WLWB
          source_id: s_4BqgQUw5MJu6WrjN4u9NAE
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4BqgQUw5MJu6WrjN4u9NAE
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 236524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236524&o=json
            external_identifier: CBDB:236524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ehAQTX99pWAsbKpM9FwW96
        status: active
        display_name: 王憲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jjluJSzVMArYg2l_DAkW9t
        subject_person_id: p_2yTQ8hH65SYjMEBxTsJ81R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WQCSMg-DsrKhN3BT0pyM8P
          claim_id: c_jjluJSzVMArYg2l_DAkW9t
          source_id: s_WHKDkFX6bqLn8GpdB4rR1K
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WHKDkFX6bqLn8GpdB4rR1K
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 236515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236515&o=json
            external_identifier: CBDB:236515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2yTQ8hH65SYjMEBxTsJ81R
        status: active
        display_name: 王秉
        merged_into_person_id: null
    - claim:
        id: c_JmOh12A619DXHdUzJ1oVY9
        subject_person_id: p_UN3W8erPZ4ARfA1xMTG1Lx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_746ZJghL40lIW5nafoo0Py
          claim_id: c_JmOh12A619DXHdUzJ1oVY9
          source_id: s_gb2NvKj68y4cnXWGVENDu8
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gb2NvKj68y4cnXWGVENDu8
            source_type: api_record
            title: 中国历代人物传记资料库：王甫（CBDB 236516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236516&o=json
            external_identifier: CBDB:236516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UN3W8erPZ4ARfA1xMTG1Lx
        status: active
        display_name: 王甫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王時和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時和（生于1581年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207820 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1581年 | accepted |
| name.primary | 王時和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wDw1cnSCGgEg7vtH1AinD | 王思忠 | accepted |
| children | p_ehAQTX99pWAsbKpM9FwW96 | 王憲 | accepted |
| ancestors | p_2yTQ8hH65SYjMEBxTsJ81R | 王秉 | accepted |
| ancestors | p_UN3W8erPZ4ARfA1xMTG1Lx | 王甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉（CBDB 236515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236515&o=json)
- [中国历代人物传记资料库：王甫（CBDB 236516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236516&o=json)
- [中国历代人物传记资料库：王時和（CBDB 207820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207820&o=json)
- [中国历代人物传记资料库：王思忠（CBDB 236517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236517&o=json)
- [中国历代人物传记资料库：王憲（CBDB 236524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236524&o=json)
