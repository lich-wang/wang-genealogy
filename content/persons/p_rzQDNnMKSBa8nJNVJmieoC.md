---
schema: wang-person/v1
id: p_rzQDNnMKSBa8nJNVJmieoC
status: active
merged_into: null
display_name: 王鈺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1N2aZBNCzLcNxPpcmQfnLs
        subject_person_id: p_rzQDNnMKSBa8nJNVJmieoC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6eeVzJbZBM6MWcZ8o9iHPN
          claim_id: c_1N2aZBNCzLcNxPpcmQfnLs
          source_id: s_TEpTAPMzUBS9jWfDwWTaay
          stance: supports
          locator: CBDB:126767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126767）
          source: &a1
            id: s_TEpTAPMzUBS9jWfDwWTaay
            source_type: api_record
            title: 中国历代人物传记资料库：王鈺（CBDB 126767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126767&o=json
            external_identifier: CBDB:126767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7d5HU7rzpE3PGeRPDPY149
        subject_person_id: p_rzQDNnMKSBa8nJNVJmieoC
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
        - id: cs_C8mQt5frcf5S2jtU5VMStb
          claim_id: c_7d5HU7rzpE3PGeRPDPY149
          source_id: s_TEpTAPMzUBS9jWfDwWTaay
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-4jDOYozrTQiuCe3fjyBDL
        subject_person_id: p_A6QxRDJCCFin64JkXSiALi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rzQDNnMKSBa8nJNVJmieoC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rfg7dccpzfCPfIzwOX_3Xq
          claim_id: c_-4jDOYozrTQiuCe3fjyBDL
          source_id: s_8dG3nRnqUgvytJ4LQxum8Y
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第一甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8dG3nRnqUgvytJ4LQxum8Y
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 286463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286463&o=json
            external_identifier: CBDB:286463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A6QxRDJCCFin64JkXSiALi
        status: active
        display_name: 王堂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鈺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈺 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A6QxRDJCCFin64JkXSiALi | 王堂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 286463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286463&o=json)
- [中国历代人物传记资料库：王鈺（CBDB 126767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126767&o=json)
