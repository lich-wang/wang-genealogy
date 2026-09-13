---
schema: wang-person/v1
id: p_zf1m4zyay4f4HN9xeboK45
status: active
merged_into: null
display_name: 王茂燿
cbdb_id: 526728
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7k7rUHaPrPLyYxB3CURgAW
        subject_person_id: p_zf1m4zyay4f4HN9xeboK45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂燿，史料所见人物。本项目依据《中国历代人物传记资料库：王茂燿（CBDB 526728）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wCfMsrOp-9b9Z9wFBXIbUV
          claim_id: c_7k7rUHaPrPLyYxB3CURgAW
          source_id: s_6kuYoxPbxHnapqHfTSh45N
          stance: supports
          locator: CBDB:526728
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6kuYoxPbxHnapqHfTSh45N
            source_type: api_record
            title: 中国历代人物传记资料库：王茂燿（CBDB 526728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526728&o=json
            external_identifier: CBDB:526728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yBRuxC6xMBe7z6dFaqUBb8
        subject_person_id: p_zf1m4zyay4f4HN9xeboK45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂燿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iUbVr6axLj1stLDGdYEweU
          claim_id: c_yBRuxC6xMBe7z6dFaqUBb8
          source_id: s_6kuYoxPbxHnapqHfTSh45N
          stance: supports
          locator: CBDB:526728
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sknse2ylb5N4a72bS4BSrw
        subject_person_id: p_attXpVUNq5Leu9LSRnM6z8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zf1m4zyay4f4HN9xeboK45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uAs_DbQ9uGSnDckDm9TGx3
          claim_id: c_sknse2ylb5N4a72bS4BSrw
          source_id: s_6kuYoxPbxHnapqHfTSh45N
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12852：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6kuYoxPbxHnapqHfTSh45N
            source_type: api_record
            title: 中国历代人物传记资料库：王茂燿（CBDB 526728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526728&o=json
            external_identifier: CBDB:526728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_attXpVUNq5Leu9LSRnM6z8
        status: active
        display_name: 王本梧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂燿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王茂燿，史料所见人物。本项目依据《中国历代人物传记资料库：王茂燿（CBDB 526728）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王茂燿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_attXpVUNq5Leu9LSRnM6z8 | 王本梧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂燿（CBDB 526728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526728&o=json)
