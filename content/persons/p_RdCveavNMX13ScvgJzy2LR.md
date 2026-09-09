---
schema: wang-person/v1
id: p_RdCveavNMX13ScvgJzy2LR
status: active
merged_into: null
display_name: 王恩特赫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GMX7h3PH6KBRuGz81B29zr
        subject_person_id: p_RdCveavNMX13ScvgJzy2LR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩特赫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ciAL8moYgEDD5cAMzHGoPq
          claim_id: c_GMX7h3PH6KBRuGz81B29zr
          source_id: s_H9iVsthGKFXWiPGVSvYLNe
          stance: supports
          locator: CBDB:57590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57590）
          source: &a1
            id: s_H9iVsthGKFXWiPGVSvYLNe
            source_type: api_record
            title: 中国历代人物传记资料库：王恩特赫（CBDB 57590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57590&o=json
            external_identifier: CBDB:57590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fQwT6oJXbsP6HaoqnJBdgz
        subject_person_id: p_RdCveavNMX13ScvgJzy2LR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAE7VV4zKHB32DyRGxuBEc
          claim_id: c_fQwT6oJXbsP6HaoqnJBdgz
          source_id: s_H9iVsthGKFXWiPGVSvYLNe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ptid4SEqrZXTSWkm1KhkiN
        subject_person_id: p_RdCveavNMX13ScvgJzy2LR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1snes5zupsF34ws3CQDRqb
          claim_id: c_ptid4SEqrZXTSWkm1KhkiN
          source_id: s_H9iVsthGKFXWiPGVSvYLNe
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
  descendants: []
  other: []
---

# 王恩特赫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩特赫 | accepted |
| death.date | 1851年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恩特赫（CBDB 57590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57590&o=json)
