---
schema: wang-person/v1
id: p_Hgd3GnFDoJXaS5y6oGWTa8
status: active
merged_into: null
display_name: 王象樞
cbdb_id: 220270
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BsnrRJ2QYStUk4xJGkHy1X
        subject_person_id: p_Hgd3GnFDoJXaS5y6oGWTa8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象樞，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220270）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zMnJUaVNNBJx-Eu_zxXR9y
          claim_id: c_BsnrRJ2QYStUk4xJGkHy1X
          source_id: s_8T2ACVNDqYLEQsvCNt92B7
          stance: supports
          locator: CBDB:220270
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8T2ACVNDqYLEQsvCNt92B7
            source_type: api_record
            title: 中国历代人物传记资料库：王象樞（CBDB 220270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json
            external_identifier: CBDB:220270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bpf4hCE98FPV6qmZ6Wo9AC
        subject_person_id: p_Hgd3GnFDoJXaS5y6oGWTa8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XJaAbD4E6ipbuqwrgBNzGb
          claim_id: c_Bpf4hCE98FPV6qmZ6Wo9AC
          source_id: s_8T2ACVNDqYLEQsvCNt92B7
          stance: supports
          locator: CBDB:220270
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KbYCbJwd74CjocrAvOro2L
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hgd3GnFDoJXaS5y6oGWTa8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hkNNi6L2w_-evvE_Sb1SpT
          claim_id: c_KbYCbJwd74CjocrAvOro2L
          source_id: s_xOum9hFoDYiQwWC51SQIhR
          stance: supports
          locator: CBDB：兄弟 王象蒙（206595）之父／母 王之辅
          quotation: null
          interpretation_note: 由兄弟关系推断：王象樞 与 王象蒙 为同胞（CBDB 记「兄」），王象蒙 之父／母即 王象樞 之父／母。
          source:
            id: s_xOum9hFoDYiQwWC51SQIhR
            source_type: api_record
            title: 中国历代人物传记资料库：王象樞（CBDB 220270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json
            external_identifier: CBDB:220270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VLPN2ybQtkqyCPrJiYL7vx
        status: active
        display_name: 王之辅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8dwrQrS_dqJyeLxfnT63Pi
        subject_person_id: p_Hgd3GnFDoJXaS5y6oGWTa8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r0zNYdnfLVTQQDwFKIJvh9
          claim_id: c_8dwrQrS_dqJyeLxfnT63Pi
          source_id: s_xOum9hFoDYiQwWC51SQIhR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206595 王象蒙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xOum9hFoDYiQwWC51SQIhR
            source_type: api_record
            title: 中国历代人物传记资料库：王象樞（CBDB 220270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json
            external_identifier: CBDB:220270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
---

# 王象樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象樞，明人物。萬曆八年進士，籍贯新城。（中国历代人物传记资料库 CBDB 220270） | accepted |
| name.primary | 王象樞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VLPN2ybQtkqyCPrJiYL7vx | 王之辅 | accepted |
| other | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象樞（CBDB 220270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220270&o=json)
