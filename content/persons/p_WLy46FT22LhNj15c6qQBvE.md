---
schema: wang-person/v1
id: p_WLy46FT22LhNj15c6qQBvE
status: active
merged_into: null
display_name: 鄧氏
revision: 1
cbdb_id: 294541
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EoIhFBjOx9Ix8nKHJdvKzM
        subject_person_id: p_WLy46FT22LhNj15c6qQBvE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xno4aN2fnBwTppr4ICJC9B
          claim_id: c_EoIhFBjOx9Ix8nKHJdvKzM
          source_id: s_Ao7yvkBQNsGTaUG-YoVoez
          stance: supports
          locator: CBDB:294541
          quotation: null
          interpretation_note: CBDB 明确记录的王玉汝配偶
          source: &a1
            id: s_Ao7yvkBQNsGTaUG-YoVoez
            source_type: api_record
            title: 中国历代人物传记资料库：鄧氏(王玉汝妻)（CBDB 294541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294541&o=json
            external_identifier: CBDB:294541
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
        id: c_N01bXvbsuZIRF0v_AzLa8v
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WLy46FT22LhNj15c6qQBvE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqsOJkiI6NaWpJvBckD4mA
          claim_id: c_N01bXvbsuZIRF0v_AzLa8v
          source_id: s_Ao7yvkBQNsGTaUG-YoVoez
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百零七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 鄧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄧氏(王玉汝妻)（CBDB 294541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294541&o=json)
