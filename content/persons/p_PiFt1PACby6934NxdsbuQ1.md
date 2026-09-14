---
schema: wang-person/v1
id: p_PiFt1PACby6934NxdsbuQ1
status: active
merged_into: null
display_name: 王邁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fRKrzrJCBmxmNkYqLPc214
        subject_person_id: p_PiFt1PACby6934NxdsbuQ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bTE9CpWKHLFRG55oia46q1
          claim_id: c_fRKrzrJCBmxmNkYqLPc214
          source_id: s_kDCNTpgNYyxvDmWMqMB6N6
          stance: supports
          locator: CBDB:276424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276424）
          source: &a1
            id: s_kDCNTpgNYyxvDmWMqMB6N6
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 276424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json
            external_identifier: CBDB:276424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7RW9eEnFs2uRb8YLTGcuNJ
        subject_person_id: p_PiFt1PACby6934NxdsbuQ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wi5NFGEgxja21or5zicL7Q
          claim_id: c_7RW9eEnFs2uRb8YLTGcuNJ
          source_id: s_kDCNTpgNYyxvDmWMqMB6N6
          stance: supports
          locator: CBDB:276424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tIgb9kAAYcO7cv-9JQdsP1
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PiFt1PACby6934NxdsbuQ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFSZnV8D1aMcGRZemRsDNs
          claim_id: c_tIgb9kAAYcO7cv-9JQdsP1
          source_id: s_E7L8H1t-SC0DLdFtAc-jnS
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王邁 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王邁 之父／母。
          source:
            id: s_E7L8H1t-SC0DLdFtAc-jnS
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 276424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json
            external_identifier: CBDB:276424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGL1HFsgeWYQ3VFWBGSemb
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SV40sAecJbjQxivOmeOV5_
        subject_person_id: p_PiFt1PACby6934NxdsbuQ1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdFY5xhCa3UMldw1cPCFIX
          claim_id: c_SV40sAecJbjQxivOmeOV5_
          source_id: s_E7L8H1t-SC0DLdFtAc-jnS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E7L8H1t-SC0DLdFtAc-jnS
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 276424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json
            external_identifier: CBDB:276424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王邁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁 | accepted |
| bio.summary | 王邁，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGL1HFsgeWYQ3VFWBGSemb | 王琮 | accepted |
| other | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邁（CBDB 276424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276424&o=json)
