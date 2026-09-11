---
schema: wang-person/v1
id: p_CF66QoMP3gSv4SEHYTeKrP
status: active
merged_into: null
display_name: 王餘慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CBEvpH1H28B6pr94J7YAM1
        subject_person_id: p_CF66QoMP3gSv4SEHYTeKrP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6nnoq52KaW5nYUAGUJHGHQ
          claim_id: c_CBEvpH1H28B6pr94J7YAM1
          source_id: s_CkrD9QeV99k4w84NxDkRJJ
          stance: supports
          locator: CBDB:3934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3934）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_582r99EQPQDgfQjiL7cK97
        subject_person_id: p_CF66QoMP3gSv4SEHYTeKrP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUUxtAqaYRdBsC332iPDFa
          claim_id: c_582r99EQPQDgfQjiL7cK97
          source_id: s_CkrD9QeV99k4w84NxDkRJJ
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
          source: *a1
      object_person:
        id: p_w2AotMiaiwLWFjQAANJQ54
        status: active
        display_name: 王朏
        merged_into_person_id: null
  children:
    - claim:
        id: c_cjuewR_7ksJOqgQay7qudf
        subject_person_id: p_CF66QoMP3gSv4SEHYTeKrP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PM76xFUGjkuuuSHs3wbWzE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I4bxRcIMpvHaa0wIVYVXIE
          claim_id: c_cjuewR_7ksJOqgQay7qudf
          source_id: s_CkrD9QeV99k4w84NxDkRJJ
          stance: supports
          locator: CBDB 双向互证（子 王兢 ⇄ 父 王餘慶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PM76xFUGjkuuuSHs3wbWzE
        status: active
        display_name: 王兢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王餘慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘慶 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w2AotMiaiwLWFjQAANJQ54 | 王朏 | accepted |
| children | p_PM76xFUGjkuuuSHs3wbWzE | 王兢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王餘慶（CBDB 3934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3934&o=json)
