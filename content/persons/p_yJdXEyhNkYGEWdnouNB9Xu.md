---
schema: wang-person/v1
id: p_yJdXEyhNkYGEWdnouNB9Xu
status: active
merged_into: null
display_name: 王廷瞻
cbdb_id: 34669
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M8mQV9q1jPUATJUrN4SEJ9
        subject_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瞻，明人物。中国历代人物传记资料库（CBDB）以人物编号 34669 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_YITN9NXRuWmY7FaJgRT49x
          claim_id: c_M8mQV9q1jPUATJUrN4SEJ9
          source_id: s_pqDqByPC4HM2jCqwTEKyP1
          stance: supports
          locator: CBDB:34669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_pqDqByPC4HM2jCqwTEKyP1
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瞻（CBDB 34669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34669&o=json
            external_identifier: CBDB:34669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W3hAiWdcV5mWAk3UncU797
        subject_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瞻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wn4WAfKjQ3acfooeWcr1CF
          claim_id: c_W3hAiWdcV5mWAk3UncU797
          source_id: s_pqDqByPC4HM2jCqwTEKyP1
          stance: supports
          locator: CBDB:34669
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_pqDqByPC4HM2jCqwTEKyP1
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瞻（CBDB 34669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34669&o=json
            external_identifier: CBDB:34669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_by1nD_7WcjNQAOFLKZoL-l
        subject_person_id: p_nXkL5n6av6NxxN76vBSAC8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1ooLHTzZn_h0PBkN2pMZc
          claim_id: c_by1nD_7WcjNQAOFLKZoL-l
          source_id: s_DA7AwiQVi9pCznGv9f64Qr
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第二百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DA7AwiQVi9pCznGv9f64Qr
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 325987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325987&o=json
            external_identifier: CBDB:325987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nXkL5n6av6NxxN76vBSAC8
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GmWfv-btavP872YGNPnZrY
        subject_person_id: p_t8BiHr683cj8g6QH4F6miQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woiZqE0BHLpYt2ysODQ4ug
          claim_id: c_GmWfv-btavP872YGNPnZrY
          source_id: s_X5Pr96T6e8rfGmGJKBn7nt
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第二百名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X5Pr96T6e8rfGmGJKBn7nt
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 325986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325986&o=json
            external_identifier: CBDB:325986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_t8BiHr683cj8g6QH4F6miQ
        status: active
        display_name: 王文奎
        merged_into_person_id: null
    - claim:
        id: c_7oUueKwlvV5eWKATN8CqNZ
        subject_person_id: p_yQYZeXP9CKgyFcH7tLWLjb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAJYZ4xpsR0xgQuJSKjTWh
          claim_id: c_7oUueKwlvV5eWKATN8CqNZ
          source_id: s_PMnhhDxH69wJ4nE2PBtMG8
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第二百名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PMnhhDxH69wJ4nE2PBtMG8
            source_type: api_record
            title: 中国历代人物传记资料库：王思旻（CBDB 325984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325984&o=json
            external_identifier: CBDB:325984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yQYZeXP9CKgyFcH7tLWLjb
        status: active
        display_name: 王思旻
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷瞻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷瞻，明人物。中国历代人物传记资料库（CBDB）以人物编号 34669 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王廷瞻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nXkL5n6av6NxxN76vBSAC8 | 王濟 | accepted |
| ancestors | p_t8BiHr683cj8g6QH4F6miQ | 王文奎 | accepted |
| ancestors | p_yQYZeXP9CKgyFcH7tLWLjb | 王思旻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 325987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325987&o=json)
- [中国历代人物传记资料库：王思旻（CBDB 325984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325984&o=json)
- [中国历代人物传记资料库：王廷瞻（CBDB 34669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34669&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 325986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325986&o=json)
