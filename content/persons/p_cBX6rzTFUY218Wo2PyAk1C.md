---
schema: wang-person/v1
id: p_cBX6rzTFUY218Wo2PyAk1C
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RqfiR9yrqSzdubCBKJebeu
        subject_person_id: p_cBX6rzTFUY218Wo2PyAk1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iD5Muh43SFoJxDHMfsyv8m
          claim_id: c_RqfiR9yrqSzdubCBKJebeu
          source_id: s_b5UgugDHfTA6GTWC1HJ7iR
          stance: supports
          locator: CBDB:476253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476253）
          source: &a1
            id: s_b5UgugDHfTA6GTWC1HJ7iR
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 476253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476253&o=json
            external_identifier: CBDB:476253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x1at7Dcf71oDhdFvrAZab4
        subject_person_id: p_cBX6rzTFUY218Wo2PyAk1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥，元人物。曾任縣學教諭。（中国历代人物传记资料库 CBDB 476253）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HS46cWoDdCLqR_gNC4pgvi
          claim_id: c_x1at7Dcf71oDhdFvrAZab4
          source_id: s_b5UgugDHfTA6GTWC1HJ7iR
          stance: supports
          locator: CBDB:476253
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | 王祥，元人物。曾任縣學教諭。（中国历代人物传记资料库 CBDB 476253） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 476253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476253&o=json)
