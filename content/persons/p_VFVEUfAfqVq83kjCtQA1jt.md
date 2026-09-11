---
schema: wang-person/v1
id: p_VFVEUfAfqVq83kjCtQA1jt
status: active
merged_into: null
display_name: 王莊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iTLvyXu2CVkxqE2LaZCquk
        subject_person_id: p_VFVEUfAfqVq83kjCtQA1jt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mBW335gvXb2Uk7Ui8JTwM2
          claim_id: c_iTLvyXu2CVkxqE2LaZCquk
          source_id: s_TwBsccmCqM8oxLFXh4vYik
          stance: supports
          locator: CBDB:302547
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302547）
          source: &a1
            id: s_TwBsccmCqM8oxLFXh4vYik
            source_type: api_record
            title: 中国历代人物传记资料库：王莊（CBDB 302547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302547&o=json
            external_identifier: CBDB:302547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1LYDByNMJQyrmM1DfesqeQ
        subject_person_id: p_VFVEUfAfqVq83kjCtQA1jt
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
        - id: cs_P46AreX8NbHRymNKfPqCNA
          claim_id: c_1LYDByNMJQyrmM1DfesqeQ
          source_id: s_TwBsccmCqM8oxLFXh4vYik
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
        id: c_rU4AOYMDRI9I3_lGLVW8G-
        subject_person_id: p_VFVEUfAfqVq83kjCtQA1jt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xeCtF6YtnZ7oFJ3LJ48uKd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sKOqcK-IE_BX3Ye0I3RnRb
          claim_id: c_rU4AOYMDRI9I3_lGLVW8G-
          source_id: s_TwBsccmCqM8oxLFXh4vYik
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xeCtF6YtnZ7oFJ3LJ48uKd
        status: active
        display_name: 王諫
        merged_into_person_id: null
  other: []
---

# 王莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xeCtF6YtnZ7oFJ3LJ48uKd | 王諫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王莊（CBDB 302547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302547&o=json)
