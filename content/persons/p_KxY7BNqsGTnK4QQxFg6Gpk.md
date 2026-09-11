---
schema: wang-person/v1
id: p_KxY7BNqsGTnK4QQxFg6Gpk
status: active
merged_into: null
display_name: 王居義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iyMTcs9ar1VqA93bhJq7so
        subject_person_id: p_KxY7BNqsGTnK4QQxFg6Gpk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8GeL7WD4E4X2A9LumM4297
          claim_id: c_iyMTcs9ar1VqA93bhJq7so
          source_id: s_pD8mb2YaCmEPAozkB7muBm
          stance: supports
          locator: CBDB:101248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101248）
          source: &a1
            id: s_pD8mb2YaCmEPAozkB7muBm
            source_type: api_record
            title: 中国历代人物传记资料库：王居義（CBDB 101248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101248&o=json
            external_identifier: CBDB:101248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zAXiSk66XGBkEcYko55vFY
        subject_person_id: p_KxY7BNqsGTnK4QQxFg6Gpk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居義，元人物。曾任祕書少監、樞密院都事、樞密院斷事官。（中国历代人物传记资料库 CBDB 101248）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xTjgDC5AqroxrEcA9SQ0mj
          claim_id: c_zAXiSk66XGBkEcYko55vFY
          source_id: s_pD8mb2YaCmEPAozkB7muBm
          stance: supports
          locator: CBDB:101248
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

# 王居義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居義 | accepted |
| bio.summary | 王居義，元人物。曾任祕書少監、樞密院都事、樞密院斷事官。（中国历代人物传记资料库 CBDB 101248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王居義（CBDB 101248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101248&o=json)
