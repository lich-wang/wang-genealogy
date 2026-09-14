---
schema: wang-person/v1
id: p_2kqeoUNHtuY3VkNyjL441X
status: active
merged_into: null
display_name: 王之誠
cbdb_id: 307686
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oQTE195i8fTqxXssLgqRBy
        subject_person_id: p_2kqeoUNHtuY3VkNyjL441X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之誠，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307686）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_n1V4sroesGQaPI7dT-lxF7
          claim_id: c_oQTE195i8fTqxXssLgqRBy
          source_id: s_WniMZczVUc7LAhyBV1bLe7
          stance: supports
          locator: CBDB:307686
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WniMZczVUc7LAhyBV1bLe7
            source_type: api_record
            title: 中国历代人物传记资料库：王之誠（CBDB 307686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json
            external_identifier: CBDB:307686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qWFyRAo5ZJr2SHUKyT7gtc
        subject_person_id: p_2kqeoUNHtuY3VkNyjL441X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4QoJtmwKYuFdnUepo21qA6
          claim_id: c_qWFyRAo5ZJr2SHUKyT7gtc
          source_id: s_WniMZczVUc7LAhyBV1bLe7
          stance: supports
          locator: CBDB:307686
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QAabzuo7ZVe7fhuVJe6Ocd
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2kqeoUNHtuY3VkNyjL441X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFXSQjs6A-onO-pLAQU9BV
          claim_id: c_QAabzuo7ZVe7fhuVJe6Ocd
          source_id: s_2_zNRQAzXD1_kH14kVEi_l
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之誠 与 王之誥 为同胞（CBDB 记「弟」），王之誥 之父／母即 王之誠 之父／母。
          source:
            id: s_2_zNRQAzXD1_kH14kVEi_l
            source_type: api_record
            title: 中国历代人物传记资料库：王之誠（CBDB 307686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json
            external_identifier: CBDB:307686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxEM6RL9fRNSLHFJ3ioZEE
        status: active
        display_name: 王芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YjYov0nLZ_-7ruhbf2wPlT
        subject_person_id: p_2kqeoUNHtuY3VkNyjL441X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VlgM5uMj6eXjs8UrQ00Z3g
          claim_id: c_YjYov0nLZ_-7ruhbf2wPlT
          source_id: s_2_zNRQAzXD1_kH14kVEi_l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2_zNRQAzXD1_kH14kVEi_l
            source_type: api_record
            title: 中国历代人物传记资料库：王之誠（CBDB 307686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json
            external_identifier: CBDB:307686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
---

# 王之誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之誠，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307686） | accepted |
| name.primary | 王之誠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxEM6RL9fRNSLHFJ3ioZEE | 王芳 | accepted |
| other | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之誠（CBDB 307686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json)
