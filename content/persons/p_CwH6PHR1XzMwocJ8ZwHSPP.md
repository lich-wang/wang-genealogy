---
schema: wang-person/v1
id: p_CwH6PHR1XzMwocJ8ZwHSPP
status: active
merged_into: null
display_name: 王豪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ba3GqS6RSkK6M3h231h44T
        subject_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7MZ31Af8oeA3WFQvDM56Ks
          claim_id: c_Ba3GqS6RSkK6M3h231h44T
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: CBDB:208164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208164）
          source: &a1
            id: s_6M4qEeJfDYH98dZB9CiF5G
            source_type: api_record
            title: 中国历代人物传记资料库：王豪（CBDB 208164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json
            external_identifier: CBDB:208164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bXfShLrBBLDSjYdVLGtT3K
        subject_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1412年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHcJHAuXQ3cJs3xjkMc4qt
          claim_id: c_bXfShLrBBLDSjYdVLGtT3K
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
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
        id: c_jb1218SATLoo2AXTdWX5y3
        subject_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
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
        - id: cs_KkmnYNJRDrG8b9K2BpETEL
          claim_id: c_jb1218SATLoo2AXTdWX5y3
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
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
        id: c_cOwKuq6W0WwhKtKfk7yGWY
        subject_person_id: p_jCmvSEJEzMCfHNSXJ1XAo8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xK3ZItgeV1VR6MgMnx-RPK
          claim_id: c_cOwKuq6W0WwhKtKfk7yGWY
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jCmvSEJEzMCfHNSXJ1XAo8
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iUZrhg4jH4BO1W9fESWP3E
        subject_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AS96G4T4Cjygo3FnLyszPK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nj2NrNLtI1dKzRZvwSNkij
          claim_id: c_iUZrhg4jH4BO1W9fESWP3E
          source_id: s_GMmhSJCqKRKVoqLZEZn3kp
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GMmhSJCqKRKVoqLZEZn3kp
            source_type: api_record
            title: 中国历代人物传记资料库：蔣氏(王豪妻)（CBDB 241292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241292&o=json
            external_identifier: CBDB:241292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AS96G4T4Cjygo3FnLyszPK
        status: active
        display_name: 蔣氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_WyOU09YG-gCFwh2X-kYSQF
        subject_person_id: p_yL1B27xvickNJiY7j9s1xG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGc1mumtvpAKQtoruQmh_G
          claim_id: c_WyOU09YG-gCFwh2X-kYSQF
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yL1B27xvickNJiY7j9s1xG
        status: active
        display_name: 王辛
        merged_into_person_id: null
    - claim:
        id: c_WejALr38K6jDjTq2H9MWXX
        subject_person_id: p_TH8m84MvA8fiu9ubysTSGe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CwH6PHR1XzMwocJ8ZwHSPP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPyzEA62XTc-m7yGBqcgAB
          claim_id: c_WejALr38K6jDjTq2H9MWXX
          source_id: s_6M4qEeJfDYH98dZB9CiF5G
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第七十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TH8m84MvA8fiu9ubysTSGe
        status: active
        display_name: 王順之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王豪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豪 | accepted |
| birth.date | 1412年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jCmvSEJEzMCfHNSXJ1XAo8 | 王寧 | accepted |
| spouses | p_AS96G4T4Cjygo3FnLyszPK | 蔣氏 | accepted |
| ancestors | p_yL1B27xvickNJiY7j9s1xG | 王辛 | accepted |
| ancestors | p_TH8m84MvA8fiu9ubysTSGe | 王順之 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔣氏(王豪妻)（CBDB 241292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241292&o=json)
- [中国历代人物传记资料库：王豪（CBDB 208164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208164&o=json)
