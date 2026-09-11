---
schema: wang-person/v1
id: p_Lyc4FrLoW4YcheLdKW1KuD
status: active
merged_into: null
display_name: 王芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o825rLLzJ33QmFpaxnyDEy
        subject_person_id: p_Lyc4FrLoW4YcheLdKW1KuD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y3dMWMTBxJvEQfaGXVKE3w
          claim_id: c_o825rLLzJ33QmFpaxnyDEy
          source_id: s_4ETXabzbt5b6H2kyDCgASG
          stance: supports
          locator: CBDB:100703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100703）
          source: &a1
            id: s_4ETXabzbt5b6H2kyDCgASG
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 100703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100703&o=json
            external_identifier: CBDB:100703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6FfXDPp8J1gyCUBd4xJVr3
        subject_person_id: p_Lyc4FrLoW4YcheLdKW1KuD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 100703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ecqYQfAeQ7xQalhtxaYdg_
          claim_id: c_6FfXDPp8J1gyCUBd4xJVr3
          source_id: s_4ETXabzbt5b6H2kyDCgASG
          stance: supports
          locator: CBDB:100703
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

# 王芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳 | accepted |
| bio.summary | 王芳，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 100703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芳（CBDB 100703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100703&o=json)
