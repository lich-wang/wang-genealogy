---
schema: wang-person/v1
id: p_5zVM9w7SHzMVEFNSw8CnuW
status: active
merged_into: null
display_name: 王本竪
cbdb_id: 232702
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_odmhM2hHWfyL4RQDetzhHC
        subject_person_id: p_5zVM9w7SHzMVEFNSw8CnuW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本竪，明人物。中国历代人物传记资料库（CBDB）以人物编号 232702 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_L6rDF_ovp33aYGa6rYzYMk
          claim_id: c_odmhM2hHWfyL4RQDetzhHC
          source_id: s_VgYj36FgiWhQMHxFH4dbei
          stance: supports
          locator: CBDB:232702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VgYj36FgiWhQMHxFH4dbei
            source_type: api_record
            title: 中国历代人物传记资料库：王本竪（CBDB 232702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232702&o=json
            external_identifier: CBDB:232702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nx6Bkwoy45fnU68UV7kxwU
        subject_person_id: p_5zVM9w7SHzMVEFNSw8CnuW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本竪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wnf4b5CQzLipniVPx6QB17
          claim_id: c_nx6Bkwoy45fnU68UV7kxwU
          source_id: s_VgYj36FgiWhQMHxFH4dbei
          stance: supports
          locator: CBDB:232702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_VgYj36FgiWhQMHxFH4dbei
            source_type: api_record
            title: 中国历代人物传记资料库：王本竪（CBDB 232702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232702&o=json
            external_identifier: CBDB:232702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_NXESBYIpLLwQP_ow2c88S6
        subject_person_id: p_5zVM9w7SHzMVEFNSw8CnuW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PRCQF2pTDCSVJ4uUwnRxT1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ig5Z7lcSz2cMvUKRSIWGJ
          claim_id: c_NXESBYIpLLwQP_ow2c88S6
          source_id: s_VgYj36FgiWhQMHxFH4dbei
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PRCQF2pTDCSVJ4uUwnRxT1
        status: active
        display_name: 王大合
        merged_into_person_id: null
  other: []
---

# 王本竪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王本竪，明人物。中国历代人物传记资料库（CBDB）以人物编号 232702 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王本竪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PRCQF2pTDCSVJ4uUwnRxT1 | 王大合 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本竪（CBDB 232702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232702&o=json)
