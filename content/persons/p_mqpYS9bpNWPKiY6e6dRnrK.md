---
schema: wang-person/v1
id: p_mqpYS9bpNWPKiY6e6dRnrK
status: active
merged_into: null
display_name: 王錫民
cbdb_id: 210657
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Se4WroDJJ39dQD4U1GSh4H
        subject_person_id: p_mqpYS9bpNWPKiY6e6dRnrK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫民，明人物。隆慶五年進士，籍贯句容。（中国历代人物传记资料库 CBDB 210657）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1jDBHbw70arttIP_8oomhL
          claim_id: c_Se4WroDJJ39dQD4U1GSh4H
          source_id: s_xJpQTAzMS85gBQ5EY35gpa
          stance: supports
          locator: CBDB:210657
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xJpQTAzMS85gBQ5EY35gpa
            source_type: api_record
            title: 中国历代人物传记资料库：王錫民（CBDB 210657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210657&o=json
            external_identifier: CBDB:210657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t92cK4nm15zfLCevFtFhN1
        subject_person_id: p_mqpYS9bpNWPKiY6e6dRnrK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xCJ7pMJ8niWVToc5ndmc2D
          claim_id: c_t92cK4nm15zfLCevFtFhN1
          source_id: s_xJpQTAzMS85gBQ5EY35gpa
          stance: supports
          locator: CBDB:210657
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ejeg-b0S6vpilOqCLi79i4
        subject_person_id: p_FnmNgMN9f39gDixwHRx4Tp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mqpYS9bpNWPKiY6e6dRnrK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lYfKoZ1-pMrC-4oJ3PxIXq
          claim_id: c_ejeg-b0S6vpilOqCLi79i4
          source_id: s_0rBJEE-__0ZnX3Y2M53X7G
          stance: supports
          locator: CBDB：兄弟 王敬民（126758）之父／母 王稅
          quotation: null
          interpretation_note: 由兄弟关系推断：王錫民 与 王敬民 为同胞（CBDB 记「兄」），王敬民 之父／母即 王錫民 之父／母。
          source:
            id: s_0rBJEE-__0ZnX3Y2M53X7G
            source_type: api_record
            title: 中国历代人物传记资料库：王錫民（CBDB 210657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210657&o=json
            external_identifier: CBDB:210657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FnmNgMN9f39gDixwHRx4Tp
        status: active
        display_name: 王稅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Bym29JKmTl20c-oVnq9ZUu
        subject_person_id: p_6tt42hCZA528675DNELou4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mqpYS9bpNWPKiY6e6dRnrK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i9-qnACe-Wwhe8ntRV6qNv
          claim_id: c_Bym29JKmTl20c-oVnq9ZUu
          source_id: s_0rBJEE-__0ZnX3Y2M53X7G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126758 王敬民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0rBJEE-__0ZnX3Y2M53X7G
            source_type: api_record
            title: 中国历代人物传记资料库：王錫民（CBDB 210657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210657&o=json
            external_identifier: CBDB:210657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6tt42hCZA528675DNELou4
        status: active
        display_name: 王敬民
        merged_into_person_id: null
---

# 王錫民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錫民，明人物。隆慶五年進士，籍贯句容。（中国历代人物传记资料库 CBDB 210657） | accepted |
| name.primary | 王錫民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FnmNgMN9f39gDixwHRx4Tp | 王稅 | accepted |
| other | p_6tt42hCZA528675DNELou4 | 王敬民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錫民（CBDB 210657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210657&o=json)
