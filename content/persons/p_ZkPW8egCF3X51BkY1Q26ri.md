---
schema: wang-person/v1
id: p_ZkPW8egCF3X51BkY1Q26ri
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3TpVNfNuJFnqN4EwYdovL9
        subject_person_id: p_ZkPW8egCF3X51BkY1Q26ri
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Pgf4Nb87izyB12LundG9VF
          claim_id: c_3TpVNfNuJFnqN4EwYdovL9
          source_id: s_P5hN2F4Ku7A71jM17XWstL
          stance: supports
          locator: CBDB:262428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262428）
          source: &a1
            id: s_P5hN2F4Ku7A71jM17XWstL
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 262428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262428&o=json
            external_identifier: CBDB:262428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NUNrCoF3YmCk9CQP3DpokV
        subject_person_id: p_ZkPW8egCF3X51BkY1Q26ri
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
        - id: cs_Xv3vBA1PsswTBxoFGcJh9q
          claim_id: c_NUNrCoF3YmCk9CQP3DpokV
          source_id: s_P5hN2F4Ku7A71jM17XWstL
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
        id: c_rSuyLcDvDOGLHTkgTo4kLe
        subject_person_id: p_ZkPW8egCF3X51BkY1Q26ri
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4rX1RM4YkpctdzscWgdRsh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ad9859HKFmnY09mU5jfaZk
          claim_id: c_rSuyLcDvDOGLHTkgTo4kLe
          source_id: s_tniXLNayvNhe4q9rD3xh4y
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tniXLNayvNhe4q9rD3xh4y
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json
            external_identifier: CBDB:126788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4rX1RM4YkpctdzscWgdRsh
        status: active
        display_name: 王綸
        merged_into_person_id: null
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4rX1RM4YkpctdzscWgdRsh | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 262428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262428&o=json)
- [中国历代人物传记资料库：王綸（CBDB 126788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126788&o=json)
