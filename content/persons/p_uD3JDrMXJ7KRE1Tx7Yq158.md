---
schema: wang-person/v1
id: p_uD3JDrMXJ7KRE1Tx7Yq158
status: active
merged_into: null
display_name: 豐氏
revision: 1
cbdb_id: 252980
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LO6CZMOsoOMVL27YIZIBd
        subject_person_id: p_uD3JDrMXJ7KRE1Tx7Yq158
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 豐氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 252980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FFMcSjNgb-Z82Yk2XAIm6u
          claim_id: c_8LO6CZMOsoOMVL27YIZIBd
          source_id: s_5wE4--9v9Vj1SSxZRqXHm6
          stance: supports
          locator: CBDB:252980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5wE4--9v9Vj1SSxZRqXHm6
            source_type: api_record
            title: 中国历代人物传记资料库：豐氏(王齊妻)（CBDB 252980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252980&o=json
            external_identifier: CBDB:252980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8p5nFz0ahOXVmDWfXf27-s
        subject_person_id: p_uD3JDrMXJ7KRE1Tx7Yq158
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 豐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K0hAinA8nmPyjAX6uxKIv5
          claim_id: c_8p5nFz0ahOXVmDWfXf27-s
          source_id: s_5wE4--9v9Vj1SSxZRqXHm6
          stance: supports
          locator: CBDB:252980
          quotation: null
          interpretation_note: CBDB 明确记录的王齊配偶
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
        id: c_2YYq0yVDKdNdTBbs55Fowl
        subject_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uD3JDrMXJ7KRE1Tx7Yq158
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DTYLu81NINuIBiEMF3A_xh
          claim_id: c_2YYq0yVDKdNdTBbs55Fowl
          source_id: s_5wE4--9v9Vj1SSxZRqXHm6
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 豐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 豐氏，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 252980） | accepted |
| name.primary | 豐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：豐氏(王齊妻)（CBDB 252980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252980&o=json)
