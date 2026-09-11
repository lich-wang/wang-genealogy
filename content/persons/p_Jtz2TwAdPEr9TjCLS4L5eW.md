---
schema: wang-person/v1
id: p_Jtz2TwAdPEr9TjCLS4L5eW
status: active
merged_into: null
display_name: 王鑒塘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cVF3gohBWSX7R8EGo6dGdj
        subject_person_id: p_Jtz2TwAdPEr9TjCLS4L5eW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒塘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7244t5P4d62eEHg115NNUL
          claim_id: c_cVF3gohBWSX7R8EGo6dGdj
          source_id: s_UfKE5FtDG3iMgY7mCWLQK4
          stance: supports
          locator: CBDB:72108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72108）
          source: &a1
            id: s_UfKE5FtDG3iMgY7mCWLQK4
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒塘（CBDB 72108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72108&o=json
            external_identifier: CBDB:72108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2AWBVkr9hpcMLe2HAqZuAB
        subject_person_id: p_Jtz2TwAdPEr9TjCLS4L5eW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1821年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KQtUdbj1WwLxPGPsxuBcaj
          claim_id: c_2AWBVkr9hpcMLe2HAqZuAB
          source_id: s_UfKE5FtDG3iMgY7mCWLQK4
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
        id: c_TrdUNGTXE4wDFobgWeEQ59
        subject_person_id: p_Jtz2TwAdPEr9TjCLS4L5eW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒塘（生于1821年），清人物。籍贯平番。（中国历代人物传记资料库 CBDB 72108）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kDKrgALMlTYeuC9VhPAFe3
          claim_id: c_TrdUNGTXE4wDFobgWeEQ59
          source_id: s_UfKE5FtDG3iMgY7mCWLQK4
          stance: supports
          locator: CBDB:72108
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

# 王鑒塘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒塘 | accepted |
| birth.date | 1821年 | accepted |
| bio.summary | 王鑒塘（生于1821年），清人物。籍贯平番。（中国历代人物传记资料库 CBDB 72108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑒塘（CBDB 72108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72108&o=json)
