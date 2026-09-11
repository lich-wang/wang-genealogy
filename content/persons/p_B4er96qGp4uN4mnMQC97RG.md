---
schema: wang-person/v1
id: p_B4er96qGp4uN4mnMQC97RG
status: active
merged_into: null
display_name: 王志善
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AFavXHeuiCs7xeUfG58G9U
        subject_person_id: p_B4er96qGp4uN4mnMQC97RG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1rjVn3p1MZ42boxA37bkYG
          claim_id: c_AFavXHeuiCs7xeUfG58G9U
          source_id: s_ZJr2B182obDDpCUkuEPhP7
          stance: supports
          locator: CBDB:267618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267618）
          source: &a1
            id: s_ZJr2B182obDDpCUkuEPhP7
            source_type: api_record
            title: 中国历代人物传记资料库：王志善（CBDB 267618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267618&o=json
            external_identifier: CBDB:267618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hMm1Gw8GwD6oWz4LsqLcBr
        subject_person_id: p_B4er96qGp4uN4mnMQC97RG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善，明人物。弘治九年進士，曾任監察御史。（中国历代人物传记资料库 CBDB 267618）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HeIZrfnPla1R2Szhrz-02n
          claim_id: c_hMm1Gw8GwD6oWz4LsqLcBr
          source_id: s_ZJr2B182obDDpCUkuEPhP7
          stance: supports
          locator: CBDB:267618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_pJzLHSGe20cN8UOno5zh-p
        subject_person_id: p_B4er96qGp4uN4mnMQC97RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Syc31fNwi32wruZuRYZrtu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_trnleh9rCGUGTPwH8Obdfn
          claim_id: c_pJzLHSGe20cN8UOno5zh-p
          source_id: s_ZJr2B182obDDpCUkuEPhP7
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Syc31fNwi32wruZuRYZrtu
        status: active
        display_name: 王子言
        merged_into_person_id: null
    - claim:
        id: c_jvUx3vMOHUDSrjr12II_Xj
        subject_person_id: p_B4er96qGp4uN4mnMQC97RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5kQiZb8czqPtU7kDIPaCIp
          claim_id: c_jvUx3vMOHUDSrjr12II_Xj
          source_id: s_ZJr2B182obDDpCUkuEPhP7
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTQ9DBgLuTWCqCSppicxY6
        status: active
        display_name: 王子謨
        merged_into_person_id: null
  other: []
---

# 王志善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志善 | accepted |
| bio.summary | 王志善，明人物。弘治九年進士，曾任監察御史。（中国历代人物传记资料库 CBDB 267618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Syc31fNwi32wruZuRYZrtu | 王子言 | accepted |
| descendants | p_TTQ9DBgLuTWCqCSppicxY6 | 王子謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志善（CBDB 267618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267618&o=json)
