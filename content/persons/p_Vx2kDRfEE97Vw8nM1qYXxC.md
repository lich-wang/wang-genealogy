---
schema: wang-person/v1
id: p_Vx2kDRfEE97Vw8nM1qYXxC
status: active
merged_into: null
display_name: 王紈
cbdb_id: 333627
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TGQn323kHnfQ6B2bLLrcH2
        subject_person_id: p_Vx2kDRfEE97Vw8nM1qYXxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紈，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333627）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eGjdbDOykIYsLfpq-Ybz-r
          claim_id: c_TGQn323kHnfQ6B2bLLrcH2
          source_id: s_LEexg7txZeFfwhj8gcxMWW
          stance: supports
          locator: CBDB:333627
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LEexg7txZeFfwhj8gcxMWW
            source_type: api_record
            title: 中国历代人物传记资料库：王紈（CBDB 333627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json
            external_identifier: CBDB:333627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNCAPY1qkMFrit7rdi8c8V
        subject_person_id: p_Vx2kDRfEE97Vw8nM1qYXxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jGpExJyZh8fan668ysVAbX
          claim_id: c_GNCAPY1qkMFrit7rdi8c8V
          source_id: s_LEexg7txZeFfwhj8gcxMWW
          stance: supports
          locator: CBDB:333627
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7nfyFVAK7X3wA5O42p3D0I
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vx2kDRfEE97Vw8nM1qYXxC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wkj_qhbDEHpThoU8J1lTsJ
          claim_id: c_7nfyFVAK7X3wA5O42p3D0I
          source_id: s_bwMP_8T_1nsWY_0-GaiGR2
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紈 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王紈 之父／母。
          source:
            id: s_bwMP_8T_1nsWY_0-GaiGR2
            source_type: api_record
            title: 中国历代人物传记资料库：王紈（CBDB 333627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json
            external_identifier: CBDB:333627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U6zX3wnxTCMh3nEUMpMz4g
        status: active
        display_name: 王一貫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6kZnL1K3eIg1F3HFGiZoll
        subject_person_id: p_McURSghs63gxnc5WxHG3bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vx2kDRfEE97Vw8nM1qYXxC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OC_mSvr5ZG_TCAiYnDkn1S
          claim_id: c_6kZnL1K3eIg1F3HFGiZoll
          source_id: s_bwMP_8T_1nsWY_0-GaiGR2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bwMP_8T_1nsWY_0-GaiGR2
            source_type: api_record
            title: 中国历代人物传记资料库：王紈（CBDB 333627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json
            external_identifier: CBDB:333627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_McURSghs63gxnc5WxHG3bH
        status: active
        display_name: 王周紹
        merged_into_person_id: null
---

# 王紈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紈，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333627） | accepted |
| name.primary | 王紈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U6zX3wnxTCMh3nEUMpMz4g | 王一貫 | accepted |
| other | p_McURSghs63gxnc5WxHG3bH | 王周紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紈（CBDB 333627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333627&o=json)
