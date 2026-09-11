---
schema: wang-person/v1
id: p_6nYBhpCbadtLK7Qb2JDrdz
status: active
merged_into: null
display_name: 王璲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SdR2nCrKfqM5ghP5qHEuu7
        subject_person_id: p_6nYBhpCbadtLK7Qb2JDrdz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2FoFo49LY8P1KdMtQRzjjG
          claim_id: c_SdR2nCrKfqM5ghP5qHEuu7
          source_id: s_m3FB6rL8Mfe15DRQD2E95m
          stance: supports
          locator: CBDB:328154
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328154）
          source: &a1
            id: s_m3FB6rL8Mfe15DRQD2E95m
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 328154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328154&o=json
            external_identifier: CBDB:328154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oUJPs1GAqSeP4KMeZJ218M
        subject_person_id: p_6nYBhpCbadtLK7Qb2JDrdz
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
        - id: cs_HmH3QZmm33iSZb6YUMAXti
          claim_id: c_oUJPs1GAqSeP4KMeZJ218M
          source_id: s_m3FB6rL8Mfe15DRQD2E95m
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
        id: c__eoLL8z5-54xP-hNgDSBHx
        subject_person_id: p_6nYBhpCbadtLK7Qb2JDrdz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXNXhcmP3pgs4EeZNT7tYq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJKj1j6Z29TO8bq14Bw7Ex
          claim_id: c__eoLL8z5-54xP-hNgDSBHx
          source_id: s_m3FB6rL8Mfe15DRQD2E95m
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oXNXhcmP3pgs4EeZNT7tYq
        status: active
        display_name: 王篆
        merged_into_person_id: null
  other: []
---

# 王璲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oXNXhcmP3pgs4EeZNT7tYq | 王篆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璲（CBDB 328154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328154&o=json)
