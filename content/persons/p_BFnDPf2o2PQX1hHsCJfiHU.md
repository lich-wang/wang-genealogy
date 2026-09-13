---
schema: wang-person/v1
id: p_BFnDPf2o2PQX1hHsCJfiHU
status: active
merged_into: null
display_name: 王錙
cbdb_id: 513596
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QTLtuE3LtrDvVkrtE3r2s9
        subject_person_id: p_BFnDPf2o2PQX1hHsCJfiHU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錙，史料所见人物。本项目依据《中国历代人物传记资料库：王錙（CBDB 513596）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_OScrZbsPxfthpv1nZR-9Ap
          claim_id: c_QTLtuE3LtrDvVkrtE3r2s9
          source_id: s_bhLUs7g6oCuPzHBv7vs9GF
          stance: supports
          locator: CBDB:513596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bhLUs7g6oCuPzHBv7vs9GF
            source_type: api_record
            title: 中国历代人物传记资料库：王錙（CBDB 513596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513596&o=json
            external_identifier: CBDB:513596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EXSWriNBKTMAb38Rr2HGHZ
        subject_person_id: p_BFnDPf2o2PQX1hHsCJfiHU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WUjEe9WRDMWcXEwNirpGQt
          claim_id: c_EXSWriNBKTMAb38Rr2HGHZ
          source_id: s_bhLUs7g6oCuPzHBv7vs9GF
          stance: supports
          locator: CBDB:513596
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FfkR8nHF5R_MJrQ309E211
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BFnDPf2o2PQX1hHsCJfiHU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iV96vxwPYVDNH1p0Qa5DMD
          claim_id: c_FfkR8nHF5R_MJrQ309E211
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZBkD39gw9xGNCPK1D1WBq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔運（CBDB 56877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json
            external_identifier: CBDB:56877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vECvu4PrbhTNUTMJRckP9C
        status: active
        display_name: 王輔運
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錙，史料所见人物。本项目依据《中国历代人物传记资料库：王錙（CBDB 513596）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王錙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vECvu4PrbhTNUTMJRckP9C | 王輔運 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔運（CBDB 56877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json)
- [中国历代人物传记资料库：王錙（CBDB 513596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513596&o=json)
