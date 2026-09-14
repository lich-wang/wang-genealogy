---
schema: wang-person/v1
id: p_XL4Ed8SYTKF5xumf4j1w9n
status: active
merged_into: null
display_name: 王邵孫
cbdb_id: 437571
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9eJwkL5VpxWcrVYNXsrn2m
        subject_person_id: p_XL4Ed8SYTKF5xumf4j1w9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵孫，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 437571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_77_mDvUArksZ2I3iw7kbYc
          claim_id: c_9eJwkL5VpxWcrVYNXsrn2m
          source_id: s_GhQuECUwQmVFN3DXgpGXUP
          stance: supports
          locator: CBDB:437571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GhQuECUwQmVFN3DXgpGXUP
            source_type: api_record
            title: 中国历代人物传记资料库：王邵孫（CBDB 437571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json
            external_identifier: CBDB:437571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oNJFMvFJYTxPUiLeApe2Ga
        subject_person_id: p_XL4Ed8SYTKF5xumf4j1w9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邵孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SiAJWLKXjtG7MQsBzY3Fx9
          claim_id: c_oNJFMvFJYTxPUiLeApe2Ga
          source_id: s_GhQuECUwQmVFN3DXgpGXUP
          stance: supports
          locator: CBDB:437571
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jpnor2jmxqqrNZFMtuQJ3H
        subject_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XL4Ed8SYTKF5xumf4j1w9n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_igpHDAyjC1d_VTPlOaHNrc
          claim_id: c_Jpnor2jmxqqrNZFMtuQJ3H
          source_id: s_1B_Q2HaOCpm6v7HEb1xpG8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37927）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1B_Q2HaOCpm6v7HEb1xpG8
            source_type: api_record
            title: 中国历代人物传记资料库：王邵孫（CBDB 437571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json
            external_identifier: CBDB:437571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sEGDXi7ck4pKNAhddgmbiq
        status: active
        display_name: 王珹
        merged_into_person_id: null
    - claim:
        id: c_fqebM_Ot6rHhSDlQsCgrYI
        subject_person_id: p_riqvV4HuDZfFbjH1MGXcaD
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_XL4Ed8SYTKF5xumf4j1w9n
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_IkW3zMnnAutGeoW8HaCQYa
          claim_id: c_fqebM_Ot6rHhSDlQsCgrYI
          source_id: s_1B_Q2HaOCpm6v7HEb1xpG8
          stance: supports
          locator: CBDB 亲属：母（KinPerson 437570）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1B_Q2HaOCpm6v7HEb1xpG8
            source_type: api_record
            title: 中国历代人物传记资料库：王邵孫（CBDB 437571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json
            external_identifier: CBDB:437571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_riqvV4HuDZfFbjH1MGXcaD
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lBTpkkwXhC_oH1_vfVrOFy
        subject_person_id: p_XL4Ed8SYTKF5xumf4j1w9n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qH47uPNMff2bm3Ch2uj7BZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nhOybJzbwJpnifm_ELvqd
          claim_id: c_lBTpkkwXhC_oH1_vfVrOFy
          source_id: s_1B_Q2HaOCpm6v7HEb1xpG8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 38194 王雲龍）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1B_Q2HaOCpm6v7HEb1xpG8
            source_type: api_record
            title: 中国历代人物传记资料库：王邵孫（CBDB 437571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json
            external_identifier: CBDB:437571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qH47uPNMff2bm3Ch2uj7BZ
        status: active
        display_name: 王雲龍
        merged_into_person_id: null
---

# 王邵孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王邵孫，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 437571） | accepted |
| name.primary | 王邵孫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sEGDXi7ck4pKNAhddgmbiq | 王珹 | accepted |
| parents | p_riqvV4HuDZfFbjH1MGXcaD | 趙氏 | accepted |
| other | p_qH47uPNMff2bm3Ch2uj7BZ | 王雲龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邵孫（CBDB 437571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437571&o=json)
