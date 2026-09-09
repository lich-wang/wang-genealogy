---
schema: wang-person/v1
id: p_sKx7H252owEcMeqyH2iu9b
status: active
merged_into: null
display_name: 王鼐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VMacAox8LLUKTUaEgH8ZMD
        subject_person_id: p_sKx7H252owEcMeqyH2iu9b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BUUfNuyW3wD8oPf227jE12
          claim_id: c_VMacAox8LLUKTUaEgH8ZMD
          source_id: s_YgzreGEw9ZhS8iwfbLbQX6
          stance: supports
          locator: CBDB:470817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（470817）
          source: &a1
            id: s_YgzreGEw9ZhS8iwfbLbQX6
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 470817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470817&o=json
            external_identifier: CBDB:470817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AoSBJtQBtSA9UmgCahPs33
        subject_person_id: p_sKx7H252owEcMeqyH2iu9b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1BfocioZp19iG9kTwrdGu4
          claim_id: c_AoSBJtQBtSA9UmgCahPs33
          source_id: s_YgzreGEw9ZhS8iwfbLbQX6
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
  descendants: []
  other: []
---

# 王鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼐（CBDB 470817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=470817&o=json)
