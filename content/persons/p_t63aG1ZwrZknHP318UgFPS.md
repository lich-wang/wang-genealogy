---
schema: wang-person/v1
id: p_t63aG1ZwrZknHP318UgFPS
status: active
merged_into: null
display_name: 王德合
cbdb_id: 153849
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rf9ru3ETvSPQCYk9PdJbAr
        subject_person_id: p_t63aG1ZwrZknHP318UgFPS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德合，史料所见人物。本项目依据《中国历代人物传记资料库：王德合（CBDB 153849）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_joYOE1nfaE0j5sadtBsCPt
          claim_id: c_rf9ru3ETvSPQCYk9PdJbAr
          source_id: s_oLwD8pWyC8uGN82FGVtGKL
          stance: supports
          locator: CBDB:153849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_oLwD8pWyC8uGN82FGVtGKL
            source_type: api_record
            title: 中国历代人物传记资料库：王德合（CBDB 153849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153849&o=json
            external_identifier: CBDB:153849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkr3xfdWMHY8iDAYcGPpoU
        subject_person_id: p_t63aG1ZwrZknHP318UgFPS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德合
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X6D22ePc8i2RM4SxKpp98C
          claim_id: c_wkr3xfdWMHY8iDAYcGPpoU
          source_id: s_oLwD8pWyC8uGN82FGVtGKL
          stance: supports
          locator: CBDB:153849
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eHXRwUSh-ym6YTCQEIGNQL
        subject_person_id: p_VbTv9jyE8TE8W3rehz6ZA8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t63aG1ZwrZknHP318UgFPS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ddyFJiUalMq07J41Ejdt2
          claim_id: c_eHXRwUSh-ym6YTCQEIGNQL
          source_id: s_tAv5pWsFXAu0cLER544uL2
          stance: supports
          locator: CBDB：兄弟 王元泰（140931）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王德合 与 王元泰 为同胞（CBDB 记「兄」），王元泰 之父／母即 王德合 之父／母。
          source:
            id: s_tAv5pWsFXAu0cLER544uL2
            source_type: api_record
            title: 中国历代人物传记资料库：王德合（CBDB 153849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153849&o=json
            external_identifier: CBDB:153849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VbTv9jyE8TE8W3rehz6ZA8
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sz0G5jsAm5NfisP3YOuk4i
        subject_person_id: p_UE1q4HTiHr6dP2UxKLMoFA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t63aG1ZwrZknHP318UgFPS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kRQBLmKjaMbcmWPtb7YyO1
          claim_id: c_sz0G5jsAm5NfisP3YOuk4i
          source_id: s_tAv5pWsFXAu0cLER544uL2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 140931 王元泰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tAv5pWsFXAu0cLER544uL2
            source_type: api_record
            title: 中国历代人物传记资料库：王德合（CBDB 153849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153849&o=json
            external_identifier: CBDB:153849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UE1q4HTiHr6dP2UxKLMoFA
        status: active
        display_name: 王元泰
        merged_into_person_id: null
---

# 王德合

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德合，史料所见人物。本项目依据《中国历代人物传记资料库：王德合（CBDB 153849）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王德合 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VbTv9jyE8TE8W3rehz6ZA8 | 王義 | accepted |
| other | p_UE1q4HTiHr6dP2UxKLMoFA | 王元泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德合（CBDB 153849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153849&o=json)
