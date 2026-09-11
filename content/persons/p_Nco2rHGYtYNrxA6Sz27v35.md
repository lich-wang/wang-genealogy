---
schema: wang-person/v1
id: p_Nco2rHGYtYNrxA6Sz27v35
status: active
merged_into: null
display_name: 王尚清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nZDB8HB8h4c1YuDWaC4bAH
        subject_person_id: p_Nco2rHGYtYNrxA6Sz27v35
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XUVM5TYjQMKb6u6sBXT7ZK
          claim_id: c_nZDB8HB8h4c1YuDWaC4bAH
          source_id: s_PKfDvQV6Mdmmvun9eAR97A
          stance: supports
          locator: CBDB:637294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637294）
          source: &a1
            id: s_PKfDvQV6Mdmmvun9eAR97A
            source_type: api_record
            title: 中国历代人物传记资料库：王尚清（CBDB 637294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637294&o=json
            external_identifier: CBDB:637294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7nv4zXWoyTuoyuxuiyMo3u
        subject_person_id: p_Nco2rHGYtYNrxA6Sz27v35
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚清，清人物。籍贯寧國，曾任復設訓導。（中国历代人物传记资料库 CBDB 637294）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0uXtf85tMBoYyG1QSKRkEo
          claim_id: c_7nv4zXWoyTuoyuxuiyMo3u
          source_id: s_PKfDvQV6Mdmmvun9eAR97A
          stance: supports
          locator: CBDB:637294
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

# 王尚清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚清 | accepted |
| bio.summary | 王尚清，清人物。籍贯寧國，曾任復設訓導。（中国历代人物传记资料库 CBDB 637294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚清（CBDB 637294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637294&o=json)
