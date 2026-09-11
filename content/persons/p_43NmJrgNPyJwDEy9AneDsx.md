---
schema: wang-person/v1
id: p_43NmJrgNPyJwDEy9AneDsx
status: active
merged_into: null
display_name: 王紹烈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_65hKyh5a6Y2m6MB7GxpTp7
        subject_person_id: p_43NmJrgNPyJwDEy9AneDsx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dusTsj6gGybSj5E1T1eFpc
          claim_id: c_65hKyh5a6Y2m6MB7GxpTp7
          source_id: s_EZGGV4JuQ6zwB941EsGdGo
          stance: supports
          locator: CBDB:159539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159539）
          source: &a1
            id: s_EZGGV4JuQ6zwB941EsGdGo
            source_type: api_record
            title: 中国历代人物传记资料库：王紹烈（CBDB 159539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159539&o=json
            external_identifier: CBDB:159539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxNrAjDp5r6dUP5ZBge5hy
        subject_person_id: p_43NmJrgNPyJwDEy9AneDsx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹烈，唐人物。籍贯晉陽，曾任州刺史。（中国历代人物传记资料库 CBDB 159539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oWms8aQzQ9_vqxu7pSCA7q
          claim_id: c_zxNrAjDp5r6dUP5ZBge5hy
          source_id: s_EZGGV4JuQ6zwB941EsGdGo
          stance: supports
          locator: CBDB:159539
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7a-Hjc1UKLYf7IamujExyj
        subject_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_43NmJrgNPyJwDEy9AneDsx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5A2RgZqFFbPxi7liAKHXGA
          claim_id: c_7a-Hjc1UKLYf7IamujExyj
          source_id: s_EZGGV4JuQ6zwB941EsGdGo
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 96：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zQ4D2DUAqvMbXPkja89cdD
        status: active
        display_name: 王元逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹烈 | accepted |
| bio.summary | 王紹烈，唐人物。籍贯晉陽，曾任州刺史。（中国历代人物传记资料库 CBDB 159539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQ4D2DUAqvMbXPkja89cdD | 王元逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹烈（CBDB 159539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159539&o=json)
