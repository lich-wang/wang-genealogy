---
schema: wang-person/v1
id: p_8ZeeUm458xhyWD94ptyths
status: active
merged_into: null
display_name: 王暋
cbdb_id: 237228
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ogM6PUJ6HbgB28HrGW2ELe
        subject_person_id: p_8ZeeUm458xhyWD94ptyths
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暋，明人物。正統四年進士，籍贯高平。（中国历代人物传记资料库 CBDB 237228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ve15Gv8QVnHK2UW7GeABee
          claim_id: c_ogM6PUJ6HbgB28HrGW2ELe
          source_id: s_314jy2xbMktmYdMx98zmDd
          stance: supports
          locator: CBDB:237228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_314jy2xbMktmYdMx98zmDd
            source_type: api_record
            title: 中国历代人物传记资料库：王暋（CBDB 237228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json
            external_identifier: CBDB:237228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vEsxGwrHK3ZBG565L8iYe6
        subject_person_id: p_8ZeeUm458xhyWD94ptyths
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xe9t84N7K9kEEXEpoP4PNS
          claim_id: c_vEsxGwrHK3ZBG565L8iYe6
          source_id: s_314jy2xbMktmYdMx98zmDd
          stance: supports
          locator: CBDB:237228
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kEhmCpClmVvQe__1DKLytr
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZeeUm458xhyWD94ptyths
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSrdGJ5VxSvtvoqzx3fw_j
          claim_id: c_kEhmCpClmVvQe__1DKLytr
          source_id: s_Jtx6fEQHI97O6F-ftycIIb
          stance: supports
          locator: CBDB：兄弟 王晏（207868）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王暋 与 王晏 为同胞（CBDB 记「兄」），王晏 之父／母即 王暋 之父／母。
          source:
            id: s_Jtx6fEQHI97O6F-ftycIIb
            source_type: api_record
            title: 中国历代人物传记资料库：王暋（CBDB 237228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json
            external_identifier: CBDB:237228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UxPyyPKFuTNFgt47NpTBe5
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2hpzAja736FrnS8d4jZ_mr
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8ZeeUm458xhyWD94ptyths
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dynX4AlZ7Rj4oKt_DABU1a
          claim_id: c_2hpzAja736FrnS8d4jZ_mr
          source_id: s_Jtx6fEQHI97O6F-ftycIIb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207868 王晏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Jtx6fEQHI97O6F-ftycIIb
            source_type: api_record
            title: 中国历代人物传记资料库：王暋（CBDB 237228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json
            external_identifier: CBDB:237228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3c99mAbtCMe882FKM3LMji
        status: active
        display_name: 王晏
        merged_into_person_id: null
---

# 王暋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暋，明人物。正統四年進士，籍贯高平。（中国历代人物传记资料库 CBDB 237228） | accepted |
| name.primary | 王暋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UxPyyPKFuTNFgt47NpTBe5 | 王良 | accepted |
| other | p_3c99mAbtCMe882FKM3LMji | 王晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暋（CBDB 237228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237228&o=json)
