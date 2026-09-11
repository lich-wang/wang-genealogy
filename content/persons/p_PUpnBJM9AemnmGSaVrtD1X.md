---
schema: wang-person/v1
id: p_PUpnBJM9AemnmGSaVrtD1X
status: active
merged_into: null
display_name: 王愨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9WWL76sGWY7fRLBnzbBX7i
        subject_person_id: p_PUpnBJM9AemnmGSaVrtD1X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gL7CwYcR8fNfWTDu8g4sjD
          claim_id: c_9WWL76sGWY7fRLBnzbBX7i
          source_id: s_M6k5aqS1vTATCRSF9rUj4Z
          stance: supports
          locator: CBDB:637918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637918）
          source: &a1
            id: s_M6k5aqS1vTATCRSF9rUj4Z
            source_type: api_record
            title: 中国历代人物传记资料库：王愨（CBDB 637918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637918&o=json
            external_identifier: CBDB:637918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5LCmjU3Sh1yW89VDWij4hR
        subject_person_id: p_PUpnBJM9AemnmGSaVrtD1X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愨，清人物。籍贯太原，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637918）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_czUAyUnaKUgnh2_j8RZcJa
          claim_id: c_5LCmjU3Sh1yW89VDWij4hR
          source_id: s_M6k5aqS1vTATCRSF9rUj4Z
          stance: supports
          locator: CBDB:637918
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

# 王愨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愨 | accepted |
| bio.summary | 王愨，清人物。籍贯太原，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637918） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愨（CBDB 637918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637918&o=json)
