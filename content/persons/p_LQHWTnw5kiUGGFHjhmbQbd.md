---
schema: wang-person/v1
id: p_LQHWTnw5kiUGGFHjhmbQbd
status: active
merged_into: null
display_name: 王文苑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNFGXt45wmu2N3kpjZdCZG
        subject_person_id: p_LQHWTnw5kiUGGFHjhmbQbd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文苑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6W8Kvrqad1hum7nNXrn2fJ
          claim_id: c_kNFGXt45wmu2N3kpjZdCZG
          source_id: s_Bon5mzwcjphL5tXvKp9ji8
          stance: supports
          locator: CBDB:638275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638275）
          source: &a1
            id: s_Bon5mzwcjphL5tXvKp9ji8
            source_type: api_record
            title: 中国历代人物传记资料库：王文苑（CBDB 638275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638275&o=json
            external_identifier: CBDB:638275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zv63vdbg41q5hry4m6ZeiD
        subject_person_id: p_LQHWTnw5kiUGGFHjhmbQbd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文苑，清人物。籍贯太平，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 638275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lHRvnUWsqbXslc-EJsLOaN
          claim_id: c_zv63vdbg41q5hry4m6ZeiD
          source_id: s_Bon5mzwcjphL5tXvKp9ji8
          stance: supports
          locator: CBDB:638275
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

# 王文苑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文苑 | accepted |
| bio.summary | 王文苑，清人物。籍贯太平，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 638275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文苑（CBDB 638275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638275&o=json)
