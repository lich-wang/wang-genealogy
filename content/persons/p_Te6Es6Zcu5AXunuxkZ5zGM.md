---
schema: wang-person/v1
id: p_Te6Es6Zcu5AXunuxkZ5zGM
status: active
merged_into: null
display_name: 王文華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y7Ardu6d4a5f1cxGt9UCFz
        subject_person_id: p_Te6Es6Zcu5AXunuxkZ5zGM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PypAo6H8FxahKppoeTRMSS
          claim_id: c_y7Ardu6d4a5f1cxGt9UCFz
          source_id: s_MvC5Te8Ld2vjMz2o7qZJNw
          stance: supports
          locator: CBDB:294973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294973）
          source: &a1
            id: s_MvC5Te8Ld2vjMz2o7qZJNw
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 294973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294973&o=json
            external_identifier: CBDB:294973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hoavs7JLXdFAjVu4h5iEcQ
        subject_person_id: p_Te6Es6Zcu5AXunuxkZ5zGM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文華，明人物。天順元年進士，籍贯金華。（中国历代人物传记资料库 CBDB 294973）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Szgvpzr2CQX-0ibzn39wUG
          claim_id: c_hoavs7JLXdFAjVu4h5iEcQ
          source_id: s_MvC5Te8Ld2vjMz2o7qZJNw
          stance: supports
          locator: CBDB:294973
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

# 王文華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文華 | accepted |
| bio.summary | 王文華，明人物。天順元年進士，籍贯金華。（中国历代人物传记资料库 CBDB 294973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文華（CBDB 294973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294973&o=json)
