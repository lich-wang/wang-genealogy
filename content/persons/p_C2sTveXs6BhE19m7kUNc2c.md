---
schema: wang-person/v1
id: p_C2sTveXs6BhE19m7kUNc2c
status: active
merged_into: null
display_name: 王音
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQFMkvVeP9PMcvraBUPSyz
        subject_person_id: p_C2sTveXs6BhE19m7kUNc2c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3voQUWoN6X92Jn44ZuHT6x
          claim_id: c_oQFMkvVeP9PMcvraBUPSyz
          source_id: s_Dj6KjNf8j1GeJQFz8sNfF9
          stance: supports
          locator: CBDB:266964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266964）
          source: &a1
            id: s_Dj6KjNf8j1GeJQFz8sNfF9
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 266964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json
            external_identifier: CBDB:266964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dD4Rxx3ni8Z6ACDmB48JWx
        subject_person_id: p_C2sTveXs6BhE19m7kUNc2c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ipx1-BevHEDrYt6WLoDUo4
          claim_id: c_dD4Rxx3ni8Z6ACDmB48JWx
          source_id: s_Dj6KjNf8j1GeJQFz8sNfF9
          stance: supports
          locator: CBDB:266964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3GTdXTdKAaFGkrZCNc91Y8
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C2sTveXs6BhE19m7kUNc2c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KPgdpfJKqxOQKPJehtJnM
          claim_id: c_3GTdXTdKAaFGkrZCNc91Y8
          source_id: s_jlmQ3GK-ePhMR_shjHHbUf
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王音 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王音 之父／母。
          source:
            id: s_jlmQ3GK-ePhMR_shjHHbUf
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 266964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json
            external_identifier: CBDB:266964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        status: active
        display_name: 王久壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7WQzNiYB_7rD_Q2B1Jxpf8
        subject_person_id: p_C2sTveXs6BhE19m7kUNc2c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssMC79FXuKVeJU2501MMsc
          claim_id: c_7WQzNiYB_7rD_Q2B1Jxpf8
          source_id: s_jlmQ3GK-ePhMR_shjHHbUf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jlmQ3GK-ePhMR_shjHHbUf
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 266964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json
            external_identifier: CBDB:266964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fG2ZSSsFcXdaZWCtjXUkRA
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
---

# 王音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王音 | accepted |
| bio.summary | 王音，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ax72Y4zqcv4L6DYQUb7Eu1 | 王久壽 | accepted |
| other | p_fG2ZSSsFcXdaZWCtjXUkRA | 王朝卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王音（CBDB 266964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266964&o=json)
