---
schema: wang-person/v1
id: p_izaQ53dqQKiqq71sb4MqAA
status: active
merged_into: null
display_name: 王聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N13oubK1DsxmdM4xyRBx1N
        subject_person_id: p_izaQ53dqQKiqq71sb4MqAA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oo9EVs8KPNWPs2gGy7eWjC
          claim_id: c_N13oubK1DsxmdM4xyRBx1N
          source_id: s_aEDHP1QVLfUauQ9ht1o8xw
          stance: supports
          locator: CBDB:292237
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292237）
          source: &a1
            id: s_aEDHP1QVLfUauQ9ht1o8xw
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 292237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292237&o=json
            external_identifier: CBDB:292237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKhxo1EE3T6UNyw6uCQZY6
        subject_person_id: p_izaQ53dqQKiqq71sb4MqAA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292237）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_re1uf8caWyhVN3TeWvE4eG
          claim_id: c_EKhxo1EE3T6UNyw6uCQZY6
          source_id: s_aEDHP1QVLfUauQ9ht1o8xw
          stance: supports
          locator: CBDB:292237
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XQtMfjUZt49nYJm_1jVvH6
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_izaQ53dqQKiqq71sb4MqAA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X2YQE1vysrCgp-fk9BWuWk
          claim_id: c_XQtMfjUZt49nYJm_1jVvH6
          source_id: s_mr05kq8N4khluw3--D5Giv
          stance: supports
          locator: CBDB：兄弟 王聮（202677）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王聘 与 王聮 为同胞（CBDB 记「兄」），王聮 之父／母即 王聘 之父／母。
          source:
            id: s_mr05kq8N4khluw3--D5Giv
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 292237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292237&o=json
            external_identifier: CBDB:292237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_45EiG84QQT2n3AHG97tGmn
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JGfBdy1zmvUgqJKgHeaUw6
        subject_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_izaQ53dqQKiqq71sb4MqAA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eWnMnJCqoJLdNOcbJiaW3N
          claim_id: c_JGfBdy1zmvUgqJKgHeaUw6
          source_id: s_mr05kq8N4khluw3--D5Giv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202677 王聮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mr05kq8N4khluw3--D5Giv
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 292237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292237&o=json
            external_identifier: CBDB:292237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HE5e4JMgdzoDwzM6FykZUf
        status: active
        display_name: 王聮
        merged_into_person_id: null
---

# 王聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聘 | accepted |
| bio.summary | 王聘，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292237） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_45EiG84QQT2n3AHG97tGmn | 王良 | accepted |
| other | p_HE5e4JMgdzoDwzM6FykZUf | 王聮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聘（CBDB 292237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292237&o=json)
