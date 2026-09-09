---
schema: wang-person/v1
id: p_gYp1F2zF69oFfQpEAJsQjC
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ooU5AVRVEG7sohSYraDKho
        subject_person_id: p_gYp1F2zF69oFfQpEAJsQjC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xzJ5Zn7714ZpAzyPjvYqVZ
          claim_id: c_ooU5AVRVEG7sohSYraDKho
          source_id: s_iaDCHJxoB7nv7Eyn7Ckj2B
          stance: supports
          locator: CBDB:445564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445564）
          source: &a1
            id: s_iaDCHJxoB7nv7Eyn7Ckj2B
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 445564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445564&o=json
            external_identifier: CBDB:445564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ySz3FvT5BniMZQ51hHezC
        subject_person_id: p_gYp1F2zF69oFfQpEAJsQjC
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
        - id: cs_vYxP3drnX24KiA9YDKRM3U
          claim_id: c_7ySz3FvT5BniMZQ51hHezC
          source_id: s_iaDCHJxoB7nv7Eyn7Ckj2B
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
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 445564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445564&o=json)
