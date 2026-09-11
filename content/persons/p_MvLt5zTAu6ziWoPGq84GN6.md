---
schema: wang-person/v1
id: p_MvLt5zTAu6ziWoPGq84GN6
status: active
merged_into: null
display_name: 王會
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cHi6Sk11U3XScP1JttPvA
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3tvRKN1ZGTXXKjFisa89To
          claim_id: c_8cHi6Sk11U3XScP1JttPvA
          source_id: s_WwEQ9J424LKr894LGGAaM3
          stance: supports
          locator: CBDB:286977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286977）
          source: &a1
            id: s_WwEQ9J424LKr894LGGAaM3
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 286977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286977&o=json
            external_identifier: CBDB:286977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wGvzQ65FEGAFXrTT4dByQU
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
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
        - id: cs_D9vg3PNQ62FGBpHV2864gi
          claim_id: c_wGvzQ65FEGAFXrTT4dByQU
          source_id: s_WwEQ9J424LKr894LGGAaM3
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
        id: c_7K48Qeoo-KLcY0v8pkT8ka
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHkDbYOkI-saMBx0BKnu-Y
          claim_id: c_7K48Qeoo-KLcY0v8pkT8ka
          source_id: s_WwEQ9J424LKr894LGGAaM3
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hnJsBrtLd1JZGUx5u8hGVs
        status: active
        display_name: 王觀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hnJsBrtLd1JZGUx5u8hGVs | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 286977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286977&o=json)
