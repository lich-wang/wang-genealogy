---
schema: wang-person/v1
id: p_wEuXW2QRPfavvbFYPCJ1DK
status: active
merged_into: null
display_name: 王宏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1FJBvTAa7Bgb4YcrfZyF5o
        subject_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNSmwM5xoQ5Yk8Aa5Dfdb6
          claim_id: c_1FJBvTAa7Bgb4YcrfZyF5o
          source_id: s_ZumPdj3jsFKYGtvsveaDgh
          stance: supports
          locator: CBDB:199484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199484）
          source: &a1
            id: s_ZumPdj3jsFKYGtvsveaDgh
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 199484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199484&o=json
            external_identifier: CBDB:199484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WgiwK6BETVitmJEPPqYU26
        subject_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZXqWNPNTTtMup1wcubjapW
          claim_id: c_WgiwK6BETVitmJEPPqYU26
          source_id: s_ZumPdj3jsFKYGtvsveaDgh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u7VMn1Dkogd4WSbAtR4tT8
        subject_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJDhVYBbPhhcdGJW2aZ43V
          claim_id: c_u7VMn1Dkogd4WSbAtR4tT8
          source_id: s_ZumPdj3jsFKYGtvsveaDgh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-pPL40RkHw1n6aldebjRJi
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G0_XUAWHUAX2EGOLbiLOze
          claim_id: c_-pPL40RkHw1n6aldebjRJi
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z7d5HYzKcD7H64D6YKWzRd
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 245697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json
            external_identifier: CBDB:245697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P3bk3vpKCZxTvFzWKE93mj
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-NJaDEQjIrnR0_9jP4BW0Z
        subject_person_id: p_A3ZzUS6ZaxSG1AS5DcEhHg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLbhEVGy70yHdRi4RzRXHQ
          claim_id: c_-NJaDEQjIrnR0_9jP4BW0Z
          source_id: s_rW9u62b8fcn5Cz3YjfcW1X
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rW9u62b8fcn5Cz3YjfcW1X
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 245694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245694&o=json
            external_identifier: CBDB:245694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3ZzUS6ZaxSG1AS5DcEhHg
        status: active
        display_name: 王溫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P3bk3vpKCZxTvFzWKE93mj | 王麟 | accepted |
| ancestors | p_A3ZzUS6ZaxSG1AS5DcEhHg | 王溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 199484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199484&o=json)
- [中国历代人物传记资料库：王麟（CBDB 245697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json)
- [中国历代人物传记资料库：王溫（CBDB 245694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245694&o=json)
