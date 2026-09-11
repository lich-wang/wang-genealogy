---
schema: wang-person/v1
id: p_jLMCqxdqoaxA9z7UPVJiqB
status: active
merged_into: null
display_name: 莊則
revision: 1
cbdb_id: 5406
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rLq6r-qQK4m_wPjSJO6xKM
        subject_person_id: p_jLMCqxdqoaxA9z7UPVJiqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 莊則
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4MtCNJEcbvGXzUJa2iK11v
          claim_id: c_rLq6r-qQK4m_wPjSJO6xKM
          source_id: s_q3pt7msaRBnwk9eia41Y4M
          stance: supports
          locator: CBDB:5406
          quotation: null
          interpretation_note: CBDB 明确记录的王植配偶
          source: &a1
            id: s_q3pt7msaRBnwk9eia41Y4M
            source_type: api_record
            title: 中国历代人物传记资料库：莊則（CBDB 5406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5406&o=json
            external_identifier: CBDB:5406
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
        id: c_DiPAc3VDZvBq3h0X8Vv6_3
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jLMCqxdqoaxA9z7UPVJiqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8mgUI9Uj2qWYZ4flePGkyO
          claim_id: c_DiPAc3VDZvBq3h0X8Vv6_3
          source_id: s_q3pt7msaRBnwk9eia41Y4M
          stance: supports
          locator: 宋人傳記資料索引(電子版)，982;983：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vqND44YidPRfbGnCkwxK3f
        status: active
        display_name: 王植
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 莊則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 莊則 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vqND44YidPRfbGnCkwxK3f | 王植 | accepted |

## 外部来源

- [中国历代人物传记资料库：莊則（CBDB 5406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5406&o=json)
