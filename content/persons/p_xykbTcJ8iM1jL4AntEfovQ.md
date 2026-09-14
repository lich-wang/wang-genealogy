---
schema: wang-person/v1
id: p_xykbTcJ8iM1jL4AntEfovQ
status: active
merged_into: null
display_name: 王志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_85bfs5eJ8B14PtBEJFLtbq
        subject_person_id: p_xykbTcJ8iM1jL4AntEfovQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P1psVmyv8BobUQVPyS7aTX
          claim_id: c_85bfs5eJ8B14PtBEJFLtbq
          source_id: s_ZPJKdceXrxXrs9qmwQvAdd
          stance: supports
          locator: CBDB:262693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262693）
          source: &a1
            id: s_ZPJKdceXrxXrs9qmwQvAdd
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 262693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json
            external_identifier: CBDB:262693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dq64mq22xP34KWDv1BCCEg
        subject_person_id: p_xykbTcJ8iM1jL4AntEfovQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262693）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NULF1VSQ7AhJNuJ_Y9hoCu
          claim_id: c_dq64mq22xP34KWDv1BCCEg
          source_id: s_ZPJKdceXrxXrs9qmwQvAdd
          stance: supports
          locator: CBDB:262693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wy2qzB_ZvtxTXzIWF4u5Xg
        subject_person_id: p_rR2pkPMo5WGEMnvA2UogPQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xykbTcJ8iM1jL4AntEfovQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mkjkJGC8zIF6fJAx8Qj7C
          claim_id: c_wy2qzB_ZvtxTXzIWF4u5Xg
          source_id: s_gaRnKBOtHdoDCKdy6H7DT7
          stance: supports
          locator: CBDB：兄弟 王憲（68238）之父／母 王智
          quotation: null
          interpretation_note: 由兄弟关系推断：王志 与 王憲 为同胞（CBDB 记「兄」），王憲 之父／母即 王志 之父／母。
          source:
            id: s_gaRnKBOtHdoDCKdy6H7DT7
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 262693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json
            external_identifier: CBDB:262693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rR2pkPMo5WGEMnvA2UogPQ
        status: active
        display_name: 王智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nYvrafX6fijCCFhwNnymFh
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xykbTcJ8iM1jL4AntEfovQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6BPSR2DrIVtK8_-iCZRmW
          claim_id: c_nYvrafX6fijCCFhwNnymFh
          source_id: s_gaRnKBOtHdoDCKdy6H7DT7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68238 王憲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gaRnKBOtHdoDCKdy6H7DT7
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 262693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json
            external_identifier: CBDB:262693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
---

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，明人物。弘治三年進士，籍贯東平州。（中国历代人物传记资料库 CBDB 262693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rR2pkPMo5WGEMnvA2UogPQ | 王智 | accepted |
| other | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 262693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262693&o=json)
