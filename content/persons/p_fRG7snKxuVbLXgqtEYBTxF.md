---
schema: wang-person/v1
id: p_fRG7snKxuVbLXgqtEYBTxF
status: active
merged_into: null
display_name: 王威
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uwzMJihrNepLsCmAntQ2gx
        subject_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Mp1riv9sadymVaAZaWuyD
          claim_id: c_uwzMJihrNepLsCmAntQ2gx
          source_id: s_X7BWCFDAXYRP29kQjvyruQ
          stance: supports
          locator: CBDB:262136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262136）
          source: &a1
            id: s_X7BWCFDAXYRP29kQjvyruQ
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 262136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json
            external_identifier: CBDB:262136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qY662hJYBosAAVgSUPh2qC
        subject_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262136）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JN6Bw9zKuThykLPNBbuzIp
          claim_id: c_qY662hJYBosAAVgSUPh2qC
          source_id: s_X7BWCFDAXYRP29kQjvyruQ
          stance: supports
          locator: CBDB:262136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eLw7RzaQcma4tPabeVAerd
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEEmOmRBgqrKb0GsXYI7O7
          claim_id: c_eLw7RzaQcma4tPabeVAerd
          source_id: s_8IFn1kvSJcbuti4qw4CBmI
          stance: supports
          locator: CBDB：兄弟 王臣（198359）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王威 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王威 之父／母。
          source:
            id: s_8IFn1kvSJcbuti4qw4CBmI
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 262136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json
            external_identifier: CBDB:262136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BRB2XZMg2PUmomfcS5IoTH
        subject_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uwF1XihWMV8G8Gqj2_Mv_u
          claim_id: c_BRB2XZMg2PUmomfcS5IoTH
          source_id: s_8IFn1kvSJcbuti4qw4CBmI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198359 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8IFn1kvSJcbuti4qw4CBmI
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 262136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json
            external_identifier: CBDB:262136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfLJWcSYWHpLtF3oqEp42D
        status: active
        display_name: 王臣
        merged_into_person_id: null
---

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | 王威，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z6SSx6JCsA5rPQ9sKcT6Nz | 王珪 | accepted |
| other | p_vfLJWcSYWHpLtF3oqEp42D | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王威（CBDB 262136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json)
