---
schema: wang-person/v1
id: p_EanX5KcqHqHmayGgP4cPaJ
status: active
merged_into: null
display_name: 王廷樑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_14pFsbXZ2uQy87y3dTVzZp
        subject_person_id: p_EanX5KcqHqHmayGgP4cPaJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷樑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNUdH7gBNSvi1c9yiAugaG
          claim_id: c_14pFsbXZ2uQy87y3dTVzZp
          source_id: s_PkSJNrUsn9o5BdJbwiwNzq
          stance: supports
          locator: CBDB:637519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637519）
          source: &a1
            id: s_PkSJNrUsn9o5BdJbwiwNzq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷樑（CBDB 637519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637519&o=json
            external_identifier: CBDB:637519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yd1Yox2RhGRE8FE6kGXdSq
        subject_person_id: p_EanX5KcqHqHmayGgP4cPaJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷樑，清人物。籍贯婁縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637519）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B7JCi69iG2GAs7uyNTvUMj
          claim_id: c_Yd1Yox2RhGRE8FE6kGXdSq
          source_id: s_PkSJNrUsn9o5BdJbwiwNzq
          stance: supports
          locator: CBDB:637519
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

# 王廷樑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷樑 | accepted |
| bio.summary | 王廷樑，清人物。籍贯婁縣，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷樑（CBDB 637519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637519&o=json)
