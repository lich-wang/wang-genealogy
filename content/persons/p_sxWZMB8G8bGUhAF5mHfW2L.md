---
schema: wang-person/v1
id: p_sxWZMB8G8bGUhAF5mHfW2L
status: active
merged_into: null
display_name: 王弘義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qNkpPuyhrU8Fz3DWMzRTyt
        subject_person_id: p_sxWZMB8G8bGUhAF5mHfW2L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7hbqpX9jTsSeJgDf97fxj
          claim_id: c_qNkpPuyhrU8Fz3DWMzRTyt
          source_id: s_6DCMu3PZ5RyhcYbXu37GL6
          stance: supports
          locator: CBDB:266073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266073）
          source: &a1
            id: s_6DCMu3PZ5RyhcYbXu37GL6
            source_type: api_record
            title: 中国历代人物传记资料库：王弘義（CBDB 266073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266073&o=json
            external_identifier: CBDB:266073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.709Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r8AKTL1p3bQH56nh6TG91y
        subject_person_id: p_sxWZMB8G8bGUhAF5mHfW2L
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
        - id: cs_X8yi97CnC3q8cC8KN3DtzZ
          claim_id: c_r8AKTL1p3bQH56nh6TG91y
          source_id: s_6DCMu3PZ5RyhcYbXu37GL6
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
        id: c_RhA1WJNIw_zAGVPJJXpSGS
        subject_person_id: p_sxWZMB8G8bGUhAF5mHfW2L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKFEMleRSGglJZ_G0qCX1T
          claim_id: c_RhA1WJNIw_zAGVPJJXpSGS
          source_id: s_fB4hQ2GqSMVbEJrJj9XLEB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fB4hQ2GqSMVbEJrJj9XLEB
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 126528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json
            external_identifier: CBDB:126528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i98FVCHxFpmHEPq1xWByi6
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  other: []
---

# 王弘義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_i98FVCHxFpmHEPq1xWByi6 | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘義（CBDB 266073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266073&o=json)
- [中国历代人物传记资料库：王良臣（CBDB 126528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126528&o=json)
