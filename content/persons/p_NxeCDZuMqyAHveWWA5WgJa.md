---
schema: wang-person/v1
id: p_NxeCDZuMqyAHveWWA5WgJa
status: active
merged_into: null
display_name: 吳嘉紀
revision: 1
cbdb_id: 78598
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iXT4lMRfkqMsQe-Lo5tWlF
        subject_person_id: p_NxeCDZuMqyAHveWWA5WgJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳嘉紀
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z5nvOdq6CW_WUU6jNEN3wb
          claim_id: c_iXT4lMRfkqMsQe-Lo5tWlF
          source_id: s_PHTKe3osJt7wAK8HMWdvfH
          stance: supports
          locator: CBDB:78598
          quotation: null
          interpretation_note: CBDB 明确记录的王睿配偶
          source: &a1
            id: s_PHTKe3osJt7wAK8HMWdvfH
            source_type: api_record
            title: 中国历代人物传记资料库：吳嘉紀（CBDB 78598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=78598&o=json
            external_identifier: CBDB:78598
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
        id: c_IaCQX6tNYCwzm79B8e6F6E
        subject_person_id: p_8VgfRgb3JaoUnXm9JLDdMf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NxeCDZuMqyAHveWWA5WgJa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JY3l_vgKr8mjGvqDdI_e27
          claim_id: c_IaCQX6tNYCwzm79B8e6F6E
          source_id: s_PHTKe3osJt7wAK8HMWdvfH
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3530, HuWenKai #250：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8VgfRgb3JaoUnXm9JLDdMf
        status: active
        display_name: 王睿
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳嘉紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳嘉紀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8VgfRgb3JaoUnXm9JLDdMf | 王睿 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳嘉紀（CBDB 78598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=78598&o=json)
