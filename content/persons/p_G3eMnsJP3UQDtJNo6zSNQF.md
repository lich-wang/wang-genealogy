---
schema: wang-person/v1
id: p_G3eMnsJP3UQDtJNo6zSNQF
status: active
merged_into: null
display_name: 王錫瓉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dVjfcDa7y8BNhXtZFQNak6
        subject_person_id: p_G3eMnsJP3UQDtJNo6zSNQF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瓉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PrbUaQKeYA85rZGtYgYNFp
          claim_id: c_dVjfcDa7y8BNhXtZFQNak6
          source_id: s_nisQUL45G5QA7faPKxAJDB
          stance: supports
          locator: CBDB:640625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640625）
          source: &a1
            id: s_nisQUL45G5QA7faPKxAJDB
            source_type: api_record
            title: 中国历代人物传记资料库：王錫瓉（CBDB 640625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640625&o=json
            external_identifier: CBDB:640625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yX1chgA7H1uhL4KdPqrEbM
        subject_person_id: p_G3eMnsJP3UQDtJNo6zSNQF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫瓉，清人物。籍贯江都，入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 640625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D058KbJO-qs1rK5Qo_Dgol
          claim_id: c_yX1chgA7H1uhL4KdPqrEbM
          source_id: s_nisQUL45G5QA7faPKxAJDB
          stance: supports
          locator: CBDB:640625
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

# 王錫瓉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫瓉 | accepted |
| bio.summary | 王錫瓉，清人物。籍贯江都，入仕監生，曾任主簿。（中国历代人物传记资料库 CBDB 640625） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫瓉（CBDB 640625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640625&o=json)
