---
schema: wang-person/v1
id: p_9f3JMr7vZQNLdADD3ztWtm
status: active
merged_into: null
display_name: 王棨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cmJ1GCBFHKSaY7ZjyjD18C
        subject_person_id: p_9f3JMr7vZQNLdADD3ztWtm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XwF6WchQaX5uB1qqTpGoS3
          claim_id: c_cmJ1GCBFHKSaY7ZjyjD18C
          source_id: s_rw1XPTbwHfRBDaL1n77TT1
          stance: supports
          locator: CBDB:259544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259544）
          source: &a1
            id: s_rw1XPTbwHfRBDaL1n77TT1
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 259544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json
            external_identifier: CBDB:259544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AFWeHM7G5HK1dUSAdnWRm4
        subject_person_id: p_9f3JMr7vZQNLdADD3ztWtm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棨，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259544）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eg-xyLDSZMpd5socOefOy0
          claim_id: c_AFWeHM7G5HK1dUSAdnWRm4
          source_id: s_rw1XPTbwHfRBDaL1n77TT1
          stance: supports
          locator: CBDB:259544
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2b-d0SEwVm2yOa7Jhv8iBA
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9f3JMr7vZQNLdADD3ztWtm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3agciVAxoueOb6quSEo8AT
          claim_id: c_2b-d0SEwVm2yOa7Jhv8iBA
          source_id: s_vzES0KFt7yBHBsCeOoULUN
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王棨 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王棨 之父／母。
          source:
            id: s_vzES0KFt7yBHBsCeOoULUN
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 259544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json
            external_identifier: CBDB:259544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_isvcw6EfQic2NdXZzwfKeT
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6q7HdEBXXmmwqAvR8M7_G_
        subject_person_id: p_9f3JMr7vZQNLdADD3ztWtm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TH53JQJn2rtODAnxs0hmeg
          claim_id: c_6q7HdEBXXmmwqAvR8M7_G_
          source_id: s_vzES0KFt7yBHBsCeOoULUN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vzES0KFt7yBHBsCeOoULUN
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 259544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json
            external_identifier: CBDB:259544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RxU5daA7Pb2tQNaYot8QGE
        status: active
        display_name: 王術
        merged_into_person_id: null
---

# 王棨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棨 | accepted |
| bio.summary | 王棨，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_isvcw6EfQic2NdXZzwfKeT | 王洪 | accepted |
| other | p_RxU5daA7Pb2tQNaYot8QGE | 王術 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棨（CBDB 259544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json)
