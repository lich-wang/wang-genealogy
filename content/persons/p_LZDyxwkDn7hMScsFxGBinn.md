---
schema: wang-person/v1
id: p_LZDyxwkDn7hMScsFxGBinn
status: active
merged_into: null
display_name: 王金
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E2M2HvRHVGFPaL9qZ16d6v
        subject_person_id: p_LZDyxwkDn7hMScsFxGBinn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PansRNEWxYcWHzJy1qJSFs
          claim_id: c_E2M2HvRHVGFPaL9qZ16d6v
          source_id: s_KQEbMKSZa9BLKNscTj9VYb
          stance: supports
          locator: CBDB:157222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157222）
          source: &a1
            id: s_KQEbMKSZa9BLKNscTj9VYb
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 157222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json
            external_identifier: CBDB:157222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zhiXvDgqtKyDvFNCwjgb5d
        subject_person_id: p_LZDyxwkDn7hMScsFxGBinn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_joz9i3KKz9ZE5Q5M9Tv3Kt
          claim_id: c_zhiXvDgqtKyDvFNCwjgb5d
          source_id: s_KQEbMKSZa9BLKNscTj9VYb
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
        id: c_rUTdNdijW1JIxCxGVc8D8s
        subject_person_id: p_P33RYgqY1FK4DDnEQWNQTK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LZDyxwkDn7hMScsFxGBinn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FCjxJDrzdrzueSB_WdV0Z4
          claim_id: c_rUTdNdijW1JIxCxGVc8D8s
          source_id: s_KQEbMKSZa9BLKNscTj9VYb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P33RYgqY1FK4DDnEQWNQTK
        status: active
        display_name: 王甑
        merged_into_person_id: null
  children:
    - claim:
        id: c_-jhyI3NEcTf1cVs22LU7wV
        subject_person_id: p_LZDyxwkDn7hMScsFxGBinn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z5fd9doZBpHnhM7XG6sUvg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AYwLvwktQvkDwIKV8qK6oO
          claim_id: c_-jhyI3NEcTf1cVs22LU7wV
          source_id: s_KQEbMKSZa9BLKNscTj9VYb
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 148：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z5fd9doZBpHnhM7XG6sUvg
        status: active
        display_name: 王佺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P33RYgqY1FK4DDnEQWNQTK | 王甑 | accepted |
| children | p_z5fd9doZBpHnhM7XG6sUvg | 王佺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金（CBDB 157222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157222&o=json)
