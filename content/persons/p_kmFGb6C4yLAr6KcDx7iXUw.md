---
schema: wang-person/v1
id: p_kmFGb6C4yLAr6KcDx7iXUw
status: active
merged_into: null
display_name: 王日宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CgjzAt7thT4QT7oiQffDBH
        subject_person_id: p_kmFGb6C4yLAr6KcDx7iXUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WYhQT6N4hcyk1cU44SNK58
          claim_id: c_CgjzAt7thT4QT7oiQffDBH
          source_id: s_8832yP8E2dUnZF1m1aEYxY
          stance: supports
          locator: CBDB:117562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117562）
          source: &a1
            id: s_8832yP8E2dUnZF1m1aEYxY
            source_type: api_record
            title: 中国历代人物传记资料库：王日宣（CBDB 117562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117562&o=json
            external_identifier: CBDB:117562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5yZ9jm2SUXpMFEQBKwwLN2
        subject_person_id: p_kmFGb6C4yLAr6KcDx7iXUw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_muJ9iD2n4NXdh6qfaLQyRw
          claim_id: c_5yZ9jm2SUXpMFEQBKwwLN2
          source_id: s_8832yP8E2dUnZF1m1aEYxY
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
        id: c_aCAEh4dTuQjNSU1SY31KJi
        subject_person_id: p_kmFGb6C4yLAr6KcDx7iXUw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7amjgt6yp7HBUfn9XcsS2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJ9Tigwvryqqzkquc1eQAB
          claim_id: c_aCAEh4dTuQjNSU1SY31KJi
          source_id: s_8832yP8E2dUnZF1m1aEYxY
          stance: supports
          locator: 元人傳記資料索引，18626：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E7amjgt6yp7HBUfn9XcsS2
        status: active
        display_name: 王令顯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王日宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日宣 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_E7amjgt6yp7HBUfn9XcsS2 | 王令顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王日宣（CBDB 117562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117562&o=json)
