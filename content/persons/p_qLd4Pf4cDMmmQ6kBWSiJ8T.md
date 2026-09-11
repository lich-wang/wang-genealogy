---
schema: wang-person/v1
id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
status: active
merged_into: null
display_name: 王壽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7eYWwc2feegbUMTiH6CEX
        subject_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tc9QLa3Yjdnz7DTqqHXNwE
          claim_id: c_e7eYWwc2feegbUMTiH6CEX
          source_id: s_6PkFXHUmKtk6qAf1zvrajh
          stance: supports
          locator: CBDB:201134
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201134）
          source: &a1
            id: s_6PkFXHUmKtk6qAf1zvrajh
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 201134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201134&o=json
            external_identifier: CBDB:201134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dsaEneQb43KBG8t6J6L8k9
        subject_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7cKh7kZchnwh9sBxSD55g
          claim_id: c_dsaEneQb43KBG8t6J6L8k9
          source_id: s_6PkFXHUmKtk6qAf1zvrajh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2KqyzpEmBUBujoNK3N76CS
        subject_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w6o2DZQM8onTxoqGeNJLNV
          claim_id: c_2KqyzpEmBUBujoNK3N76CS
          source_id: s_6PkFXHUmKtk6qAf1zvrajh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NhMKt6ImoGTvjOQNA6pSF6
        subject_person_id: p_8ncCPBjMxsJMBARy66EQjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jnud66OhOzt5WCHMU_2BDN
          claim_id: c_NhMKt6ImoGTvjOQNA6pSF6
          source_id: s_JnRsT8E8aeFTXk1y34KYhU
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JnRsT8E8aeFTXk1y34KYhU
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 267650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267650&o=json
            external_identifier: CBDB:267650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.784Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8ncCPBjMxsJMBARy66EQjw
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cAWDfD38Fcn_OagtHldKkh
        subject_person_id: p_nXk2hY7EmJcMfmCBa8SJtx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qLd4Pf4cDMmmQ6kBWSiJ8T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BgelXwEVmTM94GS6CxagHp
          claim_id: c_cAWDfD38Fcn_OagtHldKkh
          source_id: s_9Y3NevBrbo6fTFYiE855xH
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9Y3NevBrbo6fTFYiE855xH
            source_type: api_record
            title: 中国历代人物传记资料库：王思義（CBDB 267648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267648&o=json
            external_identifier: CBDB:267648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nXk2hY7EmJcMfmCBa8SJtx
        status: active
        display_name: 王思義
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| birth.date | 1455年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ncCPBjMxsJMBARy66EQjw | 王俊 | accepted |
| ancestors | p_nXk2hY7EmJcMfmCBa8SJtx | 王思義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 267650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267650&o=json)
- [中国历代人物传记资料库：王壽（CBDB 201134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201134&o=json)
- [中国历代人物传记资料库：王思義（CBDB 267648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267648&o=json)
