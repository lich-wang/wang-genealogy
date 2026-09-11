---
schema: wang-person/v1
id: p_tSAfAuPkdu48fzV9msaJC7
status: active
merged_into: null
display_name: 王忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UQtk3U1WiKcrM2kf33e3UL
        subject_person_id: p_tSAfAuPkdu48fzV9msaJC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KdrjS5SWtM6XXqCyRzNPcC
          claim_id: c_UQtk3U1WiKcrM2kf33e3UL
          source_id: s_ZLDddWfb3Nb2GKyujX95t2
          stance: supports
          locator: CBDB:262288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262288）
          source: &a1
            id: s_ZLDddWfb3Nb2GKyujX95t2
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 262288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262288&o=json
            external_identifier: CBDB:262288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BVJa8AxG6dFyKfv2RFCiUd
        subject_person_id: p_tSAfAuPkdu48fzV9msaJC7
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
        - id: cs_1SrrhXpy1HMzLiQBx9sy1s
          claim_id: c_BVJa8AxG6dFyKfv2RFCiUd
          source_id: s_ZLDddWfb3Nb2GKyujX95t2
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
        id: c_c2pZNYUX3RpCvuAOCkuX_d
        subject_person_id: p_tSAfAuPkdu48fzV9msaJC7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fk54G3f1rILc-U3k6DBWhK
          claim_id: c_c2pZNYUX3RpCvuAOCkuX_d
          source_id: s_ZLDddWfb3Nb2GKyujX95t2
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z8mgWQExeo9ps9NYQ1o1hg
        status: active
        display_name: 王凱
        merged_into_person_id: null
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_z8mgWQExeo9ps9NYQ1o1hg | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忠（CBDB 262288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262288&o=json)
