---
schema: wang-person/v1
id: p_F188zxtPQfzqFJEz9WJ3M7
status: merged
merged_into: p_mNbLtBp7NLKek2NHmVT5fp
display_name: 王象乾
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9p7X7o6PuBaQwRmGZ2nBWE
        subject_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q1Whymec68cWuJbJbJYZ7u
          claim_id: c_9p7X7o6PuBaQwRmGZ2nBWE
          source_id: s_sVk4fUqFJQVM6MXSNGzJ63
          stance: supports
          locator: CBDB:65764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65764）
          source: &a1
            id: s_sVk4fUqFJQVM6MXSNGzJ63
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 65764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65764&o=json
            external_identifier: CBDB:65764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cx7ckeXGpTzkDKhupeu5vG
        subject_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1630年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMtrUJD6GsnejqkGQxPsNG
          claim_id: c_cx7ckeXGpTzkDKhupeu5vG
          source_id: s_sVk4fUqFJQVM6MXSNGzJ63
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iHSw6sVbV8sGLJHEUv8sHK
        subject_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾（卒于1630年），明人物。明清進士進士，籍贯新城，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 65764）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lY4Ermw5YTDvS11oGy1BJk
          claim_id: c_iHSw6sVbV8sGLJHEUv8sHK
          source_id: s_sVk4fUqFJQVM6MXSNGzJ63
          stance: supports
          locator: CBDB:65764
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

# 王象乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象乾 | accepted |
| death.date | 1630年 | accepted |
| bio.summary | 王象乾（卒于1630年），明人物。明清進士進士，籍贯新城，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 65764） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王象乾（CBDB 65764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65764&o=json)
