---
schema: wang-person/v1
id: p_PcLsBALy84xBTZ5qSj22bB
status: active
merged_into: null
display_name: 王丞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bd7txSYfE6MFUEkPU429Dx
        subject_person_id: p_PcLsBALy84xBTZ5qSj22bB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DEYtMefpJ8vJaGhqYsL3Jy
          claim_id: c_bd7txSYfE6MFUEkPU429Dx
          source_id: s_TqHDacHbFmQhhEGp5ZyL6a
          stance: supports
          locator: CBDB:542896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（542896）
          source: &a1
            id: s_TqHDacHbFmQhhEGp5ZyL6a
            source_type: api_record
            title: 中国历代人物传记资料库：王丞（CBDB 542896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542896&o=json
            external_identifier: CBDB:542896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5c11BzDhHEYQ732RZW8C5i
        subject_person_id: p_PcLsBALy84xBTZ5qSj22bB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丞，宋人物。籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 542896）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5aDwNdDhWs32MZhdAjylSK
          claim_id: c_5c11BzDhHEYQ732RZW8C5i
          source_id: s_TqHDacHbFmQhhEGp5ZyL6a
          stance: supports
          locator: CBDB:542896
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

# 王丞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丞 | accepted |
| bio.summary | 王丞，宋人物。籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 542896） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丞（CBDB 542896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=542896&o=json)
