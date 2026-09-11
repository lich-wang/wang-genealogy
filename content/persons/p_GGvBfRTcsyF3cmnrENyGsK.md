---
schema: wang-person/v1
id: p_GGvBfRTcsyF3cmnrENyGsK
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3jLtyxCTeunrKdZoPKhneW
        subject_person_id: p_GGvBfRTcsyF3cmnrENyGsK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPpBzbfsGLQjXypkHPHNGw
          claim_id: c_3jLtyxCTeunrKdZoPKhneW
          source_id: s_2ZVwvwkiDW7DgCPab1LehP
          stance: supports
          locator: CBDB:266259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266259）
          source: &a1
            id: s_2ZVwvwkiDW7DgCPab1LehP
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 266259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266259&o=json
            external_identifier: CBDB:266259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ySuH18xd1aHeqSwNz8eK1u
        subject_person_id: p_GGvBfRTcsyF3cmnrENyGsK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。弘治六年進士，籍贯西安後衛。（中国历代人物传记资料库 CBDB 266259）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1YB8aJXAiGNPb0WGDunYgj
          claim_id: c_ySuH18xd1aHeqSwNz8eK1u
          source_id: s_2ZVwvwkiDW7DgCPab1LehP
          stance: supports
          locator: CBDB:266259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。弘治六年進士，籍贯西安後衛。（中国历代人物传记资料库 CBDB 266259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 266259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266259&o=json)
