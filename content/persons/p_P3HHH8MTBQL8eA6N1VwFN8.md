---
schema: wang-person/v1
id: p_P3HHH8MTBQL8eA6N1VwFN8
status: active
merged_into: null
display_name: 王崇仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_atGPGWLuyeizQK45uHvbC9
        subject_person_id: p_P3HHH8MTBQL8eA6N1VwFN8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wgzuxpgF5C7fivdy3265CM
          claim_id: c_atGPGWLuyeizQK45uHvbC9
          source_id: s_JHKAtmFbR2BVtYD9iFxEX7
          stance: supports
          locator: CBDB:266140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266140）
          source: &a1
            id: s_JHKAtmFbR2BVtYD9iFxEX7
            source_type: api_record
            title: 中国历代人物传记资料库：王崇仁（CBDB 266140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266140&o=json
            external_identifier: CBDB:266140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sg4vfaG5c7SCi2JzJJAK2r
        subject_person_id: p_P3HHH8MTBQL8eA6N1VwFN8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇仁，明人物。弘治六年進士，籍贯曹縣，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 266140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WqewAp7EJVsioNvWc_jbUi
          claim_id: c_sg4vfaG5c7SCi2JzJJAK2r
          source_id: s_JHKAtmFbR2BVtYD9iFxEX7
          stance: supports
          locator: CBDB:266140
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

# 王崇仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇仁 | accepted |
| bio.summary | 王崇仁，明人物。弘治六年進士，籍贯曹縣，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 266140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇仁（CBDB 266140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266140&o=json)
