---
schema: wang-person/v1
id: p_1LEh3MeYQq6cJbuU57kEwb
status: active
merged_into: null
display_name: 王橞
cbdb_id: 283934
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z77erWruUfdZAj68yhsGdi
        subject_person_id: p_1LEh3MeYQq6cJbuU57kEwb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橞，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Hd-EfW3N2rMEaJnBIC7DaA
          claim_id: c_z77erWruUfdZAj68yhsGdi
          source_id: s_xNYAtW25NNF2FE79BaDLXh
          stance: supports
          locator: CBDB:283934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xNYAtW25NNF2FE79BaDLXh
            source_type: api_record
            title: 中国历代人物传记资料库：王橞（CBDB 283934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json
            external_identifier: CBDB:283934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxqyjQhC81F4wvGNjXJCud
        subject_person_id: p_1LEh3MeYQq6cJbuU57kEwb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7cTF9VyLqQmCQRb5xUNyJD
          claim_id: c_CxqyjQhC81F4wvGNjXJCud
          source_id: s_xNYAtW25NNF2FE79BaDLXh
          stance: supports
          locator: CBDB:283934
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2W5t8R5z1iwOnwAsKwDTH-
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1LEh3MeYQq6cJbuU57kEwb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvR0H3oNYnFuT-XesvD-oF
          claim_id: c_2W5t8R5z1iwOnwAsKwDTH-
          source_id: s_3Da37TYtnd1BnjLerJfID8
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王橞 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王橞 之父／母。
          source:
            id: s_3Da37TYtnd1BnjLerJfID8
            source_type: api_record
            title: 中国历代人物传记资料库：王橞（CBDB 283934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json
            external_identifier: CBDB:283934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XDFGKptw1EWAKBbTEUcvCN
        status: active
        display_name: 王銀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XoFxsq_dt8u2BAA7MgxN5V
        subject_person_id: p_1LEh3MeYQq6cJbuU57kEwb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_miXknFcV-VXlQbaxx4fiCC
          claim_id: c_XoFxsq_dt8u2BAA7MgxN5V
          source_id: s_3Da37TYtnd1BnjLerJfID8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3Da37TYtnd1BnjLerJfID8
            source_type: api_record
            title: 中国历代人物传记资料库：王橞（CBDB 283934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json
            external_identifier: CBDB:283934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uQx6CsD653L6hRpaz3mPf9
        status: active
        display_name: 王同祖
        merged_into_person_id: null
---

# 王橞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王橞，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283934） | accepted |
| name.primary | 王橞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XDFGKptw1EWAKBbTEUcvCN | 王銀 | accepted |
| other | p_uQx6CsD653L6hRpaz3mPf9 | 王同祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王橞（CBDB 283934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json)
