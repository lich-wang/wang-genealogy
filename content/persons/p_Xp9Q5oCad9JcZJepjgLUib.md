---
schema: wang-person/v1
id: p_Xp9Q5oCad9JcZJepjgLUib
status: active
merged_into: null
display_name: 王緝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Skg86uMFBkDAVvqE99AR7e
        subject_person_id: p_Xp9Q5oCad9JcZJepjgLUib
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cchv7Z3HUF8ZDXNnMwePFc
          claim_id: c_Skg86uMFBkDAVvqE99AR7e
          source_id: s_hJcffCa8VY2nie71dypvAN
          stance: supports
          locator: CBDB:333622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333622）
          source: &a1
            id: s_hJcffCa8VY2nie71dypvAN
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 333622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333622&o=json
            external_identifier: CBDB:333622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_85jwVWMcGRE1NmLjdRHti5
        subject_person_id: p_Xp9Q5oCad9JcZJepjgLUib
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f4n6ZZisNjrmZE_ETR75w3
          claim_id: c_85jwVWMcGRE1NmLjdRHti5
          source_id: s_hJcffCa8VY2nie71dypvAN
          stance: supports
          locator: CBDB:333622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王緝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝 | accepted |
| bio.summary | 王緝，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緝（CBDB 333622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333622&o=json)
