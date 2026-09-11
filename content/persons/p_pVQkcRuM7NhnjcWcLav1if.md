---
schema: wang-person/v1
id: p_pVQkcRuM7NhnjcWcLav1if
status: active
merged_into: null
display_name: 王崇信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QJtsyS5GAUS1bKAo13mASw
        subject_person_id: p_pVQkcRuM7NhnjcWcLav1if
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sQQUnFoZpBy3NyoLmjuX5Z
          claim_id: c_QJtsyS5GAUS1bKAo13mASw
          source_id: s_RCHeuxtMU1jHegLq44JSWC
          stance: supports
          locator: CBDB:225807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225807）
          source: &a1
            id: s_RCHeuxtMU1jHegLq44JSWC
            source_type: api_record
            title: 中国历代人物传记资料库：王崇信（CBDB 225807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225807&o=json
            external_identifier: CBDB:225807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tdA4w5UuqJikqMBU3QKb4o
        subject_person_id: p_pVQkcRuM7NhnjcWcLav1if
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
        - id: cs_UJbKjUjQUGPiPHTq7kFmKe
          claim_id: c_tdA4w5UuqJikqMBU3QKb4o
          source_id: s_RCHeuxtMU1jHegLq44JSWC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z0WSI_aqxMSqLzZcPwHHqx
        subject_person_id: p_hWNF7HbB9E5if6kNK731ro
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pVQkcRuM7NhnjcWcLav1if
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2zt6ktyOxtBpsVvcoz43w
          claim_id: c_Z0WSI_aqxMSqLzZcPwHHqx
          source_id: s_RCHeuxtMU1jHegLq44JSWC
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hWNF7HbB9E5if6kNK731ro
        status: active
        display_name: 王祿兆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇信 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hWNF7HbB9E5if6kNK731ro | 王祿兆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇信（CBDB 225807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225807&o=json)
