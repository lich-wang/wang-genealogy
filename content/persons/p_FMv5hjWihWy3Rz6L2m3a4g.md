---
schema: wang-person/v1
id: p_FMv5hjWihWy3Rz6L2m3a4g
status: active
merged_into: null
display_name: 王蘧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rm281Nb31CzuhD52A9jGPf
        subject_person_id: p_FMv5hjWihWy3Rz6L2m3a4g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZQfkf4tHGku4YWRvFi5J1F
          claim_id: c_Rm281Nb31CzuhD52A9jGPf
          source_id: s_Z9tYRsNdoq4SjTiqW4z4Fg
          stance: supports
          locator: CBDB:45850
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45850）
          source: &a1
            id: s_Z9tYRsNdoq4SjTiqW4z4Fg
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 45850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45850&o=json
            external_identifier: CBDB:45850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BkGVoEmbm5pfoe47jZogD1
        subject_person_id: p_FMv5hjWihWy3Rz6L2m3a4g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘧，宋人物。籍贯臨城。（中国历代人物传记资料库 CBDB 45850）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAMZyt1N_yQoKnHnP3c7F_
          claim_id: c_BkGVoEmbm5pfoe47jZogD1
          source_id: s_Z9tYRsNdoq4SjTiqW4z4Fg
          stance: supports
          locator: CBDB:45850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NdBg16bGrC7LX_FsZYwJ12
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FMv5hjWihWy3Rz6L2m3a4g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QHI_UhBQRpnvKZjOHBDinQ
          claim_id: c_NdBg16bGrC7LX_FsZYwJ12
          source_id: s_cBMQjPqi27BYfIBzMypocy
          stance: supports
          locator: CBDB：兄弟 王適（22214）之父／母 王正路
          quotation: null
          interpretation_note: 由兄弟关系推断：王蘧 与 王適 为同胞（CBDB 记「兄」），王適 之父／母即 王蘧 之父／母。
          source:
            id: s_cBMQjPqi27BYfIBzMypocy
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 45850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45850&o=json
            external_identifier: CBDB:45850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iLUdeieVQDb1mxk8x28Vj3
        status: active
        display_name: 王正路
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QZHesrcDZdLWvW2LbrUnjj
        subject_person_id: p_FMv5hjWihWy3Rz6L2m3a4g
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3SSNxZIhXx40A6Z8n_659d
          claim_id: c_QZHesrcDZdLWvW2LbrUnjj
          source_id: s_cBMQjPqi27BYfIBzMypocy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22214 王適）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cBMQjPqi27BYfIBzMypocy
            source_type: api_record
            title: 中国历代人物传记资料库：王蘧（CBDB 45850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45850&o=json
            external_identifier: CBDB:45850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tNxDF9RNAwjuxwXQbHswdX
        status: active
        display_name: 王適
        merged_into_person_id: null
---

# 王蘧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘧 | accepted |
| bio.summary | 王蘧，宋人物。籍贯臨城。（中国历代人物传记资料库 CBDB 45850） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iLUdeieVQDb1mxk8x28Vj3 | 王正路 | accepted |
| other | p_tNxDF9RNAwjuxwXQbHswdX | 王適 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘧（CBDB 45850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45850&o=json)
