---
schema: wang-person/v1
id: p_qCjLfAKLwFwjMUFYHPpXw6
status: active
merged_into: null
display_name: 王釗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5L8hwa56d4rSKMqmmxjAWk
        subject_person_id: p_qCjLfAKLwFwjMUFYHPpXw6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fWNa3UDStiLU8LoQ1pG48n
          claim_id: c_5L8hwa56d4rSKMqmmxjAWk
          source_id: s_JFEmfRyK5jXNTCn8R43j9M
          stance: supports
          locator: CBDB:314685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314685）
          source: &a1
            id: s_JFEmfRyK5jXNTCn8R43j9M
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 314685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314685&o=json
            external_identifier: CBDB:314685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gw5qrEHMHNecuCtNAg7Hdh
        subject_person_id: p_qCjLfAKLwFwjMUFYHPpXw6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314685）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CHlrUL12kqDn4TSW06XlkJ
          claim_id: c_gw5qrEHMHNecuCtNAg7Hdh
          source_id: s_JFEmfRyK5jXNTCn8R43j9M
          stance: supports
          locator: CBDB:314685
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kjt9xTatODy6zeFKqdmcNu
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qCjLfAKLwFwjMUFYHPpXw6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQSvum-b1EhXRTG6bW6rS1
          claim_id: c_kjt9xTatODy6zeFKqdmcNu
          source_id: s_1xTI8u-b3wvsft9Pb36N8M
          stance: supports
          locator: CBDB：兄弟 王鈇（67912）之父／母 王睿
          quotation: null
          interpretation_note: 由兄弟关系推断：王釗 与 王鈇 为同胞（CBDB 记「弟」），王鈇 之父／母即 王釗 之父／母。
          source:
            id: s_1xTI8u-b3wvsft9Pb36N8M
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 314685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314685&o=json
            external_identifier: CBDB:314685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ajPx8SrP67WXjyut5BBExs
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rqljO-xOUu9_t67DAa1hnW
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qCjLfAKLwFwjMUFYHPpXw6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1ZR8_fITNpYo_uKl_qX4z
          claim_id: c_rqljO-xOUu9_t67DAa1hnW
          source_id: s_1xTI8u-b3wvsft9Pb36N8M
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67912 王鈇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1xTI8u-b3wvsft9Pb36N8M
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 314685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314685&o=json
            external_identifier: CBDB:314685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KdnEK5JvxzCLuhzpo1b35X
        status: active
        display_name: 王鈇
        merged_into_person_id: null
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。嘉靖二十九年進士，籍贯東陽。（中国历代人物传记资料库 CBDB 314685） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ajPx8SrP67WXjyut5BBExs | 王睿 | accepted |
| other | p_KdnEK5JvxzCLuhzpo1b35X | 王鈇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王釗（CBDB 314685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314685&o=json)
