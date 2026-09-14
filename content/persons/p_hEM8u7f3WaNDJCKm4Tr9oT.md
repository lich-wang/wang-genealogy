---
schema: wang-person/v1
id: p_hEM8u7f3WaNDJCKm4Tr9oT
status: active
merged_into: null
display_name: 王應綸
cbdb_id: 519932
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qDKJjzxJDHGuHE7f2vJ8UG
        subject_person_id: p_hEM8u7f3WaNDJCKm4Tr9oT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應綸，史料所见人物。本项目依据《中国历代人物传记资料库：王應綸（CBDB 519932）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_vzk9g7oQpXb5_JGHkQ7dl4
          claim_id: c_qDKJjzxJDHGuHE7f2vJ8UG
          source_id: s_EFES9Xy8Lra544LazNVEM4
          stance: supports
          locator: CBDB:519932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EFES9Xy8Lra544LazNVEM4
            source_type: api_record
            title: 中国历代人物传记资料库：王應綸（CBDB 519932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519932&o=json
            external_identifier: CBDB:519932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4auNRM2LFJu8nLnZ4Vo6si
        subject_person_id: p_hEM8u7f3WaNDJCKm4Tr9oT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JPLQ78oTWpufRMN8CuTggS
          claim_id: c_4auNRM2LFJu8nLnZ4Vo6si
          source_id: s_EFES9Xy8Lra544LazNVEM4
          stance: supports
          locator: CBDB:519932
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OyMqH2Dwrbtgw8go3fCXB2
        subject_person_id: p_bGBrzHdXA6nmyqm76pX4Tp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hEM8u7f3WaNDJCKm4Tr9oT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m15iMsi81JkG5a9dGyQkfc
          claim_id: c_OyMqH2Dwrbtgw8go3fCXB2
          source_id: s_uY_oOBPMblohx5mlBrTpIE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 519932 王應綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uY_oOBPMblohx5mlBrTpIE
            source_type: api_record
            title: 中国历代人物传记资料库：王應綵（CBDB 61240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61240&o=json
            external_identifier: CBDB:61240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bGBrzHdXA6nmyqm76pX4Tp
        status: active
        display_name: 王應綵
        merged_into_person_id: null
---

# 王應綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應綸，史料所见人物。本项目依据《中国历代人物传记资料库：王應綸（CBDB 519932）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王應綸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_bGBrzHdXA6nmyqm76pX4Tp | 王應綵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應綵（CBDB 61240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61240&o=json)
- [中国历代人物传记资料库：王應綸（CBDB 519932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519932&o=json)
