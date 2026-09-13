---
schema: wang-person/v1
id: p_yDXgJkK3YLkSAxGCAykuAo
status: active
merged_into: null
display_name: 王昭雍
cbdb_id: 22073
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RpN5vHnayB66ATZN4jbFL2
        subject_person_id: p_yDXgJkK3YLkSAxGCAykuAo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭雍，史料所见人物。本项目依据《中国历代人物传记资料库：王昭雍（CBDB 22073）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_pexNEN8AYBMNP3vLjWCzfG
          claim_id: c_RpN5vHnayB66ATZN4jbFL2
          source_id: s_6F4VyQ4NYKYxYgufxgfmv5
          stance: supports
          locator: CBDB:22073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6F4VyQ4NYKYxYgufxgfmv5
            source_type: api_record
            title: 中国历代人物传记资料库：王昭雍（CBDB 22073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22073&o=json
            external_identifier: CBDB:22073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uuW5jAVondA7EH1ptdNKgn
        subject_person_id: p_yDXgJkK3YLkSAxGCAykuAo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hh7cxE3sMDRBGzikFuVMrc
          claim_id: c_uuW5jAVondA7EH1ptdNKgn
          source_id: s_6F4VyQ4NYKYxYgufxgfmv5
          stance: supports
          locator: CBDB:22073
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ib9ttvf0muoFa8lUUXx0Pw
        subject_person_id: p_1LS5H2BVbcx2CqPovKEQND
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yDXgJkK3YLkSAxGCAykuAo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Xnb6R31r2rp1WiBByVeYt
          claim_id: c_Ib9ttvf0muoFa8lUUXx0Pw
          source_id: s_5kgHHQty7pzBFUF4UdegMv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1789：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5kgHHQty7pzBFUF4UdegMv
            source_type: api_record
            title: 中国历代人物传记资料库：王仁贍（CBDB 1831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1831&o=json
            external_identifier: CBDB:1831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1LS5H2BVbcx2CqPovKEQND
        status: active
        display_name: 王仁贍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭雍，史料所见人物。本项目依据《中国历代人物传记资料库：王昭雍（CBDB 22073）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王昭雍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1LS5H2BVbcx2CqPovKEQND | 王仁贍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁贍（CBDB 1831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1831&o=json)
- [中国历代人物传记资料库：王昭雍（CBDB 22073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22073&o=json)
