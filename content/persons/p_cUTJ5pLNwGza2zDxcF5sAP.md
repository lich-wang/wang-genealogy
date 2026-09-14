---
schema: wang-person/v1
id: p_cUTJ5pLNwGza2zDxcF5sAP
status: active
merged_into: null
display_name: 王鉞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w82iQKJkotwY6qtLph8JEu
        subject_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h3kac95amUXTgFM68e3oC7
          claim_id: c_w82iQKJkotwY6qtLph8JEu
          source_id: s_Jjrg3aWcD11E5R8CcZCAGB
          stance: supports
          locator: CBDB:243562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243562）
          source: &a1
            id: s_Jjrg3aWcD11E5R8CcZCAGB
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 243562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json
            external_identifier: CBDB:243562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WVUpKA1BH2YvDSD4pQ5aH2
        subject_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。成化五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 243562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KPrd0I4ZgcVtalQRdOOdfB
          claim_id: c_WVUpKA1BH2YvDSD4pQ5aH2
          source_id: s_Jjrg3aWcD11E5R8CcZCAGB
          stance: supports
          locator: CBDB:243562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EI1UdC-WI3cBQLGNsdhG1F
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCvLt4S_ZOsLsMNOi9S8Hy
          claim_id: c_EI1UdC-WI3cBQLGNsdhG1F
          source_id: s_tIALf9UtSZIZ10OJ6wEhJr
          stance: supports
          locator: CBDB：兄弟 王廷（199332）之父／母 王秀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉞 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王鉞 之父／母。
          source:
            id: s_tIALf9UtSZIZ10OJ6wEhJr
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 243562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json
            external_identifier: CBDB:243562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GZ11NySmttrD94bxvY4MjB
        status: active
        display_name: 王秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cE1eX_sdwZ6xiSc0GwPQb-
        subject_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ggM-3l_XxYqPfLUS5Ufi-D
          claim_id: c_cE1eX_sdwZ6xiSc0GwPQb-
          source_id: s_tIALf9UtSZIZ10OJ6wEhJr
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199332 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tIALf9UtSZIZ10OJ6wEhJr
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 243562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json
            external_identifier: CBDB:243562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aC1svXXphEQ9jhiLWX1sn6
        status: active
        display_name: 王廷
        merged_into_person_id: null
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。成化五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 243562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GZ11NySmttrD94bxvY4MjB | 王秀 | accepted |
| other | p_aC1svXXphEQ9jhiLWX1sn6 | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 243562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json)
