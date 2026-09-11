---
schema: wang-person/v1
id: p_TxqyXHeQ3S5iC4LfjUzCsj
status: active
merged_into: null
display_name: 王翰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b6SXVts5XPsd99xvg639r8
        subject_person_id: p_TxqyXHeQ3S5iC4LfjUzCsj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DP8j7W5oQzhEJ9bJZ3LBNH
          claim_id: c_b6SXVts5XPsd99xvg639r8
          source_id: s_qQguAKHngDXJ5LiBSZ4KvS
          stance: supports
          locator: CBDB:241019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241019）
          source: &a1
            id: s_qQguAKHngDXJ5LiBSZ4KvS
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 241019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241019&o=json
            external_identifier: CBDB:241019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eThSfFdWjoD6auhUPaEDrJ
        subject_person_id: p_TxqyXHeQ3S5iC4LfjUzCsj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，明人物。正統十三年進士，曾任府學教授。（中国历代人物传记资料库 CBDB 241019）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DhGAWFwpkj_dD-TntelL8c
          claim_id: c_eThSfFdWjoD6auhUPaEDrJ
          source_id: s_qQguAKHngDXJ5LiBSZ4KvS
          stance: supports
          locator: CBDB:241019
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
        id: c_73yfrAJk-Gm3i7F6Hs_i4x
        subject_person_id: p_TxqyXHeQ3S5iC4LfjUzCsj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bfSy8dPRhP5ZK4VbYiPWT2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0EqPyQUVkuqfNUyJUZFB8
          claim_id: c_73yfrAJk-Gm3i7F6Hs_i4x
          source_id: s_qQguAKHngDXJ5LiBSZ4KvS
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bfSy8dPRhP5ZK4VbYiPWT2
        status: active
        display_name: 王正
        merged_into_person_id: null
  other: []
---

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，明人物。正統十三年進士，曾任府學教授。（中国历代人物传记资料库 CBDB 241019） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bfSy8dPRhP5ZK4VbYiPWT2 | 王正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 241019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241019&o=json)
