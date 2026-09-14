---
schema: wang-person/v1
id: p_K7UDBNRC1LwQ6VGVrJraAP
status: active
merged_into: null
display_name: 王宗蔭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oTsMpBEsAibdnizzfYDcqr
        subject_person_id: p_K7UDBNRC1LwQ6VGVrJraAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vr6KLvSLz5yNiRpYV85HHY
          claim_id: c_oTsMpBEsAibdnizzfYDcqr
          source_id: s_GGn1AT23SPdmwmbWUTfMiY
          stance: supports
          locator: CBDB:226577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226577）
          source: &a1
            id: s_GGn1AT23SPdmwmbWUTfMiY
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蔭（CBDB 226577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226577&o=json
            external_identifier: CBDB:226577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jXmBVcHboEa1dn6sQ7hXJ2
        subject_person_id: p_K7UDBNRC1LwQ6VGVrJraAP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗蔭，明人物。萬曆丙戌科進士進士，籍贯京山，入仕太學生。（中国历代人物传记资料库 CBDB 226577）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a_jkjHdPllRb4wr7vPKSL5
          claim_id: c_jXmBVcHboEa1dn6sQ7hXJ2
          source_id: s_GGn1AT23SPdmwmbWUTfMiY
          stance: supports
          locator: CBDB:226577
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_INn1VvSy5HkL677W9EKKU4
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K7UDBNRC1LwQ6VGVrJraAP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFGoFdrSghurUAqJlWljyo
          claim_id: c_INn1VvSy5HkL677W9EKKU4
          source_id: s_0sL-IQBxYH8AskFxgmTsBB
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗蔭 与 王宗蓁 为同胞（CBDB 记「兄」），王宗蓁 之父／母即 王宗蔭 之父／母。
          source:
            id: s_0sL-IQBxYH8AskFxgmTsBB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蔭（CBDB 226577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226577&o=json
            external_identifier: CBDB:226577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qbWcARBwiNzFhFH7v3oZN5
        status: active
        display_name: 王桥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BGvsU6x_KzjZEZnH2j6Q2d
        subject_person_id: p_K7UDBNRC1LwQ6VGVrJraAP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YcgZGHB8b41JUksSD6hCbG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lGwqRP6bJlkVDAD3rYPeR
          claim_id: c_BGvsU6x_KzjZEZnH2j6Q2d
          source_id: s_0sL-IQBxYH8AskFxgmTsBB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207031 王宗蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0sL-IQBxYH8AskFxgmTsBB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蔭（CBDB 226577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226577&o=json
            external_identifier: CBDB:226577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
---

# 王宗蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗蔭 | accepted |
| bio.summary | 王宗蔭，明人物。萬曆丙戌科進士進士，籍贯京山，入仕太學生。（中国历代人物传记资料库 CBDB 226577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qbWcARBwiNzFhFH7v3oZN5 | 王桥 | accepted |
| other | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗蔭（CBDB 226577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226577&o=json)
