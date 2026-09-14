---
schema: wang-person/v1
id: p_YQh2UnWjAUpFCsSFq5tiaF
status: active
merged_into: null
display_name: 王夢熊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4vFTKiGqM9icNnc46BXCX6
        subject_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCjhWDG6oc7mdq1LwpB5Sg
          claim_id: c_4vFTKiGqM9icNnc46BXCX6
          source_id: s_RWgCjgm9HYC83e1y2k6N4U
          stance: supports
          locator: CBDB:297278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297278）
          source: &a1
            id: s_RWgCjgm9HYC83e1y2k6N4U
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 297278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json
            external_identifier: CBDB:297278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KXLcZb7rdgWdWDSjQCdnnU
        subject_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢熊，明人物。嘉靖十四年進士，籍贯代州。（中国历代人物传记资料库 CBDB 297278）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gR1YDq9TrtkcBqHIPKlZ8n
          claim_id: c_KXLcZb7rdgWdWDSjQCdnnU
          source_id: s_RWgCjgm9HYC83e1y2k6N4U
          stance: supports
          locator: CBDB:297278
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g30fK3yE48-7hFG00Gw_0l
        subject_person_id: p_gQeCuqLFbJY887X7LuDmRP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVNd9HYorAIhUoQGoBFN0T
          claim_id: c_g30fK3yE48-7hFG00Gw_0l
          source_id: s_xCl954KktwfIaKfqvY6YBX
          stance: supports
          locator: CBDB：兄弟 王夢弼（126784）之父／母 王世忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢熊 与 王夢弼 为同胞（CBDB 记「弟」），王夢弼 之父／母即 王夢熊 之父／母。
          source:
            id: s_xCl954KktwfIaKfqvY6YBX
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 297278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json
            external_identifier: CBDB:297278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gQeCuqLFbJY887X7LuDmRP
        status: active
        display_name: 王世忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bQT9gb7nZ8slo8OKHckHdr
        subject_person_id: p_BxBsFV6nqQmQf8oa142DSX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YQh2UnWjAUpFCsSFq5tiaF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-EzLMrjNrZEBbil4qDgiVr
          claim_id: c_bQT9gb7nZ8slo8OKHckHdr
          source_id: s_xCl954KktwfIaKfqvY6YBX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126784 王夢弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xCl954KktwfIaKfqvY6YBX
            source_type: api_record
            title: 中国历代人物传记资料库：王夢熊（CBDB 297278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json
            external_identifier: CBDB:297278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BxBsFV6nqQmQf8oa142DSX
        status: active
        display_name: 王夢弼
        merged_into_person_id: null
---

# 王夢熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢熊 | accepted |
| bio.summary | 王夢熊，明人物。嘉靖十四年進士，籍贯代州。（中国历代人物传记资料库 CBDB 297278） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gQeCuqLFbJY887X7LuDmRP | 王世忠 | accepted |
| other | p_BxBsFV6nqQmQf8oa142DSX | 王夢弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢熊（CBDB 297278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297278&o=json)
