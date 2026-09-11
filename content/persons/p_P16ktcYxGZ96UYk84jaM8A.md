---
schema: wang-person/v1
id: p_P16ktcYxGZ96UYk84jaM8A
status: active
merged_into: null
display_name: 王六
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mae12FBAaaXcf3DUYfBcQU
        subject_person_id: p_P16ktcYxGZ96UYk84jaM8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_49GZ95H67EXBS6ZNLaY8BG
          claim_id: c_mae12FBAaaXcf3DUYfBcQU
          source_id: s_5ZU5iqycpBJvuZNqgr457b
          stance: supports
          locator: CBDB:578852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578852）
          source: &a1
            id: s_5ZU5iqycpBJvuZNqgr457b
            source_type: api_record
            title: 中国历代人物传记资料库：王六（CBDB 578852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578852&o=json
            external_identifier: CBDB:578852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nU8dWGn54zMK38Pbut795G
        subject_person_id: p_P16ktcYxGZ96UYk84jaM8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王六，明人物。籍贯息縣。（中国历代人物传记资料库 CBDB 578852）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HhOc6ZGd19Sjai4pnSi-p-
          claim_id: c_nU8dWGn54zMK38Pbut795G
          source_id: s_5ZU5iqycpBJvuZNqgr457b
          stance: supports
          locator: CBDB:578852
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
  spouses:
    - claim:
        id: c_AZJ7rd0b9RxfPLfkJTmQi1
        subject_person_id: p_P16ktcYxGZ96UYk84jaM8A
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xifaPosAK543a8z6Jo8rJp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzHHkiVX1abPeC71UUEEDN
          claim_id: c_AZJ7rd0b9RxfPLfkJTmQi1
          source_id: s_NiPzvS1USboNWxs1KW5jYW
          stance: supports
          locator: (康熙)息縣續志，lgid= 870146-870147：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NiPzvS1USboNWxs1KW5jYW
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王六妻)（CBDB 578853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578853&o=json
            external_identifier: CBDB:578853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xifaPosAK543a8z6Jo8rJp
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王六

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王六 | accepted |
| bio.summary | 王六，明人物。籍贯息縣。（中国历代人物传记资料库 CBDB 578852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xifaPosAK543a8z6Jo8rJp | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王六（CBDB 578852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578852&o=json)
- [中国历代人物传记资料库：張氏(王六妻)（CBDB 578853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578853&o=json)
