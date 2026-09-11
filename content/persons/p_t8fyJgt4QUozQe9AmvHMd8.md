---
schema: wang-person/v1
id: p_t8fyJgt4QUozQe9AmvHMd8
status: active
merged_into: null
display_name: 王景之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4PVPDrQEtUuKDwnXtEBcSc
        subject_person_id: p_t8fyJgt4QUozQe9AmvHMd8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zg9gCc3sQkEQJ7X8LUCBk9
          claim_id: c_4PVPDrQEtUuKDwnXtEBcSc
          source_id: s_bbdBH4Uuo39cMg7Y7nNzc5
          stance: supports
          locator: CBDB:169178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169178）
          source: &a1
            id: s_bbdBH4Uuo39cMg7Y7nNzc5
            source_type: api_record
            title: 中国历代人物传记资料库：王景之（CBDB 169178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169178&o=json
            external_identifier: CBDB:169178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vLFiDbrFvnCbBpKYbnhC9D
        subject_person_id: p_t8fyJgt4QUozQe9AmvHMd8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMN65enJ9UbSP4M5bFy9J6
          claim_id: c_vLFiDbrFvnCbBpKYbnhC9D
          source_id: s_bbdBH4Uuo39cMg7Y7nNzc5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6eTMTY74Z2QH7pn8EfRS4n
        subject_person_id: p_t8fyJgt4QUozQe9AmvHMd8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景之（卒于800年），史料所见人物。本项目依据《中国历代人物传记资料库：王景之（CBDB 169178）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AOQEKfdf3RYuIo4faOy2w4
          claim_id: c_6eTMTY74Z2QH7pn8EfRS4n
          source_id: s_bbdBH4Uuo39cMg7Y7nNzc5
          stance: supports
          locator: CBDB:169178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Cv3QKvYG5sBVHeER1JRjfE
        subject_person_id: p_So7Twmg7nsrkQaqWu21hQP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t8fyJgt4QUozQe9AmvHMd8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B46EZ-UwjbLhUUHa0ZlU4w
          claim_id: c_Cv3QKvYG5sBVHeER1JRjfE
          source_id: s_v8Gq51PNJbpHDj3L9dqSvd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v8Gq51PNJbpHDj3L9dqSvd
            source_type: api_record
            title: 中国历代人物传记资料库：王乾福（CBDB 169732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169732&o=json
            external_identifier: CBDB:169732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_So7Twmg7nsrkQaqWu21hQP
        status: active
        display_name: 王乾福
        merged_into_person_id: null
  children:
    - claim:
        id: c_D_lfkec0ivyTasMUuyN1g6
        subject_person_id: p_t8fyJgt4QUozQe9AmvHMd8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dcLVdERYQdnzFqDn6Ymyas
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MyaW3ZZj7XzZ1p9mqf9Cy
          claim_id: c_D_lfkec0ivyTasMUuyN1g6
          source_id: s_LJzuETGaYKSRoYGE3E4993
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LJzuETGaYKSRoYGE3E4993
            source_type: api_record
            title: 中国历代人物传记资料库：王霸（CBDB 169078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169078&o=json
            external_identifier: CBDB:169078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dcLVdERYQdnzFqDn6Ymyas
        status: active
        display_name: 王霸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景之 | accepted |
| death.date | 800年 | accepted |
| bio.summary | 王景之（卒于800年），史料所见人物。本项目依据《中国历代人物传记资料库：王景之（CBDB 169178）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_So7Twmg7nsrkQaqWu21hQP | 王乾福 | accepted |
| children | p_dcLVdERYQdnzFqDn6Ymyas | 王霸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霸（CBDB 169078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169078&o=json)
- [中国历代人物传记资料库：王景之（CBDB 169178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169178&o=json)
- [中国历代人物传记资料库：王乾福（CBDB 169732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169732&o=json)
