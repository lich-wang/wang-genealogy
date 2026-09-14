---
schema: wang-person/v1
id: p_ZEK8W3qTkBoQwnKNUGqfS3
status: active
merged_into: null
display_name: 王雲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j1yneMdGm7UdvK4iEN7fR8
        subject_person_id: p_ZEK8W3qTkBoQwnKNUGqfS3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8uyfeg3yG1fBp4hGj8Tsus
          claim_id: c_j1yneMdGm7UdvK4iEN7fR8
          source_id: s_BM72oTdJ3cpG3enkZCMQz4
          stance: supports
          locator: CBDB:239497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239497）
          source: &a1
            id: s_BM72oTdJ3cpG3enkZCMQz4
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 239497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239497&o=json
            external_identifier: CBDB:239497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ZACwAPBdQDHZB7WdknFMB
        subject_person_id: p_ZEK8W3qTkBoQwnKNUGqfS3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲，明人物。正统十年進士，籍贯歷城。（中国历代人物传记资料库 CBDB 239497）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SgP_8H_KNibs9l_IMIN0uV
          claim_id: c_9ZACwAPBdQDHZB7WdknFMB
          source_id: s_BM72oTdJ3cpG3enkZCMQz4
          stance: supports
          locator: CBDB:239497
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jA-DlxKf-VIVFoPXIBPgsg
        subject_person_id: p_ZEK8W3qTkBoQwnKNUGqfS3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTiYNrY6s5lmOQeyMJESbV
          claim_id: c_jA-DlxKf-VIVFoPXIBPgsg
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第二十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YMCYHYzEVLvaEnSkkrjDYW
            source_type: api_record
            title: 中国历代人物传记资料库：王允（CBDB 208031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json
            external_identifier: CBDB:208031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7kt2c6LEEJXJ45MmJkyvhy
        status: active
        display_name: 王允
        merged_into_person_id: null
    - claim:
        id: c_Mx7NRplQn7OZaR4uB92vYL
        subject_person_id: p_ZEK8W3qTkBoQwnKNUGqfS3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Ng7wAK9NQE1MKqCL4abM4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeZHF4yMmPlnsYXTinHGLE
          claim_id: c_Mx7NRplQn7OZaR4uB92vYL
          source_id: s_uG6jQOwEXnT6sMIMEcIPh8
          stance: supports
          locator: CBDB：兄弟 王允（208031）之父／母 王雲
          quotation: null
          interpretation_note: 由兄弟关系推断：王信 与 王允 为同胞（CBDB 记「兄」），王允 之父／母即 王信 之父／母。
          source:
            id: s_uG6jQOwEXnT6sMIMEcIPh8
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 239501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239501&o=json
            external_identifier: CBDB:239501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Ng7wAK9NQE1MKqCL4abM4
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| bio.summary | 王雲，明人物。正统十年進士，籍贯歷城。（中国历代人物传记资料库 CBDB 239497） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7kt2c6LEEJXJ45MmJkyvhy | 王允 | accepted |
| children | p_8Ng7wAK9NQE1MKqCL4abM4 | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 239501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239501&o=json)
- [中国历代人物传记资料库：王雲（CBDB 239497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239497&o=json)
- [中国历代人物传记资料库：王允（CBDB 208031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json)
