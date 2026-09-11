---
schema: wang-person/v1
id: p_eVKZVrCe9peAHX79B4Cz2M
status: active
merged_into: null
display_name: 王周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DR6QChjCq2VQ1Ga3tNYtKo
        subject_person_id: p_eVKZVrCe9peAHX79B4Cz2M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3zPfiobh9T2v31WrndsAC
          claim_id: c_DR6QChjCq2VQ1Ga3tNYtKo
          source_id: s_68Ya6roD1456Az47RRdFWt
          stance: supports
          locator: CBDB:476252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476252）
          source: &a1
            id: s_68Ya6roD1456Az47RRdFWt
            source_type: api_record
            title: 中国历代人物传记资料库：王周（CBDB 476252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476252&o=json
            external_identifier: CBDB:476252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PnHsswxyDtA9rro1nynapT
        subject_person_id: p_eVKZVrCe9peAHX79B4Cz2M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周，元人物。曾任縣學教諭。（中国历代人物传记资料库 CBDB 476252）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UZCwPAmORdBuPHprD8eBwK
          claim_id: c_PnHsswxyDtA9rro1nynapT
          source_id: s_68Ya6roD1456Az47RRdFWt
          stance: supports
          locator: CBDB:476252
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

# 王周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王周 | accepted |
| bio.summary | 王周，元人物。曾任縣學教諭。（中国历代人物传记资料库 CBDB 476252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王周（CBDB 476252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476252&o=json)
