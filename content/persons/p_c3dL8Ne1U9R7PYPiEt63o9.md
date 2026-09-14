---
schema: wang-person/v1
id: p_c3dL8Ne1U9R7PYPiEt63o9
status: active
merged_into: null
display_name: 王遵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GnAD7oqCT7N83JANiLhnoX
        subject_person_id: p_c3dL8Ne1U9R7PYPiEt63o9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fB5To8ACB9EWrN7gvAPQvN
          claim_id: c_GnAD7oqCT7N83JANiLhnoX
          source_id: s_Yvg7E4AuKWrDqFB4g2cbiw
          stance: supports
          locator: CBDB:286137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286137）
          source: &a1
            id: s_Yvg7E4AuKWrDqFB4g2cbiw
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 286137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json
            external_identifier: CBDB:286137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o7mSy1RLSjSta8nujdngvA
        subject_person_id: p_c3dL8Ne1U9R7PYPiEt63o9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mebMnKG1dr2y-Id_x-3De9
          claim_id: c_o7mSy1RLSjSta8nujdngvA
          source_id: s_Yvg7E4AuKWrDqFB4g2cbiw
          stance: supports
          locator: CBDB:286137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_25F2eS_PjjBndZ94CQMdsQ
        subject_person_id: p_1VVqD7EPGnVHF4wrhTw5JU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3dL8Ne1U9R7PYPiEt63o9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N2xCE-eMJaAha8Kcoqf_Kc
          claim_id: c_25F2eS_PjjBndZ94CQMdsQ
          source_id: s_uW4LVXaMYyPJpwgzNNXpMN
          stance: supports
          locator: CBDB：兄弟 王芳（202288）之父／母 王伯載
          quotation: null
          interpretation_note: 由兄弟关系推断：王遵 与 王芳 为同胞（CBDB 记「兄」），王芳 之父／母即 王遵 之父／母。
          source:
            id: s_uW4LVXaMYyPJpwgzNNXpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 286137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json
            external_identifier: CBDB:286137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1VVqD7EPGnVHF4wrhTw5JU
        status: active
        display_name: 王伯載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_13Al1r0p0qu32VoapIsxmG
        subject_person_id: p_AEPDTFs3e2Ci1GpeDM9fLo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c3dL8Ne1U9R7PYPiEt63o9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LQMQArNYoNHwTB0W47E5ho
          claim_id: c_13Al1r0p0qu32VoapIsxmG
          source_id: s_uW4LVXaMYyPJpwgzNNXpMN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202288 王芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uW4LVXaMYyPJpwgzNNXpMN
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 286137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json
            external_identifier: CBDB:286137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AEPDTFs3e2Ci1GpeDM9fLo
        status: active
        display_name: 王芳
        merged_into_person_id: null
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| bio.summary | 王遵，明人物。正德十六年進士，籍贯石首。（中国历代人物传记资料库 CBDB 286137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VVqD7EPGnVHF4wrhTw5JU | 王伯載 | accepted |
| other | p_AEPDTFs3e2Ci1GpeDM9fLo | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 286137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286137&o=json)
