---
schema: wang-person/v1
id: p_f1XwTRMVAYJExkGTa5bF92
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WQS6Z9nQQpYgivAdB7WHkK
        subject_person_id: p_f1XwTRMVAYJExkGTa5bF92
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yj8jq2y5SJbs8xvZpxupin
          claim_id: c_WQS6Z9nQQpYgivAdB7WHkK
          source_id: s_NsrdYR1okumsmWVTuBumpn
          stance: supports
          locator: CBDB:291887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291887）
          source: &a1
            id: s_NsrdYR1okumsmWVTuBumpn
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 291887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291887&o=json
            external_identifier: CBDB:291887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ffipVLfG2FtXFqD5fzGc5P
        subject_person_id: p_f1XwTRMVAYJExkGTa5bF92
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CvZ-R738fQhdGCGnHZ5jYp
          claim_id: c_ffipVLfG2FtXFqD5fzGc5P
          source_id: s_NsrdYR1okumsmWVTuBumpn
          stance: supports
          locator: CBDB:291887
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。嘉靖十一年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 291887） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 291887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291887&o=json)
