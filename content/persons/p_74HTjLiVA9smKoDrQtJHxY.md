---
schema: wang-person/v1
id: p_74HTjLiVA9smKoDrQtJHxY
status: active
merged_into: null
display_name: 王述祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9MXfNWFwyq1RjACjJ7ZUxM
        subject_person_id: p_74HTjLiVA9smKoDrQtJHxY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QKj9wW1mx4ChKW7V9q8xLD
          claim_id: c_9MXfNWFwyq1RjACjJ7ZUxM
          source_id: s_dSHxPP5xgkGWEaD4tWYV2P
          stance: supports
          locator: CBDB:334091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334091）
          source: &a1
            id: s_dSHxPP5xgkGWEaD4tWYV2P
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 334091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json
            external_identifier: CBDB:334091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6LxHB8K9LkH1y57cUhGWv6
        subject_person_id: p_74HTjLiVA9smKoDrQtJHxY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334091）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r0Zk-aFS-R3jzU2UNqd5ta
          claim_id: c_6LxHB8K9LkH1y57cUhGWv6
          source_id: s_dSHxPP5xgkGWEaD4tWYV2P
          stance: supports
          locator: CBDB:334091
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dPlY0Pk4p__Cj9UCUg5qFW
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_74HTjLiVA9smKoDrQtJHxY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eFlZJFZR5WDT0RtGKYvL6A
          claim_id: c_dPlY0Pk4p__Cj9UCUg5qFW
          source_id: s_nvrVllNucj7OaihtUEjJby
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王述祖 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王述祖 之父／母。
          source:
            id: s_nvrVllNucj7OaihtUEjJby
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 334091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json
            external_identifier: CBDB:334091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51Pca5wdng4NB9T2FpYuFX
        status: active
        display_name: 王可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Dodt2sLOyae0frOJF80XOb
        subject_person_id: p_74HTjLiVA9smKoDrQtJHxY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGTZ3O8Qh0o344HXXgTuCc
          claim_id: c_Dodt2sLOyae0frOJF80XOb
          source_id: s_nvrVllNucj7OaihtUEjJby
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126502 王汝魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nvrVllNucj7OaihtUEjJby
            source_type: api_record
            title: 中国历代人物传记资料库：王述祖（CBDB 334091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json
            external_identifier: CBDB:334091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
---

# 王述祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述祖 | accepted |
| bio.summary | 王述祖，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334091） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_51Pca5wdng4NB9T2FpYuFX | 王可 | accepted |
| other | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王述祖（CBDB 334091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334091&o=json)
