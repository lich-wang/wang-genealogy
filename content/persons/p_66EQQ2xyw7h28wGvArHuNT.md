---
schema: wang-person/v1
id: p_66EQQ2xyw7h28wGvArHuNT
status: active
merged_into: null
display_name: 王之相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4xtKVxRMkUUDxYmSUqkPr
        subject_person_id: p_66EQQ2xyw7h28wGvArHuNT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tJk4o2qHuVf55nY3NW8C4B
          claim_id: c_F4xtKVxRMkUUDxYmSUqkPr
          source_id: s_UfasQCg7H8BxnN9Q9ULMMH
          stance: supports
          locator: CBDB:499621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（499621）
          source: &a1
            id: s_UfasQCg7H8BxnN9Q9ULMMH
            source_type: api_record
            title: 中国历代人物传记资料库：王之相（CBDB 499621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499621&o=json
            external_identifier: CBDB:499621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FkWFzRESNd6AvnVJMVEhTp
        subject_person_id: p_66EQQ2xyw7h28wGvArHuNT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之相，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 499621）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1MbvbdPZ98DR_KQfuXrY3L
          claim_id: c_FkWFzRESNd6AvnVJMVEhTp
          source_id: s_UfasQCg7H8BxnN9Q9ULMMH
          stance: supports
          locator: CBDB:499621
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

# 王之相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之相 | accepted |
| bio.summary | 王之相，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任知縣。（中国历代人物传记资料库 CBDB 499621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之相（CBDB 499621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=499621&o=json)
