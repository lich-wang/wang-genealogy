---
schema: wang-person/v1
id: p_CremMf5Zhhh8jo2fZED9Yr
status: active
merged_into: null
display_name: 申氏
revision: 1
cbdb_id: 262883
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oTYVXbJAhSrRcy2BWw3MKC
        subject_person_id: p_CremMf5Zhhh8jo2fZED9Yr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 申氏，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jlAQaI2xykf3yy0MYGlUfG
          claim_id: c_oTYVXbJAhSrRcy2BWw3MKC
          source_id: s_UV-T81GM-Ii29fL3O32tm8
          stance: supports
          locator: CBDB:262883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UV-T81GM-Ii29fL3O32tm8
            source_type: api_record
            title: 中国历代人物传记资料库：申氏(王哲妻)（CBDB 262883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262883&o=json
            external_identifier: CBDB:262883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Xqfolw_9KlJwEUeEVMy-R
        subject_person_id: p_CremMf5Zhhh8jo2fZED9Yr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 申氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHRrzA6fuQHE7fXGufiA16
          claim_id: c_7Xqfolw_9KlJwEUeEVMy-R
          source_id: s_UV-T81GM-Ii29fL3O32tm8
          stance: supports
          locator: CBDB:262883
          quotation: null
          interpretation_note: CBDB 明确记录的王哲配偶
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
        id: c_V_NsjsBm-dE725SZraAbda
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CremMf5Zhhh8jo2fZED9Yr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8cx3koNGgCRc8gGl8BY1tz
          claim_id: c_V_NsjsBm-dE725SZraAbda
          source_id: s_UV-T81GM-Ii29fL3O32tm8
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百一十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        status: active
        display_name: 王哲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 申氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 申氏，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262883） | accepted |
| name.primary | 申氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8Z1UQ2GEaLW3fJdsaEnJcd | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：申氏(王哲妻)（CBDB 262883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262883&o=json)
