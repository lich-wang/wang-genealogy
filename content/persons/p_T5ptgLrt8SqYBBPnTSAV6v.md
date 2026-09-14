---
schema: wang-person/v1
id: p_T5ptgLrt8SqYBBPnTSAV6v
status: active
merged_into: null
display_name: 王良相
cbdb_id: 266080
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BKDuHDS4Bi8cSF3Cc5NGg8
        subject_person_id: p_T5ptgLrt8SqYBBPnTSAV6v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良相，明人物。弘治六年進士，籍贯陳州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 266080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KGTuCYWhaFJjMRJbdbXOlR
          claim_id: c_BKDuHDS4Bi8cSF3Cc5NGg8
          source_id: s_djMUJxP4kMPg29vgA4zXvC
          stance: supports
          locator: CBDB:266080
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_djMUJxP4kMPg29vgA4zXvC
            source_type: api_record
            title: 中国历代人物传记资料库：王良相（CBDB 266080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266080&o=json
            external_identifier: CBDB:266080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgngzjbZu3Hpa4eqdVdmCR
        subject_person_id: p_T5ptgLrt8SqYBBPnTSAV6v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gGhCCvK4NmNX74bXZm9bSk
          claim_id: c_vgngzjbZu3Hpa4eqdVdmCR
          source_id: s_djMUJxP4kMPg29vgA4zXvC
          stance: supports
          locator: CBDB:266080
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PgEQkNxEpQwMEWtQuQD4Tc
        subject_person_id: p_LzCu3N2C5U3pdrCETHd45i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T5ptgLrt8SqYBBPnTSAV6v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDTThc4zTzpuajSxBNIc6p
          claim_id: c_PgEQkNxEpQwMEWtQuQD4Tc
          source_id: s_cYl7WOQao7MXAPnyI3dcZI
          stance: supports
          locator: CBDB：兄弟 王良臣（126528）之父／母 王璋
          quotation: null
          interpretation_note: 由兄弟关系推断：王良相 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王良相 之父／母。
          source:
            id: s_cYl7WOQao7MXAPnyI3dcZI
            source_type: api_record
            title: 中国历代人物传记资料库：王良相（CBDB 266080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266080&o=json
            external_identifier: CBDB:266080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LzCu3N2C5U3pdrCETHd45i
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YshXhVNUwNkIu7zX_MKEJk
        subject_person_id: p_T5ptgLrt8SqYBBPnTSAV6v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i98FVCHxFpmHEPq1xWByi6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_To_LWI8TXY0yl6U4kJbFWt
          claim_id: c_YshXhVNUwNkIu7zX_MKEJk
          source_id: s_cYl7WOQao7MXAPnyI3dcZI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126528 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cYl7WOQao7MXAPnyI3dcZI
            source_type: api_record
            title: 中国历代人物传记资料库：王良相（CBDB 266080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266080&o=json
            external_identifier: CBDB:266080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i98FVCHxFpmHEPq1xWByi6
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王良相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良相，明人物。弘治六年進士，籍贯陳州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 266080） | accepted |
| name.primary | 王良相 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LzCu3N2C5U3pdrCETHd45i | 王璋 | accepted |
| other | p_i98FVCHxFpmHEPq1xWByi6 | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良相（CBDB 266080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266080&o=json)
