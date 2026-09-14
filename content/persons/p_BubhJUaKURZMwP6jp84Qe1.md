---
schema: wang-person/v1
id: p_BubhJUaKURZMwP6jp84Qe1
status: active
merged_into: null
display_name: 王槍
cbdb_id: 29208
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PeneukHjANxksf9iP8F87Z
        subject_person_id: p_BubhJUaKURZMwP6jp84Qe1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槍，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29208）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1O12eiD9pYD_R9-axlmvZh
          claim_id: c_PeneukHjANxksf9iP8F87Z
          source_id: s_XDKWUeHVDggkETLH3ZWMBg
          stance: supports
          locator: CBDB:29208
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XDKWUeHVDggkETLH3ZWMBg
            source_type: api_record
            title: 中国历代人物传记资料库：王槍（CBDB 29208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29208&o=json
            external_identifier: CBDB:29208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_prG1QH1sdFQZ7ErVAtX1We
        subject_person_id: p_BubhJUaKURZMwP6jp84Qe1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QuBKpqb3HKVZRK8ThQhGDa
          claim_id: c_prG1QH1sdFQZ7ErVAtX1We
          source_id: s_XDKWUeHVDggkETLH3ZWMBg
          stance: supports
          locator: CBDB:29208
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PbxO2cDpuUghVpX_Ky2imw
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BubhJUaKURZMwP6jp84Qe1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iVfxJ3tVMg2zTvOtplVdoj
          claim_id: c_PbxO2cDpuUghVpX_Ky2imw
          source_id: s_pkjQOiofnZ2nW_DFWb8pWG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_pkjQOiofnZ2nW_DFWb8pWG
            source_type: api_record
            title: 中国历代人物传记资料库：王槍（CBDB 29208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29208&o=json
            external_identifier: CBDB:29208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XVBiZo5rSMuhnxXwBu1Wf6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王槍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王槍，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29208） | accepted |
| name.primary | 王槍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XVBiZo5rSMuhnxXwBu1Wf6 | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槍（CBDB 29208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29208&o=json)
