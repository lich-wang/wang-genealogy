---
schema: wang-person/v1
id: p_fAiDe3xc3BSdgKqANif79M
status: active
merged_into: null
display_name: 項氏
revision: 1
cbdb_id: 702260
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_0D2bvJLMIFX5HzmUGGc3fk
        subject_person_id: p_fAiDe3xc3BSdgKqANif79M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 項氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3X6Q8YmDWLUQVvas5r1JVs
          claim_id: c_0D2bvJLMIFX5HzmUGGc3fk
          source_id: s_LAl44Jza-QGbFxWEi4UDmF
          stance: supports
          locator: CBDB:702260
          quotation: null
          interpretation_note: CBDB 明确记录的王存義配偶
          source: &a1
            id: s_LAl44Jza-QGbFxWEi4UDmF
            source_type: api_record
            title: 中国历代人物传记资料库：項氏(王存義妻)（CBDB 702260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702260&o=json
            external_identifier: CBDB:702260
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
        id: c_2Q9TLdPAYtwAxuBHtXrSnk
        subject_person_id: p_E1kvGBg8ieHBdRT43LHe93
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fAiDe3xc3BSdgKqANif79M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1-LKUJ88Km1mPlBBPLZnp
          claim_id: c_2Q9TLdPAYtwAxuBHtXrSnk
          source_id: s_LAl44Jza-QGbFxWEi4UDmF
          stance: supports
          locator: 平陰縣志，lgid=630876：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E1kvGBg8ieHBdRT43LHe93
        status: active
        display_name: 王存義
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 項氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 項氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_E1kvGBg8ieHBdRT43LHe93 | 王存義 | accepted |

## 外部来源

- [中国历代人物传记资料库：項氏(王存義妻)（CBDB 702260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702260&o=json)
