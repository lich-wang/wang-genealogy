---
schema: wang-person/v1
id: p_xVv8WjW7HnEkcJxFw6nr7M
status: active
merged_into: null
display_name: 王百忍
cbdb_id: 69182
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aXKyd3Si7LqoEN4FR94b6s
        subject_person_id: p_xVv8WjW7HnEkcJxFw6nr7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百忍（卒于1800年），史料所见人物。本项目依据《中国历代人物传记资料库：王百忍（CBDB 69182）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_s2uV-VVkE9YQbDMtllr_bI
          claim_id: c_aXKyd3Si7LqoEN4FR94b6s
          source_id: s_4BTLeG63LF84JafK4kbYsp
          stance: supports
          locator: CBDB:69182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4BTLeG63LF84JafK4kbYsp
            source_type: api_record
            title: 中国历代人物传记资料库：王百忍（CBDB 69182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69182&o=json
            external_identifier: CBDB:69182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NJXPeEUg57pfq5EbkdgVYL
        subject_person_id: p_xVv8WjW7HnEkcJxFw6nr7M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1800-01-01
            latest: 1800-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h8WzM9ES5k1jVKPuJDCm4C
          claim_id: c_NJXPeEUg57pfq5EbkdgVYL
          source_id: s_4BTLeG63LF84JafK4kbYsp
          stance: supports
          locator: CBDB:69182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1800
          source:
            id: s_4BTLeG63LF84JafK4kbYsp
            source_type: api_record
            title: 中国历代人物传记资料库：王百忍（CBDB 69182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69182&o=json
            external_identifier: CBDB:69182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iseV9smLmm2UsAKAyRsFEe
        subject_person_id: p_xVv8WjW7HnEkcJxFw6nr7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王百忍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vNaJFJnxNYaxge7kJcUh86
          claim_id: c_iseV9smLmm2UsAKAyRsFEe
          source_id: s_4BTLeG63LF84JafK4kbYsp
          stance: supports
          locator: CBDB:69182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1800
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_keZRCwaq_bUAx7iD7EYvw3
        subject_person_id: p_xVv8WjW7HnEkcJxFw6nr7M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BaCtxExXAmsxuoh52McPA8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xc9MLd65RlqOn_NNlVi1O
          claim_id: c_keZRCwaq_bUAx7iD7EYvw3
          source_id: s_6CoTVC1W3mnhnVFReHDZ4o
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12880：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6CoTVC1W3mnhnVFReHDZ4o
            source_type: api_record
            title: 中国历代人物传记资料库：王廷統（CBDB 526750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526750&o=json
            external_identifier: CBDB:526750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BaCtxExXAmsxuoh52McPA8
        status: active
        display_name: 王廷統
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王百忍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王百忍（卒于1800年），史料所见人物。本项目依据《中国历代人物传记资料库：王百忍（CBDB 69182）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1800年 | accepted |
| name.primary | 王百忍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BaCtxExXAmsxuoh52McPA8 | 王廷統 | accepted |

## 外部来源

- [中国历代人物传记资料库：王百忍（CBDB 69182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69182&o=json)
- [中国历代人物传记资料库：王廷統（CBDB 526750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526750&o=json)
