---
schema: wang-person/v1
id: p_C1XmMPpPDBPssN8EgrCHd9
status: active
merged_into: null
display_name: 王治民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNutTBpashoEWhqMnajuXS
        subject_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gS9SmEuKEZQpQN19g78JkL
          claim_id: c_FNutTBpashoEWhqMnajuXS
          source_id: s_e7rFDvkM1LS1CbjjEfyMNp
          stance: supports
          locator: CBDB:336586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336586）
          source: &a1
            id: s_e7rFDvkM1LS1CbjjEfyMNp
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 336586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json
            external_identifier: CBDB:336586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qBufNKApiiG3gMENyBfrKv
        subject_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h1EDvcKLJtG_893lEOQtka
          claim_id: c_qBufNKApiiG3gMENyBfrKv
          source_id: s_e7rFDvkM1LS1CbjjEfyMNp
          stance: supports
          locator: CBDB:336586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QtvTeNI9DM-OUPu1gWH7aK
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fhS1PfOp9j5ytSt_zGatJ
          claim_id: c_QtvTeNI9DM-OUPu1gWH7aK
          source_id: s_gQ7oTSryekJMcgEVZNrzM5
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王治民 与 王恩民 为同胞（CBDB 记「弟」），王恩民 之父／母即 王治民 之父／母。
          source:
            id: s_gQ7oTSryekJMcgEVZNrzM5
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 336586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json
            external_identifier: CBDB:336586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rzdGCJdbAnivH2NuEMbZHX
        status: active
        display_name: 王世學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_S0X-v1KlIPLcKnSTqpw0Dy
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_C1XmMPpPDBPssN8EgrCHd9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EzD7IrkXVD7np1RfyGkC7j
          claim_id: c_S0X-v1KlIPLcKnSTqpw0Dy
          source_id: s_gQ7oTSryekJMcgEVZNrzM5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gQ7oTSryekJMcgEVZNrzM5
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 336586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json
            external_identifier: CBDB:336586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
---

# 王治民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治民 | accepted |
| bio.summary | 王治民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336586） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rzdGCJdbAnivH2NuEMbZHX | 王世學 | accepted |
| other | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王治民（CBDB 336586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336586&o=json)
