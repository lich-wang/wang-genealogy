---
schema: wang-person/v1
id: p_78NV1vPGciHPKY9KZrkMDD
status: active
merged_into: null
display_name: 王菊枝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cWNQMvbiCkSNLEagT3mtL
        subject_person_id: p_78NV1vPGciHPKY9KZrkMDD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王菊枝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C2912YrLMMxE1z4Vcpbqkb
          claim_id: c_8cWNQMvbiCkSNLEagT3mtL
          source_id: s_eK9E9K1davDCazXGURQL27
          stance: supports
          locator: CBDB:122788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122788）
          source: &a1
            id: s_eK9E9K1davDCazXGURQL27
            source_type: api_record
            title: 中国历代人物传记资料库：王菊枝（CBDB 122788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122788&o=json
            external_identifier: CBDB:122788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MNN2aaEyyb9KccyoYjNATP
        subject_person_id: p_78NV1vPGciHPKY9KZrkMDD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8e4m8SUoE8auXTPGYxP7QL
          claim_id: c_MNN2aaEyyb9KccyoYjNATP
          source_id: s_eK9E9K1davDCazXGURQL27
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王菊枝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王菊枝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王菊枝（CBDB 122788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122788&o=json)
