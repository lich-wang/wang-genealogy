---
schema: wang-person/v1
id: p_LwYD5M9izykPmKFWgA2jrL
status: active
merged_into: null
display_name: 王琮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lvs26w1Jk8SJZX37e62tEy
        subject_person_id: p_LwYD5M9izykPmKFWgA2jrL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VACHK9ZWj98Zr7Pt8KHM1r
          claim_id: c_Lvs26w1Jk8SJZX37e62tEy
          source_id: s_4SUEF86cMMBmtFAzGx32sr
          stance: supports
          locator: CBDB:303911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303911）
          source: &a1
            id: s_4SUEF86cMMBmtFAzGx32sr
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 303911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303911&o=json
            external_identifier: CBDB:303911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HiSs7mYUTGUAzJjaQFqz63
        subject_person_id: p_LwYD5M9izykPmKFWgA2jrL
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
        - id: cs_EC62J9fvYDc46V5GauGUsc
          claim_id: c_HiSs7mYUTGUAzJjaQFqz63
          source_id: s_4SUEF86cMMBmtFAzGx32sr
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
        id: c_ITbBwyEEIjia_mNviAsGcS
        subject_person_id: p_LwYD5M9izykPmKFWgA2jrL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DjAtFBFadf2HWZ7GfWUuJs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XVPHLzsq-28jLj8sSz554B
          claim_id: c_ITbBwyEEIjia_mNviAsGcS
          source_id: s_g3jYSKyZuQxGcb6EfTExYw
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第八十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g3jYSKyZuQxGcb6EfTExYw
            source_type: api_record
            title: 中国历代人物传记资料库：王繼洛（CBDB 203382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203382&o=json
            external_identifier: CBDB:203382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DjAtFBFadf2HWZ7GfWUuJs
        status: active
        display_name: 王繼洛
        merged_into_person_id: null
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DjAtFBFadf2HWZ7GfWUuJs | 王繼洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 303911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303911&o=json)
- [中国历代人物传记资料库：王繼洛（CBDB 203382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203382&o=json)
