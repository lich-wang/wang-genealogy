---
schema: wang-person/v1
id: p_C8ZxQAECatcwVFYPVsxFYQ
status: active
merged_into: null
display_name: 王觀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfiQhpNtAAjfZEdwDvfmCt
        subject_person_id: p_C8ZxQAECatcwVFYPVsxFYQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hSz9zK1umLFCcr3RKb9WYC
          claim_id: c_nfiQhpNtAAjfZEdwDvfmCt
          source_id: s_39ECCrDrckrJmzrBKHoCkp
          stance: supports
          locator: CBDB:287788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287788）
          source: &a1
            id: s_39ECCrDrckrJmzrBKHoCkp
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 287788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287788&o=json
            external_identifier: CBDB:287788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wm4EYRPwFuDoVgxyuD1VB3
        subject_person_id: p_C8ZxQAECatcwVFYPVsxFYQ
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
        - id: cs_yaj9Bak3JGqG3wGo3EyGst
          claim_id: c_Wm4EYRPwFuDoVgxyuD1VB3
          source_id: s_39ECCrDrckrJmzrBKHoCkp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rGHP5hh_3EGD_j7MYoz5Z4
        subject_person_id: p_C8ZxQAECatcwVFYPVsxFYQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JX2kojoi67e76MdeNUyP8W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kSiSXtgkdlM_ngsY1OkWvJ
          claim_id: c_rGHP5hh_3EGD_j7MYoz5Z4
          source_id: s_39ECCrDrckrJmzrBKHoCkp
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JX2kojoi67e76MdeNUyP8W
        status: active
        display_name: 王穀祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JX2kojoi67e76MdeNUyP8W | 王穀祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 287788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287788&o=json)
