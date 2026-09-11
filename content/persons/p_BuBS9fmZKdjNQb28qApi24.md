---
schema: wang-person/v1
id: p_BuBS9fmZKdjNQb28qApi24
status: active
merged_into: null
display_name: 王懽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pM4nwbt5cWA2LKDTNXK5Ku
        subject_person_id: p_BuBS9fmZKdjNQb28qApi24
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EiTpr5FbGcySJwV3EviCx4
          claim_id: c_pM4nwbt5cWA2LKDTNXK5Ku
          source_id: s_YNJ8TR9aUiJRg1YEWT493Q
          stance: supports
          locator: CBDB:303477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303477）
          source: &a1
            id: s_YNJ8TR9aUiJRg1YEWT493Q
            source_type: api_record
            title: 中国历代人物传记资料库：王懽（CBDB 303477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303477&o=json
            external_identifier: CBDB:303477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rPCFEkQiY6tUUmApeA6xWw
        subject_person_id: p_BuBS9fmZKdjNQb28qApi24
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懽，明人物。嘉靖二十年進士，籍贯崑山，曾任典膳。（中国历代人物传记资料库 CBDB 303477）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pN_lO9wiDBer2aj_0_XXow
          claim_id: c_rPCFEkQiY6tUUmApeA6xWw
          source_id: s_YNJ8TR9aUiJRg1YEWT493Q
          stance: supports
          locator: CBDB:303477
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

# 王懽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懽 | accepted |
| bio.summary | 王懽，明人物。嘉靖二十年進士，籍贯崑山，曾任典膳。（中国历代人物传记资料库 CBDB 303477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懽（CBDB 303477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303477&o=json)
