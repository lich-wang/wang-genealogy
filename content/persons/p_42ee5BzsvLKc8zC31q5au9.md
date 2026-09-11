---
schema: wang-person/v1
id: p_42ee5BzsvLKc8zC31q5au9
status: active
merged_into: null
display_name: 王貞素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e2P9ceiNSS6qfzdkoeNJZ9
        subject_person_id: p_42ee5BzsvLKc8zC31q5au9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sw8R2r4pN6NHBJ8KZxhdGN
          claim_id: c_e2P9ceiNSS6qfzdkoeNJZ9
          source_id: s_MS2kBnpCEuEEwAY1VA3SQg
          stance: supports
          locator: CBDB:156109
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156109）
          source: &a1
            id: s_MS2kBnpCEuEEwAY1VA3SQg
            source_type: api_record
            title: 中国历代人物传记资料库：王貞素（CBDB 156109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156109&o=json
            external_identifier: CBDB:156109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DyjuHGaf5ntTHL2B3PJv5e
        subject_person_id: p_42ee5BzsvLKc8zC31q5au9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_USPSpnBdhT4XhDmZvaZxGg
          claim_id: c_DyjuHGaf5ntTHL2B3PJv5e
          source_id: s_MS2kBnpCEuEEwAY1VA3SQg
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
        id: c_rlg5720rKoLB5R38xiT-oG
        subject_person_id: p_7QrhcSCpByfzYfPYz7zK5h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42ee5BzsvLKc8zC31q5au9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TlTFm07f_iSdD-Mjdp4tYd
          claim_id: c_rlg5720rKoLB5R38xiT-oG
          source_id: s_MS2kBnpCEuEEwAY1VA3SQg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 126：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7QrhcSCpByfzYfPYz7zK5h
        status: active
        display_name: 王支某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞素 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7QrhcSCpByfzYfPYz7zK5h | 王支某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貞素（CBDB 156109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156109&o=json)
