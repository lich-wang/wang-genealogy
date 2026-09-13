---
schema: wang-person/v1
id: p_493jjNvpMG2MDc1hCwrQiK
status: active
merged_into: null
display_name: 王紹某
cbdb_id: 278854
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ergDnq4RHZseRE8zbSDehR
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹某，史料所见人物。本项目依据《中国历代人物传记资料库：王紹某（CBDB 278854）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_vPTGlm9TNJ3a7_FNj4d-Fc
          claim_id: c_ergDnq4RHZseRE8zbSDehR
          source_id: s_n62Ax4Yzxp432YMURbmk2j
          stance: supports
          locator: CBDB:278854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n62Ax4Yzxp432YMURbmk2j
            source_type: api_record
            title: 中国历代人物传记资料库：王紹某（CBDB 278854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278854&o=json
            external_identifier: CBDB:278854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6g1TSKjj3U6ZTDS8sVjAfb
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5npmwQvCUQcoQHCgqoGa8d
          claim_id: c_6g1TSKjj3U6ZTDS8sVjAfb
          source_id: s_n62Ax4Yzxp432YMURbmk2j
          stance: supports
          locator: CBDB:278854
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_VxlN4EbBh1B7TFsyTSeiPY
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_blwvgHJqux9_g7PWDbgZC6
          claim_id: c_VxlN4EbBh1B7TFsyTSeiPY
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KQ6ArrG8dTNSX2Tu6p17mt
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 201827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json
            external_identifier: CBDB:201827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紹某，史料所见人物。本项目依据《中国历代人物传记资料库：王紹某（CBDB 278854）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王紹某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹某（CBDB 278854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278854&o=json)
- [中国历代人物传记资料库：王完（CBDB 201827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json)
