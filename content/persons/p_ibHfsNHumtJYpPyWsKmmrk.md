---
schema: wang-person/v1
id: p_ibHfsNHumtJYpPyWsKmmrk
status: active
merged_into: null
display_name: 王林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F13JvCPfEQwD4rZm2ZmwdG
        subject_person_id: p_ibHfsNHumtJYpPyWsKmmrk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zP3bstMMQreA68QwgtbSHs
          claim_id: c_F13JvCPfEQwD4rZm2ZmwdG
          source_id: s_Wp9bJEB43dU6dugRZ5hxLV
          stance: supports
          locator: CBDB:294435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294435）
          source: &a1
            id: s_Wp9bJEB43dU6dugRZ5hxLV
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 294435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294435&o=json
            external_identifier: CBDB:294435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TGLHasXFV677f24qvCTWbH
        subject_person_id: p_ibHfsNHumtJYpPyWsKmmrk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294435）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eBZ1Y1k6X17lw7EByfTomi
          claim_id: c_TGLHasXFV677f24qvCTWbH
          source_id: s_Wp9bJEB43dU6dugRZ5hxLV
          stance: supports
          locator: CBDB:294435
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

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| bio.summary | 王林，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王林（CBDB 294435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294435&o=json)
