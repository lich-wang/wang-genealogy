---
schema: wang-person/v1
id: p_95sRD5xzYEUzc4pYQu6DBU
status: active
merged_into: null
display_name: 陳裴之
revision: 1
cbdb_id: 54716
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_0PYNPMY1w4BlN17FA7zgtP
        subject_person_id: p_95sRD5xzYEUzc4pYQu6DBU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳裴之
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tP0AMAHKBOgZwZ3CoQL6tN
          claim_id: c_0PYNPMY1w4BlN17FA7zgtP
          source_id: s_x5vnWrNZhfH1UgIFS3WKZJ
          stance: supports
          locator: CBDB:54716
          quotation: null
          interpretation_note: CBDB 明确记录的王子蘭配偶
          source: &a1
            id: s_x5vnWrNZhfH1UgIFS3WKZJ
            source_type: api_record
            title: 中国历代人物传记资料库：陳裴之（CBDB 54716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54716&o=json
            external_identifier: CBDB:54716
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
        id: c_5zN2og3m15pXQUplFBfDN5
        subject_person_id: p_bfZwpckr7ri4xSTkKnTSXo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_95sRD5xzYEUzc4pYQu6DBU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GIbwVXAAX1mk7v1ZxYbc6
          claim_id: c_5zN2og3m15pXQUplFBfDN5
          source_id: s_x5vnWrNZhfH1UgIFS3WKZJ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3961：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bfZwpckr7ri4xSTkKnTSXo
        status: active
        display_name: 王子蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳裴之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳裴之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bfZwpckr7ri4xSTkKnTSXo | 王子蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳裴之（CBDB 54716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54716&o=json)
