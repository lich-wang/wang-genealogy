---
schema: wang-person/v1
id: p_KZd6qcDybaQzJ6GHqUMa4k
status: active
merged_into: null
display_name: 王錧
cbdb_id: 262674
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xq7agh684NR3Qmket6DPN2
        subject_person_id: p_KZd6qcDybaQzJ6GHqUMa4k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錧，明人物。弘治三年進士，籍贯臨海，曾任訓導。（中国历代人物传记资料库 CBDB 262674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ly7CymqE3W3iKuTYDf2bqv
          claim_id: c_Xq7agh684NR3Qmket6DPN2
          source_id: s_6TaRxaJpwrVmPnjpw3DK93
          stance: supports
          locator: CBDB:262674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6TaRxaJpwrVmPnjpw3DK93
            source_type: api_record
            title: 中国历代人物传记资料库：王錧（CBDB 262674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262674&o=json
            external_identifier: CBDB:262674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Attexeb99jKeVru1sfTKTz
        subject_person_id: p_KZd6qcDybaQzJ6GHqUMa4k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cTgY9kPVL2Mde5pDQ4LNgW
          claim_id: c_Attexeb99jKeVru1sfTKTz
          source_id: s_6TaRxaJpwrVmPnjpw3DK93
          stance: supports
          locator: CBDB:262674
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h7GV2UQ22pMi7NG0Q6pMIC
        subject_person_id: p_GxB4u6sQCt6jzEUcjwwKLA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KZd6qcDybaQzJ6GHqUMa4k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1iz2vFG-WXVssH63pDs5Fm
          claim_id: c_h7GV2UQ22pMi7NG0Q6pMIC
          source_id: s_AHgTuVsQHbrrfUiQ9aJiXF
          stance: supports
          locator: CBDB：兄弟 王鉞（200774）之父／母 王克厚
          quotation: null
          interpretation_note: 由兄弟关系推断：王錧 与 王鉞 为同胞（CBDB 记「弟」），王鉞 之父／母即 王錧 之父／母。
          source:
            id: s_AHgTuVsQHbrrfUiQ9aJiXF
            source_type: api_record
            title: 中国历代人物传记资料库：王錧（CBDB 262674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262674&o=json
            external_identifier: CBDB:262674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GxB4u6sQCt6jzEUcjwwKLA
        status: active
        display_name: 王克厚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uK9mxsvIhUR8eeer_sk8lS
        subject_person_id: p_KZd6qcDybaQzJ6GHqUMa4k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sCt13UNRrBt2qKTE8fxxQi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Xqqmi-TuXu5AgYJ8lVPUf
          claim_id: c_uK9mxsvIhUR8eeer_sk8lS
          source_id: s_AHgTuVsQHbrrfUiQ9aJiXF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200774 王鉞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AHgTuVsQHbrrfUiQ9aJiXF
            source_type: api_record
            title: 中国历代人物传记资料库：王錧（CBDB 262674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262674&o=json
            external_identifier: CBDB:262674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sCt13UNRrBt2qKTE8fxxQi
        status: active
        display_name: 王鉞
        merged_into_person_id: null
---

# 王錧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錧，明人物。弘治三年進士，籍贯臨海，曾任訓導。（中国历代人物传记资料库 CBDB 262674） | accepted |
| name.primary | 王錧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GxB4u6sQCt6jzEUcjwwKLA | 王克厚 | accepted |
| other | p_sCt13UNRrBt2qKTE8fxxQi | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錧（CBDB 262674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262674&o=json)
