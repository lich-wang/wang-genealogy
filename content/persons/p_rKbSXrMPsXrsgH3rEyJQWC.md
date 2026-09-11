---
schema: wang-person/v1
id: p_rKbSXrMPsXrsgH3rEyJQWC
status: active
merged_into: null
display_name: 王仲俨
cbdb_id: 386036
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TEWHQeUYs7nnoDDUJiUqd8
        subject_person_id: p_rKbSXrMPsXrsgH3rEyJQWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲俨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RnHGuTCZwjE4K9EYTGNqzt
          claim_id: c_TEWHQeUYs7nnoDDUJiUqd8
          source_id: s_vUTvmZMYybHrQTk5eH3CTH
          stance: supports
          locator: Q65819768
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_vUTvmZMYybHrQTk5eH3CTH
            source_type: api_record
            title: 维基数据：王仲俨（Q65819768）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65819768
            external_identifier: Q65819768
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_WxDoHEJHmBp3mZwCWiiDds
          claim_id: c_TEWHQeUYs7nnoDDUJiUqd8
          source_id: s_FSeKY68HV9hUuGBzMddcTs
          stance: supports
          locator: CBDB:386036
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_FSeKY68HV9hUuGBzMddcTs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲儼（386036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386036&o=json
            external_identifier: CBDB:386036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6jojE8wE4qb3Ld6S6oU6GW
        subject_person_id: p_rKbSXrMPsXrsgH3rEyJQWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲俨，史料所见人物。本项目依据《王仲俨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ziOBPZ875NGKmcmFFYY70c
          claim_id: c_6jojE8wE4qb3Ld6S6oU6GW
          source_id: s_vUTvmZMYybHrQTk5eH3CTH
          stance: supports
          locator: Q65819768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gE5m9BQPGY1MT2hWUZQMT5
        subject_person_id: p_Vs1PRNKHH6ZpeN7kAJmKti
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_rKbSXrMPsXrsgH3rEyJQWC
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3uY3ZPjM5Hdoe95kX3XdnE
          claim_id: c_gE5m9BQPGY1MT2hWUZQMT5
          source_id: s_vUTvmZMYybHrQTk5eH3CTH
          stance: supports
          locator: P25（母）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_kb7vwhbNbPydmKJrCtn3Rq
          claim_id: c_gE5m9BQPGY1MT2hWUZQMT5
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
        - id: cs_Y8KdLiXbvKM9dbZXfLh1P3
          claim_id: c_gE5m9BQPGY1MT2hWUZQMT5
          source_id: s_D9bFN1kDtNLab2fq1CfJ6H
          stance: supports
          locator: 亲属关系：次子
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

# 王仲俨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲俨 | accepted |
| bio.summary | 王仲俨，史料所见人物。本项目依据《王仲俨》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Vs1PRNKHH6ZpeN7kAJmKti | 王氏 | accepted |

## 外部来源

- [维基数据：王氏（Q45364774）](https://www.wikidata.org/wiki/Q45364774)
- [维基数据：王仲俨（Q65819768）](https://www.wikidata.org/wiki/Q65819768)
- [CBDB 中国历代人物传记资料库：王氏（5347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json)
- [CBDB 中国历代人物传记资料库：王仲儼（386036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386036&o=json)
