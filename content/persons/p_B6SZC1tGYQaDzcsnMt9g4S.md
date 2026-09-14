---
schema: wang-person/v1
id: p_B6SZC1tGYQaDzcsnMt9g4S
status: active
merged_into: null
display_name: 王九功
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vz9Zwi1tA3qTfAT1dvrnN1
        subject_person_id: p_B6SZC1tGYQaDzcsnMt9g4S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WRNStWLaScCA7qAg8pGzHh
          claim_id: c_Vz9Zwi1tA3qTfAT1dvrnN1
          source_id: s_XeXhNjy3yNM9ua4Cv5ga2h
          stance: supports
          locator: CBDB:221744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221744）
          source: &a1
            id: s_XeXhNjy3yNM9ua4Cv5ga2h
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 221744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json
            external_identifier: CBDB:221744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FHXxPFaRfFnzPS5V3Jv3be
        subject_person_id: p_B6SZC1tGYQaDzcsnMt9g4S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九功，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221744）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tJ-tmMlWajSaz7ffxF9Wdn
          claim_id: c_FHXxPFaRfFnzPS5V3Jv3be
          source_id: s_XeXhNjy3yNM9ua4Cv5ga2h
          stance: supports
          locator: CBDB:221744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kPsN0G3quxrJnW_PwB4O-U
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B6SZC1tGYQaDzcsnMt9g4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-qNdZjnVuLBJf5QVZ4o6cH
          claim_id: c_kPsN0G3quxrJnW_PwB4O-U
          source_id: s_jECv2I1EymnZbI0jvxa5xp
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九功 与 王九德 为同胞（CBDB 记「弟」），王九德 之父／母即 王九功 之父／母。
          source:
            id: s_jECv2I1EymnZbI0jvxa5xp
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 221744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json
            external_identifier: CBDB:221744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xuy9jPb62VMvUCJM1MazAP
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8_Q2--Le7g2AtA6JpVLBpe
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_B6SZC1tGYQaDzcsnMt9g4S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MvjejcN3-RmRFhUNIZH6i3
          claim_id: c_8_Q2--Le7g2AtA6JpVLBpe
          source_id: s_jECv2I1EymnZbI0jvxa5xp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jECv2I1EymnZbI0jvxa5xp
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 221744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json
            external_identifier: CBDB:221744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7F2eLtMppfYhb1rX2t5C3R
        status: active
        display_name: 王九德
        merged_into_person_id: null
---

# 王九功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九功 | accepted |
| bio.summary | 王九功，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xuy9jPb62VMvUCJM1MazAP | 王廷相 | accepted |
| other | p_7F2eLtMppfYhb1rX2t5C3R | 王九德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九功（CBDB 221744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221744&o=json)
