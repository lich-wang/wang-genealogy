---
schema: wang-person/v1
id: p_CCMezUv4HjuKUC99JaW7qa
status: active
merged_into: null
display_name: 王鉉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NQHxK1Q8aPAZ3dCKho62Kp
        subject_person_id: p_CCMezUv4HjuKUC99JaW7qa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S2kgtEEaC5y9hbct4e8g1H
          claim_id: c_NQHxK1Q8aPAZ3dCKho62Kp
          source_id: s_GMDq1o49kAQcpZqgZ6AaRn
          stance: supports
          locator: CBDB:282424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282424）
          source: &a1
            id: s_GMDq1o49kAQcpZqgZ6AaRn
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 282424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282424&o=json
            external_identifier: CBDB:282424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.083Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xLkvAwAYuVTgGF835h8o7L
        subject_person_id: p_CCMezUv4HjuKUC99JaW7qa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉，明人物。正德十二年進士，籍贯魚臺，入仕監生。（中国历代人物传记资料库 CBDB 282424）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kb0jVpwPHWulQgErsFOO7E
          claim_id: c_xLkvAwAYuVTgGF835h8o7L
          source_id: s_GMDq1o49kAQcpZqgZ6AaRn
          stance: supports
          locator: CBDB:282424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PnVA83B8d84XqxObPJn0k2
        subject_person_id: p_CCMezUv4HjuKUC99JaW7qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gAAfv7JQBPfPSFmCq4BBah
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pDtds36WWDwASN0l1cqHNv
          claim_id: c_PnVA83B8d84XqxObPJn0k2
          source_id: s_GMDq1o49kAQcpZqgZ6AaRn
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gAAfv7JQBPfPSFmCq4BBah
        status: active
        display_name: 王天民
        merged_into_person_id: null
    - claim:
        id: c_3GAeNw1fWF7zFtuWQgyYqW
        subject_person_id: p_CCMezUv4HjuKUC99JaW7qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqX3BzLzHv3jDGLuzAesBg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pKGr4RNOp_PTP768WUlIj
          claim_id: c_3GAeNw1fWF7zFtuWQgyYqW
          source_id: s_aNnLrmUjD5XNWFbi0DKHlo
          stance: supports
          locator: CBDB：兄弟 王天民（202040）之父／母 王鉉
          quotation: null
          interpretation_note: 由兄弟关系推断：王秀民 与 王天民 为同胞（CBDB 记「兄」），王天民 之父／母即 王秀民 之父／母。
          source:
            id: s_aNnLrmUjD5XNWFbi0DKHlo
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 282428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282428&o=json
            external_identifier: CBDB:282428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqX3BzLzHv3jDGLuzAesBg
        status: active
        display_name: 王秀民
        merged_into_person_id: null
    - claim:
        id: c_wjTvDbXJEPxlUQ4NQvKyE6
        subject_person_id: p_CCMezUv4HjuKUC99JaW7qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GLW35f938RorNH5gD1QSmK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDB8ldQC6AsDHg3VAFv-tx
          claim_id: c_wjTvDbXJEPxlUQ4NQvKyE6
          source_id: s_kkhlFosBydSeUJ_qaCPDJC
          stance: supports
          locator: CBDB：兄弟 王天民（202040）之父／母 王鉉
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊民 与 王天民 为同胞（CBDB 记「兄」），王天民 之父／母即 王俊民 之父／母。
          source:
            id: s_kkhlFosBydSeUJ_qaCPDJC
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 282427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282427&o=json
            external_identifier: CBDB:282427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GLW35f938RorNH5gD1QSmK
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | 王鉉，明人物。正德十二年進士，籍贯魚臺，入仕監生。（中国历代人物传记资料库 CBDB 282424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gAAfv7JQBPfPSFmCq4BBah | 王天民 | accepted |
| children | p_CqX3BzLzHv3jDGLuzAesBg | 王秀民 | accepted |
| children | p_GLW35f938RorNH5gD1QSmK | 王俊民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊民（CBDB 282427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282427&o=json)
- [中国历代人物传记资料库：王秀民（CBDB 282428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282428&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 282424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282424&o=json)
