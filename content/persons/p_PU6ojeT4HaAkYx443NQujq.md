---
schema: wang-person/v1
id: p_PU6ojeT4HaAkYx443NQujq
status: active
merged_into: null
display_name: 王偉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_85cJCCoShSr2mspL3Tiy3v
        subject_person_id: p_PU6ojeT4HaAkYx443NQujq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nHaj1ZGdnWWDD9GGFjWPp3
          claim_id: c_85cJCCoShSr2mspL3Tiy3v
          source_id: s_6ZBP6zdsmNYyiwSj4p3mph
          stance: supports
          locator: CBDB:253921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253921）
          source: &a1
            id: s_6ZBP6zdsmNYyiwSj4p3mph
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 253921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253921&o=json
            external_identifier: CBDB:253921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SNkJAB93KYcyiHKLQ4hC99
        subject_person_id: p_PU6ojeT4HaAkYx443NQujq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉，明人物。建文二年殿試進士，籍贯吉水。（中国历代人物传记资料库 CBDB 253921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vtf229M5yGIbOptURFa5v8
          claim_id: c_SNkJAB93KYcyiHKLQ4hC99
          source_id: s_6ZBP6zdsmNYyiwSj4p3mph
          stance: supports
          locator: CBDB:253921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M44iKiEn6spzQCG-5KYA70
        subject_person_id: p_9yUsLx8gKe9km4PvyMBpGL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PU6ojeT4HaAkYx443NQujq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7US_8q8wXU3Zl4hvhcGups
          claim_id: c_M44iKiEn6spzQCG-5KYA70
          source_id: s_tLi54l97ilQ1ap2lcpniNv
          stance: supports
          locator: CBDB：兄弟 王艮（66624）之父／母 王期尹
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王艮 为同胞（CBDB 记「兄」），王艮 之父／母即 王偉 之父／母。
          source:
            id: s_tLi54l97ilQ1ap2lcpniNv
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 253921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253921&o=json
            external_identifier: CBDB:253921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9yUsLx8gKe9km4PvyMBpGL
        status: active
        display_name: 王期尹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_erBagqy7sZ_8FlZOJ23c2v
        subject_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PU6ojeT4HaAkYx443NQujq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52nYCUr2p8O4d8VBj2S2GN
          claim_id: c_erBagqy7sZ_8FlZOJ23c2v
          source_id: s_tLi54l97ilQ1ap2lcpniNv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 66624 王艮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tLi54l97ilQ1ap2lcpniNv
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 253921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253921&o=json
            external_identifier: CBDB:253921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CxY5QtqK8BuHWqQgSQqbEb
        status: active
        display_name: 王艮
        merged_into_person_id: null
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| bio.summary | 王偉，明人物。建文二年殿試進士，籍贯吉水。（中国历代人物传记资料库 CBDB 253921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9yUsLx8gKe9km4PvyMBpGL | 王期尹 | accepted |
| other | p_CxY5QtqK8BuHWqQgSQqbEb | 王艮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 253921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253921&o=json)
