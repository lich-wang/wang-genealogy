---
schema: wang-person/v1
id: p_PAEtdeQiDbKPvh24LAFMR5
status: active
merged_into: null
display_name: 王徤
cbdb_id: 299130
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7s59H3yEBFfj31DDaE82AM
        subject_person_id: p_PAEtdeQiDbKPvh24LAFMR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徤，明人物。中国历代人物传记资料库（CBDB）以人物编号 299130 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vClHc-q8w1jmRKFvx1t6UE
          claim_id: c_7s59H3yEBFfj31DDaE82AM
          source_id: s_zP2dXLkJsJnB2D6yjgYhFL
          stance: supports
          locator: CBDB:299130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zP2dXLkJsJnB2D6yjgYhFL
            source_type: api_record
            title: 中国历代人物传记资料库：王徤（CBDB 299130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299130&o=json
            external_identifier: CBDB:299130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c3Mqij4EZDb6NFc8bb89Ub
        subject_person_id: p_PAEtdeQiDbKPvh24LAFMR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yEuhXiEwFoWEuPfcnpF3Q5
          claim_id: c_c3Mqij4EZDb6NFc8bb89Ub
          source_id: s_zP2dXLkJsJnB2D6yjgYhFL
          stance: supports
          locator: CBDB:299130
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_zP2dXLkJsJnB2D6yjgYhFL
            source_type: api_record
            title: 中国历代人物传记资料库：王徤（CBDB 299130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299130&o=json
            external_identifier: CBDB:299130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_TeS48cjujqET8FHTKUJb4L
        subject_person_id: p_PAEtdeQiDbKPvh24LAFMR5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pOE-z68S8F-Q5W7Fga8BXW
          claim_id: c_TeS48cjujqET8FHTKUJb4L
          source_id: s_zP2dXLkJsJnB2D6yjgYhFL
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E2Hjum37Rd4UCpkHLkq4Ng
        status: active
        display_name: 王輪
        merged_into_person_id: null
  other: []
---

# 王徤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王徤，明人物。中国历代人物传记资料库（CBDB）以人物编号 299130 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王徤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_E2Hjum37Rd4UCpkHLkq4Ng | 王輪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徤（CBDB 299130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299130&o=json)
