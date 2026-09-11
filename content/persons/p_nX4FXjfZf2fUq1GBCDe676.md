---
schema: wang-person/v1
id: p_nX4FXjfZf2fUq1GBCDe676
status: active
merged_into: null
display_name: 王仲偁
cbdb_id: 386038
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kWcTArH9ifJvVSC6YUsirF
        subject_person_id: p_nX4FXjfZf2fUq1GBCDe676
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲偁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5AyeqsmDCT947KFH4CM5tN
          claim_id: c_kWcTArH9ifJvVSC6YUsirF
          source_id: s_xKSNRaioxZJP1rELsHFAX7
          stance: supports
          locator: Q65819776
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_xKSNRaioxZJP1rELsHFAX7
            source_type: api_record
            title: 维基数据：王仲偁（Q65819776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65819776
            external_identifier: Q65819776
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_LJaDs78D6LpJMRpnnJJL3E
          claim_id: c_kWcTArH9ifJvVSC6YUsirF
          source_id: s_FQnB16KcirBw2jC1ue3UVW
          stance: supports
          locator: CBDB:386038
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_FQnB16KcirBw2jC1ue3UVW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲偁（386038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386038&o=json
            external_identifier: CBDB:386038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GpAFd6b44ps6Rpj5mYVQMc
        subject_person_id: p_nX4FXjfZf2fUq1GBCDe676
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲偁，史料所见人物。本项目依据《王仲偁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RsLwDqnE3j-3_5Wka2Tf3D
          claim_id: c_GpAFd6b44ps6Rpj5mYVQMc
          source_id: s_xKSNRaioxZJP1rELsHFAX7
          stance: supports
          locator: Q65819776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Azwvf97KVuCxAnSzug19ya
        subject_person_id: p_Vs1PRNKHH6ZpeN7kAJmKti
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_nX4FXjfZf2fUq1GBCDe676
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c6EAotay8kLkQbHegAn4cD
          claim_id: c_Azwvf97KVuCxAnSzug19ya
          source_id: s_xKSNRaioxZJP1rELsHFAX7
          stance: supports
          locator: P25（母）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_5MBq16TtYfrYuFQ98AXmbi
          claim_id: c_Azwvf97KVuCxAnSzug19ya
          source_id: s_sWCnmYdFgCgATu31i6USy7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_sWCnmYdFgCgATu31i6USy7
            source_type: api_record
            title: 维基数据：王氏（Q45364774）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364774
            external_identifier: Q45364774
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_zPDDMFEsFJFxLW8mvCBc8W
          claim_id: c_Azwvf97KVuCxAnSzug19ya
          source_id: s_D9bFN1kDtNLab2fq1CfJ6H
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：全宋文
          source:
            id: s_D9bFN1kDtNLab2fq1CfJ6H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json
            external_identifier: CBDB:5347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.889Z
            metadata_json: null
      object_person:
        id: p_Vs1PRNKHH6ZpeN7kAJmKti
        status: active
        display_name: 王氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲偁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲偁 | accepted |
| bio.summary | 王仲偁，史料所见人物。本项目依据《王仲偁》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vs1PRNKHH6ZpeN7kAJmKti | 王氏 | accepted |

## 外部来源

- [维基数据：王氏（Q45364774）](https://www.wikidata.org/wiki/Q45364774)
- [维基数据：王仲偁（Q65819776）](https://www.wikidata.org/wiki/Q65819776)
- [CBDB 中国历代人物传记资料库：王氏（5347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json)
- [CBDB 中国历代人物传记资料库：王仲偁（386038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386038&o=json)
