---
schema: wang-person/v1
id: p_GU2ewEyBXsJ9r44o5umgAL
status: active
merged_into: null
display_name: 王庸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MoMVUuUQKyuk5pvR2gad6Y
        subject_person_id: p_GU2ewEyBXsJ9r44o5umgAL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7quH5RYMVDPFhDctgAbiFJ
          claim_id: c_MoMVUuUQKyuk5pvR2gad6Y
          source_id: s_GMTrNkZaYNqDj1J15YQsmr
          stance: supports
          locator: CBDB:637440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637440）
          source: &a1
            id: s_GMTrNkZaYNqDj1J15YQsmr
            source_type: api_record
            title: 中国历代人物传记资料库：王庸（CBDB 637440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637440&o=json
            external_identifier: CBDB:637440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2M119WGa5GpJ4iDJzbMafh
        subject_person_id: p_GU2ewEyBXsJ9r44o5umgAL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庸，清人物。籍贯銅梁，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k1NFNMNu4KFNs9n37GZWDX
          claim_id: c_2M119WGa5GpJ4iDJzbMafh
          source_id: s_GMTrNkZaYNqDj1J15YQsmr
          stance: supports
          locator: CBDB:637440
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

# 王庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庸 | accepted |
| bio.summary | 王庸，清人物。籍贯銅梁，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庸（CBDB 637440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637440&o=json)
