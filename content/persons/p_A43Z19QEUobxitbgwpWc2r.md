---
schema: wang-person/v1
id: p_A43Z19QEUobxitbgwpWc2r
status: active
merged_into: null
display_name: 王廷梁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eA4XnPrF6KSun4F3EN5fUS
        subject_person_id: p_A43Z19QEUobxitbgwpWc2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷梁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SGoxjWK7kiTkvBAgDUrBiz
          claim_id: c_eA4XnPrF6KSun4F3EN5fUS
          source_id: s_SWTWratANq2QPuPBi5NqVC
          stance: supports
          locator: CBDB:637506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637506）
          source: &a1
            id: s_SWTWratANq2QPuPBi5NqVC
            source_type: api_record
            title: 中国历代人物传记资料库：王廷梁（CBDB 637506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637506&o=json
            external_identifier: CBDB:637506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_veCYmjBEL7gPg8qCautnE7
        subject_person_id: p_A43Z19QEUobxitbgwpWc2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷梁，清人物。籍贯萬全，入仕廩生，曾任縣丞、復設訓導。（中国历代人物传记资料库 CBDB 637506）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hHlXsoSz4NtiJFKp3n6oZD
          claim_id: c_veCYmjBEL7gPg8qCautnE7
          source_id: s_SWTWratANq2QPuPBi5NqVC
          stance: supports
          locator: CBDB:637506
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

# 王廷梁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷梁 | accepted |
| bio.summary | 王廷梁，清人物。籍贯萬全，入仕廩生，曾任縣丞、復設訓導。（中国历代人物传记资料库 CBDB 637506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷梁（CBDB 637506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637506&o=json)
