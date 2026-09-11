---
schema: wang-person/v1
id: p_HP8CrBYhwLDmDELX7RAy8v
status: active
merged_into: null
display_name: 王朝霖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7RCGPgzAsUt8NM6kLw53ac
        subject_person_id: p_HP8CrBYhwLDmDELX7RAy8v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TAdDFhTZnme2fSJ64jK75b
          claim_id: c_7RCGPgzAsUt8NM6kLw53ac
          source_id: s_jEdsn4DLHiQM6XszzzJABE
          stance: supports
          locator: CBDB:526946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526946）
          source: &a1
            id: s_jEdsn4DLHiQM6XszzzJABE
            source_type: api_record
            title: 中国历代人物传记资料库：王朝霖（CBDB 526946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526946&o=json
            external_identifier: CBDB:526946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JWyKLzvgoNgWGC6LCCBUoj
        subject_person_id: p_HP8CrBYhwLDmDELX7RAy8v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝霖，史料所见人物。本项目依据《中国历代人物传记资料库：王朝霖（CBDB 526946）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HYvaXdvw9N5b0ZvHt2HdCY
          claim_id: c_JWyKLzvgoNgWGC6LCCBUoj
          source_id: s_jEdsn4DLHiQM6XszzzJABE
          stance: supports
          locator: CBDB:526946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_00tVqZG-f-KMBPRTMxkYNg
        subject_person_id: p_1W7FNDdsQGT7uB5yfT8rU3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HP8CrBYhwLDmDELX7RAy8v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iuIrft-fhKd1PoxXj6X_wq
          claim_id: c_00tVqZG-f-KMBPRTMxkYNg
          source_id: s_YrjhKLs6Kc3LXGchPmieEf
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13124：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YrjhKLs6Kc3LXGchPmieEf
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳祥（CBDB 69418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69418&o=json
            external_identifier: CBDB:69418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1W7FNDdsQGT7uB5yfT8rU3
        status: active
        display_name: 王鳳祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝霖 | accepted |
| bio.summary | 王朝霖，史料所见人物。本项目依据《中国历代人物传记资料库：王朝霖（CBDB 526946）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1W7FNDdsQGT7uB5yfT8rU3 | 王鳳祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝霖（CBDB 526946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526946&o=json)
- [中国历代人物传记资料库：王鳳祥（CBDB 69418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69418&o=json)
