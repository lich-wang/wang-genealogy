---
schema: wang-person/v1
id: p_CJWjaHakq2qnjvbsYK3PmT
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DR4GL7R4JGhyM5rjsddbeS
        subject_person_id: p_CJWjaHakq2qnjvbsYK3PmT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WbsKaDsY1inwKqH8rzLCX7
          claim_id: c_DR4GL7R4JGhyM5rjsddbeS
          source_id: s_w789UgAxGpxAw3X6QRimCB
          stance: supports
          locator: CBDB:335614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335614）
          source: &a1
            id: s_w789UgAxGpxAw3X6QRimCB
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 335614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335614&o=json
            external_identifier: CBDB:335614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.467Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CBpuLjhuJuJBk54hcNZ7wy
        subject_person_id: p_CJWjaHakq2qnjvbsYK3PmT
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
        - id: cs_C1oWYBrBnD7SoFvoCiAgw6
          claim_id: c_CBpuLjhuJuJBk54hcNZ7wy
          source_id: s_w789UgAxGpxAw3X6QRimCB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_Se_lGcPoajHsP83R7IJ4tE
        subject_person_id: p_CJWjaHakq2qnjvbsYK3PmT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mJFG2VmWYuWZQLFEyB56Dh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMoOqkWx7WjiRjDbvxvV3A
          claim_id: c_Se_lGcPoajHsP83R7IJ4tE
          source_id: s_w789UgAxGpxAw3X6QRimCB
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百一十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mJFG2VmWYuWZQLFEyB56Dh
        status: active
        display_name: 王來召
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mJFG2VmWYuWZQLFEyB56Dh | 王來召 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 335614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335614&o=json)
