---
schema: wang-person/v1
id: p_d6cb1iHkaWg7M9a1oF4r2V
status: active
merged_into: null
display_name: 徐氏
revision: 1
cbdb_id: 224057
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ig4cQHGiIDrevfgYZneffA
        subject_person_id: p_d6cb1iHkaWg7M9a1oF4r2V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 徐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2SdTlDhw55XOgfOfNi3yz
          claim_id: c_ig4cQHGiIDrevfgYZneffA
          source_id: s_6YfdUjt6vQIXFzlsef-w0U
          stance: supports
          locator: CBDB:224057
          quotation: null
          interpretation_note: CBDB 明确记录的王遵訓配偶
          source: &a1
            id: s_6YfdUjt6vQIXFzlsef-w0U
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王遵訓妻)（CBDB 224057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224057&o=json
            external_identifier: CBDB:224057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-tYWJjRYls0vkz6HkH-Kz-
        subject_person_id: p_DyAEKNuW84v9PAan2XrKHV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_d6cb1iHkaWg7M9a1oF4r2V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hayAvXnNlHnedUGomb23BV
          claim_id: c_-tYWJjRYls0vkz6HkH-Kz-
          source_id: s_6YfdUjt6vQIXFzlsef-w0U
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 徐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 徐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：徐氏(王遵訓妻)（CBDB 224057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224057&o=json)
