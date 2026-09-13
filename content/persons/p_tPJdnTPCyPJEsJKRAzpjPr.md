---
schema: wang-person/v1
id: p_tPJdnTPCyPJEsJKRAzpjPr
status: active
merged_into: null
display_name: 王忠訓
cbdb_id: 37687
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w7pmte4yjMYAkfCxbq8FQd
        subject_person_id: p_tPJdnTPCyPJEsJKRAzpjPr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠訓（卒于1278年），史料所见人物。本项目依据《中国历代人物传记资料库：王忠訓（CBDB 37687）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_DMGw5vVD-wiY6-r_QTqZYX
          claim_id: c_w7pmte4yjMYAkfCxbq8FQd
          source_id: s_sVcZAdb9Do92DtB5KXvCgh
          stance: supports
          locator: CBDB:37687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sVcZAdb9Do92DtB5KXvCgh
            source_type: api_record
            title: 中国历代人物传记资料库：王忠訓（CBDB 37687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37687&o=json
            external_identifier: CBDB:37687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bLwDAFkpTepUwdAKD2DnMN
        subject_person_id: p_tPJdnTPCyPJEsJKRAzpjPr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1278-01-01
            latest: 1278-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LPzv3dcpRFtmPBbBzENnYk
          claim_id: c_bLwDAFkpTepUwdAKD2DnMN
          source_id: s_sVcZAdb9Do92DtB5KXvCgh
          stance: supports
          locator: CBDB:37687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1278
          source:
            id: s_sVcZAdb9Do92DtB5KXvCgh
            source_type: api_record
            title: 中国历代人物传记资料库：王忠訓（CBDB 37687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37687&o=json
            external_identifier: CBDB:37687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aiiB8trT63tXvCdv9s6YpC
        subject_person_id: p_tPJdnTPCyPJEsJKRAzpjPr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4sC9cZKHgruZTM8xkE87y5
          claim_id: c_aiiB8trT63tXvCdv9s6YpC
          source_id: s_sVcZAdb9Do92DtB5KXvCgh
          stance: supports
          locator: CBDB:37687
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1278
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BXAPL91VsaNUF0fqkaCC_5
        subject_person_id: p_aSNezixm2f8E8Zta5pjk3h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tPJdnTPCyPJEsJKRAzpjPr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EoRILj6p2ClQacbKDvJC30
          claim_id: c_BXAPL91VsaNUF0fqkaCC_5
          source_id: s_qH3oDePAR6d3EnCZ6kWAFd
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qH3oDePAR6d3EnCZ6kWAFd
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 37688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37688&o=json
            external_identifier: CBDB:37688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aSNezixm2f8E8Zta5pjk3h
        status: active
        display_name: 王明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠訓（卒于1278年），史料所见人物。本项目依据《中国历代人物传记资料库：王忠訓（CBDB 37687）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1278年 | accepted |
| name.primary | 王忠訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aSNezixm2f8E8Zta5pjk3h | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 37688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37688&o=json)
- [中国历代人物传记资料库：王忠訓（CBDB 37687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37687&o=json)
