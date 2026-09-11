---
schema: wang-person/v1
id: p_3dg1PVXVExHpSS6KGA8n5K
status: active
merged_into: null
display_name: 王熙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DjDfAruvyQDojYYgVXRKA9
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jjvFccZjj6KJxjQEGki6Tq
          claim_id: c_DjDfAruvyQDojYYgVXRKA9
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: CBDB:318564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318564）
          source: &a1
            id: s_VvDkjy8KZNht3SQ24zKw63
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 318564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318564&o=json
            external_identifier: CBDB:318564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EYWcqbKqMcgKPxYj32rSVC
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
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
        - id: cs_KVKbpuK2BGn5Ggu4njdkiP
          claim_id: c_EYWcqbKqMcgKPxYj32rSVC
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-lRnvZ1KMTFSk9sIbwQbus
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xj1uF6lxqfULraPhl0HB-O
          claim_id: c_-lRnvZ1KMTFSk9sIbwQbus
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iJvJfwUqKTgqcKUSXQkKTK
        status: active
        display_name: 王大任
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_iJvJfwUqKTgqcKUSXQkKTK | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王熙（CBDB 318564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318564&o=json)
