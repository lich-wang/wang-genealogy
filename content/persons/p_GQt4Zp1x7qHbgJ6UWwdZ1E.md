---
schema: wang-person/v1
id: p_GQt4Zp1x7qHbgJ6UWwdZ1E
status: active
merged_into: null
display_name: 王琦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yNNN8gAUgfk5tHKEbLLpjh
        subject_person_id: p_GQt4Zp1x7qHbgJ6UWwdZ1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZ5fkc8uChKR9tJbLT3xdo
          claim_id: c_yNNN8gAUgfk5tHKEbLLpjh
          source_id: s_bL6RCjyZJ1aEjHd9x7BAQP
          stance: supports
          locator: CBDB:315442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315442）
          source: &a1
            id: s_bL6RCjyZJ1aEjHd9x7BAQP
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 315442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315442&o=json
            external_identifier: CBDB:315442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZVrhRZZ8v1ZZwH9B95Hby
        subject_person_id: p_GQt4Zp1x7qHbgJ6UWwdZ1E
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
        - id: cs_nCdo9kVa6jEh6dhf9UauAK
          claim_id: c_KZVrhRZZ8v1ZZwH9B95Hby
          source_id: s_bL6RCjyZJ1aEjHd9x7BAQP
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
        id: c_xfC52MvVXjk3kk0khAe5bR
        subject_person_id: p_GQt4Zp1x7qHbgJ6UWwdZ1E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJ4a7bRMV9hCP3y348uRJE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CYkt4TBGiHWBkeo2PiaHYd
          claim_id: c_xfC52MvVXjk3kk0khAe5bR
          source_id: s_bL6RCjyZJ1aEjHd9x7BAQP
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tJ4a7bRMV9hCP3y348uRJE
        status: active
        display_name: 王學顏
        merged_into_person_id: null
  other: []
---

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tJ4a7bRMV9hCP3y348uRJE | 王學顏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 315442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315442&o=json)
