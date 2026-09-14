---
schema: wang-person/v1
id: p_BxEd3HHWB3Se54Cg1exAZK
status: active
merged_into: null
display_name: 王德進
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2GPJKm7txZWexvq6Efeqm6
        subject_person_id: p_BxEd3HHWB3Se54Cg1exAZK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CCaGFqH7bm5taqqvXRqhCz
          claim_id: c_2GPJKm7txZWexvq6Efeqm6
          source_id: s_P8wCFchXZBripRd7XykKeD
          stance: supports
          locator: CBDB:230042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230042）
          source: &a1
            id: s_P8wCFchXZBripRd7XykKeD
            source_type: api_record
            title: 中国历代人物传记资料库：王德進（CBDB 230042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230042&o=json
            external_identifier: CBDB:230042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v4HYE5yeoJPJm9neniR1rU
        subject_person_id: p_BxEd3HHWB3Se54Cg1exAZK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德進，明人物。萬曆丙戌科進士進士，籍贯安州，入仕庠生。（中国历代人物传记资料库 CBDB 230042）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aCqpXyYOWI0LFvi9T2MsZH
          claim_id: c_v4HYE5yeoJPJm9neniR1rU
          source_id: s_P8wCFchXZBripRd7XykKeD
          stance: supports
          locator: CBDB:230042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kpcQ1zLXNOn44sMFaPB9Bs
        subject_person_id: p_2njDB7hmvoYHNUkzktGMvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxEd3HHWB3Se54Cg1exAZK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oEhbSUcMtiMkOSh4vvgG8L
          claim_id: c_kpcQ1zLXNOn44sMFaPB9Bs
          source_id: s_ZyU3qS1WA2axnH4bOCAZMr
          stance: supports
          locator: CBDB：兄弟 王德完（126817）之父／母 王梁
          quotation: null
          interpretation_note: 由兄弟关系推断：王德進 与 王德完 为同胞（CBDB 记「弟」），王德完 之父／母即 王德進 之父／母。
          source:
            id: s_ZyU3qS1WA2axnH4bOCAZMr
            source_type: api_record
            title: 中国历代人物传记资料库：王德進（CBDB 230042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230042&o=json
            external_identifier: CBDB:230042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2njDB7hmvoYHNUkzktGMvR
        status: active
        display_name: 王梁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bGOKgqU0UrB8ehe9asSUcw
        subject_person_id: p_BxEd3HHWB3Se54Cg1exAZK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_E9W2DShq5Qkj6ZiKVB1xLN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0pTEY13htiA1sn2jU9lT4S
          claim_id: c_bGOKgqU0UrB8ehe9asSUcw
          source_id: s_ZyU3qS1WA2axnH4bOCAZMr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126817 王德完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZyU3qS1WA2axnH4bOCAZMr
            source_type: api_record
            title: 中国历代人物传记资料库：王德進（CBDB 230042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230042&o=json
            external_identifier: CBDB:230042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E9W2DShq5Qkj6ZiKVB1xLN
        status: active
        display_name: 王德完
        merged_into_person_id: null
---

# 王德進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德進 | accepted |
| bio.summary | 王德進，明人物。萬曆丙戌科進士進士，籍贯安州，入仕庠生。（中国历代人物传记资料库 CBDB 230042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2njDB7hmvoYHNUkzktGMvR | 王梁 | accepted |
| other | p_E9W2DShq5Qkj6ZiKVB1xLN | 王德完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德進（CBDB 230042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230042&o=json)
