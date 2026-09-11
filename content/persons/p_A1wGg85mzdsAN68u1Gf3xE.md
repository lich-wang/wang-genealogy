---
schema: wang-person/v1
id: p_A1wGg85mzdsAN68u1Gf3xE
status: active
merged_into: null
display_name: 王璇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3orM9B4CMVVZ4fa5t7L6HN
        subject_person_id: p_A1wGg85mzdsAN68u1Gf3xE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XwmA2zXDCHJKmV4JQ9qm4S
          claim_id: c_3orM9B4CMVVZ4fa5t7L6HN
          source_id: s_AtLg71EAXT937KbMwJXjjn
          stance: supports
          locator: CBDB:146932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146932）
          source: &a1
            id: s_AtLg71EAXT937KbMwJXjjn
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 146932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146932&o=json
            external_identifier: CBDB:146932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJvKB1r8WUFSvKtQZ8kP9B
        subject_person_id: p_A1wGg85mzdsAN68u1Gf3xE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，唐人物。籍贯北市，曾任縣令、州司功参軍、州平棘。（中国历代人物传记资料库 CBDB 146932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vUlD8oumteY83GpIiU3EuL
          claim_id: c_LJvKB1r8WUFSvKtQZ8kP9B
          source_id: s_AtLg71EAXT937KbMwJXjjn
          stance: supports
          locator: CBDB:146932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ny-TM6x0OAelg8rEHfQ_eQ
        subject_person_id: p_A1wGg85mzdsAN68u1Gf3xE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QEv9JkrQeGsCuUNSrnAe4w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFxFoRMzNkiz2955nT0fXs
          claim_id: c_ny-TM6x0OAelg8rEHfQ_eQ
          source_id: s_AtLg71EAXT937KbMwJXjjn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QEv9JkrQeGsCuUNSrnAe4w
        status: active
        display_name: 王順孫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，唐人物。籍贯北市，曾任縣令、州司功参軍、州平棘。（中国历代人物传记资料库 CBDB 146932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QEv9JkrQeGsCuUNSrnAe4w | 王順孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璇（CBDB 146932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146932&o=json)
