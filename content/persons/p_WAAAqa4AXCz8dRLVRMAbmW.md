---
schema: wang-person/v1
id: p_WAAAqa4AXCz8dRLVRMAbmW
status: active
merged_into: null
display_name: 王運化
cbdb_id: 336312
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SPy3RDXwkzsnREADXnF1WT
        subject_person_id: p_WAAAqa4AXCz8dRLVRMAbmW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KlkNt3L5WnWYQFUlg5s-p4
          claim_id: c_SPy3RDXwkzsnREADXnF1WT
          source_id: s_BAJd421KM2EmMdvRBPkA53
          stance: supports
          locator: CBDB:336312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BAJd421KM2EmMdvRBPkA53
            source_type: api_record
            title: 中国历代人物传记资料库：王運化（CBDB 336312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json
            external_identifier: CBDB:336312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g79ZyoGWsA9S1TnaNW66Wn
        subject_person_id: p_WAAAqa4AXCz8dRLVRMAbmW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王運化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8jGzt1FZFn7hR1wKdwtTcw
          claim_id: c_g79ZyoGWsA9S1TnaNW66Wn
          source_id: s_BAJd421KM2EmMdvRBPkA53
          stance: supports
          locator: CBDB:336312
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ygojk_pqBUXkerkk22Hmbj
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WAAAqa4AXCz8dRLVRMAbmW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fw-QXSQt10I7UWIkvw5itD
          claim_id: c_Ygojk_pqBUXkerkk22Hmbj
          source_id: s_p6dwuFTvN4DIoJ8mkf4ayW
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王運化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王運化 之父／母。
          source:
            id: s_p6dwuFTvN4DIoJ8mkf4ayW
            source_type: api_record
            title: 中国历代人物传记资料库：王運化（CBDB 336312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json
            external_identifier: CBDB:336312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3NLrzrSSHKzjmRv78pJAPK
        status: active
        display_name: 王士逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Opu0y3zFrcd0FwfGDl6IFP
        subject_person_id: p_WAAAqa4AXCz8dRLVRMAbmW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huYw1UWH24o3qNL_V8hrFs
          claim_id: c_Opu0y3zFrcd0FwfGDl6IFP
          source_id: s_p6dwuFTvN4DIoJ8mkf4ayW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p6dwuFTvN4DIoJ8mkf4ayW
            source_type: api_record
            title: 中国历代人物传记资料库：王運化（CBDB 336312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json
            external_identifier: CBDB:336312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
---

# 王運化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王運化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336312） | accepted |
| name.primary | 王運化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NLrzrSSHKzjmRv78pJAPK | 王士逵 | accepted |
| other | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王運化（CBDB 336312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336312&o=json)
