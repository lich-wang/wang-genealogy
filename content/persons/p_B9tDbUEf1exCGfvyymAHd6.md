---
schema: wang-person/v1
id: p_B9tDbUEf1exCGfvyymAHd6
status: active
merged_into: null
display_name: 王浚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cn1H8PrHvg6Yg157AfeEe2
        subject_person_id: p_B9tDbUEf1exCGfvyymAHd6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EXZF3FVdp3ZsCkSrusvB3a
          claim_id: c_Cn1H8PrHvg6Yg157AfeEe2
          source_id: s_fW6JizU7nNtWN161mrmLsS
          stance: supports
          locator: CBDB:126624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126624）
          source: &a1
            id: s_fW6JizU7nNtWN161mrmLsS
            source_type: api_record
            title: 中国历代人物传记资料库：王浚（CBDB 126624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126624&o=json
            external_identifier: CBDB:126624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z8E4TJbuH3pzMbCxB1zzd7
        subject_person_id: p_B9tDbUEf1exCGfvyymAHd6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚，明人物。籍贯建德，曾任知府。（中国历代人物传记资料库 CBDB 126624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VY9tG6HGnQVh1sn1dM4hmj
          claim_id: c_Z8E4TJbuH3pzMbCxB1zzd7
          source_id: s_fW6JizU7nNtWN161mrmLsS
          stance: supports
          locator: CBDB:126624
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

# 王浚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浚 | accepted |
| bio.summary | 王浚，明人物。籍贯建德，曾任知府。（中国历代人物传记资料库 CBDB 126624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浚（CBDB 126624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126624&o=json)
