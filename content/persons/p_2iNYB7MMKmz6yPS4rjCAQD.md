---
schema: wang-person/v1
id: p_2iNYB7MMKmz6yPS4rjCAQD
status: active
merged_into: null
display_name: 王彰
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xSjAsTPMjvHhtdTYc5JMoK
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QGTtKcRArzCwWm1xUCNq5C
          claim_id: c_xSjAsTPMjvHhtdTYc5JMoK
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: CBDB:207831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207831）
          source: &a1
            id: s_g2jrpdwRHB37XPK8y1Q56W
            source_type: api_record
            title: 中国历代人物传记资料库：王彰（CBDB 207831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json
            external_identifier: CBDB:207831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_up8dYFHoE4ZzYJn4MRmVia
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fJ3JBpnB5mG9fxwb4GjCb2
          claim_id: c_up8dYFHoE4ZzYJn4MRmVia
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
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
        id: c_sBJXUk97oFPx1hKFHR4m8R
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彰（生于1395年），明人物。正統四年進士，籍贯海陽，入仕進士。（中国历代人物传记资料库 CBDB 207831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o8afvEdiSTo_YWRfidVH-W
          claim_id: c_sBJXUk97oFPx1hKFHR4m8R
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: CBDB:207831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_221Yq_WkBT272tI4JYR13X
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYjnc5RrNDfp7xIySMh3-b
          claim_id: c_221Yq_WkBT272tI4JYR13X
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_asrgtX2pUYpXvHRKiTx2Da
        status: active
        display_name: 王聞凱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gRCYXxn_eyV5Kdr4J88vTs
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eqri4XcbMcmKE3joAz36hR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTXEPnVaE2n2QuocusYCrA
          claim_id: c_gRCYXxn_eyV5Kdr4J88vTs
          source_id: s_hoDY6qSJKcd5gBs4B5xAkA
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hoDY6qSJKcd5gBs4B5xAkA
            source_type: api_record
            title: 中国历代人物传记资料库：杜氏(王彰妻)（CBDB 236744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236744&o=json
            external_identifier: CBDB:236744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eqri4XcbMcmKE3joAz36hR
        status: active
        display_name: 杜氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_9uRmKTxCX40jlElr5Jvwe_
        subject_person_id: p_9Nv1o3zSRkmnBR6jD8YwLZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r1xFG480ePKtzdpgbxqpPl
          claim_id: c_9uRmKTxCX40jlElr5Jvwe_
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9Nv1o3zSRkmnBR6jD8YwLZ
        status: active
        display_name: 王致正
        merged_into_person_id: null
    - claim:
        id: c_mTTsYXH5qwpZXk8oo_bCRH
        subject_person_id: p_72o4rDD1BHyKkvsVS4def1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yBYAm-M46ca9ToSKTxAQOo
          claim_id: c_mTTsYXH5qwpZXk8oo_bCRH
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_72o4rDD1BHyKkvsVS4def1
        status: active
        display_name: 王仁卿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_VZ_jZPRlWOOxeYTyFcB-qZ
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_85wB9oyLmcqBv8o7RhR9Ac
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QzWRmQUfty5x1csxWLpPGz
          claim_id: c_VZ_jZPRlWOOxeYTyFcB-qZ
          source_id: s_DsvcY-5IiwQUBJccGxwKKI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207831 王彰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DsvcY-5IiwQUBJccGxwKKI
            source_type: api_record
            title: 中国历代人物传记资料库：王冬（CBDB 236746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236746&o=json
            external_identifier: CBDB:236746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_85wB9oyLmcqBv8o7RhR9Ac
        status: active
        display_name: 王冬
        merged_into_person_id: null
    - claim:
        id: c_4-MrkLeEfyTrlhVmsDVgb0
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O9s8yWcwsvyctSkt5q5Hxh
          claim_id: c_4-MrkLeEfyTrlhVmsDVgb0
          source_id: s_Om-s_0o9jVb1ysqmo9T2Fa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207831 王彰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Om-s_0o9jVb1ysqmo9T2Fa
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 236747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json
            external_identifier: CBDB:236747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JP4dZ9Qgk2oGTc9mcdrUkB
        status: active
        display_name: 王彬
        merged_into_person_id: null
    - claim:
        id: c_VSrfa6fAY86eZuo_-F6BvL
        subject_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dDhkUYHKCRgJCyVvb8hQBc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VOPeGOvuDyIH2axPNbyIaD
          claim_id: c_VSrfa6fAY86eZuo_-F6BvL
          source_id: s_H17e5AUELdd8PHnI8Vk5we
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207831 王彰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H17e5AUELdd8PHnI8Vk5we
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 236748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236748&o=json
            external_identifier: CBDB:236748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDhkUYHKCRgJCyVvb8hQBc
        status: active
        display_name: 王美
        merged_into_person_id: null
---

# 王彰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彰 | accepted |
| birth.date | 1395年 | accepted |
| bio.summary | 王彰（生于1395年），明人物。正統四年進士，籍贯海陽，入仕進士。（中国历代人物传记资料库 CBDB 207831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asrgtX2pUYpXvHRKiTx2Da | 王聞凱 | accepted |
| spouses | p_eqri4XcbMcmKE3joAz36hR | 杜氏 | accepted |
| ancestors | p_9Nv1o3zSRkmnBR6jD8YwLZ | 王致正 | accepted |
| ancestors | p_72o4rDD1BHyKkvsVS4def1 | 王仁卿 | accepted |
| other | p_85wB9oyLmcqBv8o7RhR9Ac | 王冬 | accepted |
| other | p_JP4dZ9Qgk2oGTc9mcdrUkB | 王彬 | accepted |
| other | p_dDhkUYHKCRgJCyVvb8hQBc | 王美 | accepted |

## 外部来源

- [中国历代人物传记资料库：杜氏(王彰妻)（CBDB 236744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236744&o=json)
- [中国历代人物传记资料库：王彬（CBDB 236747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236747&o=json)
- [中国历代人物传记资料库：王冬（CBDB 236746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236746&o=json)
- [中国历代人物传记资料库：王美（CBDB 236748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236748&o=json)
- [中国历代人物传记资料库：王彰（CBDB 207831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json)
