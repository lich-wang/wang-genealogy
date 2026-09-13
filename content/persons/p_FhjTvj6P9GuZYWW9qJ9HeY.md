---
schema: wang-person/v1
id: p_FhjTvj6P9GuZYWW9qJ9HeY
status: active
merged_into: null
display_name: 王遜志
cbdb_id: 28741
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VeK22ypPzfnMbdLTeNVVjZ
        subject_person_id: p_FhjTvj6P9GuZYWW9qJ9HeY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜志，元人物。籍贯汲縣，入仕恩蔭、蔭補，曾任僉太常院事。（中国历代人物传记资料库 CBDB 28741）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_a3kyGAS-TtqQ1be9P_J6do
          claim_id: c_VeK22ypPzfnMbdLTeNVVjZ
          source_id: s_Bw2gFRbHid4fpfSqc2dWvB
          stance: supports
          locator: CBDB:28741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Bw2gFRbHid4fpfSqc2dWvB
            source_type: api_record
            title: 中国历代人物传记资料库：王遜志（CBDB 28741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28741&o=json
            external_identifier: CBDB:28741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWtkZ7JfKSLhjFaNnCyCZu
        subject_person_id: p_FhjTvj6P9GuZYWW9qJ9HeY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RAPzP2QDshmyH89Sc4X3PY
          claim_id: c_RWtkZ7JfKSLhjFaNnCyCZu
          source_id: s_Bw2gFRbHid4fpfSqc2dWvB
          stance: supports
          locator: CBDB:28741
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
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
        id: c_SWFlPF-38KSrSBchvRmIzZ
        subject_person_id: p_ZGiJW67sDSieGJ416En8tR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FhjTvj6P9GuZYWW9qJ9HeY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QclsJnl-OsEp7fEMJoLO4p
          claim_id: c_SWFlPF-38KSrSBchvRmIzZ
          source_id: s_hqGfEU6pEFG6oJ2TNBK7eX
          stance: supports
          locator: 元人傳記資料索引，1263：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hqGfEU6pEFG6oJ2TNBK7eX
            source_type: api_record
            title: 中国历代人物传记资料库：王惲（CBDB 28617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28617&o=json
            external_identifier: CBDB:28617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZGiJW67sDSieGJ416En8tR
        status: active
        display_name: 王惲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遜志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遜志，元人物。籍贯汲縣，入仕恩蔭、蔭補，曾任僉太常院事。（中国历代人物传记资料库 CBDB 28741） | accepted |
| name.primary | 王遜志 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ZGiJW67sDSieGJ416En8tR | 王惲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遜志（CBDB 28741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28741&o=json)
- [中国历代人物传记资料库：王惲（CBDB 28617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28617&o=json)
