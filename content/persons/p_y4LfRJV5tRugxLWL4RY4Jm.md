---
schema: wang-person/v1
id: p_y4LfRJV5tRugxLWL4RY4Jm
status: active
merged_into: null
display_name: 王皡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7x6f7F2KGPCMSpUcNrKeyv
        subject_person_id: p_y4LfRJV5tRugxLWL4RY4Jm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M2v23WNLhWp7ppaQbz3nLL
          claim_id: c_7x6f7F2KGPCMSpUcNrKeyv
          source_id: s_3VecZHUHQ64FAmfgUK9Fbp
          stance: supports
          locator: CBDB:45816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45816）
          source: &a1
            id: s_3VecZHUHQ64FAmfgUK9Fbp
            source_type: api_record
            title: 中国历代人物传记资料库：王皡（CBDB 45816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45816&o=json
            external_identifier: CBDB:45816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yp1cCJBqXm8fgYPP7K7x1u
        subject_person_id: p_y4LfRJV5tRugxLWL4RY4Jm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皡，宋人物。籍贯益都，曾任直集賢院、尚書省吏部司封司員外郎、尚書省工部工部司郎中。（中国历代人物传记资料库 CBDB 45816）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gL4V5MVtug9Vtp0Tc79WD3
          claim_id: c_Yp1cCJBqXm8fgYPP7K7x1u
          source_id: s_3VecZHUHQ64FAmfgUK9Fbp
          stance: supports
          locator: CBDB:45816
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

# 王皡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皡 | accepted |
| bio.summary | 王皡，宋人物。籍贯益都，曾任直集賢院、尚書省吏部司封司員外郎、尚書省工部工部司郎中。（中国历代人物传记资料库 CBDB 45816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王皡（CBDB 45816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45816&o=json)
