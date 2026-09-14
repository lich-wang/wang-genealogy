---
schema: wang-person/v1
id: p_DBh3HN7PMhJFsCLRcYRZ2W
status: active
merged_into: null
display_name: 王湜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fbrAEMgF6qP13Y5ZkkGDk6
        subject_person_id: p_DBh3HN7PMhJFsCLRcYRZ2W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WGs58CbARjXQYp3JShUr9y
          claim_id: c_fbrAEMgF6qP13Y5ZkkGDk6
          source_id: s_Gwe85zR7eXqp5GMsyHCN2J
          stance: supports
          locator: CBDB:323929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323929）
          source: &a1
            id: s_Gwe85zR7eXqp5GMsyHCN2J
            source_type: api_record
            title: 中国历代人物传记资料库：王湜（CBDB 323929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323929&o=json
            external_identifier: CBDB:323929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_suJiCkrk9Ghxtq7ZBKfDp8
        subject_person_id: p_DBh3HN7PMhJFsCLRcYRZ2W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湜，明人物。嘉靖三十八年進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 323929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q-URPV6mmp4AOl8hbKc9jK
          claim_id: c_suJiCkrk9Ghxtq7ZBKfDp8
          source_id: s_Gwe85zR7eXqp5GMsyHCN2J
          stance: supports
          locator: CBDB:323929
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tGp8QUs3Tz2FRAf3DmQ5go
        subject_person_id: p_3zsERGNnSdJfLFVXc9rCRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DBh3HN7PMhJFsCLRcYRZ2W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mQISMqxHzNR9Zymj6bofl0
          claim_id: c_tGp8QUs3Tz2FRAf3DmQ5go
          source_id: s_7jTXxYPrU3YE79hHc3RpmO
          stance: supports
          locator: CBDB：兄弟 王淑（204778）之父／母 王諫
          quotation: null
          interpretation_note: 由兄弟关系推断：王湜 与 王淑 为同胞（CBDB 记「兄」），王淑 之父／母即 王湜 之父／母。
          source:
            id: s_7jTXxYPrU3YE79hHc3RpmO
            source_type: api_record
            title: 中国历代人物传记资料库：王湜（CBDB 323929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323929&o=json
            external_identifier: CBDB:323929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3zsERGNnSdJfLFVXc9rCRi
        status: active
        display_name: 王諫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FwPgRv9umMqkJgVJ5Dkzt1
        subject_person_id: p_DBh3HN7PMhJFsCLRcYRZ2W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JZ9ABX21r2pGL5CSXT41XF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8xSMMfJxvka8IT7XdhH8Of
          claim_id: c_FwPgRv9umMqkJgVJ5Dkzt1
          source_id: s_7jTXxYPrU3YE79hHc3RpmO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204778 王淑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7jTXxYPrU3YE79hHc3RpmO
            source_type: api_record
            title: 中国历代人物传记资料库：王湜（CBDB 323929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323929&o=json
            external_identifier: CBDB:323929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JZ9ABX21r2pGL5CSXT41XF
        status: active
        display_name: 王淑
        merged_into_person_id: null
---

# 王湜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湜 | accepted |
| bio.summary | 王湜，明人物。嘉靖三十八年進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 323929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zsERGNnSdJfLFVXc9rCRi | 王諫 | accepted |
| other | p_JZ9ABX21r2pGL5CSXT41XF | 王淑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王湜（CBDB 323929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323929&o=json)
