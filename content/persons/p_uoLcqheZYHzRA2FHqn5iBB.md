---
schema: wang-person/v1
id: p_uoLcqheZYHzRA2FHqn5iBB
status: active
merged_into: null
display_name: 王鎧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Z5yGHwjrhKNzHiNrMnhv4
        subject_person_id: p_uoLcqheZYHzRA2FHqn5iBB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GEdpy1zpNirzfMf53WsPEB
          claim_id: c_8Z5yGHwjrhKNzHiNrMnhv4
          source_id: s_AVLi7mTVXZfuJoJPAnaBEv
          stance: supports
          locator: CBDB:550767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550767）
          source: &a1
            id: s_AVLi7mTVXZfuJoJPAnaBEv
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 550767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550767&o=json
            external_identifier: CBDB:550767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u26EmNM7QyL8R95LV7LN1J
        subject_person_id: p_uoLcqheZYHzRA2FHqn5iBB
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
        - id: cs_vSAYsu8HN95PHsW7AzoNtg
          claim_id: c_u26EmNM7QyL8R95LV7LN1J
          source_id: s_AVLi7mTVXZfuJoJPAnaBEv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LeyI_G2Sv134rgWL-YlfKD
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uoLcqheZYHzRA2FHqn5iBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o7tfYCf3PAyys21KxwxoTW
          claim_id: c_LeyI_G2Sv134rgWL-YlfKD
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: 滸墅關志，lgid=176454：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1KpQN7kM94ZaSMB6MNtr2m
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 126499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json
            external_identifier: CBDB:126499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2ikP4x5v4Dn6VEoAAJy53Z
        status: active
        display_name: 王汝玉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鎧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_2ikP4x5v4Dn6VEoAAJy53Z | 王汝玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎧（CBDB 550767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550767&o=json)
- [中国历代人物传记资料库：王汝玉（CBDB 126499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json)
