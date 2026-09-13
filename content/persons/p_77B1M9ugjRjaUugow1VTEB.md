---
schema: wang-person/v1
id: p_77B1M9ugjRjaUugow1VTEB
status: active
merged_into: null
display_name: 王祖昇
cbdb_id: 279196
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uE8XY9vLzVVQER1AGDZG9G
        subject_person_id: p_77B1M9ugjRjaUugow1VTEB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖昇，史料所见人物。本项目依据《中国历代人物传记资料库：王祖昇（CBDB 279196）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ZYhKoM5XYkUK_XA6qMw-ra
          claim_id: c_uE8XY9vLzVVQER1AGDZG9G
          source_id: s_ge2C3U6gToBR946on3789u
          stance: supports
          locator: CBDB:279196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ge2C3U6gToBR946on3789u
            source_type: api_record
            title: 中国历代人物传记资料库：王祖昇（CBDB 279196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279196&o=json
            external_identifier: CBDB:279196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e3Ld75JhSRGwv7oVbRz2yY
        subject_person_id: p_77B1M9ugjRjaUugow1VTEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sTMESyvSQjFC9Gz27UBpjT
          claim_id: c_e3Ld75JhSRGwv7oVbRz2yY
          source_id: s_ge2C3U6gToBR946on3789u
          stance: supports
          locator: CBDB:279196
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xnhBs-UI3i7WaqMcr-jVji
        subject_person_id: p_77B1M9ugjRjaUugow1VTEB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2bM722d9X3YmbYXbBeCDTM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dSgxpE1u90lMzg8jZfLdoh
          claim_id: c_xnhBs-UI3i7WaqMcr-jVji
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKUvL6tDCQPamiF1rrU2Yi
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 198032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json
            external_identifier: CBDB:198032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2bM722d9X3YmbYXbBeCDTM
        status: active
        display_name: 王敬中
        merged_into_person_id: null
  other: []
---

# 王祖昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖昇，史料所见人物。本项目依据《中国历代人物传记资料库：王祖昇（CBDB 279196）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王祖昇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2bM722d9X3YmbYXbBeCDTM | 王敬中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬中（CBDB 198032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json)
- [中国历代人物传记资料库：王祖昇（CBDB 279196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279196&o=json)
