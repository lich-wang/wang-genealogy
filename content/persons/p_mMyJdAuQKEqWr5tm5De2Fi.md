---
schema: wang-person/v1
id: p_mMyJdAuQKEqWr5tm5De2Fi
status: active
merged_into: null
display_name: 王士怡
cbdb_id: 259205
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nFNz9SQsqv5GaaL7EcjN77
        subject_person_id: p_mMyJdAuQKEqWr5tm5De2Fi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士怡，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259205）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_r5jvNEp2dwYamFjomud_xS
          claim_id: c_nFNz9SQsqv5GaaL7EcjN77
          source_id: s_dFtGPJL1uYDKvC2nrVcY53
          stance: supports
          locator: CBDB:259205
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dFtGPJL1uYDKvC2nrVcY53
            source_type: api_record
            title: 中国历代人物传记资料库：王士怡（CBDB 259205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259205&o=json
            external_identifier: CBDB:259205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QL3LP7SfieFTZXs1jrL2WK
        subject_person_id: p_mMyJdAuQKEqWr5tm5De2Fi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oZkhFmQK3Y5wJJH6nr85HQ
          claim_id: c_QL3LP7SfieFTZXs1jrL2WK
          source_id: s_dFtGPJL1uYDKvC2nrVcY53
          stance: supports
          locator: CBDB:259205
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_Yy2JdziJzMonbX3oiYWDiJ
        subject_person_id: p_mMyJdAuQKEqWr5tm5De2Fi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kdsz31LsNcXBMccuK9UD2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5qkpVfSlWwFxHk4HzZCvR
          claim_id: c_Yy2JdziJzMonbX3oiYWDiJ
          source_id: s_rinjSKxkPZ6GXhj8MmBj5D
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第六十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rinjSKxkPZ6GXhj8MmBj5D
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 200520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json
            external_identifier: CBDB:200520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.616Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kdsz31LsNcXBMccuK9UD2
        status: active
        display_name: 王恩
        merged_into_person_id: null
  other: []
---

# 王士怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士怡，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259205） | accepted |
| name.primary | 王士怡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8kdsz31LsNcXBMccuK9UD2 | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 200520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200520&o=json)
- [中国历代人物传记资料库：王士怡（CBDB 259205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259205&o=json)
