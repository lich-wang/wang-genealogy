---
schema: wang-person/v1
id: p_MD47NamP6zXQyJZo4Lagui
status: active
merged_into: null
display_name: 王深
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XL9pQM2B6m4yFJ5t4RDpjs
        subject_person_id: p_MD47NamP6zXQyJZo4Lagui
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sP8853N22cJaRngzRKZZsU
          claim_id: c_XL9pQM2B6m4yFJ5t4RDpjs
          source_id: s_CqtQmWAp5F7WYkNyFWuFKs
          stance: supports
          locator: CBDB:466822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466822）
          source: &a1
            id: s_CqtQmWAp5F7WYkNyFWuFKs
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 466822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466822&o=json
            external_identifier: CBDB:466822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGK1Rd1Vw83H9v5dCczS7f
        subject_person_id: p_MD47NamP6zXQyJZo4Lagui
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深，元人物。曾任典史。（中国历代人物传记资料库 CBDB 466822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AywRZClhkrAvo9Snp64LaA
          claim_id: c_YGK1Rd1Vw83H9v5dCczS7f
          source_id: s_CqtQmWAp5F7WYkNyFWuFKs
          stance: supports
          locator: CBDB:466822
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

# 王深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深 | accepted |
| bio.summary | 王深，元人物。曾任典史。（中国历代人物传记资料库 CBDB 466822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王深（CBDB 466822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466822&o=json)
