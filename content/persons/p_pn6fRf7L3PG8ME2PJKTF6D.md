---
schema: wang-person/v1
id: p_pn6fRf7L3PG8ME2PJKTF6D
status: active
merged_into: null
display_name: 王師協
cbdb_id: 142812
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MEW6ZMFzNoaM3hpeGGoeFg
        subject_person_id: p_pn6fRf7L3PG8ME2PJKTF6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師協，史料所见人物。本项目依据《中国历代人物传记资料库：王師協（CBDB 142812）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_RiqSVxvrWRwfHo_85iQSkR
          claim_id: c_MEW6ZMFzNoaM3hpeGGoeFg
          source_id: s_ZxTnC7Z2NkTtFokg5siiaQ
          stance: supports
          locator: CBDB:142812
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ZxTnC7Z2NkTtFokg5siiaQ
            source_type: api_record
            title: 中国历代人物传记资料库：王師協（CBDB 142812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142812&o=json
            external_identifier: CBDB:142812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yDcGKBkykg213o94ct1hA
        subject_person_id: p_pn6fRf7L3PG8ME2PJKTF6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師協
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N6GJzprcUesLXKQeDLUMMm
          claim_id: c_7yDcGKBkykg213o94ct1hA
          source_id: s_ZxTnC7Z2NkTtFokg5siiaQ
          stance: supports
          locator: CBDB:142812
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OscbB-cAdbTK1PIvqK5myd
        subject_person_id: p_pn6fRf7L3PG8ME2PJKTF6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_j7BNxsmPDhiiVzNKzER4Ti
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsAng4rMSVsIrLXBdeTC3D
          claim_id: c_OscbB-cAdbTK1PIvqK5myd
          source_id: s_bWTZxJfRxcJIIdcrHSEA0l
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Shengong2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bWTZxJfRxcJIIdcrHSEA0l
            source_type: api_record
            title: 中国历代人物传记资料库：蕭氏(王師協妻)（CBDB 163217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163217&o=json
            external_identifier: CBDB:163217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j7BNxsmPDhiiVzNKzER4Ti
        status: active
        display_name: 蕭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王師協

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師協，史料所见人物。本项目依据《中国历代人物传记资料库：王師協（CBDB 142812）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王師協 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_j7BNxsmPDhiiVzNKzER4Ti | 蕭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師協（CBDB 142812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142812&o=json)
- [中国历代人物传记资料库：蕭氏(王師協妻)（CBDB 163217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163217&o=json)
