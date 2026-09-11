---
schema: wang-person/v1
id: p_fUstE2172L567aVFEGPTgm
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 701781
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aK_DjcvYSXxshnp2OVyRSV
        subject_person_id: p_fUstE2172L567aVFEGPTgm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(李中吉三女)（CBDB 701781）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ubTcP9F1J6GzExY--dqErC
          claim_id: c_aK_DjcvYSXxshnp2OVyRSV
          source_id: s_O-hm-ZffFRsQkJMD-8_SMu
          stance: supports
          locator: CBDB:701781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_O-hm-ZffFRsQkJMD-8_SMu
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(李中吉三女)（CBDB 701781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701781&o=json
            external_identifier: CBDB:701781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8CVaGyYXvxMJ4pYS3rqDcl
        subject_person_id: p_fUstE2172L567aVFEGPTgm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q6s8yRfPKNWGZ4nVYd33Ld
          claim_id: c_8CVaGyYXvxMJ4pYS3rqDcl
          source_id: s_O-hm-ZffFRsQkJMD-8_SMu
          stance: supports
          locator: CBDB:701781
          quotation: null
          interpretation_note: CBDB 明确记录的王宗望配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HZsbkgnXHspOID_hjXAHw-
        subject_person_id: p_Dzmr4JaLF7L2JJGUiewcMk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fUstE2172L567aVFEGPTgm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v1GHqDQ8n7rxEbGGPh4N31
          claim_id: c_HZsbkgnXHspOID_hjXAHw-
          source_id: s_O-hm-ZffFRsQkJMD-8_SMu
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷 210 李中吉墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Dzmr4JaLF7L2JJGUiewcMk
        status: active
        display_name: 王宗望
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，史料所见人物。本项目依据《中国历代人物传记资料库：李氏(李中吉三女)（CBDB 701781）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Dzmr4JaLF7L2JJGUiewcMk | 王宗望 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(李中吉三女)（CBDB 701781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701781&o=json)
