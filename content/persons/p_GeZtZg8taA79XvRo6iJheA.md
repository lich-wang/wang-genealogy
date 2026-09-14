---
schema: wang-person/v1
id: p_GeZtZg8taA79XvRo6iJheA
status: active
merged_into: null
display_name: 王朝璽
cbdb_id: 282727
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NwNBxMA92iLSpcfPSEtBWg
        subject_person_id: p_GeZtZg8taA79XvRo6iJheA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝璽，明人物。正德十二年進士，籍贯朝邑，入仕監生。（中国历代人物传记资料库 CBDB 282727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_uTTqxSi8X76w88XO3wRCsj
          claim_id: c_NwNBxMA92iLSpcfPSEtBWg
          source_id: s_rHEooq7bxsBLPeZ1cQiCev
          stance: supports
          locator: CBDB:282727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rHEooq7bxsBLPeZ1cQiCev
            source_type: api_record
            title: 中国历代人物传记资料库：王朝璽（CBDB 282727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282727&o=json
            external_identifier: CBDB:282727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMQvhHKjpZsQv1iGqevGTs
        subject_person_id: p_GeZtZg8taA79XvRo6iJheA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_azsidsi9FYJZXMRFA7MLvj
          claim_id: c_MMQvhHKjpZsQv1iGqevGTs
          source_id: s_rHEooq7bxsBLPeZ1cQiCev
          stance: supports
          locator: CBDB:282727
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
  descendants: []
  other:
    - claim:
        id: c_y5fFOWeEUe2TahCgetQxMr
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GeZtZg8taA79XvRo6iJheA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v23yWuWKBZJOuwXknaDuXD
          claim_id: c_y5fFOWeEUe2TahCgetQxMr
          source_id: s_J0sqL1kqBDPseiMFzxwWdl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J0sqL1kqBDPseiMFzxwWdl
            source_type: api_record
            title: 中国历代人物传记资料库：王朝璽（CBDB 282727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282727&o=json
            external_identifier: CBDB:282727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ARBsKDMivmjbBTxJiQz7Aa
        status: active
        display_name: 王朝瑬
        merged_into_person_id: null
---

# 王朝璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝璽，明人物。正德十二年進士，籍贯朝邑，入仕監生。（中国历代人物传记资料库 CBDB 282727） | accepted |
| name.primary | 王朝璽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_ARBsKDMivmjbBTxJiQz7Aa | 王朝瑬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝璽（CBDB 282727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282727&o=json)
