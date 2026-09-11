---
schema: wang-person/v1
id: p_bGr6oW3hdV82DMLPiZb28N
status: active
merged_into: null
display_name: 王泮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uWddHaUXEkirDetnxRC7Yb
        subject_person_id: p_bGr6oW3hdV82DMLPiZb28N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gz37zrHF66AvUYjeHDYNDh
          claim_id: c_uWddHaUXEkirDetnxRC7Yb
          source_id: s_V5zSrq6bovuGXjNNwd77YA
          stance: supports
          locator: CBDB:126558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126558）
          source: &a1
            id: s_V5zSrq6bovuGXjNNwd77YA
            source_type: api_record
            title: 中国历代人物传记资料库：王泮（CBDB 126558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126558&o=json
            external_identifier: CBDB:126558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TwD3sWC1ipQiESSxLLnaTh
        subject_person_id: p_bGr6oW3hdV82DMLPiZb28N
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
        - id: cs_8K7B745HbRJPN8S5YkEZLW
          claim_id: c_TwD3sWC1ipQiESSxLLnaTh
          source_id: s_V5zSrq6bovuGXjNNwd77YA
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
  ancestors:
    - claim:
        id: c_LRk66t0d7x6VMbJ22lJxAO
        subject_person_id: p_6hiT1HdHwzixNQonUDqon8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bGr6oW3hdV82DMLPiZb28N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_buAtzyjYVpDkyjmJN6Zdam
          claim_id: c_LRk66t0d7x6VMbJ22lJxAO
          source_id: s_WxbYcDin47YzKWh9cAaPzx
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WxbYcDin47YzKWh9cAaPzx
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 212332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212332&o=json
            external_identifier: CBDB:212332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6hiT1HdHwzixNQonUDqon8
        status: active
        display_name: 王璠
        merged_into_person_id: null
    - claim:
        id: c_AI8ILqox72kWkEm4obHNP3
        subject_person_id: p_bKAyB5SbVkNFAeN84J6eYM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bGr6oW3hdV82DMLPiZb28N
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2BJflvCVIExwcCYa0_M45a
          claim_id: c_AI8ILqox72kWkEm4obHNP3
          source_id: s_bS1DhyJBPz8RVN1JTofwxC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bS1DhyJBPz8RVN1JTofwxC
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 212331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212331&o=json
            external_identifier: CBDB:212331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bKAyB5SbVkNFAeN84J6eYM
        status: active
        display_name: 王紘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王泮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6hiT1HdHwzixNQonUDqon8 | 王璠 | accepted |
| ancestors | p_bKAyB5SbVkNFAeN84J6eYM | 王紘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 212332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212332&o=json)
- [中国历代人物传记资料库：王紘（CBDB 212331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212331&o=json)
- [中国历代人物传记资料库：王泮（CBDB 126558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126558&o=json)
