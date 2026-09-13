---
schema: wang-person/v1
id: p_eHPGE6GvUtTD8VCfeCV2pJ
status: active
merged_into: null
display_name: 王嘉聘
cbdb_id: 208854
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VXUmWDBHQWRd2NUNq9SWGC
        subject_person_id: p_eHPGE6GvUtTD8VCfeCV2pJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉聘，史料所见人物。本项目依据《中国历代人物传记资料库：王嘉聘（CBDB 208854）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_OdT-dPMuC9EPUsLfrM0JLC
          claim_id: c_VXUmWDBHQWRd2NUNq9SWGC
          source_id: s_Uv6bLDhEnFbcgBwGzgAMwf
          stance: supports
          locator: CBDB:208854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Uv6bLDhEnFbcgBwGzgAMwf
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉聘（CBDB 208854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208854&o=json
            external_identifier: CBDB:208854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cKPCvoce79duCTyhwaVSPj
        subject_person_id: p_eHPGE6GvUtTD8VCfeCV2pJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uMgkL9dNUwyQH9LhfMd5qY
          claim_id: c_cKPCvoce79duCTyhwaVSPj
          source_id: s_Uv6bLDhEnFbcgBwGzgAMwf
          stance: supports
          locator: CBDB:208854
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QHBlI0t9xRiIBHzVFkgzcA
        subject_person_id: p_eHPGE6GvUtTD8VCfeCV2pJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QLH6TpKgMAWFBq48mvAzJJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nfTfKAEyRiUJfPvpUs--r0
          claim_id: c_QHBlI0t9xRiIBHzVFkgzcA
          source_id: s_Uv6bLDhEnFbcgBwGzgAMwf
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Uv6bLDhEnFbcgBwGzgAMwf
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉聘（CBDB 208854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208854&o=json
            external_identifier: CBDB:208854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QLH6TpKgMAWFBq48mvAzJJ
        status: active
        display_name: 王幼慈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉聘，史料所见人物。本项目依据《中国历代人物传记资料库：王嘉聘（CBDB 208854）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王嘉聘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QLH6TpKgMAWFBq48mvAzJJ | 王幼慈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉聘（CBDB 208854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208854&o=json)
