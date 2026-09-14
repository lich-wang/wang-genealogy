---
schema: wang-person/v1
id: p_Ee4iFkc9roSHJWdXooW3sy
status: active
merged_into: null
display_name: 王榜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8baeU1b1mTNKoz3moyHmiX
        subject_person_id: p_Ee4iFkc9roSHJWdXooW3sy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EZ67WySX9DuFYp2H75ENDr
          claim_id: c_8baeU1b1mTNKoz3moyHmiX
          source_id: s_f1tymVr2eYLWuLv9nw65R2
          stance: supports
          locator: CBDB:314537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314537）
          source: &a1
            id: s_f1tymVr2eYLWuLv9nw65R2
            source_type: api_record
            title: 中国历代人物传记资料库：王榜（CBDB 314537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json
            external_identifier: CBDB:314537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZfMUMEpMjbNUzQww3jWYBY
        subject_person_id: p_Ee4iFkc9roSHJWdXooW3sy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榜，明人物。嘉靖二十九年進士，籍贯烏程，入仕監生。（中国历代人物传记资料库 CBDB 314537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VsbWBOiSxxet47zebQXQBj
          claim_id: c_ZfMUMEpMjbNUzQww3jWYBY
          source_id: s_f1tymVr2eYLWuLv9nw65R2
          stance: supports
          locator: CBDB:314537
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-Yg66_2VxEkMzBO9OOM5Ir
        subject_person_id: p_mz9BXCY2MrMzrtedYeaKMu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ee4iFkc9roSHJWdXooW3sy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jJgaNqQ6N7sHn_GnqIHKCl
          claim_id: c_-Yg66_2VxEkMzBO9OOM5Ir
          source_id: s_J6geewZld3LIFnmZYtWk0f
          stance: supports
          locator: CBDB：兄弟 王傑（204108）之父／母 王滔
          quotation: null
          interpretation_note: 由兄弟关系推断：王榜 与 王傑 为同胞（CBDB 记「兄」），王傑 之父／母即 王榜 之父／母。
          source:
            id: s_J6geewZld3LIFnmZYtWk0f
            source_type: api_record
            title: 中国历代人物传记资料库：王榜（CBDB 314537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json
            external_identifier: CBDB:314537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mz9BXCY2MrMzrtedYeaKMu
        status: active
        display_name: 王滔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xb6f5RK9XoBZS6QY0edzls
        subject_person_id: p_Ee4iFkc9roSHJWdXooW3sy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9IpV7QiDP_ghP0dO4_QwIg
          claim_id: c_xb6f5RK9XoBZS6QY0edzls
          source_id: s_J6geewZld3LIFnmZYtWk0f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204108 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J6geewZld3LIFnmZYtWk0f
            source_type: api_record
            title: 中国历代人物传记资料库：王榜（CBDB 314537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json
            external_identifier: CBDB:314537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SGWPi4n8QUjY5AE1caMiEq
        status: active
        display_name: 王傑
        merged_into_person_id: null
---

# 王榜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榜 | accepted |
| bio.summary | 王榜，明人物。嘉靖二十九年進士，籍贯烏程，入仕監生。（中国历代人物传记资料库 CBDB 314537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mz9BXCY2MrMzrtedYeaKMu | 王滔 | accepted |
| other | p_SGWPi4n8QUjY5AE1caMiEq | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榜（CBDB 314537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314537&o=json)
