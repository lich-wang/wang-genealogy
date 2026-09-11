---
schema: wang-person/v1
id: p_wYdGtG5JQEKNtrrjFh5BBV
status: active
merged_into: null
display_name: 王清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dzs2EaDqt18c9W9xsaiP3H
        subject_person_id: p_wYdGtG5JQEKNtrrjFh5BBV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9gbDpUCyDBqg6ud5sNqDTG
          claim_id: c_Dzs2EaDqt18c9W9xsaiP3H
          source_id: s_5493GJ8gPz1GBx66jnGpJg
          stance: supports
          locator: CBDB:160791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160791）
          source: &a1
            id: s_5493GJ8gPz1GBx66jnGpJg
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 160791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160791&o=json
            external_identifier: CBDB:160791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HW2se1wJaevZ83xjUubZaN
        subject_person_id: p_wYdGtG5JQEKNtrrjFh5BBV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，唐人物。籍贯薊縣，曾任錄事參軍。（中国历代人物传记资料库 CBDB 160791）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cv4Gbs8sPCl4DSUjJPne2s
          claim_id: c_HW2se1wJaevZ83xjUubZaN
          source_id: s_5493GJ8gPz1GBx66jnGpJg
          stance: supports
          locator: CBDB:160791
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6-LlPWKuvSovsvp2SOxY7u
        subject_person_id: p_wYdGtG5JQEKNtrrjFh5BBV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZ8jgBpg56kK6qEAbWsgyj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBA4kyBSPed-XJNXUdHmW9
          claim_id: c_6-LlPWKuvSovsvp2SOxY7u
          source_id: s_5493GJ8gPz1GBx66jnGpJg
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZ8jgBpg56kK6qEAbWsgyj
        status: active
        display_name: 王選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Q3kUxe5bT4L2lN40M-D2PJ
        subject_person_id: p_wYdGtG5JQEKNtrrjFh5BBV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_X3KgUwftEJuFzG5Sp9xV61
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_trBSLcOK3EBiQO7wTVBP68
          claim_id: c_Q3kUxe5bT4L2lN40M-D2PJ
          source_id: s_5493GJ8gPz1GBx66jnGpJg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 83：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X3KgUwftEJuFzG5Sp9xV61
        status: active
        display_name: 王公晟
        merged_into_person_id: null
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，唐人物。籍贯薊縣，曾任錄事參軍。（中国历代人物传记资料库 CBDB 160791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zZ8jgBpg56kK6qEAbWsgyj | 王選 | accepted |
| descendants | p_X3KgUwftEJuFzG5Sp9xV61 | 王公晟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 160791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160791&o=json)
