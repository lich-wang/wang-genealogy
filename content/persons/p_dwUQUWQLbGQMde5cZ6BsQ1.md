---
schema: wang-person/v1
id: p_dwUQUWQLbGQMde5cZ6BsQ1
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a42govRboe6ngu1jzcge8e
        subject_person_id: p_dwUQUWQLbGQMde5cZ6BsQ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s83psQpgj8ZAqEP1JU9EmU
          claim_id: c_a42govRboe6ngu1jzcge8e
          source_id: s_QRJfy1LMKePqFxoDGZGPpk
          stance: supports
          locator: CBDB:451843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（451843）
          source: &a1
            id: s_QRJfy1LMKePqFxoDGZGPpk
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 451843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451843&o=json
            external_identifier: CBDB:451843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UPcEfYHusDEdDiVsaYFsXb
        subject_person_id: p_dwUQUWQLbGQMde5cZ6BsQ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，元人物。曾任縣丞。（中国历代人物传记资料库 CBDB 451843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XUdKNC8fe-W5GqhbKPuUMB
          claim_id: c_UPcEfYHusDEdDiVsaYFsXb
          source_id: s_QRJfy1LMKePqFxoDGZGPpk
          stance: supports
          locator: CBDB:451843
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | 王恕，元人物。曾任縣丞。（中国历代人物传记资料库 CBDB 451843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 451843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=451843&o=json)
