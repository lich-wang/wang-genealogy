---
schema: wang-person/v1
id: p_iUnPzFuC4Yvr8AgbxCbJ85
status: active
merged_into: null
display_name: 王僅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Txr3EF8CnfoCicvP572eHw
        subject_person_id: p_iUnPzFuC4Yvr8AgbxCbJ85
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mWwiupgJZArrK8YLuKWDWt
          claim_id: c_Txr3EF8CnfoCicvP572eHw
          source_id: s_tPMGsgX6Two5vAj2c8YhNB
          stance: supports
          locator: CBDB:480356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（480356）
          source: &a1
            id: s_tPMGsgX6Two5vAj2c8YhNB
            source_type: api_record
            title: 中国历代人物传记资料库：王僅（CBDB 480356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480356&o=json
            external_identifier: CBDB:480356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E4ieS9L5ZXYsyvC7A6zAZ1
        subject_person_id: p_iUnPzFuC4Yvr8AgbxCbJ85
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僅，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 480356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Li0IvTeHf48Mkhnw2kqeBW
          claim_id: c_E4ieS9L5ZXYsyvC7A6zAZ1
          source_id: s_tPMGsgX6Two5vAj2c8YhNB
          stance: supports
          locator: CBDB:480356
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

# 王僅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僅 | accepted |
| bio.summary | 王僅，宋人物。曾任縣尉。（中国历代人物传记资料库 CBDB 480356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僅（CBDB 480356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=480356&o=json)
