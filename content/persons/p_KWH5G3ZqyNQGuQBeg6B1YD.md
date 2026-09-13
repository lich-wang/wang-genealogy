---
schema: wang-person/v1
id: p_KWH5G3ZqyNQGuQBeg6B1YD
status: active
merged_into: null
display_name: 王衛國
cbdb_id: 526774
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uKyJM4CeC4D9bm73CrSN4z
        subject_person_id: p_KWH5G3ZqyNQGuQBeg6B1YD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衛國，史料所见人物。本项目依据《中国历代人物传记资料库：王衛國（CBDB 526774）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_D61_rvKsdfGqtdfBjTvLkm
          claim_id: c_uKyJM4CeC4D9bm73CrSN4z
          source_id: s_emhSHcMcqW5GrjQAdZLgMP
          stance: supports
          locator: CBDB:526774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_emhSHcMcqW5GrjQAdZLgMP
            source_type: api_record
            title: 中国历代人物传记资料库：王衛國（CBDB 526774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526774&o=json
            external_identifier: CBDB:526774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EpLwTAKvWkpLLjEim1TKj9
        subject_person_id: p_KWH5G3ZqyNQGuQBeg6B1YD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衛國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bE83AiqQFVrDXe9UNwbvEY
          claim_id: c_EpLwTAKvWkpLLjEim1TKj9
          source_id: s_emhSHcMcqW5GrjQAdZLgMP
          stance: supports
          locator: CBDB:526774
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0o5wnRHnzNXa7nNwBCbzN8
        subject_person_id: p_RXjmQnCEy95BorcS45hjJh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KWH5G3ZqyNQGuQBeg6B1YD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t2gJyZqPdib1uShAtkAKXK
          claim_id: c_0o5wnRHnzNXa7nNwBCbzN8
          source_id: s_oLSGZa1iyRe72p1rKvLh4H
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12917：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oLSGZa1iyRe72p1rKvLh4H
            source_type: api_record
            title: 中国历代人物传记资料库：王廷傑（CBDB 69218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69218&o=json
            external_identifier: CBDB:69218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.161Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RXjmQnCEy95BorcS45hjJh
        status: active
        display_name: 王廷傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衛國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王衛國，史料所见人物。本项目依据《中国历代人物传记资料库：王衛國（CBDB 526774）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王衛國 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RXjmQnCEy95BorcS45hjJh | 王廷傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷傑（CBDB 69218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69218&o=json)
- [中国历代人物传记资料库：王衛國（CBDB 526774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526774&o=json)
