---
schema: wang-person/v1
id: p_nWX43aM4baTsBSzV5DJqAp
status: active
merged_into: null
display_name: 王富
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8QJnUx17W4NhLqd2A3ukfe
        subject_person_id: p_nWX43aM4baTsBSzV5DJqAp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mby2DtZa8boFU9QBNsXsuT
          claim_id: c_8QJnUx17W4NhLqd2A3ukfe
          source_id: s_xWQocgKH97Y7eAC9bE1STT
          stance: supports
          locator: CBDB:253496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253496）
          source: &a1
            id: s_xWQocgKH97Y7eAC9bE1STT
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 253496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253496&o=json
            external_identifier: CBDB:253496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z1xcGLvj7dXGRf87avvLQC
        subject_person_id: p_nWX43aM4baTsBSzV5DJqAp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富，明人物。成化十四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 253496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nnxpYXKD1rmjRztAG28C_c
          claim_id: c_z1xcGLvj7dXGRf87avvLQC
          source_id: s_xWQocgKH97Y7eAC9bE1STT
          stance: supports
          locator: CBDB:253496
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TGwAmEevpfM5CTYYQM7YGd
        subject_person_id: p_a8cvaHnoJBj7ek4wvWBpvS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nWX43aM4baTsBSzV5DJqAp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uqN9EdG47WXGGNTvIX06zf
          claim_id: c_TGwAmEevpfM5CTYYQM7YGd
          source_id: s_ACBclBLZtlbXT-gQvYEkuI
          stance: supports
          locator: CBDB：兄弟 王賓（200080）之父／母 王億
          quotation: null
          interpretation_note: 由兄弟关系推断：王富 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王富 之父／母。
          source:
            id: s_ACBclBLZtlbXT-gQvYEkuI
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 253496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253496&o=json
            external_identifier: CBDB:253496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_a8cvaHnoJBj7ek4wvWBpvS
        status: active
        display_name: 王億
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HP7DC2wV5hDpsRJ_y6uwE9
        subject_person_id: p_A98pt7vCX7HThyxCGgsD4R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nWX43aM4baTsBSzV5DJqAp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVcbOE0Qm5HJHfUHFnjl7X
          claim_id: c_HP7DC2wV5hDpsRJ_y6uwE9
          source_id: s_ACBclBLZtlbXT-gQvYEkuI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200080 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ACBclBLZtlbXT-gQvYEkuI
            source_type: api_record
            title: 中国历代人物传记资料库：王富（CBDB 253496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253496&o=json
            external_identifier: CBDB:253496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A98pt7vCX7HThyxCGgsD4R
        status: active
        display_name: 王賓
        merged_into_person_id: null
---

# 王富

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王富 | accepted |
| bio.summary | 王富，明人物。成化十四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 253496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a8cvaHnoJBj7ek4wvWBpvS | 王億 | accepted |
| other | p_A98pt7vCX7HThyxCGgsD4R | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王富（CBDB 253496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253496&o=json)
