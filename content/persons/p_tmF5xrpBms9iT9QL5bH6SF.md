---
schema: wang-person/v1
id: p_tmF5xrpBms9iT9QL5bH6SF
status: active
merged_into: null
display_name: 王瑄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQRrE4qY3Ur9JQ5nMHJC9X
        subject_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AoibdaryYXWw5kwJnwkdee
          claim_id: c_KQRrE4qY3Ur9JQ5nMHJC9X
          source_id: s_D55uUDfXNLFY63t6KEeJD5
          stance: supports
          locator: CBDB:260239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260239）
          source: &a1
            id: s_D55uUDfXNLFY63t6KEeJD5
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 260239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json
            external_identifier: CBDB:260239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DznC66VE15Lq6ksKRX5AB4
        subject_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。成化二十三年進士，籍贯海豐，曾任義官。（中国历代人物传记资料库 CBDB 260239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RzxuENsRliT7OA7Jk1kW0M
          claim_id: c_DznC66VE15Lq6ksKRX5AB4
          source_id: s_D55uUDfXNLFY63t6KEeJD5
          stance: supports
          locator: CBDB:260239
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5j3zKSWQBas3cc5eugRo3e
        subject_person_id: p_Y9VpT5a4bHRsBrje4LpbfA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0jsxw30X9YGhAh3BDrdfP5
          claim_id: c_5j3zKSWQBas3cc5eugRo3e
          source_id: s_dOzCW3QtVYDb_II1SCcTAX
          stance: supports
          locator: CBDB：兄弟 王玹（200596）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王玹 为同胞（CBDB 记「弟」），王玹 之父／母即 王瑄 之父／母。
          source:
            id: s_dOzCW3QtVYDb_II1SCcTAX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 260239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json
            external_identifier: CBDB:260239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y9VpT5a4bHRsBrje4LpbfA
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YDuP0ncgXgbEb6qlkhL0r1
        subject_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o7Lg-yPRwLelwpydznZSEg
          claim_id: c_YDuP0ncgXgbEb6qlkhL0r1
          source_id: s_dOzCW3QtVYDb_II1SCcTAX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200596 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dOzCW3QtVYDb_II1SCcTAX
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 260239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json
            external_identifier: CBDB:260239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。成化二十三年進士，籍贯海豐，曾任義官。（中国历代人物传记资料库 CBDB 260239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y9VpT5a4bHRsBrje4LpbfA | 王豫 | accepted |
| other | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 260239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json)
