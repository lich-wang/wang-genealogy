---
schema: wang-person/v1
id: p_Zm9kQvVJDN5XViFfJoHyzQ
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W7eC7koErmajYHN1p328ge
        subject_person_id: p_Zm9kQvVJDN5XViFfJoHyzQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jB7kFnRA1EfdxoqMYCsrrM
          claim_id: c_W7eC7koErmajYHN1p328ge
          source_id: s_HMzQLiT2eE1E4557eD7TcL
          stance: supports
          locator: CBDB:169764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169764）
          source: &a1
            id: s_HMzQLiT2eE1E4557eD7TcL
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 169764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169764&o=json
            external_identifier: CBDB:169764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1CdgnSDxGL8dBfTfbEY7QD
        subject_person_id: p_Zm9kQvVJDN5XViFfJoHyzQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 764年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBEy5dxY4YJA5TFE71DR9a
          claim_id: c_1CdgnSDxGL8dBfTfbEY7QD
          source_id: s_HMzQLiT2eE1E4557eD7TcL
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
        id: c_HM9uJjFUSRSH2o6cPD2xqs
        subject_person_id: p_Zm9kQvVJDN5XViFfJoHyzQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUgR4D4UnM49wudMJFNvfS
          claim_id: c_HM9uJjFUSRSH2o6cPD2xqs
          source_id: s_HMzQLiT2eE1E4557eD7TcL
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
        id: c__JDQNog2141xktGAutby4w
        subject_person_id: p_CHMpjZ7ucQ6R7PCQoVg275
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zm9kQvVJDN5XViFfJoHyzQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FAgdcpMq_ge0PwB5DTR7ac
          claim_id: c__JDQNog2141xktGAutby4w
          source_id: s_FSDDkvK79c5wgq8JZ3fLHj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FSDDkvK79c5wgq8JZ3fLHj
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 170246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170246&o=json
            external_identifier: CBDB:170246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CHMpjZ7ucQ6R7PCQoVg275
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| death.date | 764年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CHMpjZ7ucQ6R7PCQoVg275 | 王景 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 170246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170246&o=json)
- [中国历代人物传记资料库：王銳（CBDB 169764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169764&o=json)
