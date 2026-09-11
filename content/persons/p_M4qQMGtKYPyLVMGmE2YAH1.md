---
schema: wang-person/v1
id: p_M4qQMGtKYPyLVMGmE2YAH1
status: active
merged_into: null
display_name: 王群
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rDiayWR1q4J89qQjFx1k9v
        subject_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王群
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Wp7MNNSiThNAqDE3tsYmau
          claim_id: c_rDiayWR1q4J89qQjFx1k9v
          source_id: s_ijQ7LNChmn7uB6tNXESTmP
          stance: supports
          locator: CBDB:573351
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573351）
          source: &a1
            id: s_ijQ7LNChmn7uB6tNXESTmP
            source_type: api_record
            title: 中国历代人物传记资料库：王群（CBDB 573351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573351&o=json
            external_identifier: CBDB:573351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1E5tDM3qirx79CKFcaJfXf
        subject_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王群，宋人物。籍贯河南府，曾任縣主簿。（中国历代人物传记资料库 CBDB 573351）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BYVmjKNIctRmNDyuZpA2bt
          claim_id: c_1E5tDM3qirx79CKFcaJfXf
          source_id: s_ijQ7LNChmn7uB6tNXESTmP
          stance: supports
          locator: CBDB:573351
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uv3z152HDNvFHfnz5qI3Y-
        subject_person_id: p_8x3h6NDAZh5tHyrWsrxPRc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjE4TwOvUTgHfxnsM63IRY
          claim_id: c_uv3z152HDNvFHfnz5qI3Y-
          source_id: s_ijQ7LNChmn7uB6tNXESTmP
          stance: supports
          locator: 芒洛冢墓遺文四編，孺人王氏墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8x3h6NDAZh5tHyrWsrxPRc
        status: active
        display_name: 王慎言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_svV6Rdgzigh6fCUHg0I9FA
        subject_person_id: p_M4qQMGtKYPyLVMGmE2YAH1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VxzdAPtyQmbqrvt34cszoD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dXj1A9Jhqa0-Ln2S3krFYc
          claim_id: c_svV6Rdgzigh6fCUHg0I9FA
          source_id: s_k8otHySFIepCRdIjQSSeC4
          stance: supports
          locator: 芒洛冢墓遺文四編，孺人王氏墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k8otHySFIepCRdIjQSSeC4
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王群妻)（CBDB 573352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573352&o=json
            external_identifier: CBDB:573352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VxzdAPtyQmbqrvt34cszoD
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王群

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王群 | accepted |
| bio.summary | 王群，宋人物。籍贯河南府，曾任縣主簿。（中国历代人物传记资料库 CBDB 573351） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8x3h6NDAZh5tHyrWsrxPRc | 王慎言 | accepted |
| spouses | p_VxzdAPtyQmbqrvt34cszoD | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王群妻)（CBDB 573352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573352&o=json)
- [中国历代人物传记资料库：王群（CBDB 573351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573351&o=json)
