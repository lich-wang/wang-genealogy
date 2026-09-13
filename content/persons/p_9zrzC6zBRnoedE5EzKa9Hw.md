---
schema: wang-person/v1
id: p_9zrzC6zBRnoedE5EzKa9Hw
status: active
merged_into: null
display_name: 王永光
cbdb_id: 126480
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gFmc17o9Lo57cBmQMRvM5L
        subject_person_id: p_9zrzC6zBRnoedE5EzKa9Hw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永光，史料所见人物。本项目依据《中国历代人物传记资料库：王永光（CBDB 126480）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_xd9pD_-9X5ZoKhxhT6EeJH
          claim_id: c_gFmc17o9Lo57cBmQMRvM5L
          source_id: s_KNWC3HFcJZrBd5vtnKmqJy
          stance: supports
          locator: CBDB:126480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_KNWC3HFcJZrBd5vtnKmqJy
            source_type: api_record
            title: 中国历代人物传记资料库：王永光（CBDB 126480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126480&o=json
            external_identifier: CBDB:126480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mzNrrjXeo5K1dx1YAiiKMt
        subject_person_id: p_9zrzC6zBRnoedE5EzKa9Hw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iW25ZpKb7svjabQ3zmFGPg
          claim_id: c_mzNrrjXeo5K1dx1YAiiKMt
          source_id: s_KNWC3HFcJZrBd5vtnKmqJy
          stance: supports
          locator: CBDB:126480
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_B-DpdfKE_2eQ5bwwAgRO8v
        subject_person_id: p_h7rDU4XwMgAh26S9SQK34Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9zrzC6zBRnoedE5EzKa9Hw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-XOa1J-Gpt4HM4VXsrL5Dv
          claim_id: c_B-DpdfKE_2eQ5bwwAgRO8v
          source_id: s_JHmhrPv8DWs7XCwGeKhkkv
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JHmhrPv8DWs7XCwGeKhkkv
            source_type: api_record
            title: 中国历代人物传记资料库：王允（CBDB 231837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231837&o=json
            external_identifier: CBDB:231837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h7rDU4XwMgAh26S9SQK34Y
        status: active
        display_name: 王允
        merged_into_person_id: null
    - claim:
        id: c_yPJtnNX-edMcFa2fj8ZljF
        subject_person_id: p_n3qtJinVid7K8mLwECAF2J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9zrzC6zBRnoedE5EzKa9Hw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqfN7MdldXPe25n5kWYzvU
          claim_id: c_yPJtnNX-edMcFa2fj8ZljF
          source_id: s_dLqfg6LtQreK4SXA9oU22c
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dLqfg6LtQreK4SXA9oU22c
            source_type: api_record
            title: 中国历代人物传记资料库：王結（CBDB 231838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231838&o=json
            external_identifier: CBDB:231838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_n3qtJinVid7K8mLwECAF2J
        status: active
        display_name: 王結
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王永光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永光，史料所见人物。本项目依据《中国历代人物传记资料库：王永光（CBDB 126480）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王永光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_h7rDU4XwMgAh26S9SQK34Y | 王允 | accepted |
| ancestors | p_n3qtJinVid7K8mLwECAF2J | 王結 | accepted |

## 外部来源

- [中国历代人物传记资料库：王結（CBDB 231838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231838&o=json)
- [中国历代人物传记资料库：王永光（CBDB 126480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126480&o=json)
- [中国历代人物传记资料库：王允（CBDB 231837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231837&o=json)
