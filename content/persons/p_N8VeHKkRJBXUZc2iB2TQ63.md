---
schema: wang-person/v1
id: p_N8VeHKkRJBXUZc2iB2TQ63
status: active
merged_into: null
display_name: 王鏜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bb9RoPr5nEMSfazjUS1MT8
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g1HnKG9jYKeGretiyaacHh
          claim_id: c_Bb9RoPr5nEMSfazjUS1MT8
          source_id: s_WfHtK8xA9tUFki77VkPKKj
          stance: supports
          locator: CBDB:320897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320897）
          source: &a1
            id: s_WfHtK8xA9tUFki77VkPKKj
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 320897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320897&o=json
            external_identifier: CBDB:320897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qRT3ctBsgDTT6Hq1Dd4skd
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
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
        - id: cs_SDKL4BX36p8wLSZ28pCkci
          claim_id: c_qRT3ctBsgDTT6Hq1Dd4skd
          source_id: s_WfHtK8xA9tUFki77VkPKKj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jAbBTe2HHwaJh1KwJUVQnh
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7xVa8ivPDPteJR7tikUd4a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSHR8HpiXTdaPpmEgY_wW0
          claim_id: c_jAbBTe2HHwaJh1KwJUVQnh
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7bsj37JpqqDWGgSYnYJuhe
            source_type: api_record
            title: 中国历代人物传记资料库：王洀（CBDB 204567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204567&o=json
            external_identifier: CBDB:204567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xVa8ivPDPteJR7tikUd4a
        status: active
        display_name: 王洀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7xVa8ivPDPteJR7tikUd4a | 王洀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洀（CBDB 204567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204567&o=json)
- [中国历代人物传记资料库：王鏜（CBDB 320897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320897&o=json)
