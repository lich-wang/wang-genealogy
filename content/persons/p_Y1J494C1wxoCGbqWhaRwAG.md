---
schema: wang-person/v1
id: p_Y1J494C1wxoCGbqWhaRwAG
status: active
merged_into: null
display_name: 王平生
cbdb_id: 267255
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wCBH2LhvKQoTSaTb8h2b8w
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平生，明人物。弘治九年進士，籍贯平陽。（中国历代人物传记资料库 CBDB 267255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_edU8LO5uNNqrEeF5FsAf0d
          claim_id: c_wCBH2LhvKQoTSaTb8h2b8w
          source_id: s_iXBU7RAJQ5QRp3PCFG6Vmy
          stance: supports
          locator: CBDB:267255
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iXBU7RAJQ5QRp3PCFG6Vmy
            source_type: api_record
            title: 中国历代人物传记资料库：王平生（CBDB 267255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267255&o=json
            external_identifier: CBDB:267255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FKU2pgPD5yXxNNyDbr58Y8
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王平生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3wYCjB4qNLr8fDMs35qvNH
          claim_id: c_FKU2pgPD5yXxNNyDbr58Y8
          source_id: s_iXBU7RAJQ5QRp3PCFG6Vmy
          stance: supports
          locator: CBDB:267255
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_J1KY0WvfI2FCUYZ8iMC8Dq
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C41sWozjac1HZPEX2SGUgJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZ0xky72oTdzQ1uAN-ZBMD
          claim_id: c_J1KY0WvfI2FCUYZ8iMC8Dq
          source_id: s_dRUGmqCaBFkV5AhXHe7EWi
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dRUGmqCaBFkV5AhXHe7EWi
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佐（CBDB 201113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json
            external_identifier: CBDB:201113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C41sWozjac1HZPEX2SGUgJ
        status: active
        display_name: 王朝佐
        merged_into_person_id: null
    - claim:
        id: c_-Z2zRMgvPMqe4o7lVnjGOQ
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7eJLYqkpLiPNc6S6msBmBN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pTcHda0S-8LDd9-T6bV7N-
          claim_id: c_-Z2zRMgvPMqe4o7lVnjGOQ
          source_id: s_-X3-dKuDrsDcdoRn-m-sD4
          stance: supports
          locator: CBDB：兄弟 王朝佐（201113）之父／母 王平生
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝佑 与 王朝佐 为同胞（CBDB 记「兄」），王朝佐 之父／母即 王朝佑 之父／母。
          source:
            id: s_-X3-dKuDrsDcdoRn-m-sD4
            source_type: api_record
            title: 中国历代人物传记资料库：王朝佑（CBDB 267258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267258&o=json
            external_identifier: CBDB:267258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7eJLYqkpLiPNc6S6msBmBN
        status: active
        display_name: 王朝佑
        merged_into_person_id: null
    - claim:
        id: c_ElGh1bWV4PjN1l-C03ISqs
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ht351yWJxDzH51UaRjVGD6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjmzp1oVwKNIAhvPkkSpB1
          claim_id: c_ElGh1bWV4PjN1l-C03ISqs
          source_id: s_PNjadc3AzK6tDkviRCD7Qo
          stance: supports
          locator: CBDB：兄弟 王朝佐（201113）之父／母 王平生
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝輔 与 王朝佐 为同胞（CBDB 记「兄」），王朝佐 之父／母即 王朝輔 之父／母。
          source:
            id: s_PNjadc3AzK6tDkviRCD7Qo
            source_type: api_record
            title: 中国历代人物传记资料库：王朝輔（CBDB 267259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267259&o=json
            external_identifier: CBDB:267259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ht351yWJxDzH51UaRjVGD6
        status: active
        display_name: 王朝輔
        merged_into_person_id: null
    - claim:
        id: c_oVYmAMADT_f9CgS0ygVTeh
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YdfmtQYuaYNdFqb5gJrEpt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oTeg56bC4dvIP42nIXApN2
          claim_id: c_oVYmAMADT_f9CgS0ygVTeh
          source_id: s_ucUJLsBdTVWl_SY_jx4G1u
          stance: supports
          locator: CBDB：兄弟 王朝佐（201113）之父／母 王平生
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝相 与 王朝佐 为同胞（CBDB 记「兄」），王朝佐 之父／母即 王朝相 之父／母。
          source:
            id: s_ucUJLsBdTVWl_SY_jx4G1u
            source_type: api_record
            title: 中国历代人物传记资料库：王朝相（CBDB 267262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267262&o=json
            external_identifier: CBDB:267262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YdfmtQYuaYNdFqb5gJrEpt
        status: active
        display_name: 王朝相
        merged_into_person_id: null
    - claim:
        id: c_Hg88-g65NrjZYpCRxBc17S
        subject_person_id: p_Y1J494C1wxoCGbqWhaRwAG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hUgJ7c894o8VtrRgR3aSCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nj39fErlOCiek_DUL5ZeGK
          claim_id: c_Hg88-g65NrjZYpCRxBc17S
          source_id: s_dj0Cynj0XOcNK4wx6hyAzv
          stance: supports
          locator: CBDB：兄弟 王朝佐（201113）之父／母 王平生
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝弼 与 王朝佐 为同胞（CBDB 记「兄」），王朝佐 之父／母即 王朝弼 之父／母。
          source:
            id: s_dj0Cynj0XOcNK4wx6hyAzv
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 267261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267261&o=json
            external_identifier: CBDB:267261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hUgJ7c894o8VtrRgR3aSCE
        status: active
        display_name: 王朝弼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王平生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王平生，明人物。弘治九年進士，籍贯平陽。（中国历代人物传记资料库 CBDB 267255） | accepted |
| name.primary | 王平生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C41sWozjac1HZPEX2SGUgJ | 王朝佐 | accepted |
| children | p_7eJLYqkpLiPNc6S6msBmBN | 王朝佑 | accepted |
| children | p_Ht351yWJxDzH51UaRjVGD6 | 王朝輔 | accepted |
| children | p_YdfmtQYuaYNdFqb5gJrEpt | 王朝相 | accepted |
| children | p_hUgJ7c894o8VtrRgR3aSCE | 王朝弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝弼（CBDB 267261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267261&o=json)
- [中国历代人物传记资料库：王朝輔（CBDB 267259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267259&o=json)
- [中国历代人物传记资料库：王朝相（CBDB 267262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267262&o=json)
- [中国历代人物传记资料库：王朝佑（CBDB 267258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267258&o=json)
- [中国历代人物传记资料库：王朝佐（CBDB 201113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201113&o=json)
- [中国历代人物传记资料库：王平生（CBDB 267255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267255&o=json)
