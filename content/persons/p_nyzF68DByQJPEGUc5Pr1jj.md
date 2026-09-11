---
schema: wang-person/v1
id: p_nyzF68DByQJPEGUc5Pr1jj
status: active
merged_into: null
display_name: 王圭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HuukZfDpc2QN8yfJ8hnDFP
        subject_person_id: p_nyzF68DByQJPEGUc5Pr1jj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bTaa5wm4qjPLkFLpoUJis3
          claim_id: c_HuukZfDpc2QN8yfJ8hnDFP
          source_id: s_E1NeVJy6UPJicyhA8secid
          stance: supports
          locator: CBDB:100655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100655）
          source: &a1
            id: s_E1NeVJy6UPJicyhA8secid
            source_type: api_record
            title: 中国历代人物传记资料库：王圭（CBDB 100655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100655&o=json
            external_identifier: CBDB:100655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s6CQj7JBrDLo6BFpfH77GD
        subject_person_id: p_nyzF68DByQJPEGUc5Pr1jj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圭，元人物。籍贯宣城。（中国历代人物传记资料库 CBDB 100655）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0tAqHMFQSOc-28irSlNl8_
          claim_id: c_s6CQj7JBrDLo6BFpfH77GD
          source_id: s_E1NeVJy6UPJicyhA8secid
          stance: supports
          locator: CBDB:100655
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

# 王圭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圭 | accepted |
| bio.summary | 王圭，元人物。籍贯宣城。（中国历代人物传记资料库 CBDB 100655） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王圭（CBDB 100655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100655&o=json)
