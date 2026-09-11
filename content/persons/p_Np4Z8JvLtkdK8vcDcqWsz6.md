---
schema: wang-person/v1
id: p_Np4Z8JvLtkdK8vcDcqWsz6
status: active
merged_into: null
display_name: 王瑨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_deJdPZACvb2LhqB6D25Yat
        subject_person_id: p_Np4Z8JvLtkdK8vcDcqWsz6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DGoMopdo1466qwNXVmB6Uw
          claim_id: c_deJdPZACvb2LhqB6D25Yat
          source_id: s_5it1B4qguc7aEhe8ooqBGq
          stance: supports
          locator: CBDB:207341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207341）
          source: &a1
            id: s_5it1B4qguc7aEhe8ooqBGq
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 207341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207341&o=json
            external_identifier: CBDB:207341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3TKdVrvixdLAKVs3fQLcCD
        subject_person_id: p_Np4Z8JvLtkdK8vcDcqWsz6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1400年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGM6fG3z7bd3ytCNn6czn4
          claim_id: c_3TKdVrvixdLAKVs3fQLcCD
          source_id: s_5it1B4qguc7aEhe8ooqBGq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MPX8METB2F5NGoh5u1Jab9
        subject_person_id: p_Np4Z8JvLtkdK8vcDcqWsz6
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
        - id: cs_YfBpJZ7Q3yYknSuR79hYbi
          claim_id: c_MPX8METB2F5NGoh5u1Jab9
          source_id: s_5it1B4qguc7aEhe8ooqBGq
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
  ancestors:
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
          source:
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
      object_person:
        id: p_4VBuRT184rpPLq35WX6voU
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑨 | accepted |
| birth.date | 1400年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4VBuRT184rpPLq35WX6voU | 王福 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 231531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231531&o=json)
- [中国历代人物传记资料库：王瑨（CBDB 207341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207341&o=json)
