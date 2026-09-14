---
schema: wang-person/v1
id: p_ybe5jUPL3jqpTv7TRwnMv5
status: active
merged_into: null
display_name: 王任選
cbdb_id: 334522
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UTCfF22kXRAUbNppvdE4KW
        subject_person_id: p_ybe5jUPL3jqpTv7TRwnMv5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任選，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 334522）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jw2ekZwwZKJE95c1TWs06i
          claim_id: c_UTCfF22kXRAUbNppvdE4KW
          source_id: s_gSQkgXD3hrcZq2aB3mYygZ
          stance: supports
          locator: CBDB:334522
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gSQkgXD3hrcZq2aB3mYygZ
            source_type: api_record
            title: 中国历代人物传记资料库：王任選（CBDB 334522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json
            external_identifier: CBDB:334522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ErnHCGqrgDEEx7JUdzap2B
        subject_person_id: p_ybe5jUPL3jqpTv7TRwnMv5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b9Z4Mho2Q1dV6Fqkd6UDuU
          claim_id: c_ErnHCGqrgDEEx7JUdzap2B
          source_id: s_gSQkgXD3hrcZq2aB3mYygZ
          stance: supports
          locator: CBDB:334522
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uFEwxzf1b5T7fAe4EfI_gs
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ybe5jUPL3jqpTv7TRwnMv5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSr-4geElkcFAD-pek0n7b
          claim_id: c_uFEwxzf1b5T7fAe4EfI_gs
          source_id: s_rJdssbctaNth_xueaBnXe_
          stance: supports
          locator: CBDB：兄弟 王任重（126522）之父／母 王寅
          quotation: null
          interpretation_note: 由兄弟关系推断：王任選 与 王任重 为同胞（CBDB 记「兄」），王任重 之父／母即 王任選 之父／母。
          source:
            id: s_rJdssbctaNth_xueaBnXe_
            source_type: api_record
            title: 中国历代人物传记资料库：王任選（CBDB 334522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json
            external_identifier: CBDB:334522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v9S8oyRFWQnLjHDjQjs8bc
        status: active
        display_name: 王寅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5YgfdF3KniznJOJ4aAQfkN
        subject_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybe5jUPL3jqpTv7TRwnMv5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJEWU8EDX-RtvFiDp4dbej
          claim_id: c_5YgfdF3KniznJOJ4aAQfkN
          source_id: s_rJdssbctaNth_xueaBnXe_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126522 王任重）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rJdssbctaNth_xueaBnXe_
            source_type: api_record
            title: 中国历代人物传记资料库：王任選（CBDB 334522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json
            external_identifier: CBDB:334522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kNK3hhmWa9pT6tDvK4Pp9u
        status: active
        display_name: 王任重
        merged_into_person_id: null
---

# 王任選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王任選，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 334522） | accepted |
| name.primary | 王任選 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v9S8oyRFWQnLjHDjQjs8bc | 王寅 | accepted |
| other | p_kNK3hhmWa9pT6tDvK4Pp9u | 王任重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任選（CBDB 334522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json)
