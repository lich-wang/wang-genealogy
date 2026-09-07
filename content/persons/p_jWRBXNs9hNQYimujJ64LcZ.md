---
schema: wang-person/v1
id: p_jWRBXNs9hNQYimujJ64LcZ
status: active
merged_into: null
display_name: 王𫓧
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9seSoi70lDz5hTaJv8nx2e
        subject_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𫓧（1514年—1555年），史料所见人物。本项目依据《王𫓧》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_yh-IdjHEYkSbfNSMclQI8m
          claim_id: c_9seSoi70lDz5hTaJv8nx2e
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: Q15934129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DnH3qtKUKAD5zenxB42uWD
        subject_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1514年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1514-01-01
            latest: 1514-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L3TEwLZwHSiphEuRvQXTbX
          claim_id: c_DnH3qtKUKAD5zenxB42uWD
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zEAGCW42Br4CJb5C4MGNqo
        subject_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1555-01-01
            latest: 1555-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B9AcRuRqzC9Dgzt1MykJ5E
          claim_id: c_zEAGCW42Br4CJb5C4MGNqo
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KBEWqhaNebcfgKzTNT7q6N
        subject_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𫓧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N2xKQsTz5VMp2gnxq7QpJE
          claim_id: c_KBEWqhaNebcfgKzTNT7q6N
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: Q15934129
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RV5FvhjL5nv9WvgpnqDLmA
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FwY4fViPEWbtAYPBCHbCmr
          claim_id: c_RV5FvhjL5nv9WvgpnqDLmA
          source_id: s_fGCPjzVEA74N9JZyJDe8YP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fGCPjzVEA74N9JZyJDe8YP
            source_type: api_record
            title: 维基数据：王睿（Q45442408）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442408
            external_identifier: Q45442408
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:09.271Z
            metadata_json: null
        - id: cs_NKzdPNwAjrdSYatqstQHii
          claim_id: c_RV5FvhjL5nv9WvgpnqDLmA
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person:
        id: p_ajPx8SrP67WXjyut5BBExs
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_T2eKG3UA1arxkBo73SH8Js
        subject_person_id: p_jWRBXNs9hNQYimujJ64LcZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s5jeSj6i8t44D1EUSMCh8C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AdoeAyLtAPKG9K2T4hdEYU
          claim_id: c_T2eKG3UA1arxkBo73SH8Js
          source_id: s_B6U4sCWWXFAJNGh8K5V5bP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_B6U4sCWWXFAJNGh8K5V5bP
            source_type: api_record
            title: 维基数据：董氏（Q65839782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65839782
            external_identifier: Q65839782
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:04.556Z
            metadata_json: null
        - id: cs_qAFtfqtomgvPfyHynE4TGN
          claim_id: c_T2eKG3UA1arxkBo73SH8Js
          source_id: s_deCBvgZw2nEFm4a1pkhxQU
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十九年進士登科錄:一卷
          source:
            id: s_deCBvgZw2nEFm4a1pkhxQU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鈇（67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:54.378Z
            metadata_json: null
        - id: cs_yMYhMz1PmHTkcgeWziYkdQ
          claim_id: c_T2eKG3UA1arxkBo73SH8Js
          source_id: s_vmbSm4M2V7WEGi1zAPPHbV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_vmbSm4M2V7WEGi1zAPPHbV
            source_type: api_record
            title: 维基数据：王𫓧（Q15934129）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934129
            external_identifier: Q15934129
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:28.909Z
            metadata_json: null
      object_person:
        id: p_s5jeSj6i8t44D1EUSMCh8C
        status: active
        display_name: 董氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王𫓧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王𫓧（1514年—1555年），史料所见人物。本项目依据《王𫓧》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1514年 | accepted |
| death.date | 1555年 | accepted |
| name.primary | 王𫓧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ajPx8SrP67WXjyut5BBExs | 王睿 | accepted |
| spouses | p_s5jeSj6i8t44D1EUSMCh8C | 董氏 | accepted |

## 外部来源

- [维基数据：董氏（Q65839782）](https://www.wikidata.org/wiki/Q65839782)
- [维基数据：王𫓧（Q15934129）](https://www.wikidata.org/wiki/Q15934129)
- [维基数据：王睿（Q45442408）](https://www.wikidata.org/wiki/Q45442408)
- [CBDB 中国历代人物传记资料库：王鈇（67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
