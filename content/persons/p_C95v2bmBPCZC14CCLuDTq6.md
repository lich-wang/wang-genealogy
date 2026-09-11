---
schema: wang-person/v1
id: p_C95v2bmBPCZC14CCLuDTq6
status: active
merged_into: null
display_name: 王滔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ew9VtuGPgAnTtATd2KkHQF
        subject_person_id: p_C95v2bmBPCZC14CCLuDTq6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h332CDCWW2E1i4MjinPAVA
          claim_id: c_Ew9VtuGPgAnTtATd2KkHQF
          source_id: s_pRYw9N7w4RVYG6fkQrgPap
          stance: supports
          locator: CBDB:212650
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212650）
          source: &a1
            id: s_pRYw9N7w4RVYG6fkQrgPap
            source_type: api_record
            title: 中国历代人物传记资料库：王滔（CBDB 212650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212650&o=json
            external_identifier: CBDB:212650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGBFwxVHoEc42kkLBNzDwE
        subject_person_id: p_C95v2bmBPCZC14CCLuDTq6
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
        - id: cs_GhVQQis1jkQn7KbnkujnRy
          claim_id: c_YGBFwxVHoEc42kkLBNzDwE
          source_id: s_pRYw9N7w4RVYG6fkQrgPap
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ySWuBZqjJptvEaRuMbdZsf
        subject_person_id: p_C95v2bmBPCZC14CCLuDTq6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bhku7LXKrphWSf7fyoW8hh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n1F3XN1VJIZNkZShgJVbkn
          claim_id: c_ySWuBZqjJptvEaRuMbdZsf
          source_id: s_7YzPmeQaASL2r7rYU3xfW1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7YzPmeQaASL2r7rYU3xfW1
            source_type: api_record
            title: 中国历代人物传记资料库：王家棟（CBDB 206050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206050&o=json
            external_identifier: CBDB:206050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bhku7LXKrphWSf7fyoW8hh
        status: active
        display_name: 王家棟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Bhku7LXKrphWSf7fyoW8hh | 王家棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家棟（CBDB 206050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206050&o=json)
- [中国历代人物传记资料库：王滔（CBDB 212650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212650&o=json)
