---
schema: wang-person/v1
id: p_9KggAaZJ86xP1uMAZRyRjS
status: active
merged_into: null
display_name: 楊府君
revision: 1
cbdb_id: 149148
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FjwOJaqVGmghnq1cYedmC9
        subject_person_id: p_9KggAaZJ86xP1uMAZRyRjS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 楊府君
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0hjKWoH5Q-flZHJbSuoPX
          claim_id: c_FjwOJaqVGmghnq1cYedmC9
          source_id: s_5scrn_wNW63it9g0XlKUpP
          stance: supports
          locator: CBDB:149148
          quotation: null
          interpretation_note: CBDB 明确记录的王俱夷配偶
          source: &a1
            id: s_5scrn_wNW63it9g0XlKUpP
            source_type: api_record
            title: 中国历代人物传记资料库：楊府君(王俱夷夫)（CBDB 149148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149148&o=json
            external_identifier: CBDB:149148
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
        id: c_6W___V78o1hWgYtxtXkqDK
        subject_person_id: p_Chh6aVWtLWzZoiupMQbEJz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9KggAaZJ86xP1uMAZRyRjS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6-LJk_Ox0Tw0g3bw9wZS2s
          claim_id: c_6W___V78o1hWgYtxtXkqDK
          source_id: s_5scrn_wNW63it9g0XlKUpP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Guangzhai 1：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Chh6aVWtLWzZoiupMQbEJz
        status: active
        display_name: 王俱夷
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 楊府君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 楊府君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Chh6aVWtLWzZoiupMQbEJz | 王俱夷 | accepted |

## 外部来源

- [中国历代人物传记资料库：楊府君(王俱夷夫)（CBDB 149148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149148&o=json)
