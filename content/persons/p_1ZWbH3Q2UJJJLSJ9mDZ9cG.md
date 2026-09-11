---
schema: wang-person/v1
id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
status: active
merged_into: null
display_name: 王應璧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3qPYGLcQ1fyMj5wnuYAEd
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LSZPdLqGmFXC8NfNCyTuJp
          claim_id: c_P3qPYGLcQ1fyMj5wnuYAEd
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: CBDB:203997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203997）
          source: &a1
            id: s_QAN5QDh2Pfie4nG4gBfdF4
            source_type: api_record
            title: 中国历代人物传记资料库：王應璧（CBDB 203997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json
            external_identifier: CBDB:203997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3spJEJzKVcJiVgrcXdMXR5
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_voexxmMREysKBrvxUnQCm4
          claim_id: c_3spJEJzKVcJiVgrcXdMXR5
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
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
        id: c_Tb5c9E426NaWzmxeG47CkR
        subject_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
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
        - id: cs_F3XPwrehDhLhbvGn3dwq17
          claim_id: c_Tb5c9E426NaWzmxeG47CkR
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
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
        id: c_2cnXpx5H-n3g8WWM-TK3Jb
        subject_person_id: p_vZNxiPDxgjLuXX3n9HfE91
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JKkS2K07VsQE7F_Vk2DiC0
          claim_id: c_2cnXpx5H-n3g8WWM-TK3Jb
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vZNxiPDxgjLuXX3n9HfE91
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_l_yb-q8rMjeJUZDxoEEUKD
        subject_person_id: p_MSfyEC8UGGCNMEW3o3k44N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kI-ZH8IUiCByhnKpXpzOnq
          claim_id: c_l_yb-q8rMjeJUZDxoEEUKD
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MSfyEC8UGGCNMEW3o3k44N
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_isA5_KpBfq9wPszXjJBxGy
        subject_person_id: p_CHoDtVc19HWvSbvszLdfer
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZWbH3Q2UJJJLSJ9mDZ9cG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XpOuJ0SNpZC7ipUwa-BOyI
          claim_id: c_isA5_KpBfq9wPszXjJBxGy
          source_id: s_QAN5QDh2Pfie4nG4gBfdF4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CHoDtVc19HWvSbvszLdfer
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應璧 | accepted |
| birth.date | 1513年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vZNxiPDxgjLuXX3n9HfE91 | 王祿 | accepted |
| ancestors | p_MSfyEC8UGGCNMEW3o3k44N | 王義 | accepted |
| ancestors | p_CHoDtVc19HWvSbvszLdfer | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應璧（CBDB 203997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203997&o=json)
