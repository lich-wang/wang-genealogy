---
schema: wang-person/v1
id: p_8e2K3VWTefmXzfc1EdNEe7
status: active
merged_into: null
display_name: 王士任
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6i2EismK3VMTitj1kUyPN
        subject_person_id: p_8e2K3VWTefmXzfc1EdNEe7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x75qaCuHH1WAkgJJa1pfj3
          claim_id: c_U6i2EismK3VMTitj1kUyPN
          source_id: s_SHjemTjLriBfHCtxxXm6WK
          stance: supports
          locator: CBDB:232798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232798）
          source: &a1
            id: s_SHjemTjLriBfHCtxxXm6WK
            source_type: api_record
            title: 中国历代人物传记资料库：王士任（CBDB 232798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232798&o=json
            external_identifier: CBDB:232798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cP4a4Ax1EXc6QwvkxHA99H
        subject_person_id: p_8e2K3VWTefmXzfc1EdNEe7
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
        - id: cs_w7JCjf96guz37qQxSnG9TF
          claim_id: c_cP4a4Ax1EXc6QwvkxHA99H
          source_id: s_SHjemTjLriBfHCtxxXm6WK
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4P1WkDmD_9JoCTa7AloKWn
        subject_person_id: p_8e2K3VWTefmXzfc1EdNEe7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DvVKW3AUxK5cCLW8rtgfB4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MrDLZlqUU-dGH1wQRn8l2z
          claim_id: c_4P1WkDmD_9JoCTa7AloKWn
          source_id: s_SHjemTjLriBfHCtxxXm6WK
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DvVKW3AUxK5cCLW8rtgfB4
        status: active
        display_name: 王湯孫
        merged_into_person_id: null
  other: []
---

# 王士任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士任 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DvVKW3AUxK5cCLW8rtgfB4 | 王湯孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士任（CBDB 232798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232798&o=json)
