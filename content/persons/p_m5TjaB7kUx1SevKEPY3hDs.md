---
schema: wang-person/v1
id: p_m5TjaB7kUx1SevKEPY3hDs
status: active
merged_into: null
display_name: 王丹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zDsfeKUb7MEfGbpyaQ1K4C
        subject_person_id: p_m5TjaB7kUx1SevKEPY3hDs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K2eZ5MKGi6J6cB8GmutRqQ
          claim_id: c_zDsfeKUb7MEfGbpyaQ1K4C
          source_id: s_AMoL5BvBS3whaWpNwLEd1Z
          stance: supports
          locator: CBDB:635753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635753）
          source: &a1
            id: s_AMoL5BvBS3whaWpNwLEd1Z
            source_type: api_record
            title: 中国历代人物传记资料库：王丹（CBDB 635753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635753&o=json
            external_identifier: CBDB:635753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gwUipQeJNtSNefkpMxvmnG
        subject_person_id: p_m5TjaB7kUx1SevKEPY3hDs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹，清人物。籍贯桂林府，入仕鄉貢舉人，曾任教授、學正、訓導。（中国历代人物传记资料库 CBDB 635753）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2AhFDBtMf37m7sMHTAYpMy
          claim_id: c_gwUipQeJNtSNefkpMxvmnG
          source_id: s_AMoL5BvBS3whaWpNwLEd1Z
          stance: supports
          locator: CBDB:635753
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

# 王丹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丹 | accepted |
| bio.summary | 王丹，清人物。籍贯桂林府，入仕鄉貢舉人，曾任教授、學正、訓導。（中国历代人物传记资料库 CBDB 635753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丹（CBDB 635753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635753&o=json)
