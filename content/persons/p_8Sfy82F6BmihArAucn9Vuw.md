---
schema: wang-person/v1
id: p_8Sfy82F6BmihArAucn9Vuw
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cyH2jDF9r8i1GCUHM6E5G2
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N8kEFnB6ShSA8JFWdL3YM6
          claim_id: c_cyH2jDF9r8i1GCUHM6E5G2
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: CBDB:67953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67953）
          source: &a1
            id: s_p1CXfyPv5LXzNzgR3qcWyx
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json
            external_identifier: CBDB:67953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wd7hPi6oW2aHj3rPDaWB28
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1480年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f2D7gLJR6ZoaTzyKWrE3LC
          claim_id: c_Wd7hPi6oW2aHj3rPDaWB28
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
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
        id: c_rWEbnwTrfubuMavstkYjG1
        subject_person_id: p_8Sfy82F6BmihArAucn9Vuw
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
        - id: cs_9C2Z3PFsL9L4ZxxcNtDt9V
          claim_id: c_rWEbnwTrfubuMavstkYjG1
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
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
        id: c_B8o3gYbeOxx3Z0i4cWDPD-
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMQPsnar_3FC8lH_0YSEwB
          claim_id: c_B8o3gYbeOxx3Z0i4cWDPD-
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Zr3cc57cGmUXGbD4psHLyS
        status: active
        display_name: 王仕復
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yWCuPGOZbzaYemjnxj9u3c
        subject_person_id: p_thNdzJMkJjjDe2Hr5mo9Hf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gVovzc0hVshq8sfNb5XsZJ
          claim_id: c_yWCuPGOZbzaYemjnxj9u3c
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_thNdzJMkJjjDe2Hr5mo9Hf
        status: active
        display_name: 王庶叔
        merged_into_person_id: null
    - claim:
        id: c_5luk-4dAwn2nVFRk78s6yB
        subject_person_id: p_q88ScjyNJ3fMjZFYBwS46A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmUGfu-YyF7rwnP7C5TgZ-
          claim_id: c_5luk-4dAwn2nVFRk78s6yB
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q88ScjyNJ3fMjZFYBwS46A
        status: active
        display_name: 王原簡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| death.date | 1480年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Zr3cc57cGmUXGbD4psHLyS | 王仕復 | accepted |
| ancestors | p_thNdzJMkJjjDe2Hr5mo9Hf | 王庶叔 | accepted |
| ancestors | p_q88ScjyNJ3fMjZFYBwS46A | 王原簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詔（CBDB 67953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json)
