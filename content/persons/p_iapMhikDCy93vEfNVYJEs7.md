---
schema: wang-person/v1
id: p_iapMhikDCy93vEfNVYJEs7
status: active
merged_into: null
display_name: 王任
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XsPEqutBmP5mYTGfqQ1g5Q
        subject_person_id: p_iapMhikDCy93vEfNVYJEs7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PVfjwSzJj8F1tHWB2dEiha
          claim_id: c_XsPEqutBmP5mYTGfqQ1g5Q
          source_id: s_6NLfnDqdQm4u6dv4kFcnQ3
          stance: supports
          locator: CBDB:38774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38774）
          source: &a1
            id: s_6NLfnDqdQm4u6dv4kFcnQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 38774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38774&o=json
            external_identifier: CBDB:38774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NJXGSqBmBCP1Gjv3qg9fs6
        subject_person_id: p_iapMhikDCy93vEfNVYJEs7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1053年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SHqqjNbcLwRvR34QrKeW2K
          claim_id: c_NJXGSqBmBCP1Gjv3qg9fs6
          source_id: s_6NLfnDqdQm4u6dv4kFcnQ3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MGHojDcgP33Q993ZiJKkye
        subject_person_id: p_iapMhikDCy93vEfNVYJEs7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1102年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Sh1GELKR62zbjXmnCZLNi
          claim_id: c_MGHojDcgP33Q993ZiJKkye
          source_id: s_6NLfnDqdQm4u6dv4kFcnQ3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mztk8wcwQdvJoAf7n1dJWS
        subject_person_id: p_iapMhikDCy93vEfNVYJEs7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任（1053年—1102年），宋人物。籍贯華陽，入仕進士，曾任秘書丞、大理寺評事。（中国历代人物传记资料库 CBDB 38774）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__K4JrKoNHSyHxbvVTnTcbI
          claim_id: c_Mztk8wcwQdvJoAf7n1dJWS
          source_id: s_6NLfnDqdQm4u6dv4kFcnQ3
          stance: supports
          locator: CBDB:38774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rZdYNoQnEavOwe5-TOQCF3
        subject_person_id: p_J4cFZzbaxA8bbfRrrnuBXH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iapMhikDCy93vEfNVYJEs7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9liBxwgc769v504jutXCD7
          claim_id: c_rZdYNoQnEavOwe5-TOQCF3
          source_id: s_6NLfnDqdQm4u6dv4kFcnQ3
          stance: supports
          locator: 宋人傳記資料索引(電子版)，628：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J4cFZzbaxA8bbfRrrnuBXH
        status: active
        display_name: 王仲符
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任 | accepted |
| birth.date | 1053年 | accepted |
| death.date | 1102年 | accepted |
| bio.summary | 王任（1053年—1102年），宋人物。籍贯華陽，入仕進士，曾任秘書丞、大理寺評事。（中国历代人物传记资料库 CBDB 38774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J4cFZzbaxA8bbfRrrnuBXH | 王仲符 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任（CBDB 38774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38774&o=json)
