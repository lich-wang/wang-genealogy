---
schema: wang-person/v1
id: p_kAYn8y3iQCatmSJGkXFLhh
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tE6xQyTwbw3G6yY3ioNifC
        subject_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ETfGuixhv7Ve6M7m8yKn7m
          claim_id: c_tE6xQyTwbw3G6yY3ioNifC
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: CBDB:126621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126621）
          source: &a1
            id: s_xjN2TJXyA6Vs3DyR5m6myd
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 126621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json
            external_identifier: CBDB:126621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mEBc18QqxjswmHjAuBMD9p
        subject_person_id: p_kAYn8y3iQCatmSJGkXFLhh
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
        - id: cs_QF323o75PhhSPfGdZsUryc
          claim_id: c_mEBc18QqxjswmHjAuBMD9p
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
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
        id: c_CwXVFBItmgLAcDG-uHSSkH
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p2u5fBzApZQm_BXdfLwwTn
          claim_id: c_CwXVFBItmgLAcDG-uHSSkH
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KRx9f8uEzGo8ayLUHUrw9A
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XQ0k80M5YwzrxC0WR-RKqz
        subject_person_id: p_NA54fprXiFWyN6SjGq5DrE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tuJfOa0IZXtVAHaQrMpkNd
          claim_id: c_XQ0k80M5YwzrxC0WR-RKqz
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NA54fprXiFWyN6SjGq5DrE
        status: active
        display_name: 王秀三
        merged_into_person_id: null
    - claim:
        id: c_WxeYWL1yZkQK23P2N8HrOY
        subject_person_id: p_xjifYg2kCZ8329T4F86wRS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n26YLzbX64yuezo0KBQ5hM
          claim_id: c_WxeYWL1yZkQK23P2N8HrOY
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xjifYg2kCZ8329T4F86wRS
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KRx9f8uEzGo8ayLUHUrw9A | 王瓚 | accepted |
| ancestors | p_NA54fprXiFWyN6SjGq5DrE | 王秀三 | accepted |
| ancestors | p_xjifYg2kCZ8329T4F86wRS | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 126621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json)
