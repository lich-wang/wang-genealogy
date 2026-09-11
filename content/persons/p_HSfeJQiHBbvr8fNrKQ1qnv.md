---
schema: wang-person/v1
id: p_HSfeJQiHBbvr8fNrKQ1qnv
status: active
merged_into: null
display_name: 任某
revision: 1
cbdb_id: 148053
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7oQsSkcOlAK7y-niQGhe3N
        subject_person_id: p_HSfeJQiHBbvr8fNrKQ1qnv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r7XHZLt70EBfFrHJlXS7N1
          claim_id: c_7oQsSkcOlAK7y-niQGhe3N
          source_id: s_ovOH-H06O0hLvjWM68HT4Y
          stance: supports
          locator: CBDB:148053
          quotation: null
          interpretation_note: CBDB 明确记录的王師配偶
          source: &a1
            id: s_ovOH-H06O0hLvjWM68HT4Y
            source_type: api_record
            title: 中国历代人物传记资料库：任某(王師夫)（CBDB 148053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148053&o=json
            external_identifier: CBDB:148053
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
        id: c_3I1XB5jQ9-U4UPkmYMKyma
        subject_person_id: p_da15b1PoPWMmVJ18dpAzHX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HSfeJQiHBbvr8fNrKQ1qnv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ToJBVSnZjXrpDdsQNLSYO
          claim_id: c_3I1XB5jQ9-U4UPkmYMKyma
          source_id: s_ovOH-H06O0hLvjWM68HT4Y
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 43：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_da15b1PoPWMmVJ18dpAzHX
        status: active
        display_name: 王師
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 任某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_da15b1PoPWMmVJ18dpAzHX | 王師 | accepted |

## 外部来源

- [中国历代人物传记资料库：任某(王師夫)（CBDB 148053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148053&o=json)
