---
schema: wang-person/v1
id: p_jpb5e1LSfcNEcndKC8NGxG
status: active
merged_into: null
display_name: 王鄷
cbdb_id: 304747
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KAA1tT7U4zAwhgQN8Xnv14
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄷，史料所见人物。本项目依据《中国历代人物传记资料库：王鄷（CBDB 304747）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tRlMyMNte0nMEcMSbOjNUE
          claim_id: c_KAA1tT7U4zAwhgQN8Xnv14
          source_id: s_ersuMdygx9HVcxawPFRHpy
          stance: supports
          locator: CBDB:304747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ersuMdygx9HVcxawPFRHpy
            source_type: api_record
            title: 中国历代人物传记资料库：王鄷（CBDB 304747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json
            external_identifier: CBDB:304747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TD6nLkvaS1pyMDZSJAFY9Z
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Py3soPk76FPwLH6uRnkFT2
          claim_id: c_TD6nLkvaS1pyMDZSJAFY9Z
          source_id: s_ersuMdygx9HVcxawPFRHpy
          stance: supports
          locator: CBDB:304747
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_C-ciSiRWgKA6w_uUM_h8a6
        subject_person_id: p_jpb5e1LSfcNEcndKC8NGxG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PdBPJVHqizEMUoTmb638jr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_90vfazPGDJPvxMATMbMkNv
          claim_id: c_C-ciSiRWgKA6w_uUM_h8a6
          source_id: s_ersuMdygx9HVcxawPFRHpy
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ersuMdygx9HVcxawPFRHpy
            source_type: api_record
            title: 中国历代人物传记资料库：王鄷（CBDB 304747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json
            external_identifier: CBDB:304747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_PdBPJVHqizEMUoTmb638jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鄷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鄷，史料所见人物。本项目依据《中国历代人物传记资料库：王鄷（CBDB 304747）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鄷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PdBPJVHqizEMUoTmb638jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鄷（CBDB 304747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304747&o=json)
