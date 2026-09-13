---
schema: wang-person/v1
id: p_Nardzs9nnVJrpD2H4EMLRj
status: active
merged_into: null
display_name: 王㧑
cbdb_id: 175396
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YUdjup3EtA9orALbN13dD4
        subject_person_id: p_Nardzs9nnVJrpD2H4EMLRj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㧑（卒于746年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2QgLvUXSrY37u7p53GaMYx
          claim_id: c_YUdjup3EtA9orALbN13dD4
          source_id: s_8BrT1avwgDi9xUtr8ARAMt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8BrT1avwgDi9xUtr8ARAMt
            source_type: api_record
            title: 维基数据：王㧑（Q45657154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657154
            external_identifier: Q45657154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
        - id: cs_Dv2ZkSAWWcdY6R5Sa1tp_G
          claim_id: c_YUdjup3EtA9orALbN13dD4
          source_id: s_aenUCWRhJC4EK8VjfYHD5K
          stance: supports
          locator: CBDB:175396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aenUCWRhJC4EK8VjfYHD5K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王撝（175396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175396&o=json
            external_identifier: CBDB:175396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:53.951Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dU3uQz9TMppqJKwmJ4nHoR
        subject_person_id: p_Nardzs9nnVJrpD2H4EMLRj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FdPqPPea2R1i4hzEz9AAas
          claim_id: c_dU3uQz9TMppqJKwmJ4nHoR
          source_id: s_8BrT1avwgDi9xUtr8ARAMt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8BrT1avwgDi9xUtr8ARAMt
            source_type: api_record
            title: 维基数据：王㧑（Q45657154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657154
            external_identifier: Q45657154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1JzxBCxuiLUW38PjT8dM5
        subject_person_id: p_Nardzs9nnVJrpD2H4EMLRj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㧑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FwGo7yDuXo3JQkiVqJao1y
          claim_id: c_G1JzxBCxuiLUW38PjT8dM5
          source_id: s_8BrT1avwgDi9xUtr8ARAMt
          stance: supports
          locator: Q45657154
          quotation: null
          interpretation_note: null
          source:
            id: s_8BrT1avwgDi9xUtr8ARAMt
            source_type: api_record
            title: 维基数据：王㧑（Q45657154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657154
            external_identifier: Q45657154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
        - id: cs_X27GWZFQtt9boauYgeDnsP
          claim_id: c_G1JzxBCxuiLUW38PjT8dM5
          source_id: s_aenUCWRhJC4EK8VjfYHD5K
          stance: supports
          locator: Q45657154
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A6iHKM78q2naGQYxV29Csm
        subject_person_id: p_V58imM4qevLKTMUDbrBs11
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nardzs9nnVJrpD2H4EMLRj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_48sjKX7GhZAknVA5D94EZG
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_s2FJxWe83KuLYs8DuheY2b
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_s2FJxWe83KuLYs8DuheY2b
            source_type: api_record
            title: 维基数据：王思晳（Q45657096）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657096
            external_identifier: Q45657096
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:05:34.351Z
            metadata_json: null
        - id: cs_nhGVwrbCRgMh67L8RfYQQh
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_3WPgNEFBUTB7C65GG9Pj3N
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3WPgNEFBUTB7C65GG9Pj3N
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思晳（175395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json
            external_identifier: CBDB:175395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:05:34.503Z
            metadata_json: null
        - id: cs_1Vc14ygJBsv6WmmBtBC8jT
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_8BrT1avwgDi9xUtr8ARAMt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8BrT1avwgDi9xUtr8ARAMt
            source_type: api_record
            title: 维基数据：王㧑（Q45657154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657154
            external_identifier: Q45657154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:07:53.808Z
            metadata_json: null
        - id: cs_KX2xF3LVxq85REimcxo7gb
          claim_id: c_A6iHKM78q2naGQYxV29Csm
          source_id: s_aenUCWRhJC4EK8VjfYHD5K
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aenUCWRhJC4EK8VjfYHD5K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王撝（175396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175396&o=json
            external_identifier: CBDB:175396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:07:53.951Z
            metadata_json: null
      object_person:
        id: p_V58imM4qevLKTMUDbrBs11
        status: active
        display_name: 王思晳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王㧑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王㧑（卒于746年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175396） | accepted |
| death.date | 746年 | accepted |
| name.primary | 王㧑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V58imM4qevLKTMUDbrBs11 | 王思晳 | accepted |

## 外部来源

- [维基数据：王㧑（Q45657154）](https://www.wikidata.org/wiki/Q45657154)
- [维基数据：王思晳（Q45657096）](https://www.wikidata.org/wiki/Q45657096)
- [CBDB 中国历代人物传记资料库：王撝（175396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175396&o=json)
- [CBDB 中国历代人物传记资料库：王思晳（175395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175395&o=json)
