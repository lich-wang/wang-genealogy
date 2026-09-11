---
schema: wang-person/v1
id: p_caCSjtcSJrVzkjL52dma5V
status: active
merged_into: null
display_name: 王鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZzbSjR5aQB5AaBh92GByQ8
        subject_person_id: p_caCSjtcSJrVzkjL52dma5V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rPQuUyR6TDfCc83zGL6Pfg
          claim_id: c_ZzbSjR5aQB5AaBh92GByQ8
          source_id: s_vEp5g6HAAhKGcgXURLKLJf
          stance: supports
          locator: CBDB:248809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248809）
          source: &a1
            id: s_vEp5g6HAAhKGcgXURLKLJf
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 248809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248809&o=json
            external_identifier: CBDB:248809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LkQpfxEmXMQ4YJk6NgJUk8
        subject_person_id: p_caCSjtcSJrVzkjL52dma5V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cY69aqqxE8rGXjigq9e5_x
          claim_id: c_LkQpfxEmXMQ4YJk6NgJUk8
          source_id: s_vEp5g6HAAhKGcgXURLKLJf
          stance: supports
          locator: CBDB:248809
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

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 248809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248809&o=json)
