---
schema: wang-person/v1
id: p_AQEJAxuWUw4trzxUBBnquK
status: active
merged_into: null
display_name: 王元獎
cbdb_id: 150371
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ejPcz75cBBe2BiYG5j6ZNr
        subject_person_id: p_AQEJAxuWUw4trzxUBBnquK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元獎，史料所见人物。本项目依据《中国历代人物传记资料库：王元獎（CBDB 150371）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_zIbTpCDsssyhc0ya3phrzu
          claim_id: c_ejPcz75cBBe2BiYG5j6ZNr
          source_id: s_T6wyxyNNeDZrUzWvifdqEB
          stance: supports
          locator: CBDB:150371
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_T6wyxyNNeDZrUzWvifdqEB
            source_type: api_record
            title: 中国历代人物传记资料库：王元獎（CBDB 150371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150371&o=json
            external_identifier: CBDB:150371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DPrvQrmixMJPsY5TNtSfhG
        subject_person_id: p_AQEJAxuWUw4trzxUBBnquK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元獎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7uVLDQDAcrtza1ULMWjH4g
          claim_id: c_DPrvQrmixMJPsY5TNtSfhG
          source_id: s_T6wyxyNNeDZrUzWvifdqEB
          stance: supports
          locator: CBDB:150371
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lVZ874mWRNe-lpabDt5D11
        subject_person_id: p_hEEgxGG3WH41XSNVFrkGHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AQEJAxuWUw4trzxUBBnquK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Je5xknfaATRDT8A3c3BXMx
          claim_id: c_lVZ874mWRNe-lpabDt5D11
          source_id: s_T6wyxyNNeDZrUzWvifdqEB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 22：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T6wyxyNNeDZrUzWvifdqEB
            source_type: api_record
            title: 中国历代人物传记资料库：王元獎（CBDB 150371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150371&o=json
            external_identifier: CBDB:150371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hEEgxGG3WH41XSNVFrkGHK
        status: active
        display_name: 王嘉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元獎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元獎，史料所见人物。本项目依据《中国历代人物传记资料库：王元獎（CBDB 150371）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王元獎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hEEgxGG3WH41XSNVFrkGHK | 王嘉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元獎（CBDB 150371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150371&o=json)
