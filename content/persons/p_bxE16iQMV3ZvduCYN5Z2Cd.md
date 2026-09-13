---
schema: wang-person/v1
id: p_bxE16iQMV3ZvduCYN5Z2Cd
status: active
merged_into: null
display_name: 王穰
cbdb_id: 437663
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_53Fw3EhLQvpjoGh8h4D5iQ
        subject_person_id: p_bxE16iQMV3ZvduCYN5Z2Cd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穰，史料所见人物。本项目依据《中国历代人物传记资料库：王穰（CBDB 437663）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_yotGepWokaKZbwuVEIa8fd
          claim_id: c_53Fw3EhLQvpjoGh8h4D5iQ
          source_id: s_8anH7G45ih3Y7d9FhRXCAb
          stance: supports
          locator: CBDB:437663
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8anH7G45ih3Y7d9FhRXCAb
            source_type: api_record
            title: 中国历代人物传记资料库：王穰（CBDB 437663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437663&o=json
            external_identifier: CBDB:437663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNFqQpsjB2B1LKhf32FzAu
        subject_person_id: p_bxE16iQMV3ZvduCYN5Z2Cd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZfxQTWJxoYdRFgKrjX9Nz7
          claim_id: c_bNFqQpsjB2B1LKhf32FzAu
          source_id: s_8anH7G45ih3Y7d9FhRXCAb
          stance: supports
          locator: CBDB:437663
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_VNZsNqvyAKLwW-UNobPjeI
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bxE16iQMV3ZvduCYN5Z2Cd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2zpkxtegNnoeTJepv0apc
          claim_id: c_VNZsNqvyAKLwW-UNobPjeI
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王穰 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
    - claim:
        id: c_WH1sOZg3gxImJE9aWuNbp6
        subject_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bxE16iQMV3ZvduCYN5Z2Cd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0FW7CMWbEI7AAyNk69akow
          claim_id: c_WH1sOZg3gxImJE9aWuNbp6
          source_id: s_8anH7G45ih3Y7d9FhRXCAb
          stance: supports
          locator: CBDB 双向互证（祖父 王褘 ⇄ 孫 王穰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_8anH7G45ih3Y7d9FhRXCAb
            source_type: api_record
            title: 中国历代人物传记资料库：王穰（CBDB 437663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437663&o=json
            external_identifier: CBDB:437663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_NxhVtsQFEKS3B7HARgTqxM
        status: active
        display_name: 王褘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王穰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穰，史料所见人物。本项目依据《中国历代人物传记资料库：王穰（CBDB 437663）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王穰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |
| ancestors | p_NxhVtsQFEKS3B7HARgTqxM | 王褘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [中国历代人物传记资料库：王穰（CBDB 437663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437663&o=json)
