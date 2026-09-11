---
schema: wang-person/v1
id: p_FPPus9AT8wmb1wjQX27Ny9
status: active
merged_into: null
display_name: 王伍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5C4F3qY2tj29bABFv51Bfa
        subject_person_id: p_FPPus9AT8wmb1wjQX27Ny9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xa4caugxF78anA7Q5acyMm
          claim_id: c_5C4F3qY2tj29bABFv51Bfa
          source_id: s_gVm8igupxjrrHJvGDE9hpG
          stance: supports
          locator: CBDB:328688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328688）
          source: &a1
            id: s_gVm8igupxjrrHJvGDE9hpG
            source_type: api_record
            title: 中国历代人物传记资料库：王伍（CBDB 328688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328688&o=json
            external_identifier: CBDB:328688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8VhWCK2xY38hNy7Zu46Zio
        subject_person_id: p_FPPus9AT8wmb1wjQX27Ny9
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
        - id: cs_6hha4yvBnJsfE6N4raFzQx
          claim_id: c_8VhWCK2xY38hNy7Zu46Zio
          source_id: s_gVm8igupxjrrHJvGDE9hpG
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
        id: c_up8rAaTOVQU8ljJEQ7knkM
        subject_person_id: p_FPPus9AT8wmb1wjQX27Ny9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBw8s4fCVGdZfGF2Kk_0NO
          claim_id: c_up8rAaTOVQU8ljJEQ7knkM
          source_id: s_gVm8igupxjrrHJvGDE9hpG
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_esnkJduB5GpM6eiD8Nh16h
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  other: []
---

# 王伍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_esnkJduB5GpM6eiD8Nh16h | 王之垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伍（CBDB 328688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328688&o=json)
