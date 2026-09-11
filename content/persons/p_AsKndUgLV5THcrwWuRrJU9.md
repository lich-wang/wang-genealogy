---
schema: wang-person/v1
id: p_AsKndUgLV5THcrwWuRrJU9
status: active
merged_into: null
display_name: 王君賞
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jae2JJJo882VZaxTYskzum
        subject_person_id: p_AsKndUgLV5THcrwWuRrJU9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君賞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uHschd14eg1YQfFnDmNwqH
          claim_id: c_jae2JJJo882VZaxTYskzum
          source_id: s_Ew1CSTYd8eyY7kjJ4SjhAP
          stance: supports
          locator: CBDB:204856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204856）
          source: &a1
            id: s_Ew1CSTYd8eyY7kjJ4SjhAP
            source_type: api_record
            title: 中国历代人物传记资料库：王君賞（CBDB 204856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204856&o=json
            external_identifier: CBDB:204856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x9nh2VYjgoWNU1gdbZHQaH
        subject_person_id: p_AsKndUgLV5THcrwWuRrJU9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1533年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bugNSkJM86LQPU1FrKFcfL
          claim_id: c_x9nh2VYjgoWNU1gdbZHQaH
          source_id: s_Ew1CSTYd8eyY7kjJ4SjhAP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Ga9w3K4nvbP4wKpz6knJK
        subject_person_id: p_AsKndUgLV5THcrwWuRrJU9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qccCQ4DAjS43zG6DhDS77x
          claim_id: c_3Ga9w3K4nvbP4wKpz6knJK
          source_id: s_Ew1CSTYd8eyY7kjJ4SjhAP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VuOxzJQ_Zn7oYVJRfvy1SK
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AsKndUgLV5THcrwWuRrJU9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A6STMKcBt4WCgIjC_xBViu
          claim_id: c_VuOxzJQ_Zn7oYVJRfvy1SK
          source_id: s_nXyHsxGYf2p44C122wVknU
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百零七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nXyHsxGYf2p44C122wVknU
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 325018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325018&o=json
            external_identifier: CBDB:325018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.195Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3UKbRHPbQbqFq84iP2CGsh
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_S96oXrLmvZAa9-s9GPBwri
        subject_person_id: p_Bz9P5PTc7BGd4evB971MVu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AsKndUgLV5THcrwWuRrJU9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yhfp_7KOpvGURlGy7n4jje
          claim_id: c_S96oXrLmvZAa9-s9GPBwri
          source_id: s_jnt5txB5M4MC9mCubuezQ6
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百零七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jnt5txB5M4MC9mCubuezQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 325017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325017&o=json
            external_identifier: CBDB:325017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bz9P5PTc7BGd4evB971MVu
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_PDit8MphO0LaehSfzYPWNB
        subject_person_id: p_VPJ9Rzf9NCJSPLshrQkpCp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AsKndUgLV5THcrwWuRrJU9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Z5qn85gpI7LDtWl55JD4g
          claim_id: c_PDit8MphO0LaehSfzYPWNB
          source_id: s_go8A7CkNrA74Tjb4M4BbwN
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百零七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_go8A7CkNrA74Tjb4M4BbwN
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 325016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325016&o=json
            external_identifier: CBDB:325016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VPJ9Rzf9NCJSPLshrQkpCp
        status: active
        display_name: 王昇
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王君賞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君賞 | accepted |
| birth.date | 1533年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3UKbRHPbQbqFq84iP2CGsh | 王惠 | accepted |
| ancestors | p_Bz9P5PTc7BGd4evB971MVu | 王純 | accepted |
| ancestors | p_VPJ9Rzf9NCJSPLshrQkpCp | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 325017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325017&o=json)
- [中国历代人物传记资料库：王惠（CBDB 325018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325018&o=json)
- [中国历代人物传记资料库：王君賞（CBDB 204856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204856&o=json)
- [中国历代人物传记资料库：王昇（CBDB 325016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325016&o=json)
