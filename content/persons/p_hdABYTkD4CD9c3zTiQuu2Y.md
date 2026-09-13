---
schema: wang-person/v1
id: p_hdABYTkD4CD9c3zTiQuu2Y
status: active
merged_into: null
display_name: 王留福
cbdb_id: 71982
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wxmUkxM9QsTSFQHK5VDvqr
        subject_person_id: p_hdABYTkD4CD9c3zTiQuu2Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王留福（卒于1844年），史料所见人物。本项目依据《中国历代人物传记资料库：王留福（CBDB 71982）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ZL8DuTmoBI6HvPmTrPQZxz
          claim_id: c_wxmUkxM9QsTSFQHK5VDvqr
          source_id: s_vLSjK37iPAy3SRtu3MiQUC
          stance: supports
          locator: CBDB:71982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vLSjK37iPAy3SRtu3MiQUC
            source_type: api_record
            title: 中国历代人物传记资料库：王留福（CBDB 71982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71982&o=json
            external_identifier: CBDB:71982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q83AriGd8CMyXQJAgZFsE8
        subject_person_id: p_hdABYTkD4CD9c3zTiQuu2Y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1844年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1844-01-01
            latest: 1844-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DYEYFjrjxxNbJuSB99jwbq
          claim_id: c_Q83AriGd8CMyXQJAgZFsE8
          source_id: s_vLSjK37iPAy3SRtu3MiQUC
          stance: supports
          locator: CBDB:71982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1844
          source:
            id: s_vLSjK37iPAy3SRtu3MiQUC
            source_type: api_record
            title: 中国历代人物传记资料库：王留福（CBDB 71982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71982&o=json
            external_identifier: CBDB:71982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CYJLi3PEyCU2hGXEhVy4TR
        subject_person_id: p_hdABYTkD4CD9c3zTiQuu2Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王留福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5MvwNDpMJekJGzmp6fGQbE
          claim_id: c_CYJLi3PEyCU2hGXEhVy4TR
          source_id: s_vLSjK37iPAy3SRtu3MiQUC
          stance: supports
          locator: CBDB:71982
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1844
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

# 王留福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王留福（卒于1844年），史料所见人物。本项目依据《中国历代人物传记资料库：王留福（CBDB 71982）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1844年 | accepted |
| name.primary | 王留福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王留福（CBDB 71982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71982&o=json)
