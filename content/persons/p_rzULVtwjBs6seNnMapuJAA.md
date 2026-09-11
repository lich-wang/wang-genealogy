---
schema: wang-person/v1
id: p_rzULVtwjBs6seNnMapuJAA
status: active
merged_into: null
display_name: 王居建
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FuEp59UhJFbrGPRXr7GUPY
        subject_person_id: p_rzULVtwjBs6seNnMapuJAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QoBEQcBHSqqkx5mNCDCHY8
          claim_id: c_FuEp59UhJFbrGPRXr7GUPY
          source_id: s_yR69Aypf2Tt1VMCNrDFGqv
          stance: supports
          locator: CBDB:71823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71823）
          source: &a1
            id: s_yR69Aypf2Tt1VMCNrDFGqv
            source_type: api_record
            title: 中国历代人物传记资料库：王居建（CBDB 71823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71823&o=json
            external_identifier: CBDB:71823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uhZ9CHBS9E7xp8hQAR2He2
        subject_person_id: p_rzULVtwjBs6seNnMapuJAA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1658年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9xAUUhYWNNMSZrH2HAruP4
          claim_id: c_uhZ9CHBS9E7xp8hQAR2He2
          source_id: s_yR69Aypf2Tt1VMCNrDFGqv
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
        id: c_KCpzBBFCf5PRL7C2Lt9BWA
        subject_person_id: p_rzULVtwjBs6seNnMapuJAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居建（生于1658年），清人物。籍贯開州。（中国历代人物传记资料库 CBDB 71823）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-8JQnXn282SEcgTvMAbCHc
          claim_id: c_KCpzBBFCf5PRL7C2Lt9BWA
          source_id: s_yR69Aypf2Tt1VMCNrDFGqv
          stance: supports
          locator: CBDB:71823
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

# 王居建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居建 | accepted |
| birth.date | 1658年 | accepted |
| bio.summary | 王居建（生于1658年），清人物。籍贯開州。（中国历代人物传记资料库 CBDB 71823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居建（CBDB 71823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71823&o=json)
