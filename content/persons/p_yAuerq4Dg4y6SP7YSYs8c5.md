---
schema: wang-person/v1
id: p_yAuerq4Dg4y6SP7YSYs8c5
status: active
merged_into: null
display_name: 王埻
cbdb_id: 154913
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ky2QTejjVYeGV6ieqf9pEh
        subject_person_id: p_yAuerq4Dg4y6SP7YSYs8c5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埻，史料所见人物。本项目依据《中国历代人物传记资料库：王埻（CBDB 154913）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_bgA6wnfhwjbokgOo_QyW1l
          claim_id: c_ky2QTejjVYeGV6ieqf9pEh
          source_id: s_8LcfBZhw6WCB2dtGMUhZp2
          stance: supports
          locator: CBDB:154913
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8LcfBZhw6WCB2dtGMUhZp2
            source_type: api_record
            title: 中国历代人物传记资料库：王埻（CBDB 154913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154913&o=json
            external_identifier: CBDB:154913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nbqL3N1fFMTzrSrCDmB3K7
        subject_person_id: p_yAuerq4Dg4y6SP7YSYs8c5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nMAQV5MyBuojEYqiL1UDJn
          claim_id: c_nbqL3N1fFMTzrSrCDmB3K7
          source_id: s_8LcfBZhw6WCB2dtGMUhZp2
          stance: supports
          locator: CBDB:154913
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7arai_QTiHG_1XWveO4xeQ
        subject_person_id: p_hBA95seF4jfn429UmR76Q6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yAuerq4Dg4y6SP7YSYs8c5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OtFRVoET2r4kN5AszIkP4M
          claim_id: c_7arai_QTiHG_1XWveO4xeQ
          source_id: s_8LcfBZhw6WCB2dtGMUhZp2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 30：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8LcfBZhw6WCB2dtGMUhZp2
            source_type: api_record
            title: 中国历代人物传记资料库：王埻（CBDB 154913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154913&o=json
            external_identifier: CBDB:154913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_hBA95seF4jfn429UmR76Q6
        status: active
        display_name: 王守質
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王埻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王埻，史料所见人物。本项目依据《中国历代人物传记资料库：王埻（CBDB 154913）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王埻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hBA95seF4jfn429UmR76Q6 | 王守質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王埻（CBDB 154913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154913&o=json)
