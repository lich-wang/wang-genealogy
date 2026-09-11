---
schema: wang-person/v1
id: p_b5sCnEynEg8hf3tXrLTDrR
status: active
merged_into: null
display_name: 王駕
cbdb_id: 92050
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i1Xcpofj7PqiWsPtSJUtB5
        subject_person_id: p_b5sCnEynEg8hf3tXrLTDrR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王駕，唐人物。中国历代人物传记资料库（CBDB）以人物编号 92050 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TIygh9syZnJiYpp91zCmPV
          claim_id: c_i1Xcpofj7PqiWsPtSJUtB5
          source_id: s_GhsWEi9ur6gLhu6nEpHPa4
          stance: supports
          locator: CBDB:92050
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_GhsWEi9ur6gLhu6nEpHPa4
            source_type: api_record
            title: 中国历代人物传记资料库：王駕（CBDB 92050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92050&o=json
            external_identifier: CBDB:92050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pbRV62uVc4q97929H83aey
        subject_person_id: p_b5sCnEynEg8hf3tXrLTDrR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王駕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_v9Emi6jWLhyDx1YeL88T58
          claim_id: c_pbRV62uVc4q97929H83aey
          source_id: s_GhsWEi9ur6gLhu6nEpHPa4
          stance: supports
          locator: CBDB:92050
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_GhsWEi9ur6gLhu6nEpHPa4
            source_type: api_record
            title: 中国历代人物传记资料库：王駕（CBDB 92050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92050&o=json
            external_identifier: CBDB:92050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GvJToAVlSc-8vXI36_GPi2
        subject_person_id: p_b5sCnEynEg8hf3tXrLTDrR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x34BYkJKaMmQxzJmMFzpo6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-POxFkMr4uzImtG1Gv6N1Q
          claim_id: c_GvJToAVlSc-8vXI36_GPi2
          source_id: s_jlrMQ1k6dGv-wmcHxnreQp
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2083：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jlrMQ1k6dGv-wmcHxnreQp
            source_type: api_record
            title: 中国历代人物传记资料库：陳玉蘭（CBDB 93588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93588&o=json
            external_identifier: CBDB:93588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x34BYkJKaMmQxzJmMFzpo6
        status: active
        display_name: 陳玉蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王駕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王駕，唐人物。中国历代人物传记资料库（CBDB）以人物编号 92050 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王駕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_x34BYkJKaMmQxzJmMFzpo6 | 陳玉蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳玉蘭（CBDB 93588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93588&o=json)
- [中国历代人物传记资料库：王駕（CBDB 92050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92050&o=json)
