---
schema: wang-person/v1
id: p_R1iYtaFVaaX2yw1y8GzLCW
status: active
merged_into: null
display_name: 王鎡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CJPbCw8Cj37ooTP7vE2SBN
        subject_person_id: p_R1iYtaFVaaX2yw1y8GzLCW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8j53BnwyFV9pQ72C52DnLC
          claim_id: c_CJPbCw8Cj37ooTP7vE2SBN
          source_id: s_D2doKcC9n5o1tjbaPDmHey
          stance: supports
          locator: CBDB:45822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45822）
          source: &a1
            id: s_D2doKcC9n5o1tjbaPDmHey
            source_type: api_record
            title: 中国历代人物传记资料库：王鎡（CBDB 45822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45822&o=json
            external_identifier: CBDB:45822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GcnqeTu2q896MpsgLR4M9D
        subject_person_id: p_R1iYtaFVaaX2yw1y8GzLCW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎡，宋人物。籍贯處州，身份为結社。（中国历代人物传记资料库 CBDB 45822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cvCclMWJSeMW4dGCm_faGT
          claim_id: c_GcnqeTu2q896MpsgLR4M9D
          source_id: s_D2doKcC9n5o1tjbaPDmHey
          stance: supports
          locator: CBDB:45822
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
  descendants: []
  other: []
---

# 王鎡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎡 | accepted |
| bio.summary | 王鎡，宋人物。籍贯處州，身份为結社。（中国历代人物传记资料库 CBDB 45822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎡（CBDB 45822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45822&o=json)
