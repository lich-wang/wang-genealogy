---
schema: wang-person/v1
id: p_tKqysGug5BiBGxbC3uaDGE
status: active
merged_into: null
display_name: 王俞芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RfUFUL4w59PhJ2zUjq4w45
        subject_person_id: p_tKqysGug5BiBGxbC3uaDGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俞芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FuM4at9eLe78N7Jbf8pNju
          claim_id: c_RfUFUL4w59PhJ2zUjq4w45
          source_id: s_pLGgNaJjALARJg49JjZ8Qj
          stance: supports
          locator: CBDB:636060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636060）
          source: &a1
            id: s_pLGgNaJjALARJg49JjZ8Qj
            source_type: api_record
            title: 中国历代人物传记资料库：王俞芳（CBDB 636060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636060&o=json
            external_identifier: CBDB:636060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FYjgARkZjXpiQrvbnpr18T
        subject_person_id: p_tKqysGug5BiBGxbC3uaDGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俞芳，清人物。籍贯平陽，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5XNtArOxAZ_ZGKslnS06e1
          claim_id: c_FYjgARkZjXpiQrvbnpr18T
          source_id: s_pLGgNaJjALARJg49JjZ8Qj
          stance: supports
          locator: CBDB:636060
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

# 王俞芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俞芳 | accepted |
| bio.summary | 王俞芳，清人物。籍贯平陽，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俞芳（CBDB 636060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636060&o=json)
