---
schema: wang-person/v1
id: p_bGBrzHdXA6nmyqm76pX4Tp
status: active
merged_into: null
display_name: 王應綵
cbdb_id: 61240
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CxTxhoPF7nLy3ziQLbuqA9
        subject_person_id: p_bGBrzHdXA6nmyqm76pX4Tp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應綵，清人物。明清進士進士，籍贯桐鄉，入仕進士，曾任道監察御史、司郎中、鄉試考官。（中国历代人物传记资料库 CBDB 61240）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_72V8zeg1OhhOrmi5UPhk_q
          claim_id: c_CxTxhoPF7nLy3ziQLbuqA9
          source_id: s_dC4wfwUaUzgTdUnMErzwGD
          stance: supports
          locator: CBDB:61240
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dC4wfwUaUzgTdUnMErzwGD
            source_type: api_record
            title: 中国历代人物传记资料库：王應綵（CBDB 61240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61240&o=json
            external_identifier: CBDB:61240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_38hsgevrXCD9R19ewEgwSY
        subject_person_id: p_bGBrzHdXA6nmyqm76pX4Tp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應綵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_55TM7Tv4DCDRjEoDLeJX21
          claim_id: c_38hsgevrXCD9R19ewEgwSY
          source_id: s_dC4wfwUaUzgTdUnMErzwGD
          stance: supports
          locator: CBDB:61240
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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
        id: p_hEM8u7f3WaNDJCKm4Tr9oT
        status: active
        display_name: 王應綸
        merged_into_person_id: null
---

# 王應綵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應綵，清人物。明清進士進士，籍贯桐鄉，入仕進士，曾任道監察御史、司郎中、鄉試考官。（中国历代人物传记资料库 CBDB 61240） | accepted |
| name.primary | 王應綵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_hEM8u7f3WaNDJCKm4Tr9oT | 王應綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應綵（CBDB 61240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61240&o=json)
