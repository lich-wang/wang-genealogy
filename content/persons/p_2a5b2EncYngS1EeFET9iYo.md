---
schema: wang-person/v1
id: p_2a5b2EncYngS1EeFET9iYo
status: active
merged_into: null
display_name: 王治民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2RVsSVAz9kyRJcVDbsfdS
        subject_person_id: p_2a5b2EncYngS1EeFET9iYo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_shK3ReBTLNQKi8qhDcQeo5
          claim_id: c_v2RVsSVAz9kyRJcVDbsfdS
          source_id: s_dGqiRtq5NkuaRTtgMB3Bac
          stance: supports
          locator: CBDB:209984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209984）
          source: &a1
            id: s_dGqiRtq5NkuaRTtgMB3Bac
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 209984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json
            external_identifier: CBDB:209984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YcABhm9bDNZw9KxHZH3ja4
        subject_person_id: p_2a5b2EncYngS1EeFET9iYo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209984）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8xAv1xE6oCzKMj2jpRm_yC
          claim_id: c_YcABhm9bDNZw9KxHZH3ja4
          source_id: s_dGqiRtq5NkuaRTtgMB3Bac
          stance: supports
          locator: CBDB:209984
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k8CymstGgwR2jsDndJTgib
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2a5b2EncYngS1EeFET9iYo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8440ErS9Lqd3HYKk__vPzd
          claim_id: c_k8CymstGgwR2jsDndJTgib
          source_id: s_oc8z6jb1vc3mnujEJoEfhl
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王治民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王治民 之父／母。
          source:
            id: s_oc8z6jb1vc3mnujEJoEfhl
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 209984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json
            external_identifier: CBDB:209984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MdJHKADyMQk6VMaKNEyXK2
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_txJT0Ki1JTUfFMb3ntqSdK
        subject_person_id: p_2a5b2EncYngS1EeFET9iYo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGFftAtz7GFBVrGuUGZ-6p
          claim_id: c_txJT0Ki1JTUfFMb3ntqSdK
          source_id: s_oc8z6jb1vc3mnujEJoEfhl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oc8z6jb1vc3mnujEJoEfhl
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 209984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json
            external_identifier: CBDB:209984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
---

# 王治民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治民 | accepted |
| bio.summary | 王治民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209984） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| other | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王治民（CBDB 209984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json)
