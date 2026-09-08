---
schema: wang-person/v1
id: p_zQAyFcVTh8uEFRKFQtkku9
status: active
merged_into: null
display_name: 王恪
cbdb_id: 264939
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yzGZn6NPJGH6VL5V7C9aTL
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪，明人物。CBDB 记录其籍贯记录为東莞，曾任知府。中国历代人物传记资料库（CBDB）以人物编号 264939 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MtmYRkDh3z9dkhADzM6pNc
          claim_id: c_yzGZn6NPJGH6VL5V7C9aTL
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_HDcpoETM2HzOP9-qVioUOz
          claim_id: c_yzGZn6NPJGH6VL5V7C9aTL
          source_id: s_P3dGTcvrREC5FWJ2NokCtm
          stance: supports
          locator: CBDB:264939
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P3dGTcvrREC5FWJ2NokCtm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恪（264939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264939&o=json
            external_identifier: CBDB:264939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:10.914Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vccJgGXjHs4iWq9cwPeh5H
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恪
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8M6KAG54Yca5p8GGWPeoZN
          claim_id: c_vccJgGXjHs4iWq9cwPeh5H
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: Q45583500
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_r9CzTndkNyNmEy2PsQWyeP
          claim_id: c_vccJgGXjHs4iWq9cwPeh5H
          source_id: s_P3dGTcvrREC5FWJ2NokCtm
          stance: supports
          locator: Q45583500
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3hiyBQZLwBsW8TR2h5mq1M
        subject_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoUotdm3wyN2YcpVRrbf9T
          claim_id: c_3hiyBQZLwBsW8TR2h5mq1M
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_3kb66C7yu75ywzU2HAeeFZ
          claim_id: c_3hiyBQZLwBsW8TR2h5mq1M
          source_id: s_B552dSZzBGwMMCA9WPbwQi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_B552dSZzBGwMMCA9WPbwQi
            source_type: api_record
            title: 维基数据：王琛（Q45583436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583436
            external_identifier: Q45583436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_YUKAdQiXr1DTx2KFsrYLgt
        status: active
        display_name: 王琛
        merged_into_person_id: null
  children:
    - claim:
        id: c_GxzicMFF1GSFrFjdWRGBR3
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_GYXTdGzZ8zRdfAxpgeUm9N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZNX5a9Ue7bnqTkDjELFB7L
          claim_id: c_GxzicMFF1GSFrFjdWRGBR3
          source_id: s_eu2QmMuoGyj9A1rH6i5Uf3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eu2QmMuoGyj9A1rH6i5Uf3
            source_type: api_record
            title: 维基数据：王恪（Q45583500）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45583500
            external_identifier: Q45583500
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_ZU7SPBGP5FxJMm8uhWHBbx
          claim_id: c_GxzicMFF1GSFrFjdWRGBR3
          source_id: s_iw9Jd1MqaYNnyNbCs6kaVP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iw9Jd1MqaYNnyNbCs6kaVP
            source_type: api_record
            title: 维基数据：王缜（Q15933343）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15933343
            external_identifier: Q15933343
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
      object_person:
        id: p_GYXTdGzZ8zRdfAxpgeUm9N
        status: active
        display_name: 王缜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恪，明人物。CBDB 记录其籍贯记录为東莞，曾任知府。中国历代人物传记资料库（CBDB）以人物编号 264939 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王恪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YUKAdQiXr1DTx2KFsrYLgt | 王琛 | accepted |
| children | p_GYXTdGzZ8zRdfAxpgeUm9N | 王缜 | accepted |

## 外部来源

- [维基数据：王琛（Q45583436）](https://www.wikidata.org/wiki/Q45583436)
- [维基数据：王恪（Q45583500）](https://www.wikidata.org/wiki/Q45583500)
- [维基数据：王缜（Q15933343）](https://www.wikidata.org/wiki/Q15933343)
- [CBDB 中国历代人物传记资料库：王恪（264939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264939&o=json)
