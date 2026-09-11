---
schema: wang-person/v1
id: p_Mb2RND5RPdkBbHc3mLAQVY
status: active
merged_into: null
display_name: 王寰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aKRn5Kzwf21JwheG32apQf
        subject_person_id: p_Mb2RND5RPdkBbHc3mLAQVY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rTQsnkuiXrwZ1XcNC48ENU
          claim_id: c_aKRn5Kzwf21JwheG32apQf
          source_id: s_ANs5ZARGxD7AsVaBivCJdt
          stance: supports
          locator: CBDB:326616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326616）
          source: &a1
            id: s_ANs5ZARGxD7AsVaBivCJdt
            source_type: api_record
            title: 中国历代人物传记资料库：王寰（CBDB 326616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326616&o=json
            external_identifier: CBDB:326616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PZypNncXXRZwmiGRPjhaNm
        subject_person_id: p_Mb2RND5RPdkBbHc3mLAQVY
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
        - id: cs_4Zu5B66CFPRx2n2rAKDfHC
          claim_id: c_PZypNncXXRZwmiGRPjhaNm
          source_id: s_ANs5ZARGxD7AsVaBivCJdt
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
        id: c_8BiRpqd0WOgYT-r5ewqBsH
        subject_person_id: p_Mb2RND5RPdkBbHc3mLAQVY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFrngecIRrLCn9sgUs6cXL
          claim_id: c_8BiRpqd0WOgYT-r5ewqBsH
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
  other: []
---

# 王寰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寰（CBDB 326616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326616&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)
