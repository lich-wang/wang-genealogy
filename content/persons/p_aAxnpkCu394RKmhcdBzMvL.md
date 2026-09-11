---
schema: wang-person/v1
id: p_aAxnpkCu394RKmhcdBzMvL
status: active
merged_into: null
display_name: 王本宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ksKdgBwHAYn7Mgg835uGQz
        subject_person_id: p_aAxnpkCu394RKmhcdBzMvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oB5wB43wcpqf21A6JFzNoh
          claim_id: c_ksKdgBwHAYn7Mgg835uGQz
          source_id: s_iUy6A5khPP9v4spaijJUD3
          stance: supports
          locator: CBDB:267617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267617）
          source: &a1
            id: s_iUy6A5khPP9v4spaijJUD3
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 267617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267617&o=json
            external_identifier: CBDB:267617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUAv3aWaHXLUFF3shVQvVd
        subject_person_id: p_aAxnpkCu394RKmhcdBzMvL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本宗，明人物。弘治九年進士，曾任義官。（中国历代人物传记资料库 CBDB 267617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aaDlCAd92H_3efnW9OwXmo
          claim_id: c_UUAv3aWaHXLUFF3shVQvVd
          source_id: s_iUy6A5khPP9v4spaijJUD3
          stance: supports
          locator: CBDB:267617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_BQ50qucmYQSGgyNZxUZnl7
        subject_person_id: p_aAxnpkCu394RKmhcdBzMvL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Syc31fNwi32wruZuRYZrtu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QonVztNn3WUDxFGy_um5ro
          claim_id: c_BQ50qucmYQSGgyNZxUZnl7
          source_id: s_iUy6A5khPP9v4spaijJUD3
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Syc31fNwi32wruZuRYZrtu
        status: active
        display_name: 王子言
        merged_into_person_id: null
    - claim:
        id: c_sqWLWdpV-S0GVnoZzZs5W8
        subject_person_id: p_aAxnpkCu394RKmhcdBzMvL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTQ9DBgLuTWCqCSppicxY6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qv4sd8FRor4ze-oLCh373W
          claim_id: c_sqWLWdpV-S0GVnoZzZs5W8
          source_id: s_iUy6A5khPP9v4spaijJUD3
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTQ9DBgLuTWCqCSppicxY6
        status: active
        display_name: 王子謨
        merged_into_person_id: null
  other: []
---

# 王本宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本宗 | accepted |
| bio.summary | 王本宗，明人物。弘治九年進士，曾任義官。（中国历代人物传记资料库 CBDB 267617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Syc31fNwi32wruZuRYZrtu | 王子言 | accepted |
| descendants | p_TTQ9DBgLuTWCqCSppicxY6 | 王子謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 267617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267617&o=json)
