---
schema: wang-person/v1
id: p_uCq5apDN5YVcGKdwR7e7h6
status: active
merged_into: null
display_name: 王文合
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6aWz2FQAGEvB9MXF92F9aa
        subject_person_id: p_uCq5apDN5YVcGKdwR7e7h6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文合
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKXDKtKdES1ZqduNvDLaZT
          claim_id: c_6aWz2FQAGEvB9MXF92F9aa
          source_id: s_5SBBQMRFCVFxxPY4QCuHK3
          stance: supports
          locator: CBDB:101088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101088）
          source: &a1
            id: s_5SBBQMRFCVFxxPY4QCuHK3
            source_type: api_record
            title: 中国历代人物传记资料库：王文合（CBDB 101088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101088&o=json
            external_identifier: CBDB:101088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UAbmUA9jLkK8KEaRVbq5rj
        subject_person_id: p_uCq5apDN5YVcGKdwR7e7h6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文合，元人物。籍贯嵊縣，入仕鄉貢舉人，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101088）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hH4NxUL1Jkz7dcCkjMjPtZ
          claim_id: c_UAbmUA9jLkK8KEaRVbq5rj
          source_id: s_5SBBQMRFCVFxxPY4QCuHK3
          stance: supports
          locator: CBDB:101088
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

# 王文合

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文合 | accepted |
| bio.summary | 王文合，元人物。籍贯嵊縣，入仕鄉貢舉人，曾任縣學教諭。（中国历代人物传记资料库 CBDB 101088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文合（CBDB 101088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101088&o=json)
