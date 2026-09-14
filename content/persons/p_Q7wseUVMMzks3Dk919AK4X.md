---
schema: wang-person/v1
id: p_Q7wseUVMMzks3Dk919AK4X
status: active
merged_into: null
display_name: 王禮賢
cbdb_id: 285853
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m32tEhJPgRLyYWE539odS1
        subject_person_id: p_Q7wseUVMMzks3Dk919AK4X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UX1MGJJAdrTCuJmhCydUPq
          claim_id: c_m32tEhJPgRLyYWE539odS1
          source_id: s_s79sn23839FkBYeQSZUxWi
          stance: supports
          locator: CBDB:285853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s79sn23839FkBYeQSZUxWi
            source_type: api_record
            title: 中国历代人物传记资料库：王禮賢（CBDB 285853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json
            external_identifier: CBDB:285853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M9bta9kCNz7VHNoLXKWZhC
        subject_person_id: p_Q7wseUVMMzks3Dk919AK4X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MTo6RBAfLGft6QRDu9rzkn
          claim_id: c_M9bta9kCNz7VHNoLXKWZhC
          source_id: s_s79sn23839FkBYeQSZUxWi
          stance: supports
          locator: CBDB:285853
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oVHfJCRH5gwkW5fx07qApP
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q7wseUVMMzks3Dk919AK4X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nu8DUlMQskNhwWBJrUMyX
          claim_id: c_oVHfJCRH5gwkW5fx07qApP
          source_id: s_r2nbJt1-xMt6ET6a6383dx
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王禮賢 之父／母。
          source:
            id: s_r2nbJt1-xMt6ET6a6383dx
            source_type: api_record
            title: 中国历代人物传记资料库：王禮賢（CBDB 285853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json
            external_identifier: CBDB:285853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yeJtEcC7cBaU9sVyVGy7xj
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iEGuRISgs_sixGI_So08tf
        subject_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q7wseUVMMzks3Dk919AK4X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPELOmrUbr4-NjmT7ZeGUN
          claim_id: c_iEGuRISgs_sixGI_So08tf
          source_id: s_r2nbJt1-xMt6ET6a6383dx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202269 王重賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r2nbJt1-xMt6ET6a6383dx
            source_type: api_record
            title: 中国历代人物传记资料库：王禮賢（CBDB 285853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json
            external_identifier: CBDB:285853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
---

# 王禮賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禮賢，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285853） | accepted |
| name.primary | 王禮賢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yeJtEcC7cBaU9sVyVGy7xj | 王鉞 | accepted |
| other | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮賢（CBDB 285853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json)
