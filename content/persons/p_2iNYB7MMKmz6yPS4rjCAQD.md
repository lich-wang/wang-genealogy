---
schema: wang-person/v1
id: p_2iNYB7MMKmz6yPS4rjCAQD
status: active
merged_into: null
display_name: 王彰
revision: 2
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D7PrpM8yoo4kUQSLkBnQMZ
          claim_id: c_sBJXUk97oFPx1hKFHR4m8R
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
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
  spouses: []
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
  other: []
---

# 王彰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彰 | accepted |
| birth.date | 1395年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asrgtX2pUYpXvHRKiTx2Da | 王聞凱 | accepted |
| ancestors | p_9Nv1o3zSRkmnBR6jD8YwLZ | 王致正 | accepted |
| ancestors | p_72o4rDD1BHyKkvsVS4def1 | 王仁卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彰（CBDB 207831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json)
