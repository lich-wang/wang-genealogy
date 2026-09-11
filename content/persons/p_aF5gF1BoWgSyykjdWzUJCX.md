---
schema: wang-person/v1
id: p_aF5gF1BoWgSyykjdWzUJCX
status: active
merged_into: null
display_name: 杜氏
revision: 1
cbdb_id: 557747
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_-MrnYjd9MjeH5J5kuByIr_
        subject_person_id: p_aF5gF1BoWgSyykjdWzUJCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 杜氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RCasQvcbj7iqHpMDrVpMY_
          claim_id: c_-MrnYjd9MjeH5J5kuByIr_
          source_id: s_BIr2H5OIAbRIdA8w5vZjnG
          stance: supports
          locator: CBDB:557747
          quotation: null
          interpretation_note: CBDB 明确记录的王靖配偶
          source: &a1
            id: s_BIr2H5OIAbRIdA8w5vZjnG
            source_type: api_record
            title: 中国历代人物传记资料库：杜氏(王靖妻)（CBDB 557747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557747&o=json
            external_identifier: CBDB:557747
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
        id: c_ax5xP3WdzE7D3NnSB1X1YS
        subject_person_id: p_mDw5XarWALHCK7J2f1HPi9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aF5gF1BoWgSyykjdWzUJCX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIvciYdMV5WvZr3zVWAf5d
          claim_id: c_ax5xP3WdzE7D3NnSB1X1YS
          source_id: s_BIr2H5OIAbRIdA8w5vZjnG
          stance: supports
          locator: (乾隆)信陽州志，lgid=868519：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mDw5XarWALHCK7J2f1HPi9
        status: active
        display_name: 王靖
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 杜氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 杜氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mDw5XarWALHCK7J2f1HPi9 | 王靖 | accepted |

## 外部来源

- [中国历代人物传记资料库：杜氏(王靖妻)（CBDB 557747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557747&o=json)
