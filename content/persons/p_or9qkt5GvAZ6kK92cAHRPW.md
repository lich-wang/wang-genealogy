---
schema: wang-person/v1
id: p_or9qkt5GvAZ6kK92cAHRPW
status: active
merged_into: null
display_name: 王伯名
cbdb_id: 287272
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cb2cGPLizZy9JNkRuEB7S6
        subject_person_id: p_or9qkt5GvAZ6kK92cAHRPW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯名，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 287272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_a5BsJQ2nobFQdg4Fwbia5C
          claim_id: c_Cb2cGPLizZy9JNkRuEB7S6
          source_id: s_BFd1P8nFiGUBgEC6WTNf7Y
          stance: supports
          locator: CBDB:287272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BFd1P8nFiGUBgEC6WTNf7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王伯名（CBDB 287272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287272&o=json
            external_identifier: CBDB:287272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PLUKMLfFDCM37f2NTsT1a
        subject_person_id: p_or9qkt5GvAZ6kK92cAHRPW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fEgLtXSYyk56MJGmfa3hyY
          claim_id: c_3PLUKMLfFDCM37f2NTsT1a
          source_id: s_BFd1P8nFiGUBgEC6WTNf7Y
          stance: supports
          locator: CBDB:287272
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
        id: c_-yyLSycdyI_pFe9IqB25gn
        subject_person_id: p_or9qkt5GvAZ6kK92cAHRPW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SoTpRzw7JQF2RgUdE8FLLB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ENuYw-HU-uUlqPq5x56HqV
          claim_id: c_-yyLSycdyI_pFe9IqB25gn
          source_id: s_BFd1P8nFiGUBgEC6WTNf7Y
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BFd1P8nFiGUBgEC6WTNf7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王伯名（CBDB 287272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287272&o=json
            external_identifier: CBDB:287272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_SoTpRzw7JQF2RgUdE8FLLB
        status: active
        display_name: 王凱
        merged_into_person_id: null
  other: []
---

# 王伯名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯名，明人物。永樂十年進士。（中国历代人物传记资料库 CBDB 287272） | accepted |
| name.primary | 王伯名 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_SoTpRzw7JQF2RgUdE8FLLB | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯名（CBDB 287272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287272&o=json)
