---
schema: wang-person/v1
id: p_34MLAJVChWhCtAHLLwS4nt
status: active
merged_into: null
display_name: 王森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Ze4b3qyEc9MkwKqwG4Dhz
        subject_person_id: p_34MLAJVChWhCtAHLLwS4nt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7yAAsHXpxo5E2CA5rYwif
          claim_id: c_8Ze4b3qyEc9MkwKqwG4Dhz
          source_id: s_zD4J5N3xMuPJzDDCkqv88e
          stance: supports
          locator: CBDB:294533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294533）
          source: &a1
            id: s_zD4J5N3xMuPJzDDCkqv88e
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 294533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json
            external_identifier: CBDB:294533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5s73uLGVkAd16BqyMmJvF
        subject_person_id: p_34MLAJVChWhCtAHLLwS4nt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qNbId2IgHPEgVPibIbmUuB
          claim_id: c_F5s73uLGVkAd16BqyMmJvF
          source_id: s_zD4J5N3xMuPJzDDCkqv88e
          stance: supports
          locator: CBDB:294533
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

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | 王森，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 294533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json)
