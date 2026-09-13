---
schema: wang-person/v1
id: p_ffKBXMTZthLyDPHTW4nPZ2
status: active
merged_into: null
display_name: 王與直
cbdb_id: 25593
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DiT1znfYG6mAw5EwMZL3Xb
        subject_person_id: p_ffKBXMTZthLyDPHTW4nPZ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與直，史料所见人物。本项目依据《中国历代人物传记资料库：王與直（CBDB 25593）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_xMxYjzD-aQj53Lu5LQdmX1
          claim_id: c_DiT1znfYG6mAw5EwMZL3Xb
          source_id: s_xEdCmnp8be4bGCVV2fDXaJ
          stance: supports
          locator: CBDB:25593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xEdCmnp8be4bGCVV2fDXaJ
            source_type: api_record
            title: 中国历代人物传记资料库：王與直（CBDB 25593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25593&o=json
            external_identifier: CBDB:25593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nu27khvXVARTiCc4dJ3s3i
        subject_person_id: p_ffKBXMTZthLyDPHTW4nPZ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6uQDWoi5qKHSBtwesKGwZb
          claim_id: c_Nu27khvXVARTiCc4dJ3s3i
          source_id: s_xEdCmnp8be4bGCVV2fDXaJ
          stance: supports
          locator: CBDB:25593
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_fKGBBXYQe94UpGCaZhwM2q
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ffKBXMTZthLyDPHTW4nPZ2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMr1Wxu_zwhFE64lxv2zDf
          claim_id: c_fKGBBXYQe94UpGCaZhwM2q
          source_id: s_ZDm7j2szGiAv4Wx6S6C5W8
          stance: supports
          locator: CBDB 双向互证（孫 王與直 ⇄ 祖父 王時敘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ZDm7j2szGiAv4Wx6S6C5W8
            source_type: api_record
            title: 中国历代人物传记资料库：王時敘（CBDB 25588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25588&o=json
            external_identifier: CBDB:25588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RA8LBgUDtrLLPDFgrdefPD
        status: active
        display_name: 王時敘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王與直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王與直，史料所见人物。本项目依据《中国历代人物传记资料库：王與直（CBDB 25593）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王與直 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_RA8LBgUDtrLLPDFgrdefPD | 王時敘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時敘（CBDB 25588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25588&o=json)
- [中国历代人物传记资料库：王與直（CBDB 25593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25593&o=json)
