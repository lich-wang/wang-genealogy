---
schema: wang-person/v1
id: p_8YDjoJXWBi5PyNmkv6AW5r
status: active
merged_into: null
display_name: 王仁生
cbdb_id: 236492
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Qb33SCESJj5yV8fBEGjAT
        subject_person_id: p_8YDjoJXWBi5PyNmkv6AW5r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁生，史料所见人物。本项目依据《中国历代人物传记资料库：王仁生（CBDB 236492）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_nyWb0bJoopNnC4TiXvtHdB
          claim_id: c_5Qb33SCESJj5yV8fBEGjAT
          source_id: s_tnp1hQE3Yu3Emv657jXhiT
          stance: supports
          locator: CBDB:236492
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tnp1hQE3Yu3Emv657jXhiT
            source_type: api_record
            title: 中国历代人物传记资料库：王仁生（CBDB 236492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236492&o=json
            external_identifier: CBDB:236492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g3hpH3ykH89SYgPzsry45m
        subject_person_id: p_8YDjoJXWBi5PyNmkv6AW5r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BFjC1qjMz9z35D7X9tFWfS
          claim_id: c_g3hpH3ykH89SYgPzsry45m
          source_id: s_tnp1hQE3Yu3Emv657jXhiT
          stance: supports
          locator: CBDB:236492
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xm-RXyLYVShAlmKBURpi1X
        subject_person_id: p_nwL2xVd75q361KsBtDP6KW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8YDjoJXWBi5PyNmkv6AW5r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S70SiS6LD4znMhJdeZZmMD
          claim_id: c_Xm-RXyLYVShAlmKBURpi1X
          source_id: s_tnp1hQE3Yu3Emv657jXhiT
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第二百十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tnp1hQE3Yu3Emv657jXhiT
            source_type: api_record
            title: 中国历代人物传记资料库：王仁生（CBDB 236492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236492&o=json
            external_identifier: CBDB:236492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁生，史料所见人物。本项目依据《中国历代人物传记资料库：王仁生（CBDB 236492）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仁生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁生（CBDB 236492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236492&o=json)
