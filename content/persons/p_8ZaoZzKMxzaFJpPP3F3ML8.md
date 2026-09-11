---
schema: wang-person/v1
id: p_8ZaoZzKMxzaFJpPP3F3ML8
status: active
merged_into: null
display_name: 王錫田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMvZG4N3H4UzN7pAfqXRDj
        subject_person_id: p_8ZaoZzKMxzaFJpPP3F3ML8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UKiFBgorC2kySFPt6rTnZT
          claim_id: c_eMvZG4N3H4UzN7pAfqXRDj
          source_id: s_xBTiUfP3zzMDWkfCB3smyT
          stance: supports
          locator: CBDB:640630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640630）
          source: &a1
            id: s_xBTiUfP3zzMDWkfCB3smyT
            source_type: api_record
            title: 中国历代人物传记资料库：王錫田（CBDB 640630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640630&o=json
            external_identifier: CBDB:640630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.161Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kMf5n2RmUNnH4X2FC4j4GK
        subject_person_id: p_8ZaoZzKMxzaFJpPP3F3ML8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫田，清人物。籍贯宛平，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 640630）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qd2xrFoBkHuqYYsnDGZzcJ
          claim_id: c_kMf5n2RmUNnH4X2FC4j4GK
          source_id: s_xBTiUfP3zzMDWkfCB3smyT
          stance: supports
          locator: CBDB:640630
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

# 王錫田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫田 | accepted |
| bio.summary | 王錫田，清人物。籍贯宛平，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 640630） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫田（CBDB 640630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640630&o=json)
