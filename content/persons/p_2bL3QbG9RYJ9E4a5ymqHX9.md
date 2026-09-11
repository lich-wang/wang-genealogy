---
schema: wang-person/v1
id: p_2bL3QbG9RYJ9E4a5ymqHX9
status: active
merged_into: null
display_name: 王與
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MbVaboovjEk6TmdAqaibLt
        subject_person_id: p_2bL3QbG9RYJ9E4a5ymqHX9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aDXouHBdrgqiCTA5odMGdc
          claim_id: c_MbVaboovjEk6TmdAqaibLt
          source_id: s_gj15A4U7JMECa7fDaZZsfo
          stance: supports
          locator: CBDB:473355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473355）
          source: &a1
            id: s_gj15A4U7JMECa7fDaZZsfo
            source_type: api_record
            title: 中国历代人物传记资料库：王與（CBDB 473355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473355&o=json
            external_identifier: CBDB:473355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_759hXK8r7vmxwS2YNRufB3
        subject_person_id: p_2bL3QbG9RYJ9E4a5ymqHX9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473355）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T8oDD9J0e753tSchTirKR3
          claim_id: c_759hXK8r7vmxwS2YNRufB3
          source_id: s_gj15A4U7JMECa7fDaZZsfo
          stance: supports
          locator: CBDB:473355
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

# 王與

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王與 | accepted |
| bio.summary | 王與，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 473355） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王與（CBDB 473355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473355&o=json)
