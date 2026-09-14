---
schema: wang-person/v1
id: p_sr256MBGaAqYqzJEV6SSHK
status: active
merged_into: null
display_name: 王綱
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zy1xrJ9KB7cTvhGPhoiovp
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vboc5ap3gKZUZePf8iLD1t
          claim_id: c_zy1xrJ9KB7cTvhGPhoiovp
          source_id: s_63cXZ8SBtpjuzmkJU6p7i1
          stance: supports
          locator: CBDB:277372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277372）
          source: &a1
            id: s_63cXZ8SBtpjuzmkJU6p7i1
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 277372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277372&o=json
            external_identifier: CBDB:277372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hE15tzLMkevCkrgX8CLMBV
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。正德六年進士，籍贯長山。（中国历代人物传记资料库 CBDB 277372）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qlS45aeZuv2pTPJ7QqDXfb
          claim_id: c_hE15tzLMkevCkrgX8CLMBV
          source_id: s_63cXZ8SBtpjuzmkJU6p7i1
          stance: supports
          locator: CBDB:277372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gYK6ChFFHAV7qH1vZKturz
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_On_jATjocoBZZ0dOuDLVJ2
          claim_id: c_gYK6ChFFHAV7qH1vZKturz
          source_id: s_63cXZ8SBtpjuzmkJU6p7i1
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dDsTSNKuQNDdLuyN146sBf
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_K9ao5xs4OgimhGnYCrWrvw
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8MUDJhSwUh9TvtRQ82ftMD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yNKeGEjVVwP90kNvl5y2lL
          claim_id: c_K9ao5xs4OgimhGnYCrWrvw
          source_id: s_2cZtSIrPiviMtKY3qoZ5W1
          stance: supports
          locator: CBDB：兄弟 王雄（201736）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王雄 为同胞（CBDB 记「兄」），王雄 之父／母即 王傑 之父／母。
          source:
            id: s_2cZtSIrPiviMtKY3qoZ5W1
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 246426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246426&o=json
            external_identifier: CBDB:246426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8MUDJhSwUh9TvtRQ82ftMD
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_9kzH2OEg1YJsT96oCfpSQ4
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DeseNKP4g7aPjG5h7Y8YRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y_8rD4gbT7ENI0dbeajqMf
          claim_id: c_9kzH2OEg1YJsT96oCfpSQ4
          source_id: s_CK2TPPgwWmYFXWgJPcqLSZ
          stance: supports
          locator: CBDB：兄弟 王雄（201736）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王英 与 王雄 为同胞（CBDB 记「弟」），王雄 之父／母即 王英 之父／母。
          source:
            id: s_CK2TPPgwWmYFXWgJPcqLSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 246424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json
            external_identifier: CBDB:246424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DeseNKP4g7aPjG5h7Y8YRM
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_JJ89peSTBHoNPERWACJxke
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WS94tW4F37e3Dry7ZkTKW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JsHsGZFnNZaEBdbNLaydtM
          claim_id: c_JJ89peSTBHoNPERWACJxke
          source_id: s_0y4A1uKZoWsfTWL0sqzQOz
          stance: supports
          locator: CBDB：兄弟 王雄（201736）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王雄 为同胞（CBDB 记「兄」），王雄 之父／母即 王俊 之父／母。
          source:
            id: s_0y4A1uKZoWsfTWL0sqzQOz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 246425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json
            external_identifier: CBDB:246425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WS94tW4F37e3Dry7ZkTKW3
        status: active
        display_name: 王俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。正德六年進士，籍贯長山。（中国历代人物传记资料库 CBDB 277372） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dDsTSNKuQNDdLuyN146sBf | 王雄 | accepted |
| children | p_8MUDJhSwUh9TvtRQ82ftMD | 王傑 | accepted |
| children | p_DeseNKP4g7aPjG5h7Y8YRM | 王英 | accepted |
| children | p_WS94tW4F37e3Dry7ZkTKW3 | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 277372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277372&o=json)
- [中国历代人物传记资料库：王傑（CBDB 246426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246426&o=json)
- [中国历代人物传记资料库：王俊（CBDB 246425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246425&o=json)
- [中国历代人物传记资料库：王英（CBDB 246424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246424&o=json)
