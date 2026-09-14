---
schema: wang-person/v1
id: p_847Q6d3vmxYABFNWz66oyZ
status: active
merged_into: null
display_name: 王維鳳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oa3sRBRbkgAbFtgXoHHJbQ
        subject_person_id: p_847Q6d3vmxYABFNWz66oyZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4VtqwcKhXU5MbDnHuMJMsw
          claim_id: c_oa3sRBRbkgAbFtgXoHHJbQ
          source_id: s_WRqoA8ANPVs1mBeJkXMPBa
          stance: supports
          locator: CBDB:696203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696203）
          source: &a1
            id: s_WRqoA8ANPVs1mBeJkXMPBa
            source_type: api_record
            title: 中国历代人物传记资料库：王維鳳（CBDB 696203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json
            external_identifier: CBDB:696203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vV6VSCWi1P3HG4T2ehnMDV
        subject_person_id: p_847Q6d3vmxYABFNWz66oyZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鳳，清人物。入仕武舉進士，曾任守備。（中国历代人物传记资料库 CBDB 696203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z4dYxknJ6TWDsrEWS-YN7q
          claim_id: c_vV6VSCWi1P3HG4T2ehnMDV
          source_id: s_WRqoA8ANPVs1mBeJkXMPBa
          stance: supports
          locator: CBDB:696203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TrkGqHG3kpPoDDD6XsMNum
        subject_person_id: p_fRN6tNW95MgvLQ7yDRApoS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_847Q6d3vmxYABFNWz66oyZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Py1E26mZw7i2ud6pbYMhnz
          claim_id: c_TrkGqHG3kpPoDDD6XsMNum
          source_id: s_PUwG6UikNQcalY-NwtNVbQ
          stance: supports
          locator: CBDB：兄弟 王維鶴（639833）之父／母 王振侯
          quotation: null
          interpretation_note: 由兄弟关系推断：王維鳳 与 王維鶴 为同胞（CBDB 记「弟」），王維鶴 之父／母即 王維鳳 之父／母。
          source:
            id: s_PUwG6UikNQcalY-NwtNVbQ
            source_type: api_record
            title: 中国历代人物传记资料库：王維鳳（CBDB 696203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json
            external_identifier: CBDB:696203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fRN6tNW95MgvLQ7yDRApoS
        status: active
        display_name: 王振侯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2UAwjer5YLp2dOzu8ec_YN
        subject_person_id: p_847Q6d3vmxYABFNWz66oyZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_va0De23u-pCl60rsUj5py-
          claim_id: c_2UAwjer5YLp2dOzu8ec_YN
          source_id: s_PUwG6UikNQcalY-NwtNVbQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 639833 王維鶴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PUwG6UikNQcalY-NwtNVbQ
            source_type: api_record
            title: 中国历代人物传记资料库：王維鳳（CBDB 696203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json
            external_identifier: CBDB:696203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pNAV6nKLPRpaVTa4tHS3kC
        status: active
        display_name: 王維鶴
        merged_into_person_id: null
---

# 王維鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維鳳 | accepted |
| bio.summary | 王維鳳，清人物。入仕武舉進士，曾任守備。（中国历代人物传记资料库 CBDB 696203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fRN6tNW95MgvLQ7yDRApoS | 王振侯 | accepted |
| other | p_pNAV6nKLPRpaVTa4tHS3kC | 王維鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維鳳（CBDB 696203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696203&o=json)
