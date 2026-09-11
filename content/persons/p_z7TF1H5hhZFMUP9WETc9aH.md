---
schema: wang-person/v1
id: p_z7TF1H5hhZFMUP9WETc9aH
status: active
merged_into: null
display_name: 王立常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_demYCpmNt8wNXWAkgEBRsD
        subject_person_id: p_z7TF1H5hhZFMUP9WETc9aH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6sDz8U4ccHFYwqtcMsgx1t
          claim_id: c_demYCpmNt8wNXWAkgEBRsD
          source_id: s_vohYrt5kK4BGUri1FDEuNJ
          stance: supports
          locator: CBDB:71497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71497）
          source: &a1
            id: s_vohYrt5kK4BGUri1FDEuNJ
            source_type: api_record
            title: 中国历代人物传记资料库：王立常（CBDB 71497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71497&o=json
            external_identifier: CBDB:71497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4ZkGC8gzDTGDyAzNMF5jmS
        subject_person_id: p_z7TF1H5hhZFMUP9WETc9aH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1683年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dYu73AZoarBP1mFNaCc4zX
          claim_id: c_4ZkGC8gzDTGDyAzNMF5jmS
          source_id: s_vohYrt5kK4BGUri1FDEuNJ
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
        id: c_a59h2x4MHFWG2hj8GGCRdn
        subject_person_id: p_z7TF1H5hhZFMUP9WETc9aH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立常（生于1683年），清人物。籍贯高密。（中国历代人物传记资料库 CBDB 71497）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FcWjSe51HFOviWvTRxNVh0
          claim_id: c_a59h2x4MHFWG2hj8GGCRdn
          source_id: s_vohYrt5kK4BGUri1FDEuNJ
          stance: supports
          locator: CBDB:71497
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

# 王立常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立常 | accepted |
| birth.date | 1683年 | accepted |
| bio.summary | 王立常（生于1683年），清人物。籍贯高密。（中国历代人物传记资料库 CBDB 71497） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立常（CBDB 71497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71497&o=json)
