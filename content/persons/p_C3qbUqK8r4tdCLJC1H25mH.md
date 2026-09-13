---
schema: wang-person/v1
id: p_C3qbUqK8r4tdCLJC1H25mH
status: active
merged_into: null
display_name: 王民卿
cbdb_id: 210119
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h6o4i1wFAYAPypksqV2fay
        subject_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民卿，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5eMLenvRKzfSl4n4O3c3SP
          claim_id: c_h6o4i1wFAYAPypksqV2fay
          source_id: s_xnwGLq1qA48iXx6d1DtUCy
          stance: supports
          locator: CBDB:210119
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xnwGLq1qA48iXx6d1DtUCy
            source_type: api_record
            title: 中国历代人物传记资料库：王民卿（CBDB 210119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json
            external_identifier: CBDB:210119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_joxkRA6ZPgEjPHzxCUk5yd
        subject_person_id: p_C3qbUqK8r4tdCLJC1H25mH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WADszPmKk62XH9X6JVza7P
          claim_id: c_joxkRA6ZPgEjPHzxCUk5yd
          source_id: s_xnwGLq1qA48iXx6d1DtUCy
          stance: supports
          locator: CBDB:210119
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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

# 王民卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民卿，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210119） | accepted |
| name.primary | 王民卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王民卿（CBDB 210119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210119&o=json)
