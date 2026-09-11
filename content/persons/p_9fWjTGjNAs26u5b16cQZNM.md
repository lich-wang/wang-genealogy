---
schema: wang-person/v1
id: p_9fWjTGjNAs26u5b16cQZNM
status: active
merged_into: null
display_name: 王撝吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nKUnmz1LbZFwLJhjQ6iYwR
        subject_person_id: p_9fWjTGjNAs26u5b16cQZNM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YEhJ34CLCcC8JaesVDK2vK
          claim_id: c_nKUnmz1LbZFwLJhjQ6iYwR
          source_id: s_ApNECoZbsdCS1ykVBkgWat
          stance: supports
          locator: CBDB:638155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638155）
          source: &a1
            id: s_ApNECoZbsdCS1ykVBkgWat
            source_type: api_record
            title: 中国历代人物传记资料库：王撝吉（CBDB 638155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638155&o=json
            external_identifier: CBDB:638155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oU4NkfQ4Wd1xBxEqA6JCAM
        subject_person_id: p_9fWjTGjNAs26u5b16cQZNM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撝吉，清人物。籍贯嘉定，曾任知縣。（中国历代人物传记资料库 CBDB 638155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hsrgmL6rJxuDeDAcfDx8Vz
          claim_id: c_oU4NkfQ4Wd1xBxEqA6JCAM
          source_id: s_ApNECoZbsdCS1ykVBkgWat
          stance: supports
          locator: CBDB:638155
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

# 王撝吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撝吉 | accepted |
| bio.summary | 王撝吉，清人物。籍贯嘉定，曾任知縣。（中国历代人物传记资料库 CBDB 638155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撝吉（CBDB 638155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638155&o=json)
