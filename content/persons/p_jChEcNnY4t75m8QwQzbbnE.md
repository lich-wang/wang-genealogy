---
schema: wang-person/v1
id: p_jChEcNnY4t75m8QwQzbbnE
status: active
merged_into: null
display_name: 王恂德
cbdb_id: 255902
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W4EUT9c6YJ2BFiN8QWAtaK
        subject_person_id: p_jChEcNnY4t75m8QwQzbbnE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂德，史料所见人物。本项目依据《中国历代人物传记资料库：王恂德（CBDB 255902）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_h1PunOf1Af5XSdplscE8pa
          claim_id: c_W4EUT9c6YJ2BFiN8QWAtaK
          source_id: s_7qgaJD8KfHce2SE6FVJhm5
          stance: supports
          locator: CBDB:255902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_7qgaJD8KfHce2SE6FVJhm5
            source_type: api_record
            title: 中国历代人物传记资料库：王恂德（CBDB 255902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255902&o=json
            external_identifier: CBDB:255902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NrhUpMWCwWnUCVygihRYE4
        subject_person_id: p_jChEcNnY4t75m8QwQzbbnE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BinA4xapyXa1LUYCjxaN1h
          claim_id: c_NrhUpMWCwWnUCVygihRYE4
          source_id: s_7qgaJD8KfHce2SE6FVJhm5
          stance: supports
          locator: CBDB:255902
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fQ0lXFMnIA7TzgNXO7Y9cD
        subject_person_id: p_jChEcNnY4t75m8QwQzbbnE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Loswb2HqViVcQmQ8rSFe9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CF6YBFBUY_uBWbqfnsnnJI
          claim_id: c_fQ0lXFMnIA7TzgNXO7Y9cD
          source_id: s_Guq4H2hQkEkTKmCjpGDt7H
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第三十一名：祖父
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
  other: []
---

# 王恂德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恂德，史料所见人物。本项目依据《中国历代人物传记资料库：王恂德（CBDB 255902）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恂德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2Loswb2HqViVcQmQ8rSFe9 | 王瑫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑫（CBDB 126779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126779&o=json)
- [中国历代人物传记资料库：王恂德（CBDB 255902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255902&o=json)
