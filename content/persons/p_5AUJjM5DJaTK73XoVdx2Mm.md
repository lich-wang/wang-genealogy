---
schema: wang-person/v1
id: p_5AUJjM5DJaTK73XoVdx2Mm
status: active
merged_into: null
display_name: 王縉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLH4HYB8HyTAuytBs3H6Js
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_htMA8AZkCMmTG4yuCZ2Ded
          claim_id: c_mLH4HYB8HyTAuytBs3H6Js
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: CBDB:201041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201041）
          source: &a1
            id: s_5KJAr2EEoaMkEH3WrA7h4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 201041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json
            external_identifier: CBDB:201041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PLJnn7AkdzUZvnvevZEb4Y
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqsjCGsLtjFzQs2HWMktvD
          claim_id: c_PLJnn7AkdzUZvnvevZEb4Y
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g12xAFefNkt4fybkFbvwDZ
        subject_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
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
        - id: cs_MgNbY1JdtAn37kqg71wWJJ
          claim_id: c_g12xAFefNkt4fybkFbvwDZ
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
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
        id: c_LWQJzOucK00n3N_-NXafsh
        subject_person_id: p_SJjQ21YN1YzyR8g9cC1ZRj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_teQY4rbxsOiGpMiya5S6zY
          claim_id: c_LWQJzOucK00n3N_-NXafsh
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SJjQ21YN1YzyR8g9cC1ZRj
        status: active
        display_name: 王旻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vaMkQmcxFLn-NY40l5AAXu
        subject_person_id: p_yFv1UscRtN27XsgPhNidJU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3e3C2LBIWa5D0W4-QqD5G
          claim_id: c_vaMkQmcxFLn-NY40l5AAXu
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yFv1UscRtN27XsgPhNidJU
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_LiquCCNw7WuRU2jL2KqWpG
        subject_person_id: p_NkHNKQEGBGM2L8QVxJbe8U
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5AUJjM5DJaTK73XoVdx2Mm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nY6NoT3OazNtpGfmZ9urck
          claim_id: c_LiquCCNw7WuRU2jL2KqWpG
          source_id: s_5KJAr2EEoaMkEH3WrA7h4Q
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百五十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NkHNKQEGBGM2L8QVxJbe8U
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| birth.date | 1464年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SJjQ21YN1YzyR8g9cC1ZRj | 王旻 | accepted |
| ancestors | p_yFv1UscRtN27XsgPhNidJU | 王禎 | accepted |
| ancestors | p_NkHNKQEGBGM2L8QVxJbe8U | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 201041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201041&o=json)
