---
schema: wang-person/v1
id: p_QGnZLBN3ny7Ag2nzY5gNCQ
status: active
merged_into: null
display_name: 王玄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CtV9pa1zA1LtNo7RgJz7HN
        subject_person_id: p_QGnZLBN3ny7Ag2nzY5gNCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x8AmrcdjxhWMiwwJjKs9rq
          claim_id: c_CtV9pa1zA1LtNo7RgJz7HN
          source_id: s_wfdmkKf8d4ua5S3xr93VAW
          stance: supports
          locator: CBDB:139426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139426）
          source: &a1
            id: s_wfdmkKf8d4ua5S3xr93VAW
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 139426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139426&o=json
            external_identifier: CBDB:139426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ehv5n56J69CEAwbFt1Xoiv
        subject_person_id: p_QGnZLBN3ny7Ag2nzY5gNCQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 600年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nWsja9UP8cWu8ZyHJtakCZ
          claim_id: c_Ehv5n56J69CEAwbFt1Xoiv
          source_id: s_wfdmkKf8d4ua5S3xr93VAW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GDZCL2LLp1oU3Eu7UhH3Np
        subject_person_id: p_QGnZLBN3ny7Ag2nzY5gNCQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jxr4pAFH1Yj5La21h9fscN
          claim_id: c_GDZCL2LLp1oU3Eu7UhH3Np
          source_id: s_wfdmkKf8d4ua5S3xr93VAW
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
        id: c_EvL4frCi8hHF6DrajAhwgb
        subject_person_id: p_QGnZLBN3ny7Ag2nzY5gNCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄（600年—663年），唐人物。籍贯洛陽，曾任縣令、縣尉、州司馬。（中国历代人物传记资料库 CBDB 139426）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xvq_z9R194Jf0DnDvy5uTp
          claim_id: c_EvL4frCi8hHF6DrajAhwgb
          source_id: s_wfdmkKf8d4ua5S3xr93VAW
          stance: supports
          locator: CBDB:139426
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

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄 | accepted |
| birth.date | 600年 | accepted |
| death.date | 663年 | accepted |
| bio.summary | 王玄（600年—663年），唐人物。籍贯洛陽，曾任縣令、縣尉、州司馬。（中国历代人物传记资料库 CBDB 139426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄（CBDB 139426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139426&o=json)
