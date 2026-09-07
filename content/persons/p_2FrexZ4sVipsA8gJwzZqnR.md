---
schema: wang-person/v1
id: p_2FrexZ4sVipsA8gJwzZqnR
status: active
merged_into: null
display_name: 王道固
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J2ZNVhoLj8972DM19oHGrs
        subject_person_id: p_2FrexZ4sVipsA8gJwzZqnR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道固（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175587 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pnUm8rYKAnHxGKx3TxNEA6
          claim_id: c_J2ZNVhoLj8972DM19oHGrs
          source_id: s_81v1e7UZqyV64FbE1GjJQK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_81v1e7UZqyV64FbE1GjJQK
            source_type: api_record
            title: 维基数据：王道固（Q45667917）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667917
            external_identifier: Q45667917
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_1d3JGVyX2JJMruYUqNBkY4
          claim_id: c_J2ZNVhoLj8972DM19oHGrs
          source_id: s_HbyKrvdY51hKeLkmhmWmJW
          stance: supports
          locator: CBDB:175587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HbyKrvdY51hKeLkmhmWmJW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王道固（175587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175587&o=json
            external_identifier: CBDB:175587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.330Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kyvvcxYL9X5npyDKUtmixn
        subject_person_id: p_2FrexZ4sVipsA8gJwzZqnR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wTgahUJkDnSoB83h794CXi
          claim_id: c_kyvvcxYL9X5npyDKUtmixn
          source_id: s_81v1e7UZqyV64FbE1GjJQK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_81v1e7UZqyV64FbE1GjJQK
            source_type: api_record
            title: 维基数据：王道固（Q45667917）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667917
            external_identifier: Q45667917
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2mAJtyVp21Z1Gimdw664mX
        subject_person_id: p_2FrexZ4sVipsA8gJwzZqnR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道固
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K4P1H5pj5EYsXEL2zFfL4m
          claim_id: c_2mAJtyVp21Z1Gimdw664mX
          source_id: s_81v1e7UZqyV64FbE1GjJQK
          stance: supports
          locator: Q45667917
          quotation: null
          interpretation_note: null
          source:
            id: s_81v1e7UZqyV64FbE1GjJQK
            source_type: api_record
            title: 维基数据：王道固（Q45667917）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667917
            external_identifier: Q45667917
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_TBeeQxd8KF8F2bsc5hXxfF
          claim_id: c_2mAJtyVp21Z1Gimdw664mX
          source_id: s_HbyKrvdY51hKeLkmhmWmJW
          stance: supports
          locator: Q45667917
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jeD9ozKkCECoYpkvwUpu7y
        subject_person_id: p_9FvatVLgt41nwWMTrcYVYc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2FrexZ4sVipsA8gJwzZqnR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ggv3j8DufeM7fqLJW8dJLc
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_jjQyCgHBXVriQqwXZSeiBT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jjQyCgHBXVriQqwXZSeiBT
            source_type: api_record
            title: 维基数据：王和（Q45667864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667864
            external_identifier: Q45667864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:48.699Z
            metadata_json: null
        - id: cs_x9KZ6uA8w174oWX72iD2Ud
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_pJ1rQVsocoAz4k1nuoWz5g
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_pJ1rQVsocoAz4k1nuoWz5g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王和（175586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json
            external_identifier: CBDB:175586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:48.899Z
            metadata_json: null
        - id: cs_9Jr1Q1kh44FbcDpu2PH3tH
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_81v1e7UZqyV64FbE1GjJQK
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_81v1e7UZqyV64FbE1GjJQK
            source_type: api_record
            title: 维基数据：王道固（Q45667917）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667917
            external_identifier: Q45667917
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:38.179Z
            metadata_json: null
        - id: cs_NZ4w9wDJ6MdyPeF15RANHp
          claim_id: c_jeD9ozKkCECoYpkvwUpu7y
          source_id: s_HbyKrvdY51hKeLkmhmWmJW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_HbyKrvdY51hKeLkmhmWmJW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王道固（175587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175587&o=json
            external_identifier: CBDB:175587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:38.330Z
            metadata_json: null
      object_person:
        id: p_9FvatVLgt41nwWMTrcYVYc
        status: active
        display_name: 王和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道固

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道固（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175587 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王道固 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9FvatVLgt41nwWMTrcYVYc | 王和 | accepted |

## 外部来源

- [维基数据：王道固（Q45667917）](https://www.wikidata.org/wiki/Q45667917)
- [维基数据：王和（Q45667864）](https://www.wikidata.org/wiki/Q45667864)
- [CBDB 中国历代人物传记资料库：王道固（175587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175587&o=json)
- [CBDB 中国历代人物传记资料库：王和（175586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175586&o=json)
