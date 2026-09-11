---
schema: wang-person/v1
id: p_bZsXyJ4X38FDhFgMx9frmh
status: active
merged_into: null
display_name: 王典章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wFeMsYyG3VCEnJgcSmfSCv
        subject_person_id: p_bZsXyJ4X38FDhFgMx9frmh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王典章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2N2rPtvNt3NdH2upnuKkey
          claim_id: c_wFeMsYyG3VCEnJgcSmfSCv
          source_id: s_U1GEKFuBzDjyLrbEwV8GiW
          stance: supports
          locator: CBDB:71766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71766）
          source: &a1
            id: s_U1GEKFuBzDjyLrbEwV8GiW
            source_type: api_record
            title: 中国历代人物传记资料库：王典章（CBDB 71766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71766&o=json
            external_identifier: CBDB:71766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zjZBTQir69kEBDed2Vt1EL
        subject_person_id: p_bZsXyJ4X38FDhFgMx9frmh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1865年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zBi4GQoGPdMMK5ahNRmZ21
          claim_id: c_zjZBTQir69kEBDed2Vt1EL
          source_id: s_U1GEKFuBzDjyLrbEwV8GiW
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
        id: c_uHy9Xd8KtBKTcUPfggaNXW
        subject_person_id: p_bZsXyJ4X38FDhFgMx9frmh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1943年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DumLo3ZDF4NxEjwfAaKt2G
          claim_id: c_uHy9Xd8KtBKTcUPfggaNXW
          source_id: s_U1GEKFuBzDjyLrbEwV8GiW
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
        id: c_R3XpQ7eQHNky3DhwdDmkKT
        subject_person_id: p_bZsXyJ4X38FDhFgMx9frmh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王典章（1865年—1943年），中華民國人物。籍贯三原。（中国历代人物传记资料库 CBDB 71766）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x-fFtZFOFato0Km7D6yx5l
          claim_id: c_R3XpQ7eQHNky3DhwdDmkKT
          source_id: s_U1GEKFuBzDjyLrbEwV8GiW
          stance: supports
          locator: CBDB:71766
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

# 王典章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王典章 | accepted |
| birth.date | 1865年 | accepted |
| death.date | 1943年 | accepted |
| bio.summary | 王典章（1865年—1943年），中華民國人物。籍贯三原。（中国历代人物传记资料库 CBDB 71766） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王典章（CBDB 71766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71766&o=json)
