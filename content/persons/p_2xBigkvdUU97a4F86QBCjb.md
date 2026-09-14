---
schema: wang-person/v1
id: p_2xBigkvdUU97a4F86QBCjb
status: active
merged_into: null
display_name: 王同德
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_toDz75uJcSwJRxJiNStspZ
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZQXDFANNnmNboiYP2KoFv
          claim_id: c_toDz75uJcSwJRxJiNStspZ
          source_id: s_deu4FzrUv1LXSJhSzK1Jy6
          stance: supports
          locator: CBDB:246479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246479）
          source: &a1
            id: s_deu4FzrUv1LXSJhSzK1Jy6
            source_type: api_record
            title: 中国历代人物传记资料库：王同德（CBDB 246479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246479&o=json
            external_identifier: CBDB:246479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4PbSKDeLfDkbMV8L21Kpt1
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同德，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c-THzIhS9CbQZPXcblOx5o
          claim_id: c_4PbSKDeLfDkbMV8L21Kpt1
          source_id: s_deu4FzrUv1LXSJhSzK1Jy6
          stance: supports
          locator: CBDB:246479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cxDOCbbkM3bEazaRzkfyMe
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qbrc2i2A4IhKeeFDXTPAIk
          claim_id: c_cxDOCbbkM3bEazaRzkfyMe
          source_id: s_deu4FzrUv1LXSJhSzK1Jy6
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rPERXxEMwZa9gPH43DGT1J
        status: active
        display_name: 王肅
        merged_into_person_id: null
    - claim:
        id: c_xwmgthPhqBX9hcrhNK6ASz
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_36UQZWrdT25C4yUb3cSCtV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lDMxb9Xw2eq6snIBqcSSH-
          claim_id: c_xwmgthPhqBX9hcrhNK6ASz
          source_id: s_X6_l1g3JSOL4V7CUwzpaNz
          stance: supports
          locator: CBDB：兄弟 王肅（199546）之父／母 王同德
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇信 与 王肅 为同胞（CBDB 记「兄」），王肅 之父／母即 王崇信 之父／母。
          source:
            id: s_X6_l1g3JSOL4V7CUwzpaNz
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 246483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json
            external_identifier: CBDB:246483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_36UQZWrdT25C4yUb3cSCtV
        status: active
        display_name: 王崇信
        merged_into_person_id: null
    - claim:
        id: c_xkJEtxz2ERptLNICoGjxOe
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AcD8rLBCCjpZ5E8dG4nLKD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UMfd26g5bZVw_7QE8iB8VC
          claim_id: c_xkJEtxz2ERptLNICoGjxOe
          source_id: s_cnqCn_i-YipwR57k0UG3K8
          stance: supports
          locator: CBDB：兄弟 王肅（199546）之父／母 王同德
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇惠 与 王肅 为同胞（CBDB 记「兄」），王肅 之父／母即 王崇惠 之父／母。
          source:
            id: s_cnqCn_i-YipwR57k0UG3K8
            source_type: api_record
            title: 中国历代人物传记资料库：王崇惠（CBDB 246485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246485&o=json
            external_identifier: CBDB:246485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AcD8rLBCCjpZ5E8dG4nLKD
        status: active
        display_name: 王崇惠
        merged_into_person_id: null
    - claim:
        id: c_QAz88HIzoTBcHWD4_F0xsI
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LEQpdJpHPhjPpitoCFFp8Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8cWhDeADGBEQ9dL7XWYDy
          claim_id: c_QAz88HIzoTBcHWD4_F0xsI
          source_id: s_m7HfIK5pOLf3dBfEnQ8IH3
          stance: supports
          locator: CBDB：兄弟 王肅（199546）之父／母 王同德
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇寬 与 王肅 为同胞（CBDB 记「兄」），王肅 之父／母即 王崇寬 之父／母。
          source:
            id: s_m7HfIK5pOLf3dBfEnQ8IH3
            source_type: api_record
            title: 中国历代人物传记资料库：王崇寬（CBDB 246482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json
            external_identifier: CBDB:246482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LEQpdJpHPhjPpitoCFFp8Q
        status: active
        display_name: 王崇寬
        merged_into_person_id: null
    - claim:
        id: c_Zusp1R4-dAo5Hrv2qFM-KJ
        subject_person_id: p_2xBigkvdUU97a4F86QBCjb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eh39zdRgSvpNWuD7pQeAwH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fymvfa6Aus1GlpoF-vlge6
          claim_id: c_Zusp1R4-dAo5Hrv2qFM-KJ
          source_id: s_fgo5ZGCDBXYgaNNBcItKso
          stance: supports
          locator: CBDB：兄弟 王肅（199546）之父／母 王同德
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇敏 与 王肅 为同胞（CBDB 记「兄」），王肅 之父／母即 王崇敏 之父／母。
          source:
            id: s_fgo5ZGCDBXYgaNNBcItKso
            source_type: api_record
            title: 中国历代人物传记资料库：王崇敏（CBDB 246484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246484&o=json
            external_identifier: CBDB:246484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eh39zdRgSvpNWuD7pQeAwH
        status: active
        display_name: 王崇敏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王同德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同德 | accepted |
| bio.summary | 王同德，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rPERXxEMwZa9gPH43DGT1J | 王肅 | accepted |
| children | p_36UQZWrdT25C4yUb3cSCtV | 王崇信 | accepted |
| children | p_AcD8rLBCCjpZ5E8dG4nLKD | 王崇惠 | accepted |
| children | p_LEQpdJpHPhjPpitoCFFp8Q | 王崇寬 | accepted |
| children | p_eh39zdRgSvpNWuD7pQeAwH | 王崇敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇惠（CBDB 246485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246485&o=json)
- [中国历代人物传记资料库：王崇寬（CBDB 246482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246482&o=json)
- [中国历代人物传记资料库：王崇敏（CBDB 246484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246484&o=json)
- [中国历代人物传记资料库：王崇信（CBDB 246483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246483&o=json)
- [中国历代人物传记资料库：王同德（CBDB 246479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246479&o=json)
