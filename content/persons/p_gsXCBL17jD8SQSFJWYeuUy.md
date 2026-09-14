---
schema: wang-person/v1
id: p_gsXCBL17jD8SQSFJWYeuUy
status: active
merged_into: null
display_name: 王九章
cbdb_id: 217990
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4oXLvGfhnPWSUeP8SjMNVK
        subject_person_id: p_gsXCBL17jD8SQSFJWYeuUy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九章，明人物。萬曆五年進士，籍贯長安，曾任典史。（中国历代人物传记资料库 CBDB 217990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5qaSomWrsNjEBnmg3P2sAQ
          claim_id: c_4oXLvGfhnPWSUeP8SjMNVK
          source_id: s_9obwABkPFqYKNWDtgrQmBE
          stance: supports
          locator: CBDB:217990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9obwABkPFqYKNWDtgrQmBE
            source_type: api_record
            title: 中国历代人物传记资料库：王九章（CBDB 217990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217990&o=json
            external_identifier: CBDB:217990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKxdufF9UJPxWgCA1TeNnX
        subject_person_id: p_gsXCBL17jD8SQSFJWYeuUy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vDgRqVA1vbgq61KHx3JKwf
          claim_id: c_LKxdufF9UJPxWgCA1TeNnX
          source_id: s_9obwABkPFqYKNWDtgrQmBE
          stance: supports
          locator: CBDB:217990
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jkt28QcZMSDOjcjMQFLZ7H
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gsXCBL17jD8SQSFJWYeuUy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1slV9WLropvw-8KULmIlz
          claim_id: c_Jkt28QcZMSDOjcjMQFLZ7H
          source_id: s_1mnlAXHWygpfTOtIrM-h4U
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九章 与 王九儀 为同胞（CBDB 记「兄」），王九儀 之父／母即 王九章 之父／母。
          source:
            id: s_1mnlAXHWygpfTOtIrM-h4U
            source_type: api_record
            title: 中国历代人物传记资料库：王九章（CBDB 217990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217990&o=json
            external_identifier: CBDB:217990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gtgcsF161bSGyqs9GdxEZB
        status: active
        display_name: 王鵾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_N-Y6zuc_SPTP4PRvivmdRQ
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gsXCBL17jD8SQSFJWYeuUy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FEtXCTMAHUa0dA1A09Z0yW
          claim_id: c_N-Y6zuc_SPTP4PRvivmdRQ
          source_id: s_1mnlAXHWygpfTOtIrM-h4U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206435 王九儀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1mnlAXHWygpfTOtIrM-h4U
            source_type: api_record
            title: 中国历代人物传记资料库：王九章（CBDB 217990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217990&o=json
            external_identifier: CBDB:217990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MoTp1H1qMsn6hE765X8qFG
        status: active
        display_name: 王九儀
        merged_into_person_id: null
---

# 王九章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九章，明人物。萬曆五年進士，籍贯長安，曾任典史。（中国历代人物传记资料库 CBDB 217990） | accepted |
| name.primary | 王九章 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gtgcsF161bSGyqs9GdxEZB | 王鵾 | accepted |
| other | p_MoTp1H1qMsn6hE765X8qFG | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九章（CBDB 217990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217990&o=json)
