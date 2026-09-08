---
schema: wang-person/v1
id: p_7Ucey9AFprdM8DH4AJXT22
status: active
merged_into: null
display_name: 王令宾
cbdb_id: 175639
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YnDmQeJvHF3rKxocZq3Bik
        subject_person_id: p_7Ucey9AFprdM8DH4AJXT22
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令宾（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175639 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1rgZv7Jpaehxr54VT2B851
          claim_id: c_YnDmQeJvHF3rKxocZq3Bik
          source_id: s_AxqLJZbyRWc2MXSs3uAtLG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_AxqLJZbyRWc2MXSs3uAtLG
            source_type: api_record
            title: 维基数据：王令宾（Q45670436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670436
            external_identifier: Q45670436
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_7M5gWebKGxidIK8cxW9LGm
          claim_id: c_YnDmQeJvHF3rKxocZq3Bik
          source_id: s_7qryBfD6QrrsEFAhN1oahb
          stance: supports
          locator: CBDB:175639
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7qryBfD6QrrsEFAhN1oahb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令賓（175639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175639&o=json
            external_identifier: CBDB:175639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.851Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ubqB1X7L3HCr5Sv2W44Emw
        subject_person_id: p_7Ucey9AFprdM8DH4AJXT22
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0709-01-01
            latest: 0709-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4ZH6xW4KcV5jA3h44Y8CdW
          claim_id: c_ubqB1X7L3HCr5Sv2W44Emw
          source_id: s_AxqLJZbyRWc2MXSs3uAtLG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_AxqLJZbyRWc2MXSs3uAtLG
            source_type: api_record
            title: 维基数据：王令宾（Q45670436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670436
            external_identifier: Q45670436
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5tH3SzVruX5yFxwbS2n82t
        subject_person_id: p_7Ucey9AFprdM8DH4AJXT22
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令宾
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1QzLEBBDH4u7TY7qYREKHm
          claim_id: c_5tH3SzVruX5yFxwbS2n82t
          source_id: s_7qryBfD6QrrsEFAhN1oahb
          stance: supports
          locator: Q45670436
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_DeJjMeRqjCse2DyZx6hMfu
          claim_id: c_5tH3SzVruX5yFxwbS2n82t
          source_id: s_AxqLJZbyRWc2MXSs3uAtLG
          stance: supports
          locator: Q45670436
          quotation: null
          interpretation_note: null
          source:
            id: s_AxqLJZbyRWc2MXSs3uAtLG
            source_type: api_record
            title: 维基数据：王令宾（Q45670436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670436
            external_identifier: Q45670436
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sHxrUSEA5ZibD67yVVJ2Pc
        subject_person_id: p_XV6a2hg1TuFRVjTmdEuUxN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Ucey9AFprdM8DH4AJXT22
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1mtzyKAErC57uMuPHtCaY1
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_Ybw1LY6QHMDhc1st8K7zBH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ybw1LY6QHMDhc1st8K7zBH
            source_type: api_record
            title: 维基数据：王绲（Q45670390）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670390
            external_identifier: Q45670390
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:04:23.431Z
            metadata_json: null
        - id: cs_K12hzzD4BALQAxGgAMnCr3
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_H2XFc3X8pxfVKZRAnj8c8H
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_H2XFc3X8pxfVKZRAnj8c8H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緄（175638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json
            external_identifier: CBDB:175638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:04:23.596Z
            metadata_json: null
        - id: cs_gmFw4NqPcaUfpS8qnhy1s4
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_AxqLJZbyRWc2MXSs3uAtLG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AxqLJZbyRWc2MXSs3uAtLG
            source_type: api_record
            title: 维基数据：王令宾（Q45670436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45670436
            external_identifier: Q45670436
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:39.704Z
            metadata_json: null
        - id: cs_tpCCvQVz2EwFWKzuZMhrqM
          claim_id: c_sHxrUSEA5ZibD67yVVJ2Pc
          source_id: s_7qryBfD6QrrsEFAhN1oahb
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_7qryBfD6QrrsEFAhN1oahb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王令賓（175639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175639&o=json
            external_identifier: CBDB:175639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:39.851Z
            metadata_json: null
      object_person:
        id: p_XV6a2hg1TuFRVjTmdEuUxN
        status: active
        display_name: 王绲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令宾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令宾（卒于709年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175639 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 709年 | accepted |
| name.primary | 王令宾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XV6a2hg1TuFRVjTmdEuUxN | 王绲 | accepted |

## 外部来源

- [维基数据：王绲（Q45670390）](https://www.wikidata.org/wiki/Q45670390)
- [维基数据：王令宾（Q45670436）](https://www.wikidata.org/wiki/Q45670436)
- [CBDB 中国历代人物传记资料库：王緄（175638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175638&o=json)
- [CBDB 中国历代人物传记资料库：王令賓（175639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175639&o=json)
