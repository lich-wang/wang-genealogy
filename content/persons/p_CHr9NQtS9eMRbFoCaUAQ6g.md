---
schema: wang-person/v1
id: p_CHr9NQtS9eMRbFoCaUAQ6g
status: active
merged_into: null
display_name: 王本
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLwFQZc2dzoak3Lq77GBBD
        subject_person_id: p_CHr9NQtS9eMRbFoCaUAQ6g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bb4d22MGv6vHNCtoeo43Ws
          claim_id: c_vLwFQZc2dzoak3Lq77GBBD
          source_id: s_wBCHhbKSVqJ61KLLW68ZSG
          stance: supports
          locator: CBDB:265615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265615）
          source: &a1
            id: s_wBCHhbKSVqJ61KLLW68ZSG
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 265615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265615&o=json
            external_identifier: CBDB:265615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_icFM3FadoSA9zhN4VxCuTJ
        subject_person_id: p_CHr9NQtS9eMRbFoCaUAQ6g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本，明人物。弘治六年進士，曾任吏目。（中国历代人物传记资料库 CBDB 265615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ralO4wP9F2xviO0zmpwZhH
          claim_id: c_icFM3FadoSA9zhN4VxCuTJ
          source_id: s_wBCHhbKSVqJ61KLLW68ZSG
          stance: supports
          locator: CBDB:265615
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
        id: c_faDgY5_WBs2qxbMzz2fBcj
        subject_person_id: p_CHr9NQtS9eMRbFoCaUAQ6g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_akpqJMSSGZNHLkzngCE1Qi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aB9BheNRDENYDN6_V_eSVb
          claim_id: c_faDgY5_WBs2qxbMzz2fBcj
          source_id: s_wBCHhbKSVqJ61KLLW68ZSG
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_akpqJMSSGZNHLkzngCE1Qi
        status: active
        display_name: 王子成
        merged_into_person_id: null
  other: []
---

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本 | accepted |
| bio.summary | 王本，明人物。弘治六年進士，曾任吏目。（中国历代人物传记资料库 CBDB 265615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_akpqJMSSGZNHLkzngCE1Qi | 王子成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 265615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265615&o=json)
