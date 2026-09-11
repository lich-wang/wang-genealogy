---
schema: wang-person/v1
id: p_GKLTLPuTh4f7zDqa2sdDWy
status: active
merged_into: null
display_name: 王伯成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9pMKNUdy3j15fkfuLk7aR6
        subject_person_id: p_GKLTLPuTh4f7zDqa2sdDWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gk82sXp8zHgxQ85BueytA5
          claim_id: c_9pMKNUdy3j15fkfuLk7aR6
          source_id: s_K29Bo5Kx8Fme8dJ1igFWzB
          stance: supports
          locator: CBDB:271834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271834）
          source: &a1
            id: s_K29Bo5Kx8Fme8dJ1igFWzB
            source_type: api_record
            title: 中国历代人物传记资料库：王伯成（CBDB 271834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271834&o=json
            external_identifier: CBDB:271834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mjsDJL5EaMkMrDyUT7whrE
        subject_person_id: p_GKLTLPuTh4f7zDqa2sdDWy
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
        - id: cs_UGSFEAKw4YuKTqua9BKWgk
          claim_id: c_mjsDJL5EaMkMrDyUT7whrE
          source_id: s_K29Bo5Kx8Fme8dJ1igFWzB
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
  ancestors: []
  descendants:
    - claim:
        id: c_zM1ialmQJOUXPTVmso0P6N
        subject_person_id: p_GKLTLPuTh4f7zDqa2sdDWy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pacFriyb0saquzEpBXG1Q7
          claim_id: c_zM1ialmQJOUXPTVmso0P6N
          source_id: s_BtUPuCZjyPjh1RLikrHQE4
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BtUPuCZjyPjh1RLikrHQE4
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 201409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201409&o=json
            external_identifier: CBDB:201409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  other: []
---

# 王伯成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DF9QV6BkQyQ4o3h3Yhn8e4 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯成（CBDB 271834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271834&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 201409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201409&o=json)
