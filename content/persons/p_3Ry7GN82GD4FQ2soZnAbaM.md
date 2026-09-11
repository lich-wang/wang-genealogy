---
schema: wang-person/v1
id: p_3Ry7GN82GD4FQ2soZnAbaM
status: active
merged_into: null
display_name: 王音
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cTH31KCnAAUkzPJtAu5XKa
        subject_person_id: p_3Ry7GN82GD4FQ2soZnAbaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b25rE7PqjKsVFg47kqGjpH
          claim_id: c_cTH31KCnAAUkzPJtAu5XKa
          source_id: s_4AjUwqbE9rVFaG6rVqhZB6
          stance: supports
          locator: CBDB:698567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698567）
          source: &a1
            id: s_4AjUwqbE9rVFaG6rVqhZB6
            source_type: api_record
            title: 中国历代人物传记资料库：王音（CBDB 698567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698567&o=json
            external_identifier: CBDB:698567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tx76eSnkg4ae7pB61HN9aZ
        subject_person_id: p_3Ry7GN82GD4FQ2soZnAbaM
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
        - id: cs_L8WeRmUNyNQqK33Q3K3epm
          claim_id: c_Tx76eSnkg4ae7pB61HN9aZ
          source_id: s_4AjUwqbE9rVFaG6rVqhZB6
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
        id: c_b1nlwFg9g9V4qDAPIexidc
        subject_person_id: p_3Ry7GN82GD4FQ2soZnAbaM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ccFHNE3HvpB2conhHfb2Cv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VNIJ-vV8kZi3o6hk3Z19xO
          claim_id: c_b1nlwFg9g9V4qDAPIexidc
          source_id: s_4AjUwqbE9rVFaG6rVqhZB6
          stance: supports
          locator: 武進陽湖縣志，lgid=152385：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ccFHNE3HvpB2conhHfb2Cv
        status: active
        display_name: 王京
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王音 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ccFHNE3HvpB2conhHfb2Cv | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王音（CBDB 698567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698567&o=json)
