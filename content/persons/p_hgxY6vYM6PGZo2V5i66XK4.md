---
schema: wang-person/v1
id: p_hgxY6vYM6PGZo2V5i66XK4
status: active
merged_into: null
display_name: 王遇春
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wLrJy9QRJR7MbMk89k3kRj
        subject_person_id: p_hgxY6vYM6PGZo2V5i66XK4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qVT7FGB7UtmHHZdN1uBRrq
          claim_id: c_wLrJy9QRJR7MbMk89k3kRj
          source_id: s_JFtrt1bRNY7ABb2M9V7ij3
          stance: supports
          locator: CBDB:640434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640434）
          source: &a1
            id: s_JFtrt1bRNY7ABb2M9V7ij3
            source_type: api_record
            title: 中国历代人物传记资料库：王遇春（CBDB 640434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640434&o=json
            external_identifier: CBDB:640434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZMqTp1YW8xNdiSJRUfG7mr
        subject_person_id: p_hgxY6vYM6PGZo2V5i66XK4
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
        - id: cs_gsm3ajGoznDGwPDVQwv7Ha
          claim_id: c_ZMqTp1YW8xNdiSJRUfG7mr
          source_id: s_JFtrt1bRNY7ABb2M9V7ij3
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

# 王遇春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇春 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇春（CBDB 640434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640434&o=json)
