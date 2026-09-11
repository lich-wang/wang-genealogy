---
schema: wang-person/v1
id: p_2e5u4A1FFSG9TbzmvAvbtq
status: active
merged_into: null
display_name: 王養賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRnpSvRSNmhAswFPqr2prE
        subject_person_id: p_2e5u4A1FFSG9TbzmvAvbtq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JchjNCVDMztJrq6mGGTKaH
          claim_id: c_VRnpSvRSNmhAswFPqr2prE
          source_id: s_aYwBVW1RZ5EANyE9cL5Thv
          stance: supports
          locator: CBDB:233796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233796）
          source: &a1
            id: s_aYwBVW1RZ5EANyE9cL5Thv
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 233796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233796&o=json
            external_identifier: CBDB:233796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1M5Z7R9NUwnqKjeDBRUwM2
        subject_person_id: p_2e5u4A1FFSG9TbzmvAvbtq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養賢，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 233796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rDYPaA-xu1sS1IF3_SHlxW
          claim_id: c_1M5Z7R9NUwnqKjeDBRUwM2
          source_id: s_aYwBVW1RZ5EANyE9cL5Thv
          stance: supports
          locator: CBDB:233796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_dYPNt-VvnRLcHZ6cLsRoM4
        subject_person_id: p_2e5u4A1FFSG9TbzmvAvbtq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUPgJPee-Pxd4vGbHgFpw6
          claim_id: c_dYPNt-VvnRLcHZ6cLsRoM4
          source_id: s_aYwBVW1RZ5EANyE9cL5Thv
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
  other: []
---

# 王養賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養賢 | accepted |
| bio.summary | 王養賢，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 233796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王養賢（CBDB 233796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233796&o=json)
