---
schema: wang-person/v1
id: p_fd9uj7Lqzrgnx5zjkGE8Mh
status: active
merged_into: null
display_name: 王聚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_84P9yzXP4as6nka8BGkTMD
        subject_person_id: p_fd9uj7Lqzrgnx5zjkGE8Mh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L2tySQjTT8vXuDsqLoxcU3
          claim_id: c_84P9yzXP4as6nka8BGkTMD
          source_id: s_KRaEPUpi5ARbenCV1fTyFP
          stance: supports
          locator: CBDB:306729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306729）
          source: &a1
            id: s_KRaEPUpi5ARbenCV1fTyFP
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 306729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306729&o=json
            external_identifier: CBDB:306729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kv1rqAsnKCBbLajXzB4e1y
        subject_person_id: p_fd9uj7Lqzrgnx5zjkGE8Mh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚，明人物。嘉靖二十三年進士，曾任壽官。（中国历代人物传记资料库 CBDB 306729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WVHWKbP4IixGVHJKOUjdDy
          claim_id: c_kv1rqAsnKCBbLajXzB4e1y
          source_id: s_KRaEPUpi5ARbenCV1fTyFP
          stance: supports
          locator: CBDB:306729
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
        id: c_DeUS0MHXgvaa_a0kJkTHqY
        subject_person_id: p_fd9uj7Lqzrgnx5zjkGE8Mh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zAh17pTJy9yoR9V9ArCvL7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__FBPxPqjx5Kwo8wQmPrggg
          claim_id: c_DeUS0MHXgvaa_a0kJkTHqY
          source_id: s_KRaEPUpi5ARbenCV1fTyFP
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zAh17pTJy9yoR9V9ArCvL7
        status: active
        display_name: 王楠
        merged_into_person_id: null
  other: []
---

# 王聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚 | accepted |
| bio.summary | 王聚，明人物。嘉靖二十三年進士，曾任壽官。（中国历代人物传记资料库 CBDB 306729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zAh17pTJy9yoR9V9ArCvL7 | 王楠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚（CBDB 306729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306729&o=json)
