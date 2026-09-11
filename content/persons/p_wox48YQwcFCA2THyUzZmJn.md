---
schema: wang-person/v1
id: p_wox48YQwcFCA2THyUzZmJn
status: active
merged_into: null
display_name: 王惠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AdUhkRYeaQy5BbyrJfbV4i
        subject_person_id: p_wox48YQwcFCA2THyUzZmJn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g9DjgVEJGPm6MvKML2PFqx
          claim_id: c_AdUhkRYeaQy5BbyrJfbV4i
          source_id: s_JgYL3uQVk9adRV5b1m3QXC
          stance: supports
          locator: CBDB:223498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（223498）
          source: &a1
            id: s_JgYL3uQVk9adRV5b1m3QXC
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 223498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223498&o=json
            external_identifier: CBDB:223498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_852N4J8oXQEXQqFG3KxNHX
        subject_person_id: p_wox48YQwcFCA2THyUzZmJn
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
        - id: cs_YTcMqaiUGvBLZ9aPkFDBpu
          claim_id: c_852N4J8oXQEXQqFG3KxNHX
          source_id: s_JgYL3uQVk9adRV5b1m3QXC
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
        id: c_j0jULzVQUkKvRVmnfUb2yW
        subject_person_id: p_wox48YQwcFCA2THyUzZmJn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BYJfPhEZfG99snxow17KHG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4KQ-SjBHB_pg32Dj41BNx-
          claim_id: c_j0jULzVQUkKvRVmnfUb2yW
          source_id: s_BP4YC1eP68nSyZzdL2ksaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BP4YC1eP68nSyZzdL2ksaf
            source_type: api_record
            title: 中国历代人物传记资料库：王有功（CBDB 206804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json
            external_identifier: CBDB:206804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BYJfPhEZfG99snxow17KHG
        status: active
        display_name: 王有功
        merged_into_person_id: null
  other: []
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BYJfPhEZfG99snxow17KHG | 王有功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 223498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223498&o=json)
- [中国历代人物传记资料库：王有功（CBDB 206804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206804&o=json)
