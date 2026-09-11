---
schema: wang-person/v1
id: p_ztGN5fRgMCjmZaYhM2GuxK
status: active
merged_into: null
display_name: 王秉忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n2qQbf6M7LYLoUL34JWRtv
        subject_person_id: p_ztGN5fRgMCjmZaYhM2GuxK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FVBA29jnM13h1MqbsiCrdo
          claim_id: c_n2qQbf6M7LYLoUL34JWRtv
          source_id: s_GH6bU7V8V84oX8jG1EnLit
          stance: supports
          locator: CBDB:639647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639647）
          source: &a1
            id: s_GH6bU7V8V84oX8jG1EnLit
            source_type: api_record
            title: 中国历代人物传记资料库：王秉忠（CBDB 639647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639647&o=json
            external_identifier: CBDB:639647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SUnNDWTBNaxrDk1fSJKhxG
        subject_person_id: p_ztGN5fRgMCjmZaYhM2GuxK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉忠，清人物。籍贯諸城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 639647）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8ZhKnXfGeGr5VY-bK5iYBu
          claim_id: c_SUnNDWTBNaxrDk1fSJKhxG
          source_id: s_GH6bU7V8V84oX8jG1EnLit
          stance: supports
          locator: CBDB:639647
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

# 王秉忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉忠 | accepted |
| bio.summary | 王秉忠，清人物。籍贯諸城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 639647） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉忠（CBDB 639647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639647&o=json)
