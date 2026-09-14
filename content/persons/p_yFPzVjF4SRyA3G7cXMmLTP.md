---
schema: wang-person/v1
id: p_yFPzVjF4SRyA3G7cXMmLTP
status: active
merged_into: null
display_name: 王資厚
cbdb_id: 260062
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eeqcj2GGuQP11AXDxHf7o9
        subject_person_id: p_yFPzVjF4SRyA3G7cXMmLTP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資厚，明人物。成化二十三年進士，籍贯金堂。（中国历代人物传记资料库 CBDB 260062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7bBZUU_i6ZMNl5vlEeZgsi
          claim_id: c_eeqcj2GGuQP11AXDxHf7o9
          source_id: s_5EQHohenGXnZAyJ54asJSv
          stance: supports
          locator: CBDB:260062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5EQHohenGXnZAyJ54asJSv
            source_type: api_record
            title: 中国历代人物传记资料库：王資厚（CBDB 260062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260062&o=json
            external_identifier: CBDB:260062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1LWksXsP14Noj6FUgAEaRD
        subject_person_id: p_yFPzVjF4SRyA3G7cXMmLTP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6YEqzQmqjEKfMEx6y5wjQd
          claim_id: c_1LWksXsP14Noj6FUgAEaRD
          source_id: s_5EQHohenGXnZAyJ54asJSv
          stance: supports
          locator: CBDB:260062
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0viFFVwPhnrCWOu7FQcz7d
        subject_person_id: p_3x4jebHTQ9Pn46x4TcE5WS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yFPzVjF4SRyA3G7cXMmLTP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xKTJ1V28L9HrADHzhBsejW
          claim_id: c_0viFFVwPhnrCWOu7FQcz7d
          source_id: s_lfewpFR9LBSrvl-uR1jhPi
          stance: supports
          locator: CBDB：兄弟 王資良（200587）之父／母 王昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王資厚 与 王資良 为同胞（CBDB 记「弟」），王資良 之父／母即 王資厚 之父／母。
          source:
            id: s_lfewpFR9LBSrvl-uR1jhPi
            source_type: api_record
            title: 中国历代人物传记资料库：王資厚（CBDB 260062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260062&o=json
            external_identifier: CBDB:260062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3x4jebHTQ9Pn46x4TcE5WS
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kV1eogUODBK6RB51mHvJy_
        subject_person_id: p_vnNgpS2EoPkSDWNJdYVAh5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yFPzVjF4SRyA3G7cXMmLTP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rToAKcw3tMd_qK2TD0f8Xm
          claim_id: c_kV1eogUODBK6RB51mHvJy_
          source_id: s_lfewpFR9LBSrvl-uR1jhPi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200587 王資良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lfewpFR9LBSrvl-uR1jhPi
            source_type: api_record
            title: 中国历代人物传记资料库：王資厚（CBDB 260062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260062&o=json
            external_identifier: CBDB:260062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vnNgpS2EoPkSDWNJdYVAh5
        status: active
        display_name: 王資良
        merged_into_person_id: null
---

# 王資厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王資厚，明人物。成化二十三年進士，籍贯金堂。（中国历代人物传记资料库 CBDB 260062） | accepted |
| name.primary | 王資厚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3x4jebHTQ9Pn46x4TcE5WS | 王昇 | accepted |
| other | p_vnNgpS2EoPkSDWNJdYVAh5 | 王資良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王資厚（CBDB 260062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260062&o=json)
