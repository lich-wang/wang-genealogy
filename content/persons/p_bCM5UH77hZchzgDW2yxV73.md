---
schema: wang-person/v1
id: p_bCM5UH77hZchzgDW2yxV73
status: active
merged_into: null
display_name: 王鴻儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JL2sZbWgAkSMnZqBEGY37P
        subject_person_id: p_bCM5UH77hZchzgDW2yxV73
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ck1bGTYr98t5914AAQJrcT
          claim_id: c_JL2sZbWgAkSMnZqBEGY37P
          source_id: s_XJh7UeQNyNnszbeqgsfFJE
          stance: supports
          locator: CBDB:640975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640975）
          source: &a1
            id: s_XJh7UeQNyNnszbeqgsfFJE
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻儒（CBDB 640975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640975&o=json
            external_identifier: CBDB:640975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WjtRLBHGphfH34hMGZygDb
        subject_person_id: p_bCM5UH77hZchzgDW2yxV73
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻儒，清人物。籍贯泰州，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 640975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ff2GctSRCihv6So7X0linB
          claim_id: c_WjtRLBHGphfH34hMGZygDb
          source_id: s_XJh7UeQNyNnszbeqgsfFJE
          stance: supports
          locator: CBDB:640975
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

# 王鴻儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻儒 | accepted |
| bio.summary | 王鴻儒，清人物。籍贯泰州，入仕監生，曾任主事。（中国历代人物传记资料库 CBDB 640975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻儒（CBDB 640975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640975&o=json)
