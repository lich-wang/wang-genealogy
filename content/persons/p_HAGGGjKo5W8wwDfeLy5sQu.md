---
schema: wang-person/v1
id: p_HAGGGjKo5W8wwDfeLy5sQu
status: active
merged_into: null
display_name: 王思褆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CtNr2vdc5PHLE3Rkz8RFoA
        subject_person_id: p_HAGGGjKo5W8wwDfeLy5sQu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思褆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cUvYkZ6fggQ6rmxZZT35ik
          claim_id: c_CtNr2vdc5PHLE3Rkz8RFoA
          source_id: s_GsGrESJ7QCszagBVH1TB1e
          stance: supports
          locator: CBDB:637811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637811）
          source: &a1
            id: s_GsGrESJ7QCszagBVH1TB1e
            source_type: api_record
            title: 中国历代人物传记资料库：王思褆（CBDB 637811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637811&o=json
            external_identifier: CBDB:637811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.430Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZjUrE2xAmaaZTK825P9MF
        subject_person_id: p_HAGGGjKo5W8wwDfeLy5sQu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思褆，清人物。籍贯涇陽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637811）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iIsNu-x1eq2sSu7_Iwdrws
          claim_id: c_MZjUrE2xAmaaZTK825P9MF
          source_id: s_GsGrESJ7QCszagBVH1TB1e
          stance: supports
          locator: CBDB:637811
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

# 王思褆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思褆 | accepted |
| bio.summary | 王思褆，清人物。籍贯涇陽，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思褆（CBDB 637811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637811&o=json)
