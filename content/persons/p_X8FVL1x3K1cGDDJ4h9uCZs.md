---
schema: wang-person/v1
id: p_X8FVL1x3K1cGDDJ4h9uCZs
status: active
merged_into: null
display_name: 王湖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cb2nX7Po8tdpiT33YCdA2S
        subject_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ey2R2tdw7MLAUfc3GqXR13
          claim_id: c_Cb2nX7Po8tdpiT33YCdA2S
          source_id: s_8F3WQTM2hLmq2A5JNmat3z
          stance: supports
          locator: CBDB:265673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265673）
          source: &a1
            id: s_8F3WQTM2hLmq2A5JNmat3z
            source_type: api_record
            title: 中国历代人物传记资料库：王湖（CBDB 265673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json
            external_identifier: CBDB:265673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fH8ZMWoPVhX77Z3ndET1FG
        subject_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湖，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mK0AuBiySyYYHWHJaR7Tas
          claim_id: c_fH8ZMWoPVhX77Z3ndET1FG
          source_id: s_8F3WQTM2hLmq2A5JNmat3z
          stance: supports
          locator: CBDB:265673
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bxi0oxkXXK0eaYed3aUOjx
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EM5anbAEWnwbLNl3Pu-iCx
          claim_id: c_Bxi0oxkXXK0eaYed3aUOjx
          source_id: s_0e0UX0T_niKpzhxVXUzpG4
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王湖 与 王昊 为同胞（CBDB 记「弟」），王昊 之父／母即 王湖 之父／母。
          source:
            id: s_0e0UX0T_niKpzhxVXUzpG4
            source_type: api_record
            title: 中国历代人物传记资料库：王湖（CBDB 265673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json
            external_identifier: CBDB:265673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_URk2BrLDKqiyhHZQPHt91g
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3BJSKUPbwBbO5aKARmJyHl
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X8FVL1x3K1cGDDJ4h9uCZs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6d71gtjv9oVwqUpdSZJfoM
          claim_id: c_3BJSKUPbwBbO5aKARmJyHl
          source_id: s_0e0UX0T_niKpzhxVXUzpG4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0e0UX0T_niKpzhxVXUzpG4
            source_type: api_record
            title: 中国历代人物传记资料库：王湖（CBDB 265673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json
            external_identifier: CBDB:265673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
---

# 王湖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湖 | accepted |
| bio.summary | 王湖，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_URk2BrLDKqiyhHZQPHt91g | 王貴 | accepted |
| other | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王湖（CBDB 265673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265673&o=json)
