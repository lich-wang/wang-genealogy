---
schema: wang-person/v1
id: p_zibqwD2uoDHiM51HV1eNAH
status: active
merged_into: null
display_name: 蔡氏
revision: 1
cbdb_id: 271840
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cYvkQipXz_9p7inyr2TOo1
        subject_person_id: p_zibqwD2uoDHiM51HV1eNAH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 271840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-bVkq1CLEmGzDP9waVCaFV
          claim_id: c_cYvkQipXz_9p7inyr2TOo1
          source_id: s_vypkK86ZKbniyxYeBk1OcR
          stance: supports
          locator: CBDB:271840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vypkK86ZKbniyxYeBk1OcR
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王鉉妻)（CBDB 271840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271840&o=json
            external_identifier: CBDB:271840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ipMVKVuS10JXl5RDaDwbyx
        subject_person_id: p_zibqwD2uoDHiM51HV1eNAH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bcZ3_OrMmAG35j1l1iy0Nb
          claim_id: c_ipMVKVuS10JXl5RDaDwbyx
          source_id: s_vypkK86ZKbniyxYeBk1OcR
          stance: supports
          locator: CBDB:271840
          quotation: null
          interpretation_note: CBDB 明确记录的王鉉配偶
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
        id: c_mEOyLPG-teXBB7-b8CafxA
        subject_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zibqwD2uoDHiM51HV1eNAH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M3hFbY8uDt4T2lLicnR8Xp
          claim_id: c_mEOyLPG-teXBB7-b8CafxA
          source_id: s_vypkK86ZKbniyxYeBk1OcR
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百一十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔡氏，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 271840） | accepted |
| name.primary | 蔡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DF9QV6BkQyQ4o3h3Yhn8e4 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王鉉妻)（CBDB 271840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271840&o=json)
