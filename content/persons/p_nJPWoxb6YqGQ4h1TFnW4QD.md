---
schema: wang-person/v1
id: p_nJPWoxb6YqGQ4h1TFnW4QD
status: active
merged_into: null
display_name: 王攄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dUmTZWq7NZ1QpbnLaTBMqg
        subject_person_id: p_nJPWoxb6YqGQ4h1TFnW4QD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sFEr7doDFaJHW86boVgMpU
          claim_id: c_dUmTZWq7NZ1QpbnLaTBMqg
          source_id: s_wyruPLX7Xp74TVGK1GVU2H
          stance: supports
          locator: CBDB:97907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97907）
          source: &a1
            id: s_wyruPLX7Xp74TVGK1GVU2H
            source_type: api_record
            title: 中国历代人物传记资料库：王攄（CBDB 97907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97907&o=json
            external_identifier: CBDB:97907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EGtDM2pfNtcY7ATsVCoCdt
        subject_person_id: p_nJPWoxb6YqGQ4h1TFnW4QD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攄，宋人物。曾任朝散郎。（中国历代人物传记资料库 CBDB 97907）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xaIViGZtR0Nm2kxo1pXeiW
          claim_id: c_EGtDM2pfNtcY7ATsVCoCdt
          source_id: s_wyruPLX7Xp74TVGK1GVU2H
          stance: supports
          locator: CBDB:97907
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

# 王攄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王攄 | accepted |
| bio.summary | 王攄，宋人物。曾任朝散郎。（中国历代人物传记资料库 CBDB 97907） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王攄（CBDB 97907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97907&o=json)
