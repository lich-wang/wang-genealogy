---
schema: wang-person/v1
id: p_cDtAvQGzuVZRFeJxenEh2g
status: active
merged_into: null
display_name: 王可信
cbdb_id: 204413
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KXFCASEvALbK957BM1dwkC
        subject_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可信（生于1518年），史料所见人物。本项目依据《中国历代人物传记资料库：王可信（CBDB 204413）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_U4amLCBpargBnIUzLrJwk2
          claim_id: c_KXFCASEvALbK957BM1dwkC
          source_id: s_TXHgf3BvWfPQMPagC7GAGQ
          stance: supports
          locator: CBDB:204413
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TXHgf3BvWfPQMPagC7GAGQ
            source_type: api_record
            title: 中国历代人物传记资料库：王可信（CBDB 204413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204413&o=json
            external_identifier: CBDB:204413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cYF3i6TMuAkJaogLpSLiYH
        subject_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1518-01-01
            latest: 1518-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iUhvLyYdLbcoh5hP4v8749
          claim_id: c_cYF3i6TMuAkJaogLpSLiYH
          source_id: s_TXHgf3BvWfPQMPagC7GAGQ
          stance: supports
          locator: CBDB:204413
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1518
          source:
            id: s_TXHgf3BvWfPQMPagC7GAGQ
            source_type: api_record
            title: 中国历代人物传记资料库：王可信（CBDB 204413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204413&o=json
            external_identifier: CBDB:204413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FLxGUqiRvMfbN7MpJG8Skr
        subject_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E5fGjCBZCTvbWW57RP1C6y
          claim_id: c_FLxGUqiRvMfbN7MpJG8Skr
          source_id: s_TXHgf3BvWfPQMPagC7GAGQ
          stance: supports
          locator: CBDB:204413
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1518
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Od3aGJSRMwW0cqM7E1PgjG
        subject_person_id: p_YaWmd84uDmuR4z7SAP4Eam
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNOgFZb3AiomKz2ArQDlox
          claim_id: c_Od3aGJSRMwW0cqM7E1PgjG
          source_id: s_hQPa37YUT1hpcYJ1GEai5p
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQPa37YUT1hpcYJ1GEai5p
            source_type: api_record
            title: 中国历代人物传记资料库：王崇德（CBDB 318728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318728&o=json
            external_identifier: CBDB:318728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YaWmd84uDmuR4z7SAP4Eam
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_afhDOfFYtamwVcjDWJGKG6
        subject_person_id: p_Dt54odQN3CFe2bvZC88Thv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lGl_JScNO6p9xYAhFqI_WC
          claim_id: c_afhDOfFYtamwVcjDWJGKG6
          source_id: s_qTVHob728dwJNHD16NpDKS
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qTVHob728dwJNHD16NpDKS
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 318727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318727&o=json
            external_identifier: CBDB:318727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dt54odQN3CFe2bvZC88Thv
        status: active
        display_name: 王寅
        merged_into_person_id: null
    - claim:
        id: c_j4aqwjhf5RZ6H3QnrCcvA4
        subject_person_id: p_XGUAYvnx1UBbBoMMQoDGBg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cDtAvQGzuVZRFeJxenEh2g
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HqYhRQz9yQXeJI_dYSdkWL
          claim_id: c_j4aqwjhf5RZ6H3QnrCcvA4
          source_id: s_Mc9UhocFDyPdqyhSgokSej
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mc9UhocFDyPdqyhSgokSej
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 318726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318726&o=json
            external_identifier: CBDB:318726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XGUAYvnx1UBbBoMMQoDGBg
        status: active
        display_name: 王璧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王可信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可信（生于1518年），史料所见人物。本项目依据《中国历代人物传记资料库：王可信（CBDB 204413）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1518年 | accepted |
| name.primary | 王可信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YaWmd84uDmuR4z7SAP4Eam | 王崇德 | accepted |
| ancestors | p_Dt54odQN3CFe2bvZC88Thv | 王寅 | accepted |
| ancestors | p_XGUAYvnx1UBbBoMMQoDGBg | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 318726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318726&o=json)
- [中国历代人物传记资料库：王崇德（CBDB 318728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318728&o=json)
- [中国历代人物传记资料库：王可信（CBDB 204413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204413&o=json)
- [中国历代人物传记资料库：王寅（CBDB 318727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318727&o=json)
