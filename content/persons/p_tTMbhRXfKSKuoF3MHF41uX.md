---
schema: wang-person/v1
id: p_tTMbhRXfKSKuoF3MHF41uX
status: active
merged_into: null
display_name: 嚴廷珏
revision: 1
cbdb_id: 54415
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o8DrByeJpRQLSRNt9oNyt_
        subject_person_id: p_tTMbhRXfKSKuoF3MHF41uX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 嚴廷珏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kAllIKU9RK8ZMn0-_83Rn0
          claim_id: c_o8DrByeJpRQLSRNt9oNyt_
          source_id: s_lJvjxYMh_cd9D7kt35N1sx
          stance: supports
          locator: CBDB:54415
          quotation: null
          interpretation_note: CBDB 明确记录的王瑤芬配偶
          source: &a1
            id: s_lJvjxYMh_cd9D7kt35N1sx
            source_type: api_record
            title: 中国历代人物传记资料库：嚴廷珏（CBDB 54415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54415&o=json
            external_identifier: CBDB:54415
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
        id: c_MkVonvtL6Ue6fB7e_R0nq3
        subject_person_id: p_1FH2UHF7o7gkWe4FW4wG8P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tTMbhRXfKSKuoF3MHF41uX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWWqztmjTxDHRmm5PIuaun
          claim_id: c_MkVonvtL6Ue6fB7e_R0nq3
          source_id: s_lJvjxYMh_cd9D7kt35N1sx
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #398：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1FH2UHF7o7gkWe4FW4wG8P
        status: active
        display_name: 王瑤芬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 嚴廷珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 嚴廷珏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1FH2UHF7o7gkWe4FW4wG8P | 王瑤芬 | accepted |

## 外部来源

- [中国历代人物传记资料库：嚴廷珏（CBDB 54415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54415&o=json)
