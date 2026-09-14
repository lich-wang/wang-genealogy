---
schema: wang-person/v1
id: p_6ztBg2EgJwXATmnfE6XEgT
status: active
merged_into: null
display_name: 王納謨
cbdb_id: 288217
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6L86hJ8EJ5yhGAtGyZu5dV
        subject_person_id: p_6ztBg2EgJwXATmnfE6XEgT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納謨，明人物。嘉靖八年進士，籍贯襄城，曾任訓導。（中国历代人物传记资料库 CBDB 288217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uAu3074Gvrng1Ow3Sc2T7P
          claim_id: c_6L86hJ8EJ5yhGAtGyZu5dV
          source_id: s_P7Bv4uWxDWoqLBegX5vtB8
          stance: supports
          locator: CBDB:288217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_P7Bv4uWxDWoqLBegX5vtB8
            source_type: api_record
            title: 中国历代人物传记资料库：王納謨（CBDB 288217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json
            external_identifier: CBDB:288217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S5WeWjoYPcR3ChEEmGBL45
        subject_person_id: p_6ztBg2EgJwXATmnfE6XEgT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Sq3vdRmwwJ45UR2TphZifs
          claim_id: c_S5WeWjoYPcR3ChEEmGBL45
          source_id: s_P7Bv4uWxDWoqLBegX5vtB8
          stance: supports
          locator: CBDB:288217
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GBjp9_V4ax3IqtqEbKFJtk
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ztBg2EgJwXATmnfE6XEgT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEAyTqb9htlaJ_Nf6JrQmt
          claim_id: c_GBjp9_V4ax3IqtqEbKFJtk
          source_id: s_upzvJwWKbCC05rtwN3AfyE
          stance: supports
          locator: CBDB：兄弟 王納言（68459）之父／母 王汝楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王納謨 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納謨 之父／母。
          source:
            id: s_upzvJwWKbCC05rtwN3AfyE
            source_type: api_record
            title: 中国历代人物传记资料库：王納謨（CBDB 288217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json
            external_identifier: CBDB:288217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_enQPN3zVXFi7qM1WJLyJty
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_arTsFaxEHrogqe9ICpvzDF
        subject_person_id: p_6ztBg2EgJwXATmnfE6XEgT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOZHxbiHbn5H1mmN4WwTy8
          claim_id: c_arTsFaxEHrogqe9ICpvzDF
          source_id: s_upzvJwWKbCC05rtwN3AfyE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68459 王納言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_upzvJwWKbCC05rtwN3AfyE
            source_type: api_record
            title: 中国历代人物传记资料库：王納謨（CBDB 288217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json
            external_identifier: CBDB:288217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
---

# 王納謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王納謨，明人物。嘉靖八年進士，籍贯襄城，曾任訓導。（中国历代人物传记资料库 CBDB 288217） | accepted |
| name.primary | 王納謨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_enQPN3zVXFi7qM1WJLyJty | 王汝楫 | accepted |
| other | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納謨（CBDB 288217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json)
