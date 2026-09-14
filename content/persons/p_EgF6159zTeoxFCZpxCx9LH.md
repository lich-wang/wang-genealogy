---
schema: wang-person/v1
id: p_EgF6159zTeoxFCZpxCx9LH
status: active
merged_into: null
display_name: 王漸民
cbdb_id: 209990
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HFg7Gq15dGMidjMDUdgByX
        subject_person_id: p_EgF6159zTeoxFCZpxCx9LH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vAaCB987UYx2raNiLV-x2C
          claim_id: c_HFg7Gq15dGMidjMDUdgByX
          source_id: s_G5w5m2fcYdgHbEf6XL62k8
          stance: supports
          locator: CBDB:209990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_G5w5m2fcYdgHbEf6XL62k8
            source_type: api_record
            title: 中国历代人物传记资料库：王漸民（CBDB 209990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json
            external_identifier: CBDB:209990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ZgK3MDN7sNZXkMqwVrWFt
        subject_person_id: p_EgF6159zTeoxFCZpxCx9LH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4s7Kb4gDkFoHadunrJeuJx
          claim_id: c_1ZgK3MDN7sNZXkMqwVrWFt
          source_id: s_G5w5m2fcYdgHbEf6XL62k8
          stance: supports
          locator: CBDB:209990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4j_ZrXGdGtEsaPjbf7rmyh
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EgF6159zTeoxFCZpxCx9LH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xw5MjUVAkzfbBBmUZYTC6q
          claim_id: c_4j_ZrXGdGtEsaPjbf7rmyh
          source_id: s_WBg9tpiyx6Ki3Y0haeoqQB
          stance: supports
          locator: CBDB：兄弟 王淑民（205869）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸民 与 王淑民 为同胞（CBDB 记「兄」），王淑民 之父／母即 王漸民 之父／母。
          source:
            id: s_WBg9tpiyx6Ki3Y0haeoqQB
            source_type: api_record
            title: 中国历代人物传记资料库：王漸民（CBDB 209990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json
            external_identifier: CBDB:209990
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
        id: c_avHDAQwSIG5dBjVRMKY3wx
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EgF6159zTeoxFCZpxCx9LH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ku6Mn-El9tawf9HgDKOLJ9
          claim_id: c_avHDAQwSIG5dBjVRMKY3wx
          source_id: s_WBg9tpiyx6Ki3Y0haeoqQB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WBg9tpiyx6Ki3Y0haeoqQB
            source_type: api_record
            title: 中国历代人物传记资料库：王漸民（CBDB 209990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json
            external_identifier: CBDB:209990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3K8YMQuna5CRk3d72KDoG1
        status: active
        display_name: 王淑民
        merged_into_person_id: null
---

# 王漸民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王漸民，明人物。隆慶五年進士，籍贯合江。（中国历代人物传记资料库 CBDB 209990） | accepted |
| name.primary | 王漸民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| other | p_3K8YMQuna5CRk3d72KDoG1 | 王淑民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漸民（CBDB 209990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json)
