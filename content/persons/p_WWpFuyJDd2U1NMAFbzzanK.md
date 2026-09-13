---
schema: wang-person/v1
id: p_WWpFuyJDd2U1NMAFbzzanK
status: active
merged_into: null
display_name: 王守慎
cbdb_id: 163529
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SfedLNuj24Z9tuDzzCwb2o
        subject_person_id: p_WWpFuyJDd2U1NMAFbzzanK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守慎，史料所见人物。本项目依据《中国历代人物传记资料库：王守慎（CBDB 163529）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_TxsyNZI8ClBm-IlZImPS5B
          claim_id: c_SfedLNuj24Z9tuDzzCwb2o
          source_id: s_1SH4ZXK7TvTiUsuLGtzgvP
          stance: supports
          locator: CBDB:163529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1SH4ZXK7TvTiUsuLGtzgvP
            source_type: api_record
            title: 中国历代人物传记资料库：王守慎（CBDB 163529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163529&o=json
            external_identifier: CBDB:163529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PuQmULAbnxg6sBkpm1UpCK
        subject_person_id: p_WWpFuyJDd2U1NMAFbzzanK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守慎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_22ewmjqaFki1aCKuYQ84CE
          claim_id: c_PuQmULAbnxg6sBkpm1UpCK
          source_id: s_1SH4ZXK7TvTiUsuLGtzgvP
          stance: supports
          locator: CBDB:163529
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XBOi-5_dRO4by61JYCWXYS
        subject_person_id: p_HcJi7PqxfqF452R9QmgUEw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WWpFuyJDd2U1NMAFbzzanK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MlKu2279KZ5T3OFCSEvFF2
          claim_id: c_XBOi-5_dRO4by61JYCWXYS
          source_id: s_pYQ17GZSy2Rbj29545ersx
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Shenlong17：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pYQ17GZSy2Rbj29545ersx
            source_type: api_record
            title: 中国历代人物传记资料库：王文叡（CBDB 142356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142356&o=json
            external_identifier: CBDB:142356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HcJi7PqxfqF452R9QmgUEw
        status: active
        display_name: 王文叡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守慎，史料所见人物。本项目依据《中国历代人物传记资料库：王守慎（CBDB 163529）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王守慎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HcJi7PqxfqF452R9QmgUEw | 王文叡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守慎（CBDB 163529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163529&o=json)
- [中国历代人物传记资料库：王文叡（CBDB 142356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142356&o=json)
