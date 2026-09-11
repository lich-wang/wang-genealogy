---
schema: wang-person/v1
id: p_jLX66AexNRZdcMsNwj3GCN
status: active
merged_into: null
display_name: 王仲文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dkFtZPWakWRRVBSRs8AkSj
        subject_person_id: p_jLX66AexNRZdcMsNwj3GCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bz1JJKTQ5pHQg3ViKSXgCP
          claim_id: c_dkFtZPWakWRRVBSRs8AkSj
          source_id: s_HEBrfABCBqVQK9nA8vF43u
          stance: supports
          locator: CBDB:101141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101141）
          source: &a1
            id: s_HEBrfABCBqVQK9nA8vF43u
            source_type: api_record
            title: 中国历代人物传记资料库：王仲文（CBDB 101141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101141&o=json
            external_identifier: CBDB:101141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ub37RYW1cAMkMvwbZPGPGN
        subject_person_id: p_jLX66AexNRZdcMsNwj3GCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲文，元人物。籍贯祥符，曾任縣尹。（中国历代人物传记资料库 CBDB 101141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tluqMo4hmy2pU6m8EvTmS8
          claim_id: c_ub37RYW1cAMkMvwbZPGPGN
          source_id: s_HEBrfABCBqVQK9nA8vF43u
          stance: supports
          locator: CBDB:101141
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

# 王仲文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲文 | accepted |
| bio.summary | 王仲文，元人物。籍贯祥符，曾任縣尹。（中国历代人物传记资料库 CBDB 101141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲文（CBDB 101141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101141&o=json)
