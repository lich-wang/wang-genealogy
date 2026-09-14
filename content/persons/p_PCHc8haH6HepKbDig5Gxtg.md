---
schema: wang-person/v1
id: p_PCHc8haH6HepKbDig5Gxtg
status: active
merged_into: null
display_name: 王潤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zxLhYmZxAtGSfVGc8CJ5DD
        subject_person_id: p_PCHc8haH6HepKbDig5Gxtg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CwaECtZuNYitbf2TD2kj95
          claim_id: c_zxLhYmZxAtGSfVGc8CJ5DD
          source_id: s_4nExZ49GegqkoU9n7zsrRc
          stance: supports
          locator: CBDB:265675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265675）
          source: &a1
            id: s_4nExZ49GegqkoU9n7zsrRc
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 265675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json
            external_identifier: CBDB:265675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DFsN7cDxQADNibwgEnjiy2
        subject_person_id: p_PCHc8haH6HepKbDig5Gxtg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265675）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WZp4toVtRV7BzFDjHcwY6F
          claim_id: c_DFsN7cDxQADNibwgEnjiy2
          source_id: s_4nExZ49GegqkoU9n7zsrRc
          stance: supports
          locator: CBDB:265675
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SUm8ep6jy1s4Gyru-58GmD
        subject_person_id: p_URk2BrLDKqiyhHZQPHt91g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PCHc8haH6HepKbDig5Gxtg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MIcVuf7SCysjywzPqWWJ3h
          claim_id: c_SUm8ep6jy1s4Gyru-58GmD
          source_id: s_6ObIC9Hr6_Zw2SujSQsg6C
          stance: supports
          locator: CBDB：兄弟 王昊（200990）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王潤 与 王昊 为同胞（CBDB 记「兄」），王昊 之父／母即 王潤 之父／母。
          source:
            id: s_6ObIC9Hr6_Zw2SujSQsg6C
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 265675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json
            external_identifier: CBDB:265675
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
        id: c_mui48RLqwR8mXslxYg_eYa
        subject_person_id: p_EoJk1Y5s39yxBJTaiKbEQe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PCHc8haH6HepKbDig5Gxtg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z5UdwkWjA2fDIx7LfJuU8V
          claim_id: c_mui48RLqwR8mXslxYg_eYa
          source_id: s_6ObIC9Hr6_Zw2SujSQsg6C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200990 王昊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6ObIC9Hr6_Zw2SujSQsg6C
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 265675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json
            external_identifier: CBDB:265675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoJk1Y5s39yxBJTaiKbEQe
        status: active
        display_name: 王昊
        merged_into_person_id: null
---

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | 王潤，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_URk2BrLDKqiyhHZQPHt91g | 王貴 | accepted |
| other | p_EoJk1Y5s39yxBJTaiKbEQe | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 265675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265675&o=json)
