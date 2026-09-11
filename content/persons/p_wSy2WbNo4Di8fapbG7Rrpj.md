---
schema: wang-person/v1
id: p_wSy2WbNo4Di8fapbG7Rrpj
status: active
merged_into: null
display_name: 王久慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KW9Ji1jAxzDH4ziDQCHf7R
        subject_person_id: p_wSy2WbNo4Di8fapbG7Rrpj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王久慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jCYZmFFQYuNZ4g4rziyfNg
          claim_id: c_KW9Ji1jAxzDH4ziDQCHf7R
          source_id: s_7duaNNsJLB9t29vTA4q7LE
          stance: supports
          locator: CBDB:635768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635768）
          source: &a1
            id: s_7duaNNsJLB9t29vTA4q7LE
            source_type: api_record
            title: 中国历代人物传记资料库：王久慶（CBDB 635768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635768&o=json
            external_identifier: CBDB:635768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cNJn66qqTctTRuSQPEbecV
        subject_person_id: p_wSy2WbNo4Di8fapbG7Rrpj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王久慶，清人物。籍贯蕭山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v2SJPzDlhYCHTmLbh0TgFG
          claim_id: c_cNJn66qqTctTRuSQPEbecV
          source_id: s_7duaNNsJLB9t29vTA4q7LE
          stance: supports
          locator: CBDB:635768
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

# 王久慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王久慶 | accepted |
| bio.summary | 王久慶，清人物。籍贯蕭山，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王久慶（CBDB 635768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635768&o=json)
