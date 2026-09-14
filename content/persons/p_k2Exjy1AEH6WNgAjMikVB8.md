---
schema: wang-person/v1
id: p_k2Exjy1AEH6WNgAjMikVB8
status: active
merged_into: null
display_name: 王以選
cbdb_id: 221828
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CDjVa3CQyqd2VAE8Cai3bS
        subject_person_id: p_k2Exjy1AEH6WNgAjMikVB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以選，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221828）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6uw83okSbwjTL6hVMUoVE4
          claim_id: c_CDjVa3CQyqd2VAE8Cai3bS
          source_id: s_jBp12BkKPq1MrC8YPK9TGC
          stance: supports
          locator: CBDB:221828
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jBp12BkKPq1MrC8YPK9TGC
            source_type: api_record
            title: 中国历代人物传记资料库：王以選（CBDB 221828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221828&o=json
            external_identifier: CBDB:221828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W4v3BMUisqB1vSUGHUvHhM
        subject_person_id: p_k2Exjy1AEH6WNgAjMikVB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3cP4U9Kso9Kr7vuaTSWeZL
          claim_id: c_W4v3BMUisqB1vSUGHUvHhM
          source_id: s_jBp12BkKPq1MrC8YPK9TGC
          stance: supports
          locator: CBDB:221828
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rZqE0AVmS_IJNp5KGiuIut
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k2Exjy1AEH6WNgAjMikVB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hfIXf5597FVr7h1BuqdzIY
          claim_id: c_rZqE0AVmS_IJNp5KGiuIut
          source_id: s_8xvXJyEitY3j7i24AGZcJI
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以選 与 王以通 为同胞（CBDB 记「兄」），王以通 之父／母即 王以選 之父／母。
          source:
            id: s_8xvXJyEitY3j7i24AGZcJI
            source_type: api_record
            title: 中国历代人物传记资料库：王以選（CBDB 221828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221828&o=json
            external_identifier: CBDB:221828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtPUy8Ayd7XFTp2c4HBHNK
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wqEiaO83ZUpYKujNu2X4gy
        subject_person_id: p_k2Exjy1AEH6WNgAjMikVB8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_47y7Jc0SqlVgc9V9Jxo2sZ
          claim_id: c_wqEiaO83ZUpYKujNu2X4gy
          source_id: s_8xvXJyEitY3j7i24AGZcJI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206705 王以通）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8xvXJyEitY3j7i24AGZcJI
            source_type: api_record
            title: 中国历代人物传记资料库：王以選（CBDB 221828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221828&o=json
            external_identifier: CBDB:221828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qMg6Q8CEPodQMPp2EgjAAi
        status: active
        display_name: 王以通
        merged_into_person_id: null
---

# 王以選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以選，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221828） | accepted |
| name.primary | 王以選 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtPUy8Ayd7XFTp2c4HBHNK | 王榮 | accepted |
| other | p_qMg6Q8CEPodQMPp2EgjAAi | 王以通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以選（CBDB 221828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221828&o=json)
