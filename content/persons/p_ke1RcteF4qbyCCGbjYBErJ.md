---
schema: wang-person/v1
id: p_ke1RcteF4qbyCCGbjYBErJ
status: active
merged_into: null
display_name: 王登鼇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SwKMLsuSC9GrdE4QLSxzNv
        subject_person_id: p_ke1RcteF4qbyCCGbjYBErJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登鼇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CC9EJ1UoYdN9FHkF9k7wHz
          claim_id: c_SwKMLsuSC9GrdE4QLSxzNv
          source_id: s_SLV6EENfroGFm7KPtSQ14a
          stance: supports
          locator: CBDB:639514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639514）
          source: &a1
            id: s_SLV6EENfroGFm7KPtSQ14a
            source_type: api_record
            title: 中国历代人物传记资料库：王登鼇（CBDB 639514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639514&o=json
            external_identifier: CBDB:639514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LrsuC7toFpxNP1JzP3RnVQ
        subject_person_id: p_ke1RcteF4qbyCCGbjYBErJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登鼇，清人物。籍贯乾州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639514）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i_S_jUeZZnzGzvPIzd5WHR
          claim_id: c_LrsuC7toFpxNP1JzP3RnVQ
          source_id: s_SLV6EENfroGFm7KPtSQ14a
          stance: supports
          locator: CBDB:639514
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

# 王登鼇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登鼇 | accepted |
| bio.summary | 王登鼇，清人物。籍贯乾州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登鼇（CBDB 639514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639514&o=json)
