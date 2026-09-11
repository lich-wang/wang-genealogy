---
schema: wang-person/v1
id: p_8vDHkFWgfRT7DpNAwnVBB9
status: active
merged_into: null
display_name: 錢氏
revision: 1
cbdb_id: 237270
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xlDgnu8Qv2hNFtIgXDV5hU
        subject_person_id: p_8vDHkFWgfRT7DpNAwnVBB9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237270）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fwhKMU3S2o3uiZKCEkQdTf
          claim_id: c_xlDgnu8Qv2hNFtIgXDV5hU
          source_id: s_PqgPv0W2ljD1Tx2LmoKKLp
          stance: supports
          locator: CBDB:237270
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PqgPv0W2ljD1Tx2LmoKKLp
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王訥妻)（CBDB 237270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237270&o=json
            external_identifier: CBDB:237270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XYEBaeQfH1wXzcRTODqMq6
        subject_person_id: p_8vDHkFWgfRT7DpNAwnVBB9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 錢氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jIUk746Ad9xr3YVRX_ckJD
          claim_id: c_XYEBaeQfH1wXzcRTODqMq6
          source_id: s_PqgPv0W2ljD1Tx2LmoKKLp
          stance: supports
          locator: CBDB:237270
          quotation: null
          interpretation_note: CBDB 明确记录的王訥配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LG4VrF6vNWJy3n3DITk_Nl
        subject_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8vDHkFWgfRT7DpNAwnVBB9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ma08MOvGkG3ZRlJkLwsREv
          claim_id: c_LG4VrF6vNWJy3n3DITk_Nl
          source_id: s_PqgPv0W2ljD1Tx2LmoKKLp
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ieK4DN3AcasJWKbAPHMC7t
        status: active
        display_name: 王訥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 錢氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 錢氏，明人物。正統四年進士。（中国历代人物传记资料库 CBDB 237270） | accepted |
| name.primary | 錢氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ieK4DN3AcasJWKbAPHMC7t | 王訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王訥妻)（CBDB 237270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237270&o=json)
