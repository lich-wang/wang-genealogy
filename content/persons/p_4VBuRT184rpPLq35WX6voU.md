---
schema: wang-person/v1
id: p_4VBuRT184rpPLq35WX6voU
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oiD1zqP2bF6v1URm3THeF5
        subject_person_id: p_4VBuRT184rpPLq35WX6voU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wQrJaoaRBdbW2Jdinf8LxU
          claim_id: c_oiD1zqP2bF6v1URm3THeF5
          source_id: s_7HXZaSgrQJvfjZHLdwvZt7
          stance: supports
          locator: CBDB:231531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231531）
          source: &a1
            id: s_7HXZaSgrQJvfjZHLdwvZt7
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 231531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231531&o=json
            external_identifier: CBDB:231531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HqGQvy41xvEZV7Fhgoj1ge
        subject_person_id: p_4VBuRT184rpPLq35WX6voU
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
        - id: cs_MFthC4e1iwbdbo5dNCBsFV
          claim_id: c_HqGQvy41xvEZV7Fhgoj1ge
          source_id: s_7HXZaSgrQJvfjZHLdwvZt7
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
        id: c_5Ptosy4HEI8BYVvpqS_Ul1
        subject_person_id: p_4VBuRT184rpPLq35WX6voU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Np4Z8JvLtkdK8vcDcqWsz6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bgOiwgJJno_PCZD_N686gJ
          claim_id: c_5Ptosy4HEI8BYVvpqS_Ul1
          source_id: s_7HXZaSgrQJvfjZHLdwvZt7
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Np4Z8JvLtkdK8vcDcqWsz6
        status: active
        display_name: 王瑨
        merged_into_person_id: null
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Np4Z8JvLtkdK8vcDcqWsz6 | 王瑨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 231531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231531&o=json)
