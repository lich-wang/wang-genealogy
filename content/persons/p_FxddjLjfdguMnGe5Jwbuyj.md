---
schema: wang-person/v1
id: p_FxddjLjfdguMnGe5Jwbuyj
status: active
merged_into: null
display_name: 王詢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aEfvV8inU2CRStQC3V9fQr
        subject_person_id: p_FxddjLjfdguMnGe5Jwbuyj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cMUw594n1iWDj4gBHNB3sV
          claim_id: c_aEfvV8inU2CRStQC3V9fQr
          source_id: s_QhGLA1W3yGgG7fQLVrtuDQ
          stance: supports
          locator: CBDB:126740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126740）
          source: &a1
            id: s_QhGLA1W3yGgG7fQLVrtuDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 126740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126740&o=json
            external_identifier: CBDB:126740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K2Khi8sJMKiqLLQGCoScvN
        subject_person_id: p_FxddjLjfdguMnGe5Jwbuyj
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
        - id: cs_vtrM1fXUyUJh6oLUJFRU2L
          claim_id: c_K2Khi8sJMKiqLLQGCoScvN
          source_id: s_QhGLA1W3yGgG7fQLVrtuDQ
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
        id: c_1ER5qJ3MrphvUWkIygE364
        subject_person_id: p_aUMLg4XvZD3aBryzgJdguC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FxddjLjfdguMnGe5Jwbuyj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4LivtNYtlwYVA-YzVgiV5T
          claim_id: c_1ER5qJ3MrphvUWkIygE364
          source_id: s_td126Ck87TaKDCKCsCK5Mk
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_td126Ck87TaKDCKCsCK5Mk
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 305874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305874&o=json
            external_identifier: CBDB:305874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aUMLg4XvZD3aBryzgJdguC
        status: active
        display_name: 王轍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aUMLg4XvZD3aBryzgJdguC | 王轍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詢（CBDB 126740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126740&o=json)
- [中国历代人物传记资料库：王轍（CBDB 305874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305874&o=json)
