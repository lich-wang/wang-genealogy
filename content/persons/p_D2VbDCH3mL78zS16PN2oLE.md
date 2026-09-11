---
schema: wang-person/v1
id: p_D2VbDCH3mL78zS16PN2oLE
status: active
merged_into: null
display_name: 王紹曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KZcyzQAej5A8cP9JkvkTWM
        subject_person_id: p_D2VbDCH3mL78zS16PN2oLE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTCVv8dJWAV65XqWHg9p9S
          claim_id: c_KZcyzQAej5A8cP9JkvkTWM
          source_id: s_vyMD4UrSbs8ZHzJ8aDDect
          stance: supports
          locator: CBDB:71839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71839）
          source: &a1
            id: s_vyMD4UrSbs8ZHzJ8aDDect
            source_type: api_record
            title: 中国历代人物传记资料库：王紹曾（CBDB 71839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71839&o=json
            external_identifier: CBDB:71839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Y5mkwoQNpDMv7yJcjiNfZF
        subject_person_id: p_D2VbDCH3mL78zS16PN2oLE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1730年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XgsbQbN2LKPAyhSb4obMmX
          claim_id: c_Y5mkwoQNpDMv7yJcjiNfZF
          source_id: s_vyMD4UrSbs8ZHzJ8aDDect
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2TgNv2MLs6D6kxtCXsFSuP
        subject_person_id: p_D2VbDCH3mL78zS16PN2oLE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1769年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqjeRnvXpesavUbYGpMgNB
          claim_id: c_2TgNv2MLs6D6kxtCXsFSuP
          source_id: s_vyMD4UrSbs8ZHzJ8aDDect
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F9G1uzAMEKrAH4GtuehDVp
        subject_person_id: p_D2VbDCH3mL78zS16PN2oLE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹曾（1730年—1769年），清人物。籍贯華亭。（中国历代人物传记资料库 CBDB 71839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1CwisnPC5Qc2NFeXikRk6
          claim_id: c_F9G1uzAMEKrAH4GtuehDVp
          source_id: s_vyMD4UrSbs8ZHzJ8aDDect
          stance: supports
          locator: CBDB:71839
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

# 王紹曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹曾 | accepted |
| birth.date | 1730年 | accepted |
| death.date | 1769年 | accepted |
| bio.summary | 王紹曾（1730年—1769年），清人物。籍贯華亭。（中国历代人物传记资料库 CBDB 71839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹曾（CBDB 71839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71839&o=json)
