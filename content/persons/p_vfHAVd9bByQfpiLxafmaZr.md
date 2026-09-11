---
schema: wang-person/v1
id: p_vfHAVd9bByQfpiLxafmaZr
status: active
merged_into: null
display_name: 王映旭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSQoiFgygv6Pv481mq4M8U
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映旭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Na1p2dMEYDhXC9AG4UKfzU
          claim_id: c_BSQoiFgygv6Pv481mq4M8U
          source_id: s_asA4b92f3GY2EyjNE9z12h
          stance: supports
          locator: CBDB:698943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698943）
          source: &a1
            id: s_asA4b92f3GY2EyjNE9z12h
            source_type: api_record
            title: 中国历代人物传记资料库：王映旭（CBDB 698943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698943&o=json
            external_identifier: CBDB:698943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZjjvE4ug8q1tJ38QjyoCh
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHEsX85vwKK7vd8BSWZAf6
          claim_id: c_qZjjvE4ug8q1tJ38QjyoCh
          source_id: s_asA4b92f3GY2EyjNE9z12h
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NluomLjCFWgHeu5ul8Prr0
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvQsDM1ss15jxdykwW643K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2WLpi9Ni6BANbzY3QHxy8B
          claim_id: c_NluomLjCFWgHeu5ul8Prr0
          source_id: s_PsPMyFXVL8aJ2nZJtjV8Ey
          stance: supports
          locator: 新修菏澤縣志，lgid=725112：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PsPMyFXVL8aJ2nZJtjV8Ey
            source_type: api_record
            title: 中国历代人物传记资料库：王任遠（CBDB 698969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698969&o=json
            external_identifier: CBDB:698969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RvQsDM1ss15jxdykwW643K
        status: active
        display_name: 王任遠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_wZTzMeaJmihQ4sMhOJknSG
        subject_person_id: p_vfHAVd9bByQfpiLxafmaZr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jbW2GEnx22CuvNGBdKkmRd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P0UvUcB96qsH4OYbOJjKh_
          claim_id: c_wZTzMeaJmihQ4sMhOJknSG
          source_id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
          stance: supports
          locator: 新修菏澤縣志，lgid=725113：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
            source_type: api_record
            title: 中国历代人物传记资料库：王竒（CBDB 699010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699010&o=json
            external_identifier: CBDB:699010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jbW2GEnx22CuvNGBdKkmRd
        status: active
        display_name: 王竒
        merged_into_person_id: null
  other: []
---

# 王映旭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王映旭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RvQsDM1ss15jxdykwW643K | 王任遠 | accepted |
| descendants | p_jbW2GEnx22CuvNGBdKkmRd | 王竒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王竒（CBDB 699010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699010&o=json)
- [中国历代人物传记资料库：王任遠（CBDB 698969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698969&o=json)
- [中国历代人物传记资料库：王映旭（CBDB 698943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698943&o=json)
