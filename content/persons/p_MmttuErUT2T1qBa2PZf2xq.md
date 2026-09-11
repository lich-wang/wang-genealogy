---
schema: wang-person/v1
id: p_MmttuErUT2T1qBa2PZf2xq
status: active
merged_into: null
display_name: 王錞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9CLhc9MxTpDCV2Dap652eH
        subject_person_id: p_MmttuErUT2T1qBa2PZf2xq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fFfW2CJ6tYM29v7prMyvxf
          claim_id: c_9CLhc9MxTpDCV2Dap652eH
          source_id: s_VjMwvWtAgs1tR5Zx5FHYNh
          stance: supports
          locator: CBDB:273662
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273662）
          source: &a1
            id: s_VjMwvWtAgs1tR5Zx5FHYNh
            source_type: api_record
            title: 中国历代人物传记资料库：王錞（CBDB 273662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273662&o=json
            external_identifier: CBDB:273662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QSsQxzHN9hT9bapdEt4Da8
        subject_person_id: p_MmttuErUT2T1qBa2PZf2xq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錞，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273662）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FTEeNToEAZIUBPzpe5nuvS
          claim_id: c_QSsQxzHN9hT9bapdEt4Da8
          source_id: s_VjMwvWtAgs1tR5Zx5FHYNh
          stance: supports
          locator: CBDB:273662
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

# 王錞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錞 | accepted |
| bio.summary | 王錞，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 273662） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錞（CBDB 273662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273662&o=json)
