---
schema: wang-person/v1
id: p_3zFs8kg6M5wn99sxpDf25o
status: active
merged_into: null
display_name: 王夢桃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d8iePmk542MC39NQLyQyai
        subject_person_id: p_3zFs8kg6M5wn99sxpDf25o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢桃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5LjLQw9hF8oUuDXo3JNhFf
          claim_id: c_d8iePmk542MC39NQLyQyai
          source_id: s_z8d8fpBzxom66R1R4BNrQb
          stance: supports
          locator: CBDB:636870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636870）
          source: &a1
            id: s_z8d8fpBzxom66R1R4BNrQb
            source_type: api_record
            title: 中国历代人物传记资料库：王夢桃（CBDB 636870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636870&o=json
            external_identifier: CBDB:636870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8XprHwoVAPoNsrCxPLBav1
        subject_person_id: p_3zFs8kg6M5wn99sxpDf25o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢桃，清人物。籍贯廬州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AoovcNEOjLIEIp3zbLIhId
          claim_id: c_8XprHwoVAPoNsrCxPLBav1
          source_id: s_z8d8fpBzxom66R1R4BNrQb
          stance: supports
          locator: CBDB:636870
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

# 王夢桃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢桃 | accepted |
| bio.summary | 王夢桃，清人物。籍贯廬州府，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢桃（CBDB 636870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636870&o=json)
