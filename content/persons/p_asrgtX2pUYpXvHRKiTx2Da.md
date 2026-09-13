---
schema: wang-person/v1
id: p_asrgtX2pUYpXvHRKiTx2Da
status: active
merged_into: null
display_name: 王聞凱
cbdb_id: 236741
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiF6ZZ7wQGUgX8hLN5BsuP
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞凱，史料所见人物。本项目依据《中国历代人物传记资料库：王聞凱（CBDB 236741）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wa_KKgCoJWKLF8oHgwpZSI
          claim_id: c_CiF6ZZ7wQGUgX8hLN5BsuP
          source_id: s_PWyAj95pvfAFyAFGjqE9vf
          stance: supports
          locator: CBDB:236741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PWyAj95pvfAFyAFGjqE9vf
            source_type: api_record
            title: 中国历代人物传记资料库：王聞凱（CBDB 236741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236741&o=json
            external_identifier: CBDB:236741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h79ZNdCgr2jRTHDQsqsbm7
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聞凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B4vrQJZR62Za6a8qE3RFBh
          claim_id: c_h79ZNdCgr2jRTHDQsqsbm7
          source_id: s_PWyAj95pvfAFyAFGjqE9vf
          stance: supports
          locator: CBDB:236741
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_221Yq_WkBT272tI4JYR13X
        subject_person_id: p_asrgtX2pUYpXvHRKiTx2Da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2iNYB7MMKmz6yPS4rjCAQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYjnc5RrNDfp7xIySMh3-b
          claim_id: c_221Yq_WkBT272tI4JYR13X
          source_id: s_g2jrpdwRHB37XPK8y1Q56W
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2jrpdwRHB37XPK8y1Q56W
            source_type: api_record
            title: 中国历代人物传记资料库：王彰（CBDB 207831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json
            external_identifier: CBDB:207831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2iNYB7MMKmz6yPS4rjCAQD
        status: active
        display_name: 王彰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聞凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聞凱，史料所见人物。本项目依据《中国历代人物传记资料库：王聞凱（CBDB 236741）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王聞凱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2iNYB7MMKmz6yPS4rjCAQD | 王彰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聞凱（CBDB 236741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236741&o=json)
- [中国历代人物传记资料库：王彰（CBDB 207831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207831&o=json)
