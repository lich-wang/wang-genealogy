---
schema: wang-person/v1
id: p_c3VxYP9hFwLj5hajtmsaQR
status: active
merged_into: null
display_name: 王嗣沂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_scZD1Qiec9W5oimu9y5JmG
        subject_person_id: p_c3VxYP9hFwLj5hajtmsaQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQ3tswBgBzWM1WyWaQQmqG
          claim_id: c_scZD1Qiec9W5oimu9y5JmG
          source_id: s_YC3dZ57y9kRvmdshB9znof
          stance: supports
          locator: CBDB:636598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636598）
          source: &a1
            id: s_YC3dZ57y9kRvmdshB9znof
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣沂（CBDB 636598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636598&o=json
            external_identifier: CBDB:636598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NSoADsurQkpq5CX1w6Z9WD
        subject_person_id: p_c3VxYP9hFwLj5hajtmsaQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣沂，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KCOhH9DyoXJH_9Y-WMJNFL
          claim_id: c_NSoADsurQkpq5CX1w6Z9WD
          source_id: s_YC3dZ57y9kRvmdshB9znof
          stance: supports
          locator: CBDB:636598
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

# 王嗣沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣沂 | accepted |
| bio.summary | 王嗣沂，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣沂（CBDB 636598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636598&o=json)
