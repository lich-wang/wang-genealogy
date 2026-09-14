---
schema: wang-person/v1
id: p_o4DAn4WpdTaF7aQ26jY4dG
status: active
merged_into: null
display_name: 王良駰
cbdb_id: 210736
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8iBWbrzWNTHYKwvhKBg9ZA
        subject_person_id: p_o4DAn4WpdTaF7aQ26jY4dG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良駰，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5B-KddHCUSUVOCoIk4grnu
          claim_id: c_8iBWbrzWNTHYKwvhKBg9ZA
          source_id: s_VWqoev5MzmatgQk6dqD7u4
          stance: supports
          locator: CBDB:210736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VWqoev5MzmatgQk6dqD7u4
            source_type: api_record
            title: 中国历代人物传记资料库：王良駰（CBDB 210736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json
            external_identifier: CBDB:210736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ED1VM2GMiaZ6B2K2AEuy8n
        subject_person_id: p_o4DAn4WpdTaF7aQ26jY4dG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良駰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9qjNkCZAKk4U3HDGg6kAgW
          claim_id: c_ED1VM2GMiaZ6B2K2AEuy8n
          source_id: s_VWqoev5MzmatgQk6dqD7u4
          stance: supports
          locator: CBDB:210736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__oh-U8sJEcSabzT1OZ5A8w
        subject_person_id: p_dXbTkC8fTHTjd8NRUY9aDL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o4DAn4WpdTaF7aQ26jY4dG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHOi2U5THpqYeM9qCM81q6
          claim_id: c__oh-U8sJEcSabzT1OZ5A8w
          source_id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
          stance: supports
          locator: CBDB：兄弟 王良心（205923）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王良駰 与 王良心 为同胞（CBDB 记「兄」），王良心 之父／母即 王良駰 之父／母。
          source:
            id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
            source_type: api_record
            title: 中国历代人物传记资料库：王良駰（CBDB 210736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json
            external_identifier: CBDB:210736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dXbTkC8fTHTjd8NRUY9aDL
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nzVAW6Cx0b3av3FsGgT5G8
        subject_person_id: p_o4DAn4WpdTaF7aQ26jY4dG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6uwcn1gPVpVm7eSAr-hi3C
          claim_id: c_nzVAW6Cx0b3av3FsGgT5G8
          source_id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205923 王良心）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z9UUuSnw_zy7m_Gz9U7Ydy
            source_type: api_record
            title: 中国历代人物传记资料库：王良駰（CBDB 210736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json
            external_identifier: CBDB:210736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
---

# 王良駰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良駰，明人物。隆慶五年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 210736） | accepted |
| name.primary | 王良駰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dXbTkC8fTHTjd8NRUY9aDL | 王弼 | accepted |
| other | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良駰（CBDB 210736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210736&o=json)
