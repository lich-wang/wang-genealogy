---
schema: wang-person/v1
id: p_kNY7rcY5CJ2pmCe1CYHTo6
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5vs5sZ2E9FGiJKoJ83y6Q9
        subject_person_id: p_kNY7rcY5CJ2pmCe1CYHTo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MYPe5nDgcn85A32pq9TCEZ
          claim_id: c_5vs5sZ2E9FGiJKoJ83y6Q9
          source_id: s_Ls5Uhd9fo1H1YHPnpySsWh
          stance: supports
          locator: CBDB:454892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454892）
          source: &a1
            id: s_Ls5Uhd9fo1H1YHPnpySsWh
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 454892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454892&o=json
            external_identifier: CBDB:454892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qvA2BQtx1HcQcBQkWYumWc
        subject_person_id: p_kNY7rcY5CJ2pmCe1CYHTo6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 454892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kxv7KbYHdYKUSYeYzNymEO
          claim_id: c_qvA2BQtx1HcQcBQkWYumWc
          source_id: s_Ls5Uhd9fo1H1YHPnpySsWh
          stance: supports
          locator: CBDB:454892
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 454892） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 454892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454892&o=json)
