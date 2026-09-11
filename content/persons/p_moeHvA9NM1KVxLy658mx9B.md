---
schema: wang-person/v1
id: p_moeHvA9NM1KVxLy658mx9B
status: active
merged_into: null
display_name: 王克仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aAENntXSW5A8GC2L37xJDm
        subject_person_id: p_moeHvA9NM1KVxLy658mx9B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HVmafAoiqSqA4jWGbftkpp
          claim_id: c_aAENntXSW5A8GC2L37xJDm
          source_id: s_8yELefVX9XNWxRu7GkNqaX
          stance: supports
          locator: CBDB:636289
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636289）
          source: &a1
            id: s_8yELefVX9XNWxRu7GkNqaX
            source_type: api_record
            title: 中国历代人物传记资料库：王克仁（CBDB 636289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636289&o=json
            external_identifier: CBDB:636289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QQz8JvZNFWQAubS6jZM5N
        subject_person_id: p_moeHvA9NM1KVxLy658mx9B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克仁，清人物。籍贯唐縣，曾任訓導。（中国历代人物传记资料库 CBDB 636289）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_epwF8zKplakJ3HhqYgGbYw
          claim_id: c_8QQz8JvZNFWQAubS6jZM5N
          source_id: s_8yELefVX9XNWxRu7GkNqaX
          stance: supports
          locator: CBDB:636289
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

# 王克仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克仁 | accepted |
| bio.summary | 王克仁，清人物。籍贯唐縣，曾任訓導。（中国历代人物传记资料库 CBDB 636289） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克仁（CBDB 636289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636289&o=json)
