---
schema: wang-person/v1
id: p_D3WEttBK81yQaPkTWKskRy
status: active
merged_into: null
display_name: 王貴祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HvpPc5XZ2PCh32j8Rge43a
        subject_person_id: p_D3WEttBK81yQaPkTWKskRy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kVtHz6YyzLHTDZP4hnAGyx
          claim_id: c_HvpPc5XZ2PCh32j8Rge43a
          source_id: s_GdvYx5PNwzV34NMv7dCmBj
          stance: supports
          locator: CBDB:640350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640350）
          source: &a1
            id: s_GdvYx5PNwzV34NMv7dCmBj
            source_type: api_record
            title: 中国历代人物传记资料库：王貴祥（CBDB 640350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640350&o=json
            external_identifier: CBDB:640350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6miSgvbWiG1RuepV7CzsiD
        subject_person_id: p_D3WEttBK81yQaPkTWKskRy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xztxh9sZnZ1NxFk4jr1fUc
          claim_id: c_6miSgvbWiG1RuepV7CzsiD
          source_id: s_GdvYx5PNwzV34NMv7dCmBj
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

# 王貴祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴祥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貴祥（CBDB 640350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640350&o=json)
