---
schema: wang-person/v1
id: p_mMMvUVTqSGCzN9tBPNL2KP
status: active
merged_into: null
display_name: 王南夫
cbdb_id: 22130
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FuoYnrRPYBBkASQymnJFVh
        subject_person_id: p_mMMvUVTqSGCzN9tBPNL2KP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南夫，史料所见人物。本项目依据《中国历代人物传记资料库：王南夫（CBDB 22130）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_nrecLxQU0pPEPk3NMfHat5
          claim_id: c_FuoYnrRPYBBkASQymnJFVh
          source_id: s_Bxw3SJ5dKXxJ2X1DWYWQ6z
          stance: supports
          locator: CBDB:22130
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Bxw3SJ5dKXxJ2X1DWYWQ6z
            source_type: api_record
            title: 中国历代人物传记资料库：王南夫（CBDB 22130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22130&o=json
            external_identifier: CBDB:22130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fvpkDB2h99N95Qy6q39idj
        subject_person_id: p_mMMvUVTqSGCzN9tBPNL2KP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QLXPY85HHj6pSmFfeuQgCp
          claim_id: c_fvpkDB2h99N95Qy6q39idj
          source_id: s_Bxw3SJ5dKXxJ2X1DWYWQ6z
          stance: supports
          locator: CBDB:22130
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_CXEMbikh6durWj-CYwIeSH
        subject_person_id: p_89pxyYXCwEKYhMLt29PYoD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mMMvUVTqSGCzN9tBPNL2KP
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3FABSA8_eV89aoLv4bX77
          claim_id: c_CXEMbikh6durWj-CYwIeSH
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王南夫 ⇄ 高祖;四世祖 王彬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7RjS56q2inTQgTRu2wGC13
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 1859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1859&o=json
            external_identifier: CBDB:1859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_89pxyYXCwEKYhMLt29PYoD
        status: active
        display_name: 王彬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王南夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王南夫，史料所见人物。本项目依据《中国历代人物传记资料库：王南夫（CBDB 22130）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王南夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_89pxyYXCwEKYhMLt29PYoD | 王彬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 1859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1859&o=json)
- [中国历代人物传记资料库：王南夫（CBDB 22130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22130&o=json)
