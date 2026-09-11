---
schema: wang-person/v1
id: p_o3tEF5WXQA3zjrYgywQD3D
status: active
merged_into: null
display_name: 王馴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_grRAJs7uyGHomfCr9g5nzX
        subject_person_id: p_o3tEF5WXQA3zjrYgywQD3D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YZCYfmYvCBPntiVpdcF3E1
          claim_id: c_grRAJs7uyGHomfCr9g5nzX
          source_id: s_j7nSX443Jgka8vpXLLxGr9
          stance: supports
          locator: CBDB:466486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466486）
          source: &a1
            id: s_j7nSX443Jgka8vpXLLxGr9
            source_type: api_record
            title: 中国历代人物传记资料库：王馴（CBDB 466486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466486&o=json
            external_identifier: CBDB:466486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BjwUwdiE2WBF1aPUv8F7qS
        subject_person_id: p_o3tEF5WXQA3zjrYgywQD3D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馴，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 466486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_67fuCxj2x3OWE5XKKGvoMN
          claim_id: c_BjwUwdiE2WBF1aPUv8F7qS
          source_id: s_j7nSX443Jgka8vpXLLxGr9
          stance: supports
          locator: CBDB:466486
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

# 王馴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王馴 | accepted |
| bio.summary | 王馴，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 466486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王馴（CBDB 466486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466486&o=json)
