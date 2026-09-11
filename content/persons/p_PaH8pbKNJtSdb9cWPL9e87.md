---
schema: wang-person/v1
id: p_PaH8pbKNJtSdb9cWPL9e87
status: active
merged_into: null
display_name: 王葵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_waauP4C8tLLtN1rv4gEPQK
        subject_person_id: p_PaH8pbKNJtSdb9cWPL9e87
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39CeKFnUx9ymwakmPLumGD
          claim_id: c_waauP4C8tLLtN1rv4gEPQK
          source_id: s_1PNRi8cP5LVUtuA6Dgkn2N
          stance: supports
          locator: CBDB:701089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701089）
          source: &a1
            id: s_1PNRi8cP5LVUtuA6Dgkn2N
            source_type: api_record
            title: 中国历代人物传记资料库：王葵（CBDB 701089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701089&o=json
            external_identifier: CBDB:701089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mGPo1ACZyEzjvS8BtvovxT
        subject_person_id: p_PaH8pbKNJtSdb9cWPL9e87
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王葵，明人物。籍贯杭州右衛，身份为詩人、孝子/孝女。（中国历代人物传记资料库 CBDB 701089）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ad7HSk8ZsvxQEgrb43JQGF
          claim_id: c_mGPo1ACZyEzjvS8BtvovxT
          source_id: s_1PNRi8cP5LVUtuA6Dgkn2N
          stance: supports
          locator: CBDB:701089
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

# 王葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王葵 | accepted |
| bio.summary | 王葵，明人物。籍贯杭州右衛，身份为詩人、孝子/孝女。（中国历代人物传记资料库 CBDB 701089） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王葵（CBDB 701089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701089&o=json)
