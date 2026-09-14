---
schema: wang-person/v1
id: p_a9nNGLG19fus2VUx21NZAb
status: active
merged_into: null
display_name: 王相
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBXTgvq8GPG2Jf3t3J8n13
        subject_person_id: p_a9nNGLG19fus2VUx21NZAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7r9UksZ9qUerW7xa64PRQf
          claim_id: c_dBXTgvq8GPG2Jf3t3J8n13
          source_id: s_RssYHcoK4Fg1SVHEBmjZ6d
          stance: supports
          locator: CBDB:291531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291531）
          source: &a1
            id: s_RssYHcoK4Fg1SVHEBmjZ6d
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 291531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291531&o=json
            external_identifier: CBDB:291531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DNL95WxQuUkktfDN8cZyUy
        subject_person_id: p_a9nNGLG19fus2VUx21NZAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。嘉靖十一年進士，籍贯錢塘。（中国历代人物传记资料库 CBDB 291531）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7-hZWhJ8S1di3_J-vf4qAy
          claim_id: c_DNL95WxQuUkktfDN8cZyUy
          source_id: s_RssYHcoK4Fg1SVHEBmjZ6d
          stance: supports
          locator: CBDB:291531
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i6aITym-CGYZ6_t-K2RELp
        subject_person_id: p_hPeC8d79fUWi5bNUMWcM89
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a9nNGLG19fus2VUx21NZAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAUGIdHdxs2laXUepMbhc5
          claim_id: c_i6aITym-CGYZ6_t-K2RELp
          source_id: s_97XiiMVzPRLA5ngKGJLWi0
          stance: supports
          locator: CBDB：兄弟 王椿（202645）之父／母 王璘
          quotation: null
          interpretation_note: 由兄弟关系推断：王相 与 王椿 为同胞（CBDB 记「弟」），王椿 之父／母即 王相 之父／母。
          source:
            id: s_97XiiMVzPRLA5ngKGJLWi0
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 291531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291531&o=json
            external_identifier: CBDB:291531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hPeC8d79fUWi5bNUMWcM89
        status: active
        display_name: 王璘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GyM0hUhtKbWqw6ZQ-FILpT
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_a9nNGLG19fus2VUx21NZAb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Lpdm6S8B9OohsqxLxh_Ax
          claim_id: c_GyM0hUhtKbWqw6ZQ-FILpT
          source_id: s_97XiiMVzPRLA5ngKGJLWi0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202645 王椿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_97XiiMVzPRLA5ngKGJLWi0
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 291531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291531&o=json
            external_identifier: CBDB:291531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1R7tJCQnDzHJMgdYcvFf8v
        status: active
        display_name: 王椿
        merged_into_person_id: null
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。嘉靖十一年進士，籍贯錢塘。（中国历代人物传记资料库 CBDB 291531） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hPeC8d79fUWi5bNUMWcM89 | 王璘 | accepted |
| other | p_1R7tJCQnDzHJMgdYcvFf8v | 王椿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 291531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291531&o=json)
