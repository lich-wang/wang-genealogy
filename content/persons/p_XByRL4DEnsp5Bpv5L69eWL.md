---
schema: wang-person/v1
id: p_XByRL4DEnsp5Bpv5L69eWL
status: active
merged_into: null
display_name: 王良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6gouXriDwB9opbPJuXfeiK
        subject_person_id: p_XByRL4DEnsp5Bpv5L69eWL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3FdPnDDYWCN2Ltb1zmfkCJ
          claim_id: c_6gouXriDwB9opbPJuXfeiK
          source_id: s_cvg2yEcUpNVi2P5oy8tmYp
          stance: supports
          locator: CBDB:452186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452186）
          source: &a1
            id: s_cvg2yEcUpNVi2P5oy8tmYp
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 452186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452186&o=json
            external_identifier: CBDB:452186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bSSBfNdtykbQALY8aMFy1y
        subject_person_id: p_XByRL4DEnsp5Bpv5L69eWL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，元人物。籍贯諸暨，曾任推官、縣尉。（中国历代人物传记资料库 CBDB 452186）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jZagYOD7F8ETyjWvgSH1Gq
          claim_id: c_bSSBfNdtykbQALY8aMFy1y
          source_id: s_cvg2yEcUpNVi2P5oy8tmYp
          stance: supports
          locator: CBDB:452186
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

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，元人物。籍贯諸暨，曾任推官、縣尉。（中国历代人物传记资料库 CBDB 452186） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 452186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452186&o=json)
