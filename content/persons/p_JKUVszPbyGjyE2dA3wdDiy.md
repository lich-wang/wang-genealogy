---
schema: wang-person/v1
id: p_JKUVszPbyGjyE2dA3wdDiy
status: active
merged_into: null
display_name: 王鎮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fXfHUMHAmNPKEfZ9dCzY6m
        subject_person_id: p_JKUVszPbyGjyE2dA3wdDiy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p1nsNQ5Z9i8FZMdusaGQEd
          claim_id: c_fXfHUMHAmNPKEfZ9dCzY6m
          source_id: s_MjLAETqGzsefWzVNeUheUk
          stance: supports
          locator: CBDB:288604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288604）
          source: &a1
            id: s_MjLAETqGzsefWzVNeUheUk
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 288604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288604&o=json
            external_identifier: CBDB:288604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ysc8e6MX2PDUDaeF3LwKeZ
        subject_person_id: p_JKUVszPbyGjyE2dA3wdDiy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288604）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DQ9_y9zgXLYVqUbexMWR2M
          claim_id: c_Ysc8e6MX2PDUDaeF3LwKeZ
          source_id: s_MjLAETqGzsefWzVNeUheUk
          stance: supports
          locator: CBDB:288604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Oz-xaXyEnGu5LphQpJeDgu
        subject_person_id: p_JKUVszPbyGjyE2dA3wdDiy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wrYjpDvL8MtRavfwnm1dKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1lU7eOkZ_1Et690HGkvMsP
          claim_id: c_Oz-xaXyEnGu5LphQpJeDgu
          source_id: s_MjLAETqGzsefWzVNeUheUk
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wrYjpDvL8MtRavfwnm1dKh
        status: active
        display_name: 王滋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。嘉靖八年進士，籍贯南平。（中国历代人物传记资料库 CBDB 288604） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wrYjpDvL8MtRavfwnm1dKh | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 288604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288604&o=json)
