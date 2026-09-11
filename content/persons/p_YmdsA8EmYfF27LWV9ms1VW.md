---
schema: wang-person/v1
id: p_YmdsA8EmYfF27LWV9ms1VW
status: active
merged_into: null
display_name: 王孝忠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QHtFhaFj7BGKd2qHu8tZEN
        subject_person_id: p_YmdsA8EmYfF27LWV9ms1VW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9eL1veYy5umSqzFXVQBBwt
          claim_id: c_QHtFhaFj7BGKd2qHu8tZEN
          source_id: s_Qt9LMTQz4XACMGKnPv9sZb
          stance: supports
          locator: CBDB:201152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201152）
          source: &a1
            id: s_Qt9LMTQz4XACMGKnPv9sZb
            source_type: api_record
            title: 中国历代人物传记资料库：王孝忠（CBDB 201152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201152&o=json
            external_identifier: CBDB:201152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.660Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A65nhgDDQHtief2LkTE1cU
        subject_person_id: p_YmdsA8EmYfF27LWV9ms1VW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AYwiEZ2jCo4RGrk9anYMAo
          claim_id: c_A65nhgDDQHtief2LkTE1cU
          source_id: s_Qt9LMTQz4XACMGKnPv9sZb
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
        id: c_j6AVw6xm8sq5BAafPNJfKT
        subject_person_id: p_YmdsA8EmYfF27LWV9ms1VW
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
        - id: cs_PAcFCHrKPQ4cDU8TthLPFy
          claim_id: c_j6AVw6xm8sq5BAafPNJfKT
          source_id: s_Qt9LMTQz4XACMGKnPv9sZb
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
        id: c_CaZ96EB9iBVsBFnbO8sp4E
        subject_person_id: p_3ctN3Ag7tAGFBEB9PuLpDo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YmdsA8EmYfF27LWV9ms1VW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_096CZ9yVk7E2CJ22nyqDOE
          claim_id: c_CaZ96EB9iBVsBFnbO8sp4E
          source_id: s_P3MEHnApxLcSAm5mmE1QuN
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P3MEHnApxLcSAm5mmE1QuN
            source_type: api_record
            title: 中国历代人物传记资料库：王參（CBDB 267969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267969&o=json
            external_identifier: CBDB:267969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3ctN3Ag7tAGFBEB9PuLpDo
        status: active
        display_name: 王參
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_G_EALxAHzKFY-c8V_3aFi5
        subject_person_id: p_r7UvWenhP43z4nowVRc2BP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YmdsA8EmYfF27LWV9ms1VW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ClHGl4_LDpVHmfDzvvwESg
          claim_id: c_G_EALxAHzKFY-c8V_3aFi5
          source_id: s_L6xZiK78HFM936BTAdqguQ
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L6xZiK78HFM936BTAdqguQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希仙（CBDB 267967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267967&o=json
            external_identifier: CBDB:267967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r7UvWenhP43z4nowVRc2BP
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王孝忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝忠 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3ctN3Ag7tAGFBEB9PuLpDo | 王參 | accepted |
| ancestors | p_r7UvWenhP43z4nowVRc2BP | 王希仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王參（CBDB 267969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267969&o=json)
- [中国历代人物传记资料库：王希仙（CBDB 267967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267967&o=json)
- [中国历代人物传记资料库：王孝忠（CBDB 201152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201152&o=json)
