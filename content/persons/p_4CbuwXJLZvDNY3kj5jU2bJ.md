---
schema: wang-person/v1
id: p_4CbuwXJLZvDNY3kj5jU2bJ
status: active
merged_into: null
display_name: 王興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ESD4QeXimMHYXRbEmePMf8
        subject_person_id: p_4CbuwXJLZvDNY3kj5jU2bJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JALAZhsMDrJ8W11XuCgvtQ
          claim_id: c_ESD4QeXimMHYXRbEmePMf8
          source_id: s_x8UAEP6fJyFw1pXLLbd44D
          stance: supports
          locator: CBDB:223152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223152）
          source: &a1
            id: s_x8UAEP6fJyFw1pXLLbd44D
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 223152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223152&o=json
            external_identifier: CBDB:223152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.400Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MNjAHVLapP2MmNgkRTxk1z
        subject_person_id: p_4CbuwXJLZvDNY3kj5jU2bJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kGJSgvQxiwdNvNFgYPpMxQ
          claim_id: c_MNjAHVLapP2MmNgkRTxk1z
          source_id: s_x8UAEP6fJyFw1pXLLbd44D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_SjivEcU00K2b4CeRUMUxZQ
        subject_person_id: p_4CbuwXJLZvDNY3kj5jU2bJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rHZA1vHL86M3xxNwokeU6D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IfhVzoKxIAM8oj4KjEqPUy
          claim_id: c_SjivEcU00K2b4CeRUMUxZQ
          source_id: s_x8UAEP6fJyFw1pXLLbd44D
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rHZA1vHL86M3xxNwokeU6D
        status: active
        display_name: 王時濟
        merged_into_person_id: null
  other: []
---

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rHZA1vHL86M3xxNwokeU6D | 王時濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 223152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223152&o=json)
