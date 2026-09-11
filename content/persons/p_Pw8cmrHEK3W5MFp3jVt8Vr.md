---
schema: wang-person/v1
id: p_Pw8cmrHEK3W5MFp3jVt8Vr
status: active
merged_into: null
display_name: 王舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZG76TnfjMFLYimioLxZqeH
        subject_person_id: p_Pw8cmrHEK3W5MFp3jVt8Vr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUoSDxkFr5ocDUyNG2oun4
          claim_id: c_ZG76TnfjMFLYimioLxZqeH
          source_id: s_GcrGoNms2QkMae2UyNLL9k
          stance: supports
          locator: CBDB:133792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（133792）
          source: &a1
            id: s_GcrGoNms2QkMae2UyNLL9k
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 133792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133792&o=json
            external_identifier: CBDB:133792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ps8FBnHAqHgYtxE6WhYa8L
        subject_person_id: p_Pw8cmrHEK3W5MFp3jVt8Vr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉，元人物。籍贯桐廬，身份为為邑里所重。（中国历代人物传记资料库 CBDB 133792）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1BkCy1CfXnqnP0k_yhdfvO
          claim_id: c_Ps8FBnHAqHgYtxE6WhYa8L
          source_id: s_GcrGoNms2QkMae2UyNLL9k
          stance: supports
          locator: CBDB:133792
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

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | 王舉，元人物。籍贯桐廬，身份为為邑里所重。（中国历代人物传记资料库 CBDB 133792） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 133792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=133792&o=json)
