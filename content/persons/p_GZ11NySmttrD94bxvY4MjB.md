---
schema: wang-person/v1
id: p_GZ11NySmttrD94bxvY4MjB
status: active
merged_into: null
display_name: 王秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ZC5rDxwh7jxiNv1M2XyEA
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hKV5pGF5W1tL5CBG58LaKv
          claim_id: c_8ZC5rDxwh7jxiNv1M2XyEA
          source_id: s_bp2XtND3FFNrhJyV1vEziD
          stance: supports
          locator: CBDB:243556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243556）
          source: &a1
            id: s_bp2XtND3FFNrhJyV1vEziD
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 243556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243556&o=json
            external_identifier: CBDB:243556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWCfUGJ3D1ngkCM9bT9DHC
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀，明人物。成化五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 243556）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oNItOk1HHcDfSQ_ioazCb8
          claim_id: c_MWCfUGJ3D1ngkCM9bT9DHC
          source_id: s_bp2XtND3FFNrhJyV1vEziD
          stance: supports
          locator: CBDB:243556
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QD0WrRiIcSKeuErOkP9VCn
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aC1svXXphEQ9jhiLWX1sn6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HG7aMD3xn-7gL-hxAzP1JT
          claim_id: c_QD0WrRiIcSKeuErOkP9VCn
          source_id: s_7QgGQBjV5ZkFSkB7ZX69xF
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7QgGQBjV5ZkFSkB7ZX69xF
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 199332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199332&o=json
            external_identifier: CBDB:199332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aC1svXXphEQ9jhiLWX1sn6
        status: active
        display_name: 王廷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| bio.summary | 王秀，明人物。成化五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 243556） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aC1svXXphEQ9jhiLWX1sn6 | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷（CBDB 199332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199332&o=json)
- [中国历代人物传记资料库：王秀（CBDB 243556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243556&o=json)
