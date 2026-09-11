---
schema: wang-person/v1
id: p_M3tBod7kuNmf1Pm4GBznpM
status: active
merged_into: null
display_name: 王輅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJ92J61EH1LeC5vz3VuFTd
        subject_person_id: p_M3tBod7kuNmf1Pm4GBznpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rp1XKeTMNrpVCNeEcANPXo
          claim_id: c_iJ92J61EH1LeC5vz3VuFTd
          source_id: s_P8syWz9gJw25M3CUw6aTqp
          stance: supports
          locator: CBDB:510331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510331）
          source: &a1
            id: s_P8syWz9gJw25M3CUw6aTqp
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 510331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510331&o=json
            external_identifier: CBDB:510331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZQGziq3RpAx2EpEEkD7jJi
        subject_person_id: p_M3tBod7kuNmf1Pm4GBznpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輅，清人物。入仕太學生，曾任知州。（中国历代人物传记资料库 CBDB 510331）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a7NQ1S0vutucVrpqXgsxde
          claim_id: c_ZQGziq3RpAx2EpEEkD7jJi
          source_id: s_P8syWz9gJw25M3CUw6aTqp
          stance: supports
          locator: CBDB:510331
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

# 王輅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輅 | accepted |
| bio.summary | 王輅，清人物。入仕太學生，曾任知州。（中国历代人物传记资料库 CBDB 510331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 510331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510331&o=json)
