---
schema: wang-person/v1
id: p_JS7CTABou4Q29MfMaFCAy6
status: active
merged_into: null
display_name: 王袞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zzEKcn5dBJL51hEWH9MJ7X
        subject_person_id: p_JS7CTABou4Q29MfMaFCAy6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BqVZUW3i9kighpTgXgLABs
          claim_id: c_zzEKcn5dBJL51hEWH9MJ7X
          source_id: s_KyADNMTKS9qeS37XMsxAmb
          stance: supports
          locator: CBDB:236427
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236427）
          source: &a1
            id: s_KyADNMTKS9qeS37XMsxAmb
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 236427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236427&o=json
            external_identifier: CBDB:236427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCoMdWrk1ZJkdHrDLP16ph
        subject_person_id: p_JS7CTABou4Q29MfMaFCAy6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞，明人物。籍贯益都，入仕廩生。（中国历代人物传记资料库 CBDB 236427）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CsKHrpaXnKowvJifbASBD9
          claim_id: c_zCoMdWrk1ZJkdHrDLP16ph
          source_id: s_KyADNMTKS9qeS37XMsxAmb
          stance: supports
          locator: CBDB:236427
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z1JJVUPHRR7EmLqd8lfwSK
        subject_person_id: p_8wBKhGEndLXas4ENZDEWFf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JS7CTABou4Q29MfMaFCAy6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x0YZB3MPkd_DWYtQetTl7T
          claim_id: c_z1JJVUPHRR7EmLqd8lfwSK
          source_id: s_YhySQJ81x0iYnG6XFXLzbu
          stance: supports
          locator: CBDB：兄弟 王瀠（207813）之父／母 王好敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王袞 与 王瀠 为同胞（CBDB 记「兄」），王瀠 之父／母即 王袞 之父／母。
          source:
            id: s_YhySQJ81x0iYnG6XFXLzbu
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 236427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236427&o=json
            external_identifier: CBDB:236427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8wBKhGEndLXas4ENZDEWFf
        status: active
        display_name: 王好敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MKJdiYq51rnEhyuuhW1jsA
        subject_person_id: p_JS7CTABou4Q29MfMaFCAy6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fRd4kHJooaS9AErLa6rFp5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ap1Aqe477p91wgGowI3HYG
          claim_id: c_MKJdiYq51rnEhyuuhW1jsA
          source_id: s_YhySQJ81x0iYnG6XFXLzbu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207813 王瀠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YhySQJ81x0iYnG6XFXLzbu
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 236427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236427&o=json
            external_identifier: CBDB:236427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fRd4kHJooaS9AErLa6rFp5
        status: active
        display_name: 王瀠
        merged_into_person_id: null
---

# 王袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞 | accepted |
| bio.summary | 王袞，明人物。籍贯益都，入仕廩生。（中国历代人物传记资料库 CBDB 236427） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8wBKhGEndLXas4ENZDEWFf | 王好敬 | accepted |
| other | p_fRd4kHJooaS9AErLa6rFp5 | 王瀠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王袞（CBDB 236427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236427&o=json)
