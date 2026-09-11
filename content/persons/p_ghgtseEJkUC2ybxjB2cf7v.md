---
schema: wang-person/v1
id: p_ghgtseEJkUC2ybxjB2cf7v
status: active
merged_into: null
display_name: 王立道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sEYHbdQZ66BeLVUqJ4iXUD
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LpGmXMRs7JRDAj8gPdm2j4
          claim_id: c_sEYHbdQZ66BeLVUqJ4iXUD
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: CBDB:34712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34712）
          source: &a1
            id: s_MUbNoy15BYcB1rfWzY7dYg
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 34712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json
            external_identifier: CBDB:34712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o4CfpBoNX92cf9DQft66qa
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DY7EbJRUMdVLgTF5kWxqRe
          claim_id: c_o4CfpBoNX92cf9DQft66qa
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EfeZYf1yepFEYEcKBKgpa7
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15b3A1eAysYHJi4NNNR831
          claim_id: c_EfeZYf1yepFEYEcKBKgpa7
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qfDtCygNnSjCi5YVRLERaP
        subject_person_id: p_ghgtseEJkUC2ybxjB2cf7v
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
        - id: cs_sWC5VrR6ygSy8WyWozHqL5
          claim_id: c_qfDtCygNnSjCi5YVRLERaP
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
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
        id: c_Y2LIJVoIYDhzWigCe6glkm
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wr-GBSjN0M62i9bMKrm6Fx
          claim_id: c_Y2LIJVoIYDhzWigCe6glkm
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GSjakwc9qcDmQzVRm7NrP8
        status: active
        display_name: 王表
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8lb2PyCJM6McH2pG_wnzKU
        subject_person_id: p_KhayJvfHv4EZubYePUZF8P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1aSEaoGMDNBpuzQzMWAMPa
          claim_id: c_8lb2PyCJM6McH2pG_wnzKU
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KhayJvfHv4EZubYePUZF8P
        status: active
        display_name: 王子輝
        merged_into_person_id: null
    - claim:
        id: c_MNjxb0KLjTmmVMBbAAcyZF
        subject_person_id: p_wJemAUaKC2t74cEjRVqWg6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v9HEaU9V3t8yVTKqEzhidO
          claim_id: c_MNjxb0KLjTmmVMBbAAcyZF
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wJemAUaKC2t74cEjRVqWg6
        status: active
        display_name: 王冕
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王立道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立道 | accepted |
| birth.date | 1510年 | accepted |
| death.date | 1547年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GSjakwc9qcDmQzVRm7NrP8 | 王表 | accepted |
| ancestors | p_KhayJvfHv4EZubYePUZF8P | 王子輝 | accepted |
| ancestors | p_wJemAUaKC2t74cEjRVqWg6 | 王冕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立道（CBDB 34712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json)
