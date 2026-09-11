---
schema: wang-person/v1
id: p_xMMuqEH45ukhdZAUNBeNhB
status: active
merged_into: null
display_name: 王鏞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m2y8sWw7rrH95cYpU1yQCC
        subject_person_id: p_xMMuqEH45ukhdZAUNBeNhB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uW5x8ffU8qWN9PtE1dzvJ4
          claim_id: c_m2y8sWw7rrH95cYpU1yQCC
          source_id: s_zCyu6ACkQV6QL7LAptpj2J
          stance: supports
          locator: CBDB:343713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343713）
          source: &a1
            id: s_zCyu6ACkQV6QL7LAptpj2J
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 343713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343713&o=json
            external_identifier: CBDB:343713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qdq4AoZMZSWa2HCd8CcAEK
        subject_person_id: p_xMMuqEH45ukhdZAUNBeNhB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞，明人物。明清進士進士，籍贯長葛，入仕進士。（中国历代人物传记资料库 CBDB 343713）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p8KjnTQk2GnzEgIKngbs4n
          claim_id: c_Qdq4AoZMZSWa2HCd8CcAEK
          source_id: s_zCyu6ACkQV6QL7LAptpj2J
          stance: supports
          locator: CBDB:343713
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

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | 王鏞，明人物。明清進士進士，籍贯長葛，入仕進士。（中国历代人物传记资料库 CBDB 343713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 343713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343713&o=json)
