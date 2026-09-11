---
schema: wang-person/v1
id: p_oa9Yt7tzzYPLmaeXcSKbdZ
status: active
merged_into: null
display_name: 王永
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZYpaHK4XQXywMKmpv4KbVZ
        subject_person_id: p_oa9Yt7tzzYPLmaeXcSKbdZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xr61e7hyc8rJqhixE6iGnP
          claim_id: c_ZYpaHK4XQXywMKmpv4KbVZ
          source_id: s_5Lw9P7conc24BiMCQQN6DK
          stance: supports
          locator: CBDB:252235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252235）
          source: &a1
            id: s_5Lw9P7conc24BiMCQQN6DK
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 252235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252235&o=json
            external_identifier: CBDB:252235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6YKtqa7gbRDs5fy4srdoUs
        subject_person_id: p_oa9Yt7tzzYPLmaeXcSKbdZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永，明人物。景泰五年進士，曾任主事。（中国历代人物传记资料库 CBDB 252235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2ZbiXG7tw4SDLZVkTlUPM6
          claim_id: c_6YKtqa7gbRDs5fy4srdoUs
          source_id: s_5Lw9P7conc24BiMCQQN6DK
          stance: supports
          locator: CBDB:252235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ygNL__gCx46yYy1iKAbLIN
        subject_person_id: p_oa9Yt7tzzYPLmaeXcSKbdZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xRgAFF1QF89F297F8SmuRt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_at3g7xQLqKLBzW-6H7jpbV
          claim_id: c_ygNL__gCx46yYy1iKAbLIN
          source_id: s_5Lw9P7conc24BiMCQQN6DK
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xRgAFF1QF89F297F8SmuRt
        status: active
        display_name: 王穀
        merged_into_person_id: null
  other: []
---

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | 王永，明人物。景泰五年進士，曾任主事。（中国历代人物传记资料库 CBDB 252235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xRgAFF1QF89F297F8SmuRt | 王穀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永（CBDB 252235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252235&o=json)
