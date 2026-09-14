---
schema: wang-person/v1
id: p_VM3K6EwK4CU338te95Pkvd
status: active
merged_into: null
display_name: 王邦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Hh9cBQfYKyY44XxeUvZN7
        subject_person_id: p_VM3K6EwK4CU338te95Pkvd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wZdtWnVsJkCuV6sD9jULb6
          claim_id: c_5Hh9cBQfYKyY44XxeUvZN7
          source_id: s_5SvYtejH9X5A3t5MFN6bbM
          stance: supports
          locator: CBDB:294871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294871）
          source: &a1
            id: s_5SvYtejH9X5A3t5MFN6bbM
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 294871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294871&o=json
            external_identifier: CBDB:294871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJ84ZmFFX3gJAw9qVnVDFK
        subject_person_id: p_VM3K6EwK4CU338te95Pkvd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294871）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wzWwOsbzep0za8w9m3Y6Pi
          claim_id: c_LJ84ZmFFX3gJAw9qVnVDFK
          source_id: s_5SvYtejH9X5A3t5MFN6bbM
          stance: supports
          locator: CBDB:294871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6EHGtqeFha6Zd8Ezea7map
        subject_person_id: p_38MrYsNYkPoBeMisQP7Sof
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VM3K6EwK4CU338te95Pkvd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNWPokfb-Qn6qj5GBcvaMy
          claim_id: c_6EHGtqeFha6Zd8Ezea7map
          source_id: s_5v8fp91kkHByXvZLWJjyy3
          stance: supports
          locator: CBDB：兄弟 王龙溪（126814）之父／母 王经
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦 与 王龙溪 为同胞（CBDB 记「弟」），王龙溪 之父／母即 王邦 之父／母。
          source:
            id: s_5v8fp91kkHByXvZLWJjyy3
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 294871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294871&o=json
            external_identifier: CBDB:294871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kjHMjKM5I4glCbPZzhVwJt
        subject_person_id: p_VM3K6EwK4CU338te95Pkvd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aXikAW5GmUNHUB4Mexh2vK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ZQkV3dlAXfr-BnKNWQN7p
          claim_id: c_kjHMjKM5I4glCbPZzhVwJt
          source_id: s_5v8fp91kkHByXvZLWJjyy3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126814 王畿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5v8fp91kkHByXvZLWJjyy3
            source_type: api_record
            title: 中国历代人物传记资料库：王邦（CBDB 294871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294871&o=json
            external_identifier: CBDB:294871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aXikAW5GmUNHUB4Mexh2vK
        status: active
        display_name: 王龙溪
        merged_into_person_id: null
---

# 王邦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦 | accepted |
| bio.summary | 王邦，明人物。嘉靖十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 294871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |
| other | p_aXikAW5GmUNHUB4Mexh2vK | 王龙溪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦（CBDB 294871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294871&o=json)
