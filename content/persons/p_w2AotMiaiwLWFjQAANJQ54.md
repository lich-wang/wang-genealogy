---
schema: wang-person/v1
id: p_w2AotMiaiwLWFjQAANJQ54
status: active
merged_into: null
display_name: 王朏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ubKn6b7wn1icibmiZL5sVy
        subject_person_id: p_w2AotMiaiwLWFjQAANJQ54
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GcHFLyhaEyLAAXnYuTt4G5
          claim_id: c_ubKn6b7wn1icibmiZL5sVy
          source_id: s_Ap3LxwBAapk2xL7a1ofXXM
          stance: supports
          locator: CBDB:34060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34060）
          source: &a1
            id: s_Ap3LxwBAapk2xL7a1ofXXM
            source_type: api_record
            title: 中国历代人物传记资料库：王朏（CBDB 34060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34060&o=json
            external_identifier: CBDB:34060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFQwePuCLNf6ux4PH45FWp
        subject_person_id: p_w2AotMiaiwLWFjQAANJQ54
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朏，宋人物。籍贯乘氏。（中国历代人物传记资料库 CBDB 34060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Wp5xsPHyt8QhrI387rqyt
          claim_id: c_cFQwePuCLNf6ux4PH45FWp
          source_id: s_Ap3LxwBAapk2xL7a1ofXXM
          stance: supports
          locator: CBDB:34060
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QHYq8tOZP5NO3VozPmVQ2B
        subject_person_id: p_4vUfgvuGYUKQyk2GvjMLQv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w2AotMiaiwLWFjQAANJQ54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tC5TIzPNbeyh4UXJhXV0W0
          claim_id: c_QHYq8tOZP5NO3VozPmVQ2B
          source_id: s_Ap3LxwBAapk2xL7a1ofXXM
          stance: supports
          locator: CBDB 双向互证（父 王文素 ⇄ 子 王朏）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_4vUfgvuGYUKQyk2GvjMLQv
        status: active
        display_name: 王文素
        merged_into_person_id: null
  children:
    - claim:
        id: c_8KOaGcd9ExZ6HF_5Q86sVF
        subject_person_id: p_w2AotMiaiwLWFjQAANJQ54
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF66QoMP3gSv4SEHYTeKrP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6lZdD3v4gGZ7d4SHoXelDG
          claim_id: c_8KOaGcd9ExZ6HF_5Q86sVF
          source_id: s_CkrD9QeV99k4w84NxDkRJJ
          stance: supports
          locator: CBDB 双向互证（父 王朏 ⇄ 子 王餘慶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_CkrD9QeV99k4w84NxDkRJJ
            source_type: api_record
            title: 中国历代人物传记资料库：王餘慶（CBDB 3934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3934&o=json
            external_identifier: CBDB:3934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CF66QoMP3gSv4SEHYTeKrP
        status: active
        display_name: 王餘慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朏 | accepted |
| bio.summary | 王朏，宋人物。籍贯乘氏。（中国历代人物传记资料库 CBDB 34060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4vUfgvuGYUKQyk2GvjMLQv | 王文素 | accepted |
| children | p_CF66QoMP3gSv4SEHYTeKrP | 王餘慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朏（CBDB 34060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34060&o=json)
- [中国历代人物传记资料库：王餘慶（CBDB 3934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3934&o=json)
