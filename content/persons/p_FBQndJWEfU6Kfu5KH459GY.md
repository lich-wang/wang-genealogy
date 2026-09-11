---
schema: wang-person/v1
id: p_FBQndJWEfU6Kfu5KH459GY
status: active
merged_into: null
display_name: 王錫祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bTW29rLJHdoPvsCXh8VDmn
        subject_person_id: p_FBQndJWEfU6Kfu5KH459GY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5AY9ByNFpCzBrFRxmLPKfq
          claim_id: c_bTW29rLJHdoPvsCXh8VDmn
          source_id: s_8XPCGgse9vUgYjW3HL3qnR
          stance: supports
          locator: CBDB:640632
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640632）
          source: &a1
            id: s_8XPCGgse9vUgYjW3HL3qnR
            source_type: api_record
            title: 中国历代人物传记资料库：王錫祺（CBDB 640632）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640632&o=json
            external_identifier: CBDB:640632
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Uut511DyqsKtyLabsDNjbP
        subject_person_id: p_FBQndJWEfU6Kfu5KH459GY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫祺，清人物。籍贯紹興府，入仕鄉貢舉人，曾任訓導、主事、復設訓導。（中国历代人物传记资料库 CBDB 640632）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LVPWXEC4YjMDuVL3Up0tHP
          claim_id: c_Uut511DyqsKtyLabsDNjbP
          source_id: s_8XPCGgse9vUgYjW3HL3qnR
          stance: supports
          locator: CBDB:640632
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

# 王錫祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫祺 | accepted |
| bio.summary | 王錫祺，清人物。籍贯紹興府，入仕鄉貢舉人，曾任訓導、主事、復設訓導。（中国历代人物传记资料库 CBDB 640632） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫祺（CBDB 640632）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640632&o=json)
