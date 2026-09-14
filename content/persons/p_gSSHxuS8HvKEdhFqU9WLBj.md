---
schema: wang-person/v1
id: p_gSSHxuS8HvKEdhFqU9WLBj
status: active
merged_into: null
display_name: 王振祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jL1pLrUPrhJ8bCkfhBXQvW
        subject_person_id: p_gSSHxuS8HvKEdhFqU9WLBj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFBHY1broQJmmzMgTe9n8A
          claim_id: c_jL1pLrUPrhJ8bCkfhBXQvW
          source_id: s_HnnmDKLwZgDrduh63pTA4i
          stance: supports
          locator: CBDB:236267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236267）
          source: &a1
            id: s_HnnmDKLwZgDrduh63pTA4i
            source_type: api_record
            title: 中国历代人物传记资料库：王振祖（CBDB 236267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236267&o=json
            external_identifier: CBDB:236267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uWiYACnFqeEeswiLwjQpFa
        subject_person_id: p_gSSHxuS8HvKEdhFqU9WLBj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振祖，明人物。籍贯同州，曾任把總。（中国历代人物传记资料库 CBDB 236267）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_He3LZUPVLIkHGHrcaBa-n2
          claim_id: c_uWiYACnFqeEeswiLwjQpFa
          source_id: s_HnnmDKLwZgDrduh63pTA4i
          stance: supports
          locator: CBDB:236267
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gPC2dzYzrlTRudW1YwZ8Sx
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gSSHxuS8HvKEdhFqU9WLBj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jm-LvFVxcCgBMKlNxLv3I_
          claim_id: c_gPC2dzYzrlTRudW1YwZ8Sx
          source_id: s_jtImcwqpFGsO6-ZH0P_TdZ
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王振祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王振祖 之父／母。
          source:
            id: s_jtImcwqpFGsO6-ZH0P_TdZ
            source_type: api_record
            title: 中国历代人物传记资料库：王振祖（CBDB 236267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236267&o=json
            external_identifier: CBDB:236267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8EDFnNdhzDymseXpHLiztk
        status: active
        display_name: 王應誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VLUnd41e5PugP2CODYpsnp
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gSSHxuS8HvKEdhFqU9WLBj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Muvn_Z5DsD9ol_eQloAIal
          claim_id: c_VLUnd41e5PugP2CODYpsnp
          source_id: s_jtImcwqpFGsO6-ZH0P_TdZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207804 王弘祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jtImcwqpFGsO6-ZH0P_TdZ
            source_type: api_record
            title: 中国历代人物传记资料库：王振祖（CBDB 236267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236267&o=json
            external_identifier: CBDB:236267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
---

# 王振祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振祖 | accepted |
| bio.summary | 王振祖，明人物。籍贯同州，曾任把總。（中国历代人物传记资料库 CBDB 236267） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8EDFnNdhzDymseXpHLiztk | 王應誥 | accepted |
| other | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王振祖（CBDB 236267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236267&o=json)
