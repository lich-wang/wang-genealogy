---
schema: wang-person/v1
id: p_6fP6yoQB92HAJJGNQ4imGY
status: active
merged_into: null
display_name: 王珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YhLtChUYqSU9w5GtpjoK2X
        subject_person_id: p_6fP6yoQB92HAJJGNQ4imGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ByEGQbbwHiUgGDGnUBJC2m
          claim_id: c_YhLtChUYqSU9w5GtpjoK2X
          source_id: s_oYF7ZLmmtS2oBi57enr1RW
          stance: supports
          locator: CBDB:272406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272406）
          source: &a1
            id: s_oYF7ZLmmtS2oBi57enr1RW
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 272406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272406&o=json
            external_identifier: CBDB:272406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ptLcNGKzKKgpxSrE3iYkF
        subject_person_id: p_6fP6yoQB92HAJJGNQ4imGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 272406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GQrP_6gIL19BL6ThbNQMjF
          claim_id: c_3ptLcNGKzKKgpxSrE3iYkF
          source_id: s_oYF7ZLmmtS2oBi57enr1RW
          stance: supports
          locator: CBDB:272406
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Pf7iF7W4aIGw7ExxxPppqW
        subject_person_id: p_6fP6yoQB92HAJJGNQ4imGY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B_tfmZC9pGQo3S2vF5z2jB
          claim_id: c_Pf7iF7W4aIGw7ExxxPppqW
          source_id: s_oYF7ZLmmtS2oBi57enr1RW
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DBSpMx5KF2ajdMrE1Fppef
        status: active
        display_name: 王奎
        merged_into_person_id: null
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。弘治十五年進士。（中国历代人物传记资料库 CBDB 272406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DBSpMx5KF2ajdMrE1Fppef | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 272406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272406&o=json)
