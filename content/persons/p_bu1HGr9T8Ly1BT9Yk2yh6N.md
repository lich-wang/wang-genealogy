---
schema: wang-person/v1
id: p_bu1HGr9T8Ly1BT9Yk2yh6N
status: active
merged_into: null
display_name: 王洛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C2kfV5Tvd2sAohevBQ37Vr
        subject_person_id: p_bu1HGr9T8Ly1BT9Yk2yh6N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jst5Dhk9iuRi7FTW47xSyF
          claim_id: c_C2kfV5Tvd2sAohevBQ37Vr
          source_id: s_vF6zCuzQi5w4D64YB2FQLx
          stance: supports
          locator: CBDB:211385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211385）
          source: &a1
            id: s_vF6zCuzQi5w4D64YB2FQLx
            source_type: api_record
            title: 中国历代人物传记资料库：王洛（CBDB 211385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211385&o=json
            external_identifier: CBDB:211385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KG5Tntb3SLtd5McbBQA5j
        subject_person_id: p_bu1HGr9T8Ly1BT9Yk2yh6N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洛，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tg3QCP0K_GO5ugTeLWo46H
          claim_id: c_6KG5Tntb3SLtd5McbBQA5j
          source_id: s_vF6zCuzQi5w4D64YB2FQLx
          stance: supports
          locator: CBDB:211385
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

# 王洛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洛 | accepted |
| bio.summary | 王洛，明人物。隆慶五年進士，籍贯富順。（中国历代人物传记资料库 CBDB 211385） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洛（CBDB 211385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211385&o=json)
