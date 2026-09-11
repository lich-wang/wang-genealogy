---
schema: wang-person/v1
id: p_vEeGXU91tEG3esDby5phZj
status: active
merged_into: null
display_name: 王嘉禾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQ2Va48THipNyZzEMsoSnh
        subject_person_id: p_vEeGXU91tEG3esDby5phZj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉禾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UtNAPNhHGBr7iBHE5Aq1XA
          claim_id: c_EQ2Va48THipNyZzEMsoSnh
          source_id: s_2gPS8oGcV54xH7h8coKZJn
          stance: supports
          locator: CBDB:72145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72145）
          source: &a1
            id: s_2gPS8oGcV54xH7h8coKZJn
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉禾（CBDB 72145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72145&o=json
            external_identifier: CBDB:72145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_c8hCLBDsmBjRZjNrssV3Q6
        subject_person_id: p_vEeGXU91tEG3esDby5phZj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_quk8nM1vbw8DDAVJ6CgkkX
          claim_id: c_c8hCLBDsmBjRZjNrssV3Q6
          source_id: s_2gPS8oGcV54xH7h8coKZJn
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
        id: c_RzXHzwM6TPeNtua1K8DCu5
        subject_person_id: p_vEeGXU91tEG3esDby5phZj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉禾（生于1850年），清人物。籍贯文登。（中国历代人物传记资料库 CBDB 72145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iNta7hBRFRL6Ut7AhyrkJ0
          claim_id: c_RzXHzwM6TPeNtua1K8DCu5
          source_id: s_2gPS8oGcV54xH7h8coKZJn
          stance: supports
          locator: CBDB:72145
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

# 王嘉禾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉禾 | accepted |
| birth.date | 1850年 | accepted |
| bio.summary | 王嘉禾（生于1850年），清人物。籍贯文登。（中国历代人物传记资料库 CBDB 72145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉禾（CBDB 72145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72145&o=json)
