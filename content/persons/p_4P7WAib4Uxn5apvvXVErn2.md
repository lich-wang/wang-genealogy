---
schema: wang-person/v1
id: p_4P7WAib4Uxn5apvvXVErn2
status: active
merged_into: null
display_name: 王啟臺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sD8g6VzPBJPdJtgEpi7Zsg
        subject_person_id: p_4P7WAib4Uxn5apvvXVErn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟臺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7eeiMPgBdpf6QBjH6WyA54
          claim_id: c_sD8g6VzPBJPdJtgEpi7Zsg
          source_id: s_2TQCmasKM66HhfNEHiCm2h
          stance: supports
          locator: CBDB:636561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636561）
          source: &a1
            id: s_2TQCmasKM66HhfNEHiCm2h
            source_type: api_record
            title: 中国历代人物传记资料库：王啟臺（CBDB 636561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636561&o=json
            external_identifier: CBDB:636561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YQn9PFkJHchLTsndiri63F
        subject_person_id: p_4P7WAib4Uxn5apvvXVErn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟臺，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 636561）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WYxSHmlwoO2_JPmxNVn0DV
          claim_id: c_YQn9PFkJHchLTsndiri63F
          source_id: s_2TQCmasKM66HhfNEHiCm2h
          stance: supports
          locator: CBDB:636561
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

# 王啟臺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟臺 | accepted |
| bio.summary | 王啟臺，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 636561） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟臺（CBDB 636561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636561&o=json)
