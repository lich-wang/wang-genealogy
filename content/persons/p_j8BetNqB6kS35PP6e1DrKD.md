---
schema: wang-person/v1
id: p_j8BetNqB6kS35PP6e1DrKD
status: active
merged_into: null
display_name: 王職
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5D9hETnpBa3X8h42UaJvs6
        subject_person_id: p_j8BetNqB6kS35PP6e1DrKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王職
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KqEQWypArwjZkrXVVYM1va
          claim_id: c_5D9hETnpBa3X8h42UaJvs6
          source_id: s_WPrjv71ePZXJMQin85t61s
          stance: supports
          locator: CBDB:292235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292235）
          source: &a1
            id: s_WPrjv71ePZXJMQin85t61s
            source_type: api_record
            title: 中国历代人物传记资料库：王職（CBDB 292235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292235&o=json
            external_identifier: CBDB:292235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_on3w1HjfAhHoLgrg15Sr1L
        subject_person_id: p_j8BetNqB6kS35PP6e1DrKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王職，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yCj48IJ-JJ_6950HfjuYNY
          claim_id: c_on3w1HjfAhHoLgrg15Sr1L
          source_id: s_WPrjv71ePZXJMQin85t61s
          stance: supports
          locator: CBDB:292235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-d7JKU4X102zteTfiMMEYQ
        subject_person_id: p_45EiG84QQT2n3AHG97tGmn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j8BetNqB6kS35PP6e1DrKD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPPSPI55xju-foZ1LyCYzo
          claim_id: c_-d7JKU4X102zteTfiMMEYQ
          source_id: s_QdLgW-Uz7mnf99PBBjQqHp
          stance: supports
          locator: CBDB：兄弟 王聮（202677）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王職 与 王聮 为同胞（CBDB 记「弟」），王聮 之父／母即 王職 之父／母。
          source:
            id: s_QdLgW-Uz7mnf99PBBjQqHp
            source_type: api_record
            title: 中国历代人物传记资料库：王職（CBDB 292235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292235&o=json
            external_identifier: CBDB:292235
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
        id: c_cBLDCWOwPbPLYoZixFqIIr
        subject_person_id: p_HE5e4JMgdzoDwzM6FykZUf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j8BetNqB6kS35PP6e1DrKD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6JseVEIK1OUPzavM9Yj-ne
          claim_id: c_cBLDCWOwPbPLYoZixFqIIr
          source_id: s_QdLgW-Uz7mnf99PBBjQqHp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202677 王聮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QdLgW-Uz7mnf99PBBjQqHp
            source_type: api_record
            title: 中国历代人物传记资料库：王職（CBDB 292235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292235&o=json
            external_identifier: CBDB:292235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HE5e4JMgdzoDwzM6FykZUf
        status: active
        display_name: 王聮
        merged_into_person_id: null
---

# 王職

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王職 | accepted |
| bio.summary | 王職，明人物。嘉靖十一年進士，籍贯任邱。（中国历代人物传记资料库 CBDB 292235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_45EiG84QQT2n3AHG97tGmn | 王良 | accepted |
| other | p_HE5e4JMgdzoDwzM6FykZUf | 王聮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王職（CBDB 292235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292235&o=json)
