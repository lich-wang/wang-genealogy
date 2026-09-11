---
schema: wang-person/v1
id: p_EzMUKy9VQQxtLyAvd3YBRM
status: active
merged_into: null
display_name: 王昇朝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_on6BjcoAkuZbHfjWS1F3jN
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u94T6mz5qKAGB4gHbGgoiB
          claim_id: c_on6BjcoAkuZbHfjWS1F3jN
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: CBDB:159541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159541）
          source: &a1
            id: s_bJcyg5f5Za13XdP5DsLL6h
            source_type: api_record
            title: 中国历代人物传记资料库：王昇朝（CBDB 159541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json
            external_identifier: CBDB:159541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPMvSmihQK5cVjs4iovqZR
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇朝，唐人物。籍贯晉陽，曾任州刺史。（中国历代人物传记资料库 CBDB 159541）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_10OiddkcALNS6cxKISRFvW
          claim_id: c_YPMvSmihQK5cVjs4iovqZR
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: CBDB:159541
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UWbEdZPwQ_nPKQmSGDHaQE
        subject_person_id: p_GvNvKVT9ToHtsKcM7N1gcY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1nJPjRIUJG9LYn4QQ1FyEB
          claim_id: c_UWbEdZPwQ_nPKQmSGDHaQE
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GvNvKVT9ToHtsKcM7N1gcY
        status: active
        display_name: 王末怛活
        merged_into_person_id: null
  children:
    - claim:
        id: c_wXXgrBpe9HwwKR7SH3Ekiv
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YpJT2mCdf7M1zWCNEVz3Lk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PkN6HsdwBhMdiHJKI-RVt
          claim_id: c_wXXgrBpe9HwwKR7SH3Ekiv
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YpJT2mCdf7M1zWCNEVz3Lk
        status: active
        display_name: 王庭凑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_YCFNXkoq_mXWykCrtQTbfa
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zQ4D2DUAqvMbXPkja89cdD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GIjz6qMDiIbL-ySDViDNWj
          claim_id: c_YCFNXkoq_mXWykCrtQTbfa
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 96：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zQ4D2DUAqvMbXPkja89cdD
        status: active
        display_name: 王元逵
        merged_into_person_id: null
  other: []
---

# 王昇朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇朝 | accepted |
| bio.summary | 王昇朝，唐人物。籍贯晉陽，曾任州刺史。（中国历代人物传记资料库 CBDB 159541） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GvNvKVT9ToHtsKcM7N1gcY | 王末怛活 | accepted |
| children | p_YpJT2mCdf7M1zWCNEVz3Lk | 王庭凑 | accepted |
| descendants | p_zQ4D2DUAqvMbXPkja89cdD | 王元逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇朝（CBDB 159541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json)
