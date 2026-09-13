---
schema: wang-person/v1
id: p_R2rpiomoiCkDZ1dnRpPsmw
status: active
merged_into: null
display_name: 王朋從
cbdb_id: 175958
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JGj1Gv4Hu9ECh1TtbsmS9X
        subject_person_id: p_R2rpiomoiCkDZ1dnRpPsmw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋從（卒于738年），史料所见人物。本项目依据《中国历代人物传记资料库：王朋從（CBDB 175958）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Cu_EyGTRtI4NSyz93xzlfb
          claim_id: c_JGj1Gv4Hu9ECh1TtbsmS9X
          source_id: s_nNFNX1wYAL6EjfnWKXFYHx
          stance: supports
          locator: CBDB:175958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nNFNX1wYAL6EjfnWKXFYHx
            source_type: api_record
            title: 中国历代人物传记资料库：王朋從（CBDB 175958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175958&o=json
            external_identifier: CBDB:175958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bAEA3TFabBXbh3k8RWdvw1
        subject_person_id: p_R2rpiomoiCkDZ1dnRpPsmw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 738年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0738-01-01
            latest: 0738-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vcLg7Rp4k71dgpDiov7JrF
          claim_id: c_bAEA3TFabBXbh3k8RWdvw1
          source_id: s_nNFNX1wYAL6EjfnWKXFYHx
          stance: supports
          locator: CBDB:175958
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 738
          source:
            id: s_nNFNX1wYAL6EjfnWKXFYHx
            source_type: api_record
            title: 中国历代人物传记资料库：王朋從（CBDB 175958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175958&o=json
            external_identifier: CBDB:175958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mD5V6XBob2WDU5obeVs2My
        subject_person_id: p_R2rpiomoiCkDZ1dnRpPsmw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KhMM3VsnYakv5MYaN9VxeQ
          claim_id: c_mD5V6XBob2WDU5obeVs2My
          source_id: s_nNFNX1wYAL6EjfnWKXFYHx
          stance: supports
          locator: CBDB:175958
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 738
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uVVAYVeANHaDutNsujo5Zl
        subject_person_id: p_WG4LcJdg2iBTqvpZQpDp9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R2rpiomoiCkDZ1dnRpPsmw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_b7WUVQc4xEEgxk-PYg2a
          claim_id: c_uVVAYVeANHaDutNsujo5Zl
          source_id: s_P9wQqFz1g9NPy4Aq7kAejE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9wQqFz1g9NPy4Aq7kAejE
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 175940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json
            external_identifier: CBDB:175940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WG4LcJdg2iBTqvpZQpDp9o
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朋從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朋從（卒于738年），史料所见人物。本项目依据《中国历代人物传记资料库：王朋從（CBDB 175958）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 738年 | accepted |
| name.primary | 王朋從 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WG4LcJdg2iBTqvpZQpDp9o | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朋從（CBDB 175958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175958&o=json)
- [中国历代人物传记资料库：王慶（CBDB 175940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175940&o=json)
