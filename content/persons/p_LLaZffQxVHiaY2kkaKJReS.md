---
schema: wang-person/v1
id: p_LLaZffQxVHiaY2kkaKJReS
status: active
merged_into: null
display_name: 王庭揚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KMMGavCo71NXSVqdGr7TWn
        subject_person_id: p_LLaZffQxVHiaY2kkaKJReS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6RAFS39PV8hQ7N5SdGoNnU
          claim_id: c_KMMGavCo71NXSVqdGr7TWn
          source_id: s_Wv5GJLDSLrW6ve67zZhQGL
          stance: supports
          locator: CBDB:325029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325029）
          source: &a1
            id: s_Wv5GJLDSLrW6ve67zZhQGL
            source_type: api_record
            title: 中国历代人物传记资料库：王庭揚（CBDB 325029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325029&o=json
            external_identifier: CBDB:325029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Bcj6V5vwmwMmUoWtTwek7
        subject_person_id: p_LLaZffQxVHiaY2kkaKJReS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭揚，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lK0q-8QI8klXv4b-yEtpDu
          claim_id: c_7Bcj6V5vwmwMmUoWtTwek7
          source_id: s_Wv5GJLDSLrW6ve67zZhQGL
          stance: supports
          locator: CBDB:325029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MGgEAXCrQl-XS8BIeZK-4i
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LLaZffQxVHiaY2kkaKJReS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nXQQNOtWgHzaEvO9CennNd
          claim_id: c_MGgEAXCrQl-XS8BIeZK-4i
          source_id: s_biqFBYvZy_ZgZBXIscZmUz
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王庭揚 与 王君賞 为同胞（CBDB 记「兄」），王君賞 之父／母即 王庭揚 之父／母。
          source:
            id: s_biqFBYvZy_ZgZBXIscZmUz
            source_type: api_record
            title: 中国历代人物传记资料库：王庭揚（CBDB 325029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325029&o=json
            external_identifier: CBDB:325029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3UKbRHPbQbqFq84iP2CGsh
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YXpezQPvdy_nB5G0lgdFXO
        subject_person_id: p_AsKndUgLV5THcrwWuRrJU9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LLaZffQxVHiaY2kkaKJReS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kSnf5kB323n-AYPMKNtD0X
          claim_id: c_YXpezQPvdy_nB5G0lgdFXO
          source_id: s_biqFBYvZy_ZgZBXIscZmUz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204856 王君賞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_biqFBYvZy_ZgZBXIscZmUz
            source_type: api_record
            title: 中国历代人物传记资料库：王庭揚（CBDB 325029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325029&o=json
            external_identifier: CBDB:325029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AsKndUgLV5THcrwWuRrJU9
        status: active
        display_name: 王君賞
        merged_into_person_id: null
---

# 王庭揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭揚 | accepted |
| bio.summary | 王庭揚，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3UKbRHPbQbqFq84iP2CGsh | 王惠 | accepted |
| other | p_AsKndUgLV5THcrwWuRrJU9 | 王君賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭揚（CBDB 325029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325029&o=json)
