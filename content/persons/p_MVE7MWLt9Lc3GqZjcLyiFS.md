---
schema: wang-person/v1
id: p_MVE7MWLt9Lc3GqZjcLyiFS
status: active
merged_into: null
display_name: 王汝霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WyC94KhApguMyZMioPPNAC
        subject_person_id: p_MVE7MWLt9Lc3GqZjcLyiFS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HB3fg7PURyMLR3khW8WvGN
          claim_id: c_WyC94KhApguMyZMioPPNAC
          source_id: s_dNZYdf5UXr9DMNktb26yyy
          stance: supports
          locator: CBDB:71624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71624）
          source: &a1
            id: s_dNZYdf5UXr9DMNktb26yyy
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 71624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71624&o=json
            external_identifier: CBDB:71624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_afamzFqxsdbs5JmTxVNsNz
        subject_person_id: p_MVE7MWLt9Lc3GqZjcLyiFS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1839年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mmj8pD92KXZe1TDkTTTGCF
          claim_id: c_afamzFqxsdbs5JmTxVNsNz
          source_id: s_dNZYdf5UXr9DMNktb26yyy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CLSR6Ux99JncTn7RCis17H
        subject_person_id: p_MVE7MWLt9Lc3GqZjcLyiFS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖（生于1839年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aKUCpY1uc2oapWL6tDQSCx
          claim_id: c_CLSR6Ux99JncTn7RCis17H
          source_id: s_dNZYdf5UXr9DMNktb26yyy
          stance: supports
          locator: CBDB:71624
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

# 王汝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝霖 | accepted |
| birth.date | 1839年 | accepted |
| bio.summary | 王汝霖（生于1839年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 71624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝霖（CBDB 71624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71624&o=json)
