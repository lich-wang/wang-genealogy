---
schema: wang-person/v1
id: p_m19ZaKKb5jmRBy5NwqbZuh
status: active
merged_into: null
display_name: 王僎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6QqzMMCGpNk5zDuiSWmtAQ
        subject_person_id: p_m19ZaKKb5jmRBy5NwqbZuh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KwF1hJzP1mfovg9mZnBBcK
          claim_id: c_6QqzMMCGpNk5zDuiSWmtAQ
          source_id: s_stFbbBRjKBtjddWDM9WQju
          stance: supports
          locator: CBDB:100894
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100894）
          source: &a1
            id: s_stFbbBRjKBtjddWDM9WQju
            source_type: api_record
            title: 中国历代人物传记资料库：王僎（CBDB 100894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100894&o=json
            external_identifier: CBDB:100894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kMNbNnVavFsr7FDJj8nBzp
        subject_person_id: p_m19ZaKKb5jmRBy5NwqbZuh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僎，元人物。籍贯祥符，曾任國子學助教、翰林國史院待制、翰林國史院國史編修官。（中国历代人物传记资料库 CBDB 100894）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Lnq7qLrCgmZkt8ysyE6F7
          claim_id: c_kMNbNnVavFsr7FDJj8nBzp
          source_id: s_stFbbBRjKBtjddWDM9WQju
          stance: supports
          locator: CBDB:100894
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

# 王僎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僎 | accepted |
| bio.summary | 王僎，元人物。籍贯祥符，曾任國子學助教、翰林國史院待制、翰林國史院國史編修官。（中国历代人物传记资料库 CBDB 100894） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僎（CBDB 100894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100894&o=json)
