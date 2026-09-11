---
schema: wang-person/v1
id: p_pgV2RSd5P6hJkKC9FdnF62
status: active
merged_into: null
display_name: 李鏡林
revision: 1
cbdb_id: 118580
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oIGXfoMUutn8DptQm3VOVk
        subject_person_id: p_pgV2RSd5P6hJkKC9FdnF62
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李鏡林
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v5ExQXvxeqN06-F5VY7U-b
          claim_id: c_oIGXfoMUutn8DptQm3VOVk
          source_id: s_MUdff3gaAVXRMb372ZEFil
          stance: supports
          locator: CBDB:118580
          quotation: null
          interpretation_note: CBDB 明确记录的王汝欽配偶
          source: &a1
            id: s_MUdff3gaAVXRMb372ZEFil
            source_type: api_record
            title: 中国历代人物传记资料库：李鏡林（CBDB 118580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118580&o=json
            external_identifier: CBDB:118580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5O8JRNJpcXeiqaF1MpDN4m
        subject_person_id: p_BuePynu71tYU2WV3EnDHqT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pgV2RSd5P6hJkKC9FdnF62
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-QdszB8NnSoxAudGxOXIck
          claim_id: c_5O8JRNJpcXeiqaF1MpDN4m
          source_id: s_MUdff3gaAVXRMb372ZEFil
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2655, HuWenKai #345：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BuePynu71tYU2WV3EnDHqT
        status: active
        display_name: 王汝欽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李鏡林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李鏡林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BuePynu71tYU2WV3EnDHqT | 王汝欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：李鏡林（CBDB 118580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118580&o=json)
