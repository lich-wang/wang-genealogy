---
schema: wang-person/v1
id: p_5sGq3fMCKQCFC1ia4efd12
status: active
merged_into: null
display_name: 王表
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y4fEeHxGLnHncPPxzF4svg
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cCVhG9Lei8DrNoXP6vLKt7
          claim_id: c_Y4fEeHxGLnHncPPxzF4svg
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
          stance: supports
          locator: CBDB:200280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200280）
          source: &a1
            id: s_gK3ZaJnmrj275AKBo1WwhC
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 200280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200280&o=json
            external_identifier: CBDB:200280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t9VXSprkpbJVneiNYbzUqs
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oh1qm8kpzSaxK8xXkTjpxm
          claim_id: c_t9VXSprkpbJVneiNYbzUqs
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
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
        id: c_zb2KbPEdkKXpYsPoEL1h2E
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
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
        - id: cs_swWxjGdiiCKQBJPXVmrjZB
          claim_id: c_zb2KbPEdkKXpYsPoEL1h2E
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bxqhQ3uGteJ1FjK9n3ep29
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YcoQnXMUnzzfy9UPvZZV5g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MkCX93WZ9ZZWE02boFWT4
          claim_id: c_bxqhQ3uGteJ1FjK9n3ep29
          source_id: s_wytu5XXGNvkhPz-F0SqRmx
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wytu5XXGNvkhPz-F0SqRmx
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王表妻)（CBDB 255800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255800&o=json
            external_identifier: CBDB:255800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YcoQnXMUnzzfy9UPvZZV5g
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_LCeB4bJjy815XJWEAgUtW8
        subject_person_id: p_x2cWwRuHXUwnazG3VGDonx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5sGq3fMCKQCFC1ia4efd12
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_upVKjWy8cb4gtlyKnHzxoM
          claim_id: c_LCeB4bJjy815XJWEAgUtW8
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x2cWwRuHXUwnazG3VGDonx
        status: active
        display_name: 王彬
        merged_into_person_id: null
    - claim:
        id: c_kqgZUwaoxkeHNbVbuCNAao
        subject_person_id: p_N1CAGwy3JiwpBvbVX2V3dq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5sGq3fMCKQCFC1ia4efd12
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i72dJHE123INPT8R3tNtkh
          claim_id: c_kqgZUwaoxkeHNbVbuCNAao
          source_id: s_gK3ZaJnmrj275AKBo1WwhC
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N1CAGwy3JiwpBvbVX2V3dq
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| birth.date | 1440年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YcoQnXMUnzzfy9UPvZZV5g | 郭氏 | accepted |
| ancestors | p_x2cWwRuHXUwnazG3VGDonx | 王彬 | accepted |
| ancestors | p_N1CAGwy3JiwpBvbVX2V3dq | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王表妻)（CBDB 255800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255800&o=json)
- [中国历代人物传记资料库：王表（CBDB 200280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200280&o=json)
