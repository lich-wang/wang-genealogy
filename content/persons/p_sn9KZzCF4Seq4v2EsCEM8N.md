---
schema: wang-person/v1
id: p_sn9KZzCF4Seq4v2EsCEM8N
status: active
merged_into: null
display_name: 王䋊
cbdb_id: 126694
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZmFLxNdE9Qs1JheXDshbb
        subject_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䋊，明人物。中国历代人物传记资料库（CBDB）以人物编号 126694 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_82YbCQVn_K2UGqA0nvn7-f
          claim_id: c_PZmFLxNdE9Qs1JheXDshbb
          source_id: s_eqRpM59epo9UeLCCVP9UuZ
          stance: supports
          locator: CBDB:126694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_eqRpM59epo9UeLCCVP9UuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王䋊（CBDB 126694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126694&o=json
            external_identifier: CBDB:126694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQXfdLTyS8wP9QNRM1ycVA
        subject_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䋊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZaeHAu22M7ViVUv76VV2sS
          claim_id: c_HQXfdLTyS8wP9QNRM1ycVA
          source_id: s_eqRpM59epo9UeLCCVP9UuZ
          stance: supports
          locator: CBDB:126694
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_eqRpM59epo9UeLCCVP9UuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王䋊（CBDB 126694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126694&o=json
            external_identifier: CBDB:126694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NxjNx1wP-uHFyrqmx7aV0X
        subject_person_id: p_CMffgJkEHdtf2Ua3rJuHZ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vld8dPTpSUKIQ7cqIhOrRt
          claim_id: c_NxjNx1wP-uHFyrqmx7aV0X
          source_id: s_GLVxJsh9n7QFUSeAED2nsn
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GLVxJsh9n7QFUSeAED2nsn
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 288290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288290&o=json
            external_identifier: CBDB:288290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CMffgJkEHdtf2Ua3rJuHZ9
        status: active
        display_name: 王璞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ezw7zq-uvrsW3oaKRU0wDD
        subject_person_id: p_aJLvov3QQMSFASDEQ1SHSn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sn9KZzCF4Seq4v2EsCEM8N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbsWsNDTY1OY956IYyRhBt
          claim_id: c_ezw7zq-uvrsW3oaKRU0wDD
          source_id: s_NxCnPKT1kxgzVztCXgYTPv
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NxCnPKT1kxgzVztCXgYTPv
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 288289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288289&o=json
            external_identifier: CBDB:288289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJLvov3QQMSFASDEQ1SHSn
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王䋊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王䋊，明人物。中国历代人物传记资料库（CBDB）以人物编号 126694 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王䋊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CMffgJkEHdtf2Ua3rJuHZ9 | 王璞 | accepted |
| ancestors | p_aJLvov3QQMSFASDEQ1SHSn | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璞（CBDB 288290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288290&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 288289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288289&o=json)
- [中国历代人物传记资料库：王䋊（CBDB 126694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126694&o=json)
