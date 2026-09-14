---
schema: wang-person/v1
id: p_b6ooQKqckNTBL18LKBeM3a
status: active
merged_into: null
display_name: 王欽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dYkAKrX9YnDm81KxbUGZuj
        subject_person_id: p_b6ooQKqckNTBL18LKBeM3a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vv5PfbyaqeZWYa7auVRThi
          claim_id: c_dYkAKrX9YnDm81KxbUGZuj
          source_id: s_Q7mKBSekK6yawbVENU6YAT
          stance: supports
          locator: CBDB:276563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276563）
          source: &a1
            id: s_Q7mKBSekK6yawbVENU6YAT
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 276563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json
            external_identifier: CBDB:276563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EK2c7e356dSe8EEHHmNicX
        subject_person_id: p_b6ooQKqckNTBL18LKBeM3a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。正德六年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 276563）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8hzJzo928NJqW1AevxRVib
          claim_id: c_EK2c7e356dSe8EEHHmNicX
          source_id: s_Q7mKBSekK6yawbVENU6YAT
          stance: supports
          locator: CBDB:276563
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TWyOuBZTZcL215COhzO1N_
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b6ooQKqckNTBL18LKBeM3a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSyZeyGWEEsIhb-az1mn48
          claim_id: c_TWyOuBZTZcL215COhzO1N_
          source_id: s_YIS6twoben07JGds-X6oC_
          stance: supports
          locator: CBDB：兄弟 王鑾（126900）之父／母 王潣
          quotation: null
          interpretation_note: 由兄弟关系推断：王欽 与 王鑾 为同胞（CBDB 记「弟」），王鑾 之父／母即 王欽 之父／母。
          source:
            id: s_YIS6twoben07JGds-X6oC_
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 276563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json
            external_identifier: CBDB:276563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_39fzFnGh8FGp4S6Ku2uSE6
        status: active
        display_name: 王潣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uMRKHe0lFYIunIWXQ5gUoF
        subject_person_id: p_b6ooQKqckNTBL18LKBeM3a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ksEYZ14IcOX40r4xaKhkQC
          claim_id: c_uMRKHe0lFYIunIWXQ5gUoF
          source_id: s_YIS6twoben07JGds-X6oC_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126900 王鑾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YIS6twoben07JGds-X6oC_
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 276563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json
            external_identifier: CBDB:276563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f8i9p9JzFPTMv3CWRTDLAz
        status: active
        display_name: 王鑾
        merged_into_person_id: null
---

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。正德六年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 276563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_39fzFnGh8FGp4S6Ku2uSE6 | 王潣 | accepted |
| other | p_f8i9p9JzFPTMv3CWRTDLAz | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 276563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276563&o=json)
