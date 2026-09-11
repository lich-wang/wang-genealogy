---
schema: wang-person/v1
id: p_hJJLEhppC8FDu4f7rWgWtJ
status: active
merged_into: null
display_name: 王种
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sSxRy7N325aMewe1qj6THJ
        subject_person_id: p_hJJLEhppC8FDu4f7rWgWtJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王种
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4WKSCaxzKxtsnd2nXkzK4H
          claim_id: c_sSxRy7N325aMewe1qj6THJ
          source_id: s_ofQzmsAeLvDWimNKtM4SJ5
          stance: supports
          locator: CBDB:283104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283104）
          source: &a1
            id: s_ofQzmsAeLvDWimNKtM4SJ5
            source_type: api_record
            title: 中国历代人物传记资料库：王种（CBDB 283104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283104&o=json
            external_identifier: CBDB:283104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V7zRrPeD4LS1a2YC5qf3HG
        subject_person_id: p_hJJLEhppC8FDu4f7rWgWtJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王种，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283104）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iy8bU4YOw2GmxMOC9wVfU6
          claim_id: c_V7zRrPeD4LS1a2YC5qf3HG
          source_id: s_ofQzmsAeLvDWimNKtM4SJ5
          stance: supports
          locator: CBDB:283104
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

# 王种

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王种 | accepted |
| bio.summary | 王种，明人物。正德十六年進士，籍贯儀真。（中国历代人物传记资料库 CBDB 283104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王种（CBDB 283104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283104&o=json)
