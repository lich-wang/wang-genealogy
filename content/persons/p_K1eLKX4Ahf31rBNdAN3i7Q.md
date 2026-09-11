---
schema: wang-person/v1
id: p_K1eLKX4Ahf31rBNdAN3i7Q
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4osZdg8Ff7dgGSgXvLySKf
        subject_person_id: p_K1eLKX4Ahf31rBNdAN3i7Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QqQwaZQQ7pGme2X4dCC1bf
          claim_id: c_4osZdg8Ff7dgGSgXvLySKf
          source_id: s_gXLYS4p8iKE7zpES91TmiQ
          stance: supports
          locator: CBDB:461815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（461815）
          source: &a1
            id: s_gXLYS4p8iKE7zpES91TmiQ
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 461815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461815&o=json
            external_identifier: CBDB:461815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TAA7Fj6sLn7W2uoNDceXsM
        subject_person_id: p_K1eLKX4Ahf31rBNdAN3i7Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，明人物。曾任典史。（中国历代人物传记资料库 CBDB 461815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O8EwuprO6sN8Ixjq8RSI-R
          claim_id: c_TAA7Fj6sLn7W2uoNDceXsM
          source_id: s_gXLYS4p8iKE7zpES91TmiQ
          stance: supports
          locator: CBDB:461815
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，明人物。曾任典史。（中国历代人物传记资料库 CBDB 461815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 461815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=461815&o=json)
