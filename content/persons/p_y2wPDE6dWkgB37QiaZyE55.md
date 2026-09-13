---
schema: wang-person/v1
id: p_y2wPDE6dWkgB37QiaZyE55
status: active
merged_into: null
display_name: 王敬念
cbdb_id: 164190
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rZJhAzoC1JR9pFdHHEm5FA
        subject_person_id: p_y2wPDE6dWkgB37QiaZyE55
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬念，史料所见人物。本项目依据《中国历代人物传记资料库：王敬念（CBDB 164190）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_S_DeSpcVWc_JVFxxLO3vLA
          claim_id: c_rZJhAzoC1JR9pFdHHEm5FA
          source_id: s_ZbGDzsFq3BC4CCb3kYhfjG
          stance: supports
          locator: CBDB:164190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZbGDzsFq3BC4CCb3kYhfjG
            source_type: api_record
            title: 中国历代人物传记资料库：王敬念（CBDB 164190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164190&o=json
            external_identifier: CBDB:164190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_25hmRdm7jRTGb3QPwfNxwG
        subject_person_id: p_y2wPDE6dWkgB37QiaZyE55
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬念
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NRKL3aLM1uoGECdtfSn4aA
          claim_id: c_25hmRdm7jRTGb3QPwfNxwG
          source_id: s_ZbGDzsFq3BC4CCb3kYhfjG
          stance: supports
          locator: CBDB:164190
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Q7mpSEsPP9LLRGTfJ76JFI
        subject_person_id: p_y2wPDE6dWkgB37QiaZyE55
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mZq4zdR7q1GNcMA8vQFJ78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s__tbvRWrMiRK5nwoAP6KK
          claim_id: c_Q7mpSEsPP9LLRGTfJ76JFI
          source_id: s_QoKVw3cyuBecJzY4aLqCh3
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan120：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QoKVw3cyuBecJzY4aLqCh3
            source_type: api_record
            title: 中国历代人物传记资料库：王祖（CBDB 143709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143709&o=json
            external_identifier: CBDB:143709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_mZq4zdR7q1GNcMA8vQFJ78
        status: active
        display_name: 王祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬念

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬念，史料所见人物。本项目依据《中国历代人物传记资料库：王敬念（CBDB 164190）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王敬念 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mZq4zdR7q1GNcMA8vQFJ78 | 王祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬念（CBDB 164190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164190&o=json)
- [中国历代人物传记资料库：王祖（CBDB 143709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143709&o=json)
