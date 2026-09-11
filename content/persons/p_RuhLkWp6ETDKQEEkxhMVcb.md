---
schema: wang-person/v1
id: p_RuhLkWp6ETDKQEEkxhMVcb
status: active
merged_into: null
display_name: 王履
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uG41cLNH4CeshftWHir3pz
        subject_person_id: p_RuhLkWp6ETDKQEEkxhMVcb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cvtz7iWH8rm4yBB8wpQWd6
          claim_id: c_uG41cLNH4CeshftWHir3pz
          source_id: s_YeCXeMoxJfxBQ72HuNrGaC
          stance: supports
          locator: CBDB:637311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637311）
          source: &a1
            id: s_YeCXeMoxJfxBQ72HuNrGaC
            source_type: api_record
            title: 中国历代人物传记资料库：王履（CBDB 637311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637311&o=json
            external_identifier: CBDB:637311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p2bXwEFC8Mxr9weYoWJZQg
        subject_person_id: p_RuhLkWp6ETDKQEEkxhMVcb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履，清人物。籍贯天津，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 637311）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gn9V7bTrR8hO4p9ywqyz0F
          claim_id: c_p2bXwEFC8Mxr9weYoWJZQg
          source_id: s_YeCXeMoxJfxBQ72HuNrGaC
          stance: supports
          locator: CBDB:637311
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

# 王履

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履 | accepted |
| bio.summary | 王履，清人物。籍贯天津，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 637311） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履（CBDB 637311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637311&o=json)
