---
schema: wang-person/v1
id: p_wFTS9Dws5nhZvJ8pXQTGVc
status: active
merged_into: null
display_name: 王孫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M9XuyEpPrkzsB6iQheNxXb
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uyrid2fJvzQxkHPpeWqHxV
          claim_id: c_M9XuyEpPrkzsB6iQheNxXb
          source_id: s_TzY1MpEWWHQHP8THQJWZBS
          stance: supports
          locator: CBDB:335478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335478）
          source: &a1
            id: s_TzY1MpEWWHQHP8THQJWZBS
            source_type: api_record
            title: 中国历代人物传记资料库：王孫（CBDB 335478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335478&o=json
            external_identifier: CBDB:335478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S2jibu65D3bJC74S37x8wo
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
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
        - id: cs_EiDqWMYkoUFM9c53A2P1dT
          claim_id: c_S2jibu65D3bJC74S37x8wo
          source_id: s_TzY1MpEWWHQHP8THQJWZBS
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
        id: c_qFDdvWYIhLFtMrUeSVjmHg
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imQ0z_A7RdDi6galJCy0Q-
          claim_id: c_qFDdvWYIhLFtMrUeSVjmHg
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G5Q12QpxwABQ4p3YD5nNDm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汲（CBDB 126494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json
            external_identifier: CBDB:126494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孫（CBDB 335478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335478&o=json)
- [中国历代人物传记资料库：王用汲（CBDB 126494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json)
