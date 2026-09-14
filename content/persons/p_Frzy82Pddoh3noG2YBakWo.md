---
schema: wang-person/v1
id: p_Frzy82Pddoh3noG2YBakWo
status: active
merged_into: null
display_name: 王一揆
cbdb_id: 213983
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UmvJCcbTYQjgofGX2vDFVH
        subject_person_id: p_Frzy82Pddoh3noG2YBakWo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一揆，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213983）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ptUIpIcKp22M25EqAHJvUk
          claim_id: c_UmvJCcbTYQjgofGX2vDFVH
          source_id: s_9TpESRAZWSh9p9juJ8Wv6A
          stance: supports
          locator: CBDB:213983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9TpESRAZWSh9p9juJ8Wv6A
            source_type: api_record
            title: 中国历代人物传记资料库：王一揆（CBDB 213983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json
            external_identifier: CBDB:213983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGTwPnFVYdbHMar2ajYnwk
        subject_person_id: p_Frzy82Pddoh3noG2YBakWo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5eXeNraeojjEuYqfxV1udk
          claim_id: c_UGTwPnFVYdbHMar2ajYnwk
          source_id: s_9TpESRAZWSh9p9juJ8Wv6A
          stance: supports
          locator: CBDB:213983
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-ZjCWbFb7LdW6eblgcNb7V
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Frzy82Pddoh3noG2YBakWo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCihYbE2YMyCb4ail2YtXd
          claim_id: c_-ZjCWbFb7LdW6eblgcNb7V
          source_id: s_L7pC-ZBh8RNXz-cqbu07Vh
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一揆 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一揆 之父／母。
          source:
            id: s_L7pC-ZBh8RNXz-cqbu07Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王一揆（CBDB 213983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json
            external_identifier: CBDB:213983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5fXASs4g8AzDQ4NHHrEv7
        status: active
        display_name: 王湧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m70VABaiXAU687D5Uhqvk9
        subject_person_id: p_Frzy82Pddoh3noG2YBakWo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2SzfTIw1Zpdhhv2pYElfu
          claim_id: c_m70VABaiXAU687D5Uhqvk9
          source_id: s_L7pC-ZBh8RNXz-cqbu07Vh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L7pC-ZBh8RNXz-cqbu07Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王一揆（CBDB 213983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json
            external_identifier: CBDB:213983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HfLk9ptSCZD1pXUYCky88S
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一揆，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213983） | accepted |
| name.primary | 王一揆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5fXASs4g8AzDQ4NHHrEv7 | 王湧 | accepted |
| other | p_HfLk9ptSCZD1pXUYCky88S | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一揆（CBDB 213983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213983&o=json)
