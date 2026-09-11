---
schema: wang-person/v1
id: p_y7Ej1GYiSiPcHDxwpFVSFf
status: active
merged_into: null
display_name: 王廷㭪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tWWWKC5y9LSXjRwTKKCD5F
        subject_person_id: p_y7Ej1GYiSiPcHDxwpFVSFf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷㭪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vmz1SapTQqfJ6cDGtDBkB1
          claim_id: c_tWWWKC5y9LSXjRwTKKCD5F
          source_id: s_ktWqW82TjJBuWvpkYCU7rK
          stance: supports
          locator: CBDB:637479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637479）
          source: &a1
            id: s_ktWqW82TjJBuWvpkYCU7rK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷㭪（CBDB 637479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637479&o=json
            external_identifier: CBDB:637479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3o4VVWaiuNMFtuQqyRjFA6
        subject_person_id: p_y7Ej1GYiSiPcHDxwpFVSFf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷㭪，清人物。籍贯大理府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637479）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1-yP4NIjhC7L5GlZg9D-gp
          claim_id: c_3o4VVWaiuNMFtuQqyRjFA6
          source_id: s_ktWqW82TjJBuWvpkYCU7rK
          stance: supports
          locator: CBDB:637479
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

# 王廷㭪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷㭪 | accepted |
| bio.summary | 王廷㭪，清人物。籍贯大理府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷㭪（CBDB 637479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637479&o=json)
