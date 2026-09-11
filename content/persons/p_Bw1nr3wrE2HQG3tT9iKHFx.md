---
schema: wang-person/v1
id: p_Bw1nr3wrE2HQG3tT9iKHFx
status: active
merged_into: null
display_name: 王嗣學
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATZd6ffb3KsUWcFBehuGB1
        subject_person_id: p_Bw1nr3wrE2HQG3tT9iKHFx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2CARrZdwWvVQnZuBEQGSz3
          claim_id: c_ATZd6ffb3KsUWcFBehuGB1
          source_id: s_5E9WD5Es7yqaorEfa271xX
          stance: supports
          locator: CBDB:526942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526942）
          source: &a1
            id: s_5E9WD5Es7yqaorEfa271xX
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣學（CBDB 526942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526942&o=json
            external_identifier: CBDB:526942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pHp2KmqFvETZE7zMK8e5j7
        subject_person_id: p_Bw1nr3wrE2HQG3tT9iKHFx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣學，史料所见人物。本项目依据《中国历代人物传记资料库：王嗣學（CBDB 526942）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZaOChDihZmyAQ8sh0uPH6_
          claim_id: c_pHp2KmqFvETZE7zMK8e5j7
          source_id: s_5E9WD5Es7yqaorEfa271xX
          stance: supports
          locator: CBDB:526942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rlC7AnV1hW2nRLAQAQ1AFb
        subject_person_id: p_JiWtPR49xLqVA9xDrBgamp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bw1nr3wrE2HQG3tT9iKHFx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XpaLywW_bcna2C04-xg4ZH
          claim_id: c_rlC7AnV1hW2nRLAQAQ1AFb
          source_id: s_5E9WD5Es7yqaorEfa271xX
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13113：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JiWtPR49xLqVA9xDrBgamp
        status: active
        display_name: 王鳴韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嗣學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣學 | accepted |
| bio.summary | 王嗣學，史料所见人物。本项目依据《中国历代人物传记资料库：王嗣學（CBDB 526942）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JiWtPR49xLqVA9xDrBgamp | 王鳴韶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣學（CBDB 526942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526942&o=json)
