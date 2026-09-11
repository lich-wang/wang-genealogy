---
schema: wang-person/v1
id: p_qERW8MFNwQT1ZsjCDZMwyp
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_njGQgttPuKdnMtUzRf7iP5
        subject_person_id: p_qERW8MFNwQT1ZsjCDZMwyp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HmZYEQNGF5rd4RZCScQLBL
          claim_id: c_njGQgttPuKdnMtUzRf7iP5
          source_id: s_xopVqbYAjWDvnKynGfq17L
          stance: supports
          locator: CBDB:155017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155017）
          source: &a1
            id: s_xopVqbYAjWDvnKynGfq17L
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 155017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155017&o=json
            external_identifier: CBDB:155017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d9sgU35hF5GGAUoLLopzp4
        subject_person_id: p_qERW8MFNwQT1ZsjCDZMwyp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zve7QHvj5AP6LNF67iS6LX
          claim_id: c_d9sgU35hF5GGAUoLLopzp4
          source_id: s_xopVqbYAjWDvnKynGfq17L
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
        id: c_sd8R7xLl8Jo3YNgVWjMv_6
        subject_person_id: p_qERW8MFNwQT1ZsjCDZMwyp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n9JWi9Ws7kfdEieY3ME6s2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dkWJPiHMBAEk8to3FBzOk0
          claim_id: c_sd8R7xLl8Jo3YNgVWjMv_6
          source_id: s_xopVqbYAjWDvnKynGfq17L
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 51：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n9JWi9Ws7kfdEieY3ME6s2
        status: active
        display_name: 王希晏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_n9JWi9Ws7kfdEieY3ME6s2 | 王希晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 155017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155017&o=json)
