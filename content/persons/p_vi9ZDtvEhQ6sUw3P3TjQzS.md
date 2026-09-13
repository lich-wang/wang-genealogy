---
schema: wang-person/v1
id: p_vi9ZDtvEhQ6sUw3P3TjQzS
status: active
merged_into: null
display_name: 王鞏謙
cbdb_id: 255904
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6HZi21CkbBBT4VenMN38y
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏謙，史料所见人物。本项目依据《中国历代人物传记资料库：王鞏謙（CBDB 255904）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_ttlqwYkYNBda7Pnl-qoUL8
          claim_id: c_R6HZi21CkbBBT4VenMN38y
          source_id: s_wTU7KenGJD5pskZB5g2Vyq
          stance: supports
          locator: CBDB:255904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wTU7KenGJD5pskZB5g2Vyq
            source_type: api_record
            title: 中国历代人物传记资料库：王鞏謙（CBDB 255904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255904&o=json
            external_identifier: CBDB:255904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JDP7Qk8UPkKFeQjovbB9Ly
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UNjv59iiQBKvTnkHnTsv7P
          claim_id: c_JDP7Qk8UPkKFeQjovbB9Ly
          source_id: s_wTU7KenGJD5pskZB5g2Vyq
          stance: supports
          locator: CBDB:255904
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y62dBJCA0oQ_cxMcpy1QvO
        subject_person_id: p_vi9ZDtvEhQ6sUw3P3TjQzS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zcJawQrxbahAYSGOM1U4tk
          claim_id: c_Y62dBJCA0oQ_cxMcpy1QvO
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Guq4H2hQkEkTKmCjpGDt7H
            source_type: api_record
            title: 中国历代人物传记资料库：王瑫（CBDB 126779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json
            external_identifier: CBDB:126779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2Loswb2HqViVcQmQ8rSFe9
        status: active
        display_name: 王瑫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鞏謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鞏謙，史料所见人物。本项目依据《中国历代人物传记资料库：王鞏謙（CBDB 255904）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鞏謙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鞏謙（CBDB 255904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255904&o=json)
- [中国历代人物传记资料库：王瑫（CBDB 126779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json)
