---
schema: wang-person/v1
id: p_DbQa1LeKcZQQ96f1WNkK2a
status: active
merged_into: null
display_name: 王時某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SQmNw7kiC9iDMHj6g3az2K
        subject_person_id: p_DbQa1LeKcZQQ96f1WNkK2a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qsNNAkcLi74VitjZ8MAukR
          claim_id: c_SQmNw7kiC9iDMHj6g3az2K
          source_id: s_gp63AEbj7gzD8N85QQhsmF
          stance: supports
          locator: CBDB:287093
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287093）
          source: &a1
            id: s_gp63AEbj7gzD8N85QQhsmF
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 287093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json
            external_identifier: CBDB:287093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s3QcgBzaRaDSWtk5yEEEjS
        subject_person_id: p_DbQa1LeKcZQQ96f1WNkK2a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時某，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287093）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KQblOGLnjRQY2tYKnEhEf1
          claim_id: c_s3QcgBzaRaDSWtk5yEEEjS
          source_id: s_gp63AEbj7gzD8N85QQhsmF
          stance: supports
          locator: CBDB:287093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pxyl9cRxVnMFmd6jp9GKlG
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DbQa1LeKcZQQ96f1WNkK2a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUl1ioe_93AxIXILp_WKNo
          claim_id: c_pxyl9cRxVnMFmd6jp9GKlG
          source_id: s_TZuCkxn47Rs3Owmc3LELr3
          stance: supports
          locator: CBDB：兄弟 王時習（202373）之父／母 王敏道
          quotation: null
          interpretation_note: 由兄弟关系推断：王時某 与 王時習 为同胞（CBDB 记「兄」），王時習 之父／母即 王時某 之父／母。
          source:
            id: s_TZuCkxn47Rs3Owmc3LELr3
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 287093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json
            external_identifier: CBDB:287093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SeUwbsi3ek9as5xjE9GYzB
        status: active
        display_name: 王敏道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bSQdnc6Ueqp-bgsIxvhEoN
        subject_person_id: p_DbQa1LeKcZQQ96f1WNkK2a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8qDG51xicCXDTe2N4YkUB
          claim_id: c_bSQdnc6Ueqp-bgsIxvhEoN
          source_id: s_TZuCkxn47Rs3Owmc3LELr3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TZuCkxn47Rs3Owmc3LELr3
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 287093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json
            external_identifier: CBDB:287093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s2J6v6Z1BCr8cEtWSejd2v
        status: active
        display_name: 王時習
        merged_into_person_id: null
---

# 王時某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時某 | accepted |
| bio.summary | 王時某，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287093） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SeUwbsi3ek9as5xjE9GYzB | 王敏道 | accepted |
| other | p_s2J6v6Z1BCr8cEtWSejd2v | 王時習 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時某（CBDB 287093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json)
