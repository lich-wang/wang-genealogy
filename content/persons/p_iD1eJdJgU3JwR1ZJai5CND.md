---
schema: wang-person/v1
id: p_iD1eJdJgU3JwR1ZJai5CND
status: active
merged_into: null
display_name: 王瓊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GkK2wMa4KMARFxZRyPJzo6
        subject_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1roHbvdQzeM2ubYPLJoWyS
          claim_id: c_GkK2wMa4KMARFxZRyPJzo6
          source_id: s_WbwRWZ9r27Kbyi31xSNSvx
          stance: supports
          locator: CBDB:244701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244701）
          source: &a1
            id: s_WbwRWZ9r27Kbyi31xSNSvx
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 244701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json
            external_identifier: CBDB:244701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_amNEFfEEpTmsPBrVY39AnL
        subject_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓊，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TW_W5ZtcdL8MywqsN-Bic9
          claim_id: c_amNEFfEEpTmsPBrVY39AnL
          source_id: s_WbwRWZ9r27Kbyi31xSNSvx
          stance: supports
          locator: CBDB:244701
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oQenQEJU7Wv9FvLRPsZBT6
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxTt6hvuYQfmnF1Yiw22BE
          claim_id: c_oQenQEJU7Wv9FvLRPsZBT6
          source_id: s_gDFhL-rG9kmPNycIIw2gMB
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瓊 之父／母。
          source:
            id: s_gDFhL-rG9kmPNycIIw2gMB
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 244701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json
            external_identifier: CBDB:244701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpyCf5W5QfEUuJVcAPTPqZ
        status: active
        display_name: 王幹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OBq5FzaSFO5nfSLxeZUE1s
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fw2rICwWvSsEpfbK0s5xrS
          claim_id: c_OBq5FzaSFO5nfSLxeZUE1s
          source_id: s_gDFhL-rG9kmPNycIIw2gMB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gDFhL-rG9kmPNycIIw2gMB
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 244701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json
            external_identifier: CBDB:244701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3oKFdGHi8BKifcXxMMERFS
        status: active
        display_name: 王玹
        merged_into_person_id: null
---

# 王瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓊 | accepted |
| bio.summary | 王瓊，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NpyCf5W5QfEUuJVcAPTPqZ | 王幹 | accepted |
| other | p_3oKFdGHi8BKifcXxMMERFS | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 244701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json)
