---
schema: wang-person/v1
id: p_8EDFnNdhzDymseXpHLiztk
status: active
merged_into: null
display_name: 王應誥
cbdb_id: 236256
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6Rzhk5Wt8oFFXyEm72kef
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應誥，明人物。中国历代人物传记资料库（CBDB）以人物编号 236256 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_UtNm0SwAgfKU5x49MGSLsp
          claim_id: c_X6Rzhk5Wt8oFFXyEm72kef
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: CBDB:236256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RpFUfgLjZke4p125QL1oHk
            source_type: api_record
            title: 中国历代人物传记资料库：王應誥（CBDB 236256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json
            external_identifier: CBDB:236256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wa7e6MzHjXgtup3KkN9Npa
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bL3BQTywZH4GH46AqTe5tE
          claim_id: c_wa7e6MzHjXgtup3KkN9Npa
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: CBDB:236256
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_RpFUfgLjZke4p125QL1oHk
            source_type: api_record
            title: 中国历代人物传记资料库：王應誥（CBDB 236256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json
            external_identifier: CBDB:236256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CogB1AJOUR1_NK-Oc4KBaN
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLuSIXbAkXHmzw87bBk9DM
          claim_id: c_CogB1AJOUR1_NK-Oc4KBaN
          source_id: s_RpFUfgLjZke4p125QL1oHk
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應誥，明人物。中国历代人物传记资料库（CBDB）以人物编号 236256 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王應誥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應誥（CBDB 236256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236256&o=json)
