---
schema: wang-person/v1
id: p_iKQiG772Qww6F6UKUzUMja
status: active
merged_into: null
display_name: 王瀚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cGWtQekxJ3idKkrmqcaiBP
        subject_person_id: p_iKQiG772Qww6F6UKUzUMja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9NuxmxcjV2GkZCwLjYvJD
          claim_id: c_cGWtQekxJ3idKkrmqcaiBP
          source_id: s_ZQfg3s64om9UP4MPw1bNAp
          stance: supports
          locator: CBDB:244050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244050）
          source: &a1
            id: s_ZQfg3s64om9UP4MPw1bNAp
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 244050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244050&o=json
            external_identifier: CBDB:244050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uL6Eo9uK6GG5MEAXBWa9DH
        subject_person_id: p_iKQiG772Qww6F6UKUzUMja
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚，明人物。成化五年進士，籍贯內鄉。（中国历代人物传记资料库 CBDB 244050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_snDQduWnRy_C3tsrrY66Up
          claim_id: c_uL6Eo9uK6GG5MEAXBWa9DH
          source_id: s_ZQfg3s64om9UP4MPw1bNAp
          stance: supports
          locator: CBDB:244050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X7SWhOGDDZ9afLlskQIlFI
        subject_person_id: p_YJESKH2yrBjEwkYMGE9k5E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKQiG772Qww6F6UKUzUMja
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8zM1UhQBKIoyDxAS5IFOVk
          claim_id: c_X7SWhOGDDZ9afLlskQIlFI
          source_id: s_bPOvNKY_v68jwDQ_BOHXAV
          stance: supports
          locator: CBDB：兄弟 王溥（199368）之父／母 王儼
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀚 与 王溥 为同胞（CBDB 记「兄」），王溥 之父／母即 王瀚 之父／母。
          source:
            id: s_bPOvNKY_v68jwDQ_BOHXAV
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 244050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244050&o=json
            external_identifier: CBDB:244050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YJESKH2yrBjEwkYMGE9k5E
        status: active
        display_name: 王儼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EzbqiF7b5H1BJ79qchoD-Y
        subject_person_id: p_iKQiG772Qww6F6UKUzUMja
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v5g4H2q2EXrnEQmwfqdSHb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IlTE9LBgqJ0ZXpOjAUzdPe
          claim_id: c_EzbqiF7b5H1BJ79qchoD-Y
          source_id: s_bPOvNKY_v68jwDQ_BOHXAV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199368 王溥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bPOvNKY_v68jwDQ_BOHXAV
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 244050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244050&o=json
            external_identifier: CBDB:244050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v5g4H2q2EXrnEQmwfqdSHb
        status: active
        display_name: 王溥
        merged_into_person_id: null
---

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| bio.summary | 王瀚，明人物。成化五年進士，籍贯內鄉。（中国历代人物传记资料库 CBDB 244050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YJESKH2yrBjEwkYMGE9k5E | 王儼 | accepted |
| other | p_v5g4H2q2EXrnEQmwfqdSHb | 王溥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 244050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244050&o=json)
