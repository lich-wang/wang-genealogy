---
schema: wang-person/v1
id: p_RnfaEiMtBcxyDgxD5TMJDb
status: active
merged_into: null
display_name: 王承衎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXtQKTGhZAx0nLu6PhTtqH
        subject_person_id: p_RnfaEiMtBcxyDgxD5TMJDb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承衎（961年—1009年），史料所见人物。本项目依据《王承衎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZqrzGxor7PXhSWHD17wEZK
          claim_id: c_gXtQKTGhZAx0nLu6PhTtqH
          source_id: s_G86ise9dzDJQuceDKkF8He
          stance: supports
          locator: Q45387097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_G86ise9dzDJQuceDKkF8He
            source_type: api_record
            title: 维基数据：王承衎（Q45387097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387097
            external_identifier: Q45387097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.659Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QNrvm1bT8NLmDtfMbhdH9D
        subject_person_id: p_RnfaEiMtBcxyDgxD5TMJDb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 961年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0961-01-01
            latest: 0961-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_efJFZ5hmNuYEHXBw8j3yZ7
          claim_id: c_QNrvm1bT8NLmDtfMbhdH9D
          source_id: s_G86ise9dzDJQuceDKkF8He
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G86ise9dzDJQuceDKkF8He
            source_type: api_record
            title: 维基数据：王承衎（Q45387097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387097
            external_identifier: Q45387097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.659Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_33SBCVMDLuBszeQF11h5y2
        subject_person_id: p_RnfaEiMtBcxyDgxD5TMJDb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1009年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1009-01-01
            latest: 1009-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1JuTWpJ49oKms5o27s3dSZ
          claim_id: c_33SBCVMDLuBszeQF11h5y2
          source_id: s_G86ise9dzDJQuceDKkF8He
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_G86ise9dzDJQuceDKkF8He
            source_type: api_record
            title: 维基数据：王承衎（Q45387097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387097
            external_identifier: Q45387097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.659Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mdm9EyHp9zAYuEYTeeCYsM
        subject_person_id: p_RnfaEiMtBcxyDgxD5TMJDb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承衎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zjeKw8AZ5fFnm7xp1ZHZPe
          claim_id: c_Mdm9EyHp9zAYuEYTeeCYsM
          source_id: s_G86ise9dzDJQuceDKkF8He
          stance: supports
          locator: Q45387097
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x2JgM2h4h596xbx9CtcTG9
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_RnfaEiMtBcxyDgxD5TMJDb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4NBY6Zukk8EPLRbzSePVNk
          claim_id: c_x2JgM2h4h596xbx9CtcTG9
          source_id: s_G86ise9dzDJQuceDKkF8He
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_G86ise9dzDJQuceDKkF8He
            source_type: api_record
            title: 维基数据：王承衎（Q45387097）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387097
            external_identifier: Q45387097
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:20.659Z
            metadata_json: null
        - id: cs_ddnDZfZbTUrFS41755qR9Q
          claim_id: c_x2JgM2h4h596xbx9CtcTG9
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_xENpuVFCdYJGng5v6VfekN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王審琦（3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:41.447Z
            metadata_json: null
        - id: cs_kk6uRDQqKMrF168exKR1RN
          claim_id: c_x2JgM2h4h596xbx9CtcTG9
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DD7i8QKPn7xPVwKmB24Dfi
            source_type: api_record
            title: 维基数据：王审琦（Q15940340）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940340
            external_identifier: Q15940340
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_jhAXJEb1U9Ldt73n9uUeLS
        status: active
        display_name: 王审琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承衎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承衎（961年—1009年），史料所见人物。本项目依据《王承衎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 961年 | accepted |
| death.date | 1009年 | accepted |
| name.primary | 王承衎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhAXJEb1U9Ldt73n9uUeLS | 王审琦 | accepted |

## 外部来源

- [维基数据：王承衎（Q45387097）](https://www.wikidata.org/wiki/Q45387097)
- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [CBDB 中国历代人物传记资料库：王審琦（3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
