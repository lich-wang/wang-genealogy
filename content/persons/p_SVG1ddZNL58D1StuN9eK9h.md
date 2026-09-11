---
schema: wang-person/v1
id: p_SVG1ddZNL58D1StuN9eK9h
status: active
merged_into: null
display_name: 王懷德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_adLULBNQpdLKwJ7QzEXKPo
        subject_person_id: p_SVG1ddZNL58D1StuN9eK9h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3SuZ5FMiA3We5EJh2Knjux
          claim_id: c_adLULBNQpdLKwJ7QzEXKPo
          source_id: s_aqrdbaGJNkFHXGD8PC7X8E
          stance: supports
          locator: CBDB:251142
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251142）
          source: &a1
            id: s_aqrdbaGJNkFHXGD8PC7X8E
            source_type: api_record
            title: 中国历代人物传记资料库：王懷德（CBDB 251142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251142&o=json
            external_identifier: CBDB:251142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35Ldn7M52zwHQHmxvxDyVq
        subject_person_id: p_SVG1ddZNL58D1StuN9eK9h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷德，明人物。成化十四年進士，籍贯祁門。（中国历代人物传记资料库 CBDB 251142）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kAFlHavLS2HC_DWngR2S1W
          claim_id: c_35Ldn7M52zwHQHmxvxDyVq
          source_id: s_aqrdbaGJNkFHXGD8PC7X8E
          stance: supports
          locator: CBDB:251142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_64B9Q2L1_4aXvu6jnUJ_kS
        subject_person_id: p_SVG1ddZNL58D1StuN9eK9h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9EQ7RpHJJENgpoTNeutQ15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R6MtoUkC-DwHD6kCkTPWJL
          claim_id: c_64B9Q2L1_4aXvu6jnUJ_kS
          source_id: s_7V4YP3YNCGruTEhfMNKbCt
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第二甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7V4YP3YNCGruTEhfMNKbCt
            source_type: api_record
            title: 中国历代人物传记资料库：王珦（CBDB 126637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126637&o=json
            external_identifier: CBDB:126637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9EQ7RpHJJENgpoTNeutQ15
        status: active
        display_name: 王珦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷德 | accepted |
| bio.summary | 王懷德，明人物。成化十四年進士，籍贯祁門。（中国历代人物传记资料库 CBDB 251142） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9EQ7RpHJJENgpoTNeutQ15 | 王珦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷德（CBDB 251142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251142&o=json)
- [中国历代人物传记资料库：王珦（CBDB 126637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126637&o=json)
