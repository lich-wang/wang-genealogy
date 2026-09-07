---
schema: wang-person/v1
id: p_KJXqqDdNPW4RGS64UuXPoQ
status: active
merged_into: null
display_name: 王融
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2r67JHR3NS5JgPEEC56S6V
        subject_person_id: p_KJXqqDdNPW4RGS64UuXPoQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融（卒于968年），五代人物。中国历代人物传记资料库（CBDB）以人物编号 175413 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ySAu99QPc8c33t1ZqhYmau
          claim_id: c_2r67JHR3NS5JgPEEC56S6V
          source_id: s_QzGv652HdHZWP8Ys6BgoYX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QzGv652HdHZWP8Ys6BgoYX
            source_type: api_record
            title: 维基数据：王融（Q45658168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658168
            external_identifier: Q45658168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
        - id: cs_cLvUaUXokAMlY9MijxDvJf
          claim_id: c_2r67JHR3NS5JgPEEC56S6V
          source_id: s_a2S5JUFb43zC9J3GnE1VPF
          stance: supports
          locator: CBDB:175413
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a2S5JUFb43zC9J3GnE1VPF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（175413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175413&o=json
            external_identifier: CBDB:175413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.946Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dC6ScbEoGUnWLpssPzLqNd
        subject_person_id: p_KJXqqDdNPW4RGS64UuXPoQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 968年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0968-01-01
            latest: 0968-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qtjnk6gHTjPnDS4X2Nfy72
          claim_id: c_dC6ScbEoGUnWLpssPzLqNd
          source_id: s_QzGv652HdHZWP8Ys6BgoYX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_QzGv652HdHZWP8Ys6BgoYX
            source_type: api_record
            title: 维基数据：王融（Q45658168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658168
            external_identifier: Q45658168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJn9snJyTBi1bbaTaTuPmS
        subject_person_id: p_KJXqqDdNPW4RGS64UuXPoQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王融
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_P2p8MT4RZxT3qEKgMB89Qu
          claim_id: c_QJn9snJyTBi1bbaTaTuPmS
          source_id: s_a2S5JUFb43zC9J3GnE1VPF
          stance: supports
          locator: Q45658168
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_SHVQPPENaExFQqvRQip2TR
          claim_id: c_QJn9snJyTBi1bbaTaTuPmS
          source_id: s_QzGv652HdHZWP8Ys6BgoYX
          stance: supports
          locator: Q45658168
          quotation: null
          interpretation_note: null
          source:
            id: s_QzGv652HdHZWP8Ys6BgoYX
            source_type: api_record
            title: 维基数据：王融（Q45658168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658168
            external_identifier: Q45658168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DwSMR1F3yWc6qJ1xEmuNG8
        subject_person_id: p_N5kbg3euLXxpkZM8MisDtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KJXqqDdNPW4RGS64UuXPoQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GzUNKDRegC3tcXKtHHU6nY
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_kVkZ2KjGp9ZKsJj8B2CQqq
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_kVkZ2KjGp9ZKsJj8B2CQqq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王慎（175411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json
            external_identifier: CBDB:175411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:43:39.752Z
            metadata_json: null
        - id: cs_isgCcjnJ9kD9MwaDFA4qNm
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_PFGE112YyCkC2L3u1Q1Bq9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PFGE112YyCkC2L3u1Q1Bq9
            source_type: api_record
            title: 维基数据：王慎（Q45658047）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658047
            external_identifier: Q45658047
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:43:39.615Z
            metadata_json: null
        - id: cs_KmHKWJn91iCHoxm17d7F63
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_QzGv652HdHZWP8Ys6BgoYX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_QzGv652HdHZWP8Ys6BgoYX
            source_type: api_record
            title: 维基数据：王融（Q45658168）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658168
            external_identifier: Q45658168
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:45:00.629Z
            metadata_json: null
        - id: cs_ArTkBD6MBkEX6ha1D2uAQH
          claim_id: c_DwSMR1F3yWc6qJ1xEmuNG8
          source_id: s_a2S5JUFb43zC9J3GnE1VPF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_a2S5JUFb43zC9J3GnE1VPF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王融（175413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175413&o=json
            external_identifier: CBDB:175413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:45:00.946Z
            metadata_json: null
      object_person:
        id: p_N5kbg3euLXxpkZM8MisDtX
        status: active
        display_name: 王慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王融（卒于968年），五代人物。中国历代人物传记资料库（CBDB）以人物编号 175413 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 968年 | accepted |
| name.primary | 王融 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5kbg3euLXxpkZM8MisDtX | 王慎 | accepted |

## 外部来源

- [维基数据：王融（Q45658168）](https://www.wikidata.org/wiki/Q45658168)
- [维基数据：王慎（Q45658047）](https://www.wikidata.org/wiki/Q45658047)
- [CBDB 中国历代人物传记资料库：王融（175413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175413&o=json)
- [CBDB 中国历代人物传记资料库：王慎（175411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175411&o=json)
