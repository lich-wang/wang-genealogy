---
schema: wang-person/v1
id: p_MvDs1UbsPqDXB7VXxPYiJs
status: active
merged_into: null
display_name: 王鴻漸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXxXF1xk4MM3YA1xMhGykz
        subject_person_id: p_MvDs1UbsPqDXB7VXxPYiJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻漸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oABe86uV17bBZ9MwUCGnj5
          claim_id: c_FXxXF1xk4MM3YA1xMhGykz
          source_id: s_VNTqfYUB2tbFicDRSke3fV
          stance: supports
          locator: CBDB:33865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33865）
          source: &a1
            id: s_VNTqfYUB2tbFicDRSke3fV
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻漸（CBDB 33865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33865&o=json
            external_identifier: CBDB:33865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vH5pG8XU5Mj6yHuj1wgRJQ
        subject_person_id: p_MvDs1UbsPqDXB7VXxPYiJs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻漸，明人物。明清進士進士，籍贯南陽，入仕進士，曾任右布政使、苑馬寺卿、知府。（中国历代人物传记资料库 CBDB 33865）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GOrcuxV1VOSleo1HfqF7Yo
          claim_id: c_vH5pG8XU5Mj6yHuj1wgRJQ
          source_id: s_VNTqfYUB2tbFicDRSke3fV
          stance: supports
          locator: CBDB:33865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RHmUIqWqDTPf2e-8F8f1Sa
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MvDs1UbsPqDXB7VXxPYiJs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3P_eL5NdM_uWnSMZwpfRuw
          claim_id: c_RHmUIqWqDTPf2e-8F8f1Sa
          source_id: s_Wn_Z_N28brbOzb8PncipnI
          stance: supports
          locator: CBDB：兄弟 王鸿儒（33864）之父／母 王本
          quotation: null
          interpretation_note: 由兄弟关系推断：王鴻漸 与 王鸿儒 为同胞（CBDB 记「兄」），王鸿儒 之父／母即 王鴻漸 之父／母。
          source:
            id: s_Wn_Z_N28brbOzb8PncipnI
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻漸（CBDB 33865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33865&o=json
            external_identifier: CBDB:33865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PAQnJKUX1HHCzAwrFTb5md
        status: active
        display_name: 王本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-kmAt4DR9c-cSRQ8P9qqJD
        subject_person_id: p_MvDs1UbsPqDXB7VXxPYiJs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wdd9WrspYiEE72NGMNp75f
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zq_jxm15KGHx6m2hwTzBnA
          claim_id: c_-kmAt4DR9c-cSRQ8P9qqJD
          source_id: s_Wn_Z_N28brbOzb8PncipnI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 33864 王鴻儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wn_Z_N28brbOzb8PncipnI
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻漸（CBDB 33865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33865&o=json
            external_identifier: CBDB:33865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wdd9WrspYiEE72NGMNp75f
        status: active
        display_name: 王鸿儒
        merged_into_person_id: null
---

# 王鴻漸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻漸 | accepted |
| bio.summary | 王鴻漸，明人物。明清進士進士，籍贯南陽，入仕進士，曾任右布政使、苑馬寺卿、知府。（中国历代人物传记资料库 CBDB 33865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PAQnJKUX1HHCzAwrFTb5md | 王本 | accepted |
| other | p_Wdd9WrspYiEE72NGMNp75f | 王鸿儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻漸（CBDB 33865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33865&o=json)
