---
schema: wang-person/v1
id: p_H5td9BKYZC5uWdeAwp14Nj
status: active
merged_into: null
display_name: 陳氏
revision: 1
cbdb_id: 292615
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rg-UXX4VSYtzxNpVe0Kwuf
        subject_person_id: p_H5td9BKYZC5uWdeAwp14Nj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 292615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hM5HAmRe8V3oA1mdcaf23E
          claim_id: c_Rg-UXX4VSYtzxNpVe0Kwuf
          source_id: s_HbxsEffLHjVOssXs_nWkdt
          stance: supports
          locator: CBDB:292615
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HbxsEffLHjVOssXs_nWkdt
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王釴妻)（CBDB 292615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292615&o=json
            external_identifier: CBDB:292615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oaH6UF3FZXkibwRKUV-PdD
        subject_person_id: p_H5td9BKYZC5uWdeAwp14Nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hz9dx_J4hQ9d-GwMvI2UoF
          claim_id: c_oaH6UF3FZXkibwRKUV-PdD
          source_id: s_HbxsEffLHjVOssXs_nWkdt
          stance: supports
          locator: CBDB:292615
          quotation: null
          interpretation_note: CBDB 明确记录的王釴配偶
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
        id: c_ZmUTf4Hrqp_HIdu8gdEfn8
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H5td9BKYZC5uWdeAwp14Nj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv3CQF4gjP4zbi_fZFHSFE
          claim_id: c_ZmUTf4Hrqp_HIdu8gdEfn8
          source_id: s_HbxsEffLHjVOssXs_nWkdt
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5PGL3HfhnkubibTnY8wvjU
        status: active
        display_name: 王釴
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳氏，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 292615） | accepted |
| name.primary | 陳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5PGL3HfhnkubibTnY8wvjU | 王釴 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王釴妻)（CBDB 292615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292615&o=json)
