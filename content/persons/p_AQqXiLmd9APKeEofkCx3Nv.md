---
schema: wang-person/v1
id: p_AQqXiLmd9APKeEofkCx3Nv
status: active
merged_into: null
display_name: 王文選
cbdb_id: 273646
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_McjQMWn2YyhF5jqH3JUqZ8
        subject_person_id: p_AQqXiLmd9APKeEofkCx3Nv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文選，史料所见人物。本项目依据《中国历代人物传记资料库：王文選（CBDB 273646）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_snAN4wPjHK6igTNhXKei5g
          claim_id: c_McjQMWn2YyhF5jqH3JUqZ8
          source_id: s_7h8j8mXSG1NWPNBbt5ymni
          stance: supports
          locator: CBDB:273646
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7h8j8mXSG1NWPNBbt5ymni
            source_type: api_record
            title: 中国历代人物传记资料库：王文選（CBDB 273646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273646&o=json
            external_identifier: CBDB:273646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1wQVHqQe5Yz7dZqAf9iYCR
        subject_person_id: p_AQqXiLmd9APKeEofkCx3Nv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UEXP8u3gRJVXGQRuCnXL3C
          claim_id: c_1wQVHqQe5Yz7dZqAf9iYCR
          source_id: s_7h8j8mXSG1NWPNBbt5ymni
          stance: supports
          locator: CBDB:273646
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
        id: c_GQVmHcuIC5znfxVHZLoy53
        subject_person_id: p_AQqXiLmd9APKeEofkCx3Nv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d6n2jnjPLQ88RNa223JnPk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvqYsUAKg8Afl9qE-G3vTA
          claim_id: c_GQVmHcuIC5znfxVHZLoy53
          source_id: s_eWWbkQ4EpArtRt35sVEC6x
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eWWbkQ4EpArtRt35sVEC6x
            source_type: api_record
            title: 中国历代人物传记资料库：王良佐（CBDB 126529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126529&o=json
            external_identifier: CBDB:126529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d6n2jnjPLQ88RNa223JnPk
        status: active
        display_name: 王良佐
        merged_into_person_id: null
  other: []
---

# 王文選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文選，史料所见人物。本项目依据《中国历代人物传记资料库：王文選（CBDB 273646）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王文選 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_d6n2jnjPLQ88RNa223JnPk | 王良佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良佐（CBDB 126529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126529&o=json)
- [中国历代人物传记资料库：王文選（CBDB 273646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273646&o=json)
