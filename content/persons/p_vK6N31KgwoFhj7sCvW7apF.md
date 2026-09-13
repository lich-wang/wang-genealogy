---
schema: wang-person/v1
id: p_vK6N31KgwoFhj7sCvW7apF
status: active
merged_into: null
display_name: 王心傳
cbdb_id: 526914
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PBNJxbrd8VbWumQFX48Uay
        subject_person_id: p_vK6N31KgwoFhj7sCvW7apF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心傳，史料所见人物。本项目依据《中国历代人物传记资料库：王心傳（CBDB 526914）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Tz9Es9I97AuRxDTJF92sDp
          claim_id: c_PBNJxbrd8VbWumQFX48Uay
          source_id: s_JpsSmUzgri5PnmXJzdMBAs
          stance: supports
          locator: CBDB:526914
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JpsSmUzgri5PnmXJzdMBAs
            source_type: api_record
            title: 中国历代人物传记资料库：王心傳（CBDB 526914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526914&o=json
            external_identifier: CBDB:526914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JvhJmrYc6hnrBqMAHjSLij
        subject_person_id: p_vK6N31KgwoFhj7sCvW7apF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心傳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yqxCcPQBNJ6NbNiRNokS95
          claim_id: c_JvhJmrYc6hnrBqMAHjSLij
          source_id: s_JpsSmUzgri5PnmXJzdMBAs
          stance: supports
          locator: CBDB:526914
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r1DiCwunEyfMdz4VRWE6iH
        subject_person_id: p_3JJ8Fs4vjAdiBh6Ww6BxHN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vK6N31KgwoFhj7sCvW7apF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o-SnBWcxDSwOEPE_RzhciS
          claim_id: c_r1DiCwunEyfMdz4VRWE6iH
          source_id: s_vBCTbhtPfj6LyWHu4VfkEb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13089：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vBCTbhtPfj6LyWHu4VfkEb
            source_type: api_record
            title: 中国历代人物传记资料库：王朝宗（CBDB 69384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69384&o=json
            external_identifier: CBDB:69384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3JJ8Fs4vjAdiBh6Ww6BxHN
        status: active
        display_name: 王朝宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王心傳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王心傳，史料所见人物。本项目依据《中国历代人物传记资料库：王心傳（CBDB 526914）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王心傳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JJ8Fs4vjAdiBh6Ww6BxHN | 王朝宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝宗（CBDB 69384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69384&o=json)
- [中国历代人物传记资料库：王心傳（CBDB 526914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526914&o=json)
