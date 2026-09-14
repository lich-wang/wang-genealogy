---
schema: wang-person/v1
id: p_Nak6xGpwbwYTAqsHvqXAi7
status: active
merged_into: null
display_name: 王休
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f9DskD4WCPvA5DW4eJ4HFn
        subject_person_id: p_Nak6xGpwbwYTAqsHvqXAi7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qXyRYF3DDMMjzkx9M2KAct
          claim_id: c_f9DskD4WCPvA5DW4eJ4HFn
          source_id: s_DVZNVGq254vGLgJgKFQZTs
          stance: supports
          locator: CBDB:270331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270331）
          source: &a1
            id: s_DVZNVGq254vGLgJgKFQZTs
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 270331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json
            external_identifier: CBDB:270331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hy1j5zJ4iA7PwCxfGfxkia
        subject_person_id: p_Nak6xGpwbwYTAqsHvqXAi7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休，明人物。弘治十五年進士，籍贯臨穎。（中国历代人物传记资料库 CBDB 270331）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lxfWr3ZrQnqHsGUpgiqUO0
          claim_id: c_Hy1j5zJ4iA7PwCxfGfxkia
          source_id: s_DVZNVGq254vGLgJgKFQZTs
          stance: supports
          locator: CBDB:270331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7aowS5R3PRgN4HVyG15epD
        subject_person_id: p_HKbjo82juGCBarv2Dg3zz9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nak6xGpwbwYTAqsHvqXAi7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J7koNTBGoiT-_5qmgfwejD
          claim_id: c_7aowS5R3PRgN4HVyG15epD
          source_id: s_zIkvwzVUho1_6C0WS_z9-6
          stance: supports
          locator: CBDB：兄弟 王金（126582）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王休 与 王金 为同胞（CBDB 记「兄」），王金 之父／母即 王休 之父／母。
          source:
            id: s_zIkvwzVUho1_6C0WS_z9-6
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 270331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json
            external_identifier: CBDB:270331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HKbjo82juGCBarv2Dg3zz9
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mJUBrt9iKe1bU8r5A8WUR1
        subject_person_id: p_Nak6xGpwbwYTAqsHvqXAi7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QqHZ53bR3BD9L2PF2yyQK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pECOA225mq-XUJMce2ssGl
          claim_id: c_mJUBrt9iKe1bU8r5A8WUR1
          source_id: s_zIkvwzVUho1_6C0WS_z9-6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126582 王金）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zIkvwzVUho1_6C0WS_z9-6
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 270331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json
            external_identifier: CBDB:270331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QqHZ53bR3BD9L2PF2yyQK7
        status: active
        display_name: 王金
        merged_into_person_id: null
---

# 王休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休 | accepted |
| bio.summary | 王休，明人物。弘治十五年進士，籍贯臨穎。（中国历代人物传记资料库 CBDB 270331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HKbjo82juGCBarv2Dg3zz9 | 王相 | accepted |
| other | p_QqHZ53bR3BD9L2PF2yyQK7 | 王金 | accepted |

## 外部来源

- [中国历代人物传记资料库：王休（CBDB 270331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270331&o=json)
