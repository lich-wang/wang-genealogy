---
schema: wang-person/v1
id: p_k1nHyvcBW8tbGGmQ6FqZyN
status: active
merged_into: null
display_name: 王士傑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyJMHzbhNSEyk3fG5dZoUw
        subject_person_id: p_k1nHyvcBW8tbGGmQ6FqZyN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLEa4unXRYZWcjAUHJ31JU
          claim_id: c_tyJMHzbhNSEyk3fG5dZoUw
          source_id: s_5s4eo8aXXcBfTHBTCikryj
          stance: supports
          locator: CBDB:234421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（234421）
          source: &a1
            id: s_5s4eo8aXXcBfTHBTCikryj
            source_type: api_record
            title: 中国历代人物传记资料库：王士傑（CBDB 234421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234421&o=json
            external_identifier: CBDB:234421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dgG1p6ahZ9Cc2F6CNRdhXa
        subject_person_id: p_k1nHyvcBW8tbGGmQ6FqZyN
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
        - id: cs_7hdQbGnzWAkgRgzFbR1p2V
          claim_id: c_dgG1p6ahZ9Cc2F6CNRdhXa
          source_id: s_5s4eo8aXXcBfTHBTCikryj
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
        id: c_nqzhHJ7caN23Xzc6_FYL47
        subject_person_id: p_k1nHyvcBW8tbGGmQ6FqZyN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KesiNQLM6qJRi25qiHTy12
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LH7Uwt6uRn16rxsG3fy2Bp
          claim_id: c_nqzhHJ7caN23Xzc6_FYL47
          source_id: s_5s4eo8aXXcBfTHBTCikryj
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
  other: []
---

# 王士傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士傑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士傑（CBDB 234421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234421&o=json)
