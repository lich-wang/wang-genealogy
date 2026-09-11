---
schema: wang-person/v1
id: p_93BK4LgU7cv5zsPfXRD2xN
status: active
merged_into: null
display_name: 王大猷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rGFobC7T4UcKL3HstNo4sN
        subject_person_id: p_93BK4LgU7cv5zsPfXRD2xN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yEzhTVNd8hrS6Gegf8Dn3A
          claim_id: c_rGFobC7T4UcKL3HstNo4sN
          source_id: s_RQV58hzGTFracHfL4QSH5b
          stance: supports
          locator: CBDB:293434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293434）
          source: &a1
            id: s_RQV58hzGTFracHfL4QSH5b
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 293434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293434&o=json
            external_identifier: CBDB:293434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7HD3yBM8yBYCdZx9bu6Gsz
        subject_person_id: p_93BK4LgU7cv5zsPfXRD2xN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷，明人物。嘉靖十一年進士，籍贯甌寧。（中国历代人物传记资料库 CBDB 293434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aaNyXC_NRp7JRnx_YjR4o-
          claim_id: c_7HD3yBM8yBYCdZx9bu6Gsz
          source_id: s_RQV58hzGTFracHfL4QSH5b
          stance: supports
          locator: CBDB:293434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pm-6P8_sucgi1EA99S4Z7B
        subject_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_93BK4LgU7cv5zsPfXRD2xN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66bdJvYnQI8yPFq11MkZmK
          claim_id: c_Pm-6P8_sucgi1EA99S4Z7B
          source_id: s_RQV58hzGTFracHfL4QSH5b
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g1ZQp25f7TDHH92Q6ePC8K
        status: active
        display_name: 王應詔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大猷 | accepted |
| bio.summary | 王大猷，明人物。嘉靖十一年進士，籍贯甌寧。（中国历代人物传记资料库 CBDB 293434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1ZQp25f7TDHH92Q6ePC8K | 王應詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大猷（CBDB 293434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293434&o=json)
