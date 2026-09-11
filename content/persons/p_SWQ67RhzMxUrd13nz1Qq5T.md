---
schema: wang-person/v1
id: p_SWQ67RhzMxUrd13nz1Qq5T
status: active
merged_into: null
display_name: 朱氏
revision: 1
cbdb_id: 331768
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2ChZpgiDfwlzuUGsOPkN9w
        subject_person_id: p_SWQ67RhzMxUrd13nz1Qq5T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJSm0k0fxzsE7FKLdis4RJ
          claim_id: c_2ChZpgiDfwlzuUGsOPkN9w
          source_id: s_enqGgd3aT5HinY3KwtrxXp
          stance: supports
          locator: CBDB:331768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_enqGgd3aT5HinY3KwtrxXp
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王以修妻)（CBDB 331768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331768&o=json
            external_identifier: CBDB:331768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xcyLOvePGvRsLYbsI5hrXI
        subject_person_id: p_SWQ67RhzMxUrd13nz1Qq5T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O66PVCg55Ysny_K1z7eDP1
          claim_id: c_xcyLOvePGvRsLYbsI5hrXI
          source_id: s_enqGgd3aT5HinY3KwtrxXp
          stance: supports
          locator: CBDB:331768
          quotation: null
          interpretation_note: CBDB 明确记录的王以修配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kFE3YaUFL81AQNYsUTwKSw
        subject_person_id: p_5joJqoMyociS4kycpuaY9i
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SWQ67RhzMxUrd13nz1Qq5T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SIfEpSoCENi5gDIWZgA2XL
          claim_id: c_kFE3YaUFL81AQNYsUTwKSw
          source_id: s_enqGgd3aT5HinY3KwtrxXp
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百四十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5joJqoMyociS4kycpuaY9i
        status: active
        display_name: 王以修
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱氏，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 331768） | accepted |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5joJqoMyociS4kycpuaY9i | 王以修 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱氏(王以修妻)（CBDB 331768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331768&o=json)
