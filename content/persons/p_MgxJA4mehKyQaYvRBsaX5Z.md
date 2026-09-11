---
schema: wang-person/v1
id: p_MgxJA4mehKyQaYvRBsaX5Z
status: active
merged_into: null
display_name: 王三薦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VTUGssMZdrY4q4oWQLYt3h
        subject_person_id: p_MgxJA4mehKyQaYvRBsaX5Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三薦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bw8ayCn61dGDC84beV16LN
          claim_id: c_VTUGssMZdrY4q4oWQLYt3h
          source_id: s_3h6na6EWvB3vSnutU22Vpr
          stance: supports
          locator: CBDB:341730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341730）
          source: &a1
            id: s_3h6na6EWvB3vSnutU22Vpr
            source_type: api_record
            title: 中国历代人物传记资料库：王三薦（CBDB 341730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341730&o=json
            external_identifier: CBDB:341730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ak91eX9RpmEfvouMEfTCLT
        subject_person_id: p_MgxJA4mehKyQaYvRBsaX5Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三薦，清人物。明清進士進士，籍贯江陵，入仕進士。（中国历代人物传记资料库 CBDB 341730）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j7t1GAk1E-jZG-NmfZDFMY
          claim_id: c_ak91eX9RpmEfvouMEfTCLT
          source_id: s_3h6na6EWvB3vSnutU22Vpr
          stance: supports
          locator: CBDB:341730
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

# 王三薦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三薦 | accepted |
| bio.summary | 王三薦，清人物。明清進士進士，籍贯江陵，入仕進士。（中国历代人物传记资料库 CBDB 341730） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三薦（CBDB 341730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341730&o=json)
