---
schema: wang-person/v1
id: p_VJ9dajED6WKFxwDfb3JSoh
status: active
merged_into: null
display_name: 王廷虎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1BzKKEHqkoLk5AEaEfhRU
        subject_person_id: p_VJ9dajED6WKFxwDfb3JSoh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷虎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8XKCQe8U5ePNhmAkSgN62d
          claim_id: c_W1BzKKEHqkoLk5AEaEfhRU
          source_id: s_VsZXPZSppr3d2tC2AZeEkE
          stance: supports
          locator: CBDB:692232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692232）
          source: &a1
            id: s_VsZXPZSppr3d2tC2AZeEkE
            source_type: api_record
            title: 中国历代人物传记资料库：王廷虎（CBDB 692232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692232&o=json
            external_identifier: CBDB:692232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_maExmeV2tGf61dMXJR6k1s
        subject_person_id: p_VJ9dajED6WKFxwDfb3JSoh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷虎，清人物。籍贯黟縣，身份为為善鄉里。（中国历代人物传记资料库 CBDB 692232）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EYU2lE5Vev0vZa9HAt9wKy
          claim_id: c_maExmeV2tGf61dMXJR6k1s
          source_id: s_VsZXPZSppr3d2tC2AZeEkE
          stance: supports
          locator: CBDB:692232
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

# 王廷虎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷虎 | accepted |
| bio.summary | 王廷虎，清人物。籍贯黟縣，身份为為善鄉里。（中国历代人物传记资料库 CBDB 692232） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷虎（CBDB 692232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692232&o=json)
