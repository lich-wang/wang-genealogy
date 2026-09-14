---
schema: wang-person/v1
id: p_9krHiUjsyZkZorguPCMSqA
status: active
merged_into: null
display_name: 王譽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P625eAZqdwrMYDc39BAui1
        subject_person_id: p_9krHiUjsyZkZorguPCMSqA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AqAkERr4iBy6J3LXE8HaCC
          claim_id: c_P625eAZqdwrMYDc39BAui1
          source_id: s_SAxrDac8JaVPq7xNoNeCcH
          stance: supports
          locator: CBDB:280594
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280594）
          source: &a1
            id: s_SAxrDac8JaVPq7xNoNeCcH
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 280594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280594&o=json
            external_identifier: CBDB:280594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.017Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TbkNBLNe5tzwDJ1hWQ8qJE
        subject_person_id: p_9krHiUjsyZkZorguPCMSqA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譽，明人物。正德十二年進士，籍贯淅川。（中国历代人物传记资料库 CBDB 280594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Wi4bnJqiDvjhQo-C4kU-t
          claim_id: c_TbkNBLNe5tzwDJ1hWQ8qJE
          source_id: s_SAxrDac8JaVPq7xNoNeCcH
          stance: supports
          locator: CBDB:280594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wI8X9ggJ3TuntOh3XwpiNb
        subject_person_id: p_dH2xuW5Lt7eGA9nJNsvby5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9krHiUjsyZkZorguPCMSqA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lX4MrowDAOp22t2jC4BEN0
          claim_id: c_wI8X9ggJ3TuntOh3XwpiNb
          source_id: s_WxbX0WUZ9fr37oSJ6YXKHr
          stance: supports
          locator: CBDB：兄弟 王尚志（201927）之父／母 王浩
          quotation: null
          interpretation_note: 由兄弟关系推断：王譽 与 王尚志 为同胞（CBDB 记「弟」），王尚志 之父／母即 王譽 之父／母。
          source:
            id: s_WxbX0WUZ9fr37oSJ6YXKHr
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 280594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280594&o=json
            external_identifier: CBDB:280594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dH2xuW5Lt7eGA9nJNsvby5
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IAvPR09zjJCmuo5_5C04u_
        subject_person_id: p_9krHiUjsyZkZorguPCMSqA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bg4NJwL64U069eJKTEF5p7
          claim_id: c_IAvPR09zjJCmuo5_5C04u_
          source_id: s_WxbX0WUZ9fr37oSJ6YXKHr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201927 王尚志）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WxbX0WUZ9fr37oSJ6YXKHr
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 280594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280594&o=json
            external_identifier: CBDB:280594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kCdr4Vt3ng3vFN4WR6C2uB
        status: active
        display_name: 王尚志
        merged_into_person_id: null
---

# 王譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譽 | accepted |
| bio.summary | 王譽，明人物。正德十二年進士，籍贯淅川。（中国历代人物传记资料库 CBDB 280594） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dH2xuW5Lt7eGA9nJNsvby5 | 王浩 | accepted |
| other | p_kCdr4Vt3ng3vFN4WR6C2uB | 王尚志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王譽（CBDB 280594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280594&o=json)
