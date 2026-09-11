---
schema: wang-person/v1
id: p_pimx3gg6xPARXDLJnUVtmV
status: active
merged_into: null
display_name: 王存仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UX7i94SMsRHPf82jdsUP1s
        subject_person_id: p_pimx3gg6xPARXDLJnUVtmV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h7gFyJqn3kh6MUDVEaEfW8
          claim_id: c_UX7i94SMsRHPf82jdsUP1s
          source_id: s_MFFTf44wENCwfV4CNasn4S
          stance: supports
          locator: CBDB:637000
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637000）
          source: &a1
            id: s_MFFTf44wENCwfV4CNasn4S
            source_type: api_record
            title: 中国历代人物传记资料库：王存仁（CBDB 637000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637000&o=json
            external_identifier: CBDB:637000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eE485F6NnTf6kXE2QxGq8B
        subject_person_id: p_pimx3gg6xPARXDLJnUVtmV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存仁，清人物。籍贯順天府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637000）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ndqLfZWYz0MpneStWT2PMf
          claim_id: c_eE485F6NnTf6kXE2QxGq8B
          source_id: s_MFFTf44wENCwfV4CNasn4S
          stance: supports
          locator: CBDB:637000
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

# 王存仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存仁 | accepted |
| bio.summary | 王存仁，清人物。籍贯順天府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637000） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存仁（CBDB 637000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637000&o=json)
