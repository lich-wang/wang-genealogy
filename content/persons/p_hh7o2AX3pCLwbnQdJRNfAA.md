---
schema: wang-person/v1
id: p_hh7o2AX3pCLwbnQdJRNfAA
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPX7aykYxwscTBXFyRVGWc
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3eFpV4aZZnyt26Ck8Hu2M
          claim_id: c_wPX7aykYxwscTBXFyRVGWc
          source_id: s_w4ziRJPUU4XSh9hQQeo2Kx
          stance: supports
          locator: CBDB:243166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243166）
          source: &a1
            id: s_w4ziRJPUU4XSh9hQQeo2Kx
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 243166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243166&o=json
            external_identifier: CBDB:243166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rfJNdMQxjVr49MnHtHHESH
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3q3PVE_nJdVO17MQNGMU8p
          claim_id: c_rfJNdMQxjVr49MnHtHHESH
          source_id: s_w4ziRJPUU4XSh9hQQeo2Kx
          stance: supports
          locator: CBDB:243166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-DOpVLvxEplfCqbcsGuxjO
        subject_person_id: p_hh7o2AX3pCLwbnQdJRNfAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GiENj1L3SMUyiHFegryAJV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azZ24H01E-YmD4ApKIEWjF
          claim_id: c_-DOpVLvxEplfCqbcsGuxjO
          source_id: s_w4ziRJPUU4XSh9hQQeo2Kx
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第五十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GiENj1L3SMUyiHFegryAJV
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GiENj1L3SMUyiHFegryAJV | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 243166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243166&o=json)
