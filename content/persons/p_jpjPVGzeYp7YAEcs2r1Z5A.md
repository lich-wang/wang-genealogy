---
schema: wang-person/v1
id: p_jpjPVGzeYp7YAEcs2r1Z5A
status: active
merged_into: null
display_name: 王琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bQbGQxEy7EVB736w6L7tiC
        subject_person_id: p_jpjPVGzeYp7YAEcs2r1Z5A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bpLizvjvdkrPsMf5FJwt3z
          claim_id: c_bQbGQxEy7EVB736w6L7tiC
          source_id: s_DkJU17wa6czwbtm2FYuu8x
          stance: supports
          locator: CBDB:490056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490056）
          source: &a1
            id: s_DkJU17wa6czwbtm2FYuu8x
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 490056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490056&o=json
            external_identifier: CBDB:490056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFtXvb6ReKKS3BqhGuwAey
        subject_person_id: p_jpjPVGzeYp7YAEcs2r1Z5A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 490056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U8xuci8bD5XwsiApRfC9z2
          claim_id: c_LFtXvb6ReKKS3BqhGuwAey
          source_id: s_DkJU17wa6czwbtm2FYuu8x
          stance: supports
          locator: CBDB:490056
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

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 490056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 490056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490056&o=json)
