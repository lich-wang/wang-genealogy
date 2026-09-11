---
schema: wang-person/v1
id: p_wA8ZNFrQ35p5oJR5sFnVA7
status: active
merged_into: null
display_name: 吳氏
revision: 1
cbdb_id: 240894
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dIs4oub8fOo895ZRvQfo5p
        subject_person_id: p_wA8ZNFrQ35p5oJR5sFnVA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ks8dfLpyS8__K1VcpAXql5
          claim_id: c_dIs4oub8fOo895ZRvQfo5p
          source_id: s_nrQpkLcc3fgl0qIHaHRLQm
          stance: supports
          locator: CBDB:240894
          quotation: null
          interpretation_note: CBDB 明确记录的王芳配偶
          source: &a1
            id: s_nrQpkLcc3fgl0qIHaHRLQm
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王芳妻)（CBDB 240894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240894&o=json
            external_identifier: CBDB:240894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vFNy8HfdbLtb731aRPrkgL
        subject_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wA8ZNFrQ35p5oJR5sFnVA7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YU0WLw_1oO4tJw8dDXMUr4
          claim_id: c_vFNy8HfdbLtb731aRPrkgL
          source_id: s_nrQpkLcc3fgl0qIHaHRLQm
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oJFhqGsSYkYTeGZ7iNnAnA
        status: active
        display_name: 王芳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_oJFhqGsSYkYTeGZ7iNnAnA | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳氏(王芳妻)（CBDB 240894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240894&o=json)
