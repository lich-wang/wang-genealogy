---
schema: wang-person/v1
id: p_LueaC76mRhuREbg2zvCv4u
status: active
merged_into: null
display_name: 王保義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AnzpRsAcx8uUhDhW6Tb7Dc
        subject_person_id: p_LueaC76mRhuREbg2zvCv4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AyouzHMk7E4LJ95Bi2x3s
          claim_id: c_AnzpRsAcx8uUhDhW6Tb7Dc
          source_id: s_2cxrBng218AawQb1UAim2D
          stance: supports
          locator: CBDB:22186
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22186）
          source: &a1
            id: s_2cxrBng218AawQb1UAim2D
            source_type: api_record
            title: 中国历代人物传记资料库：王保義（CBDB 22186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22186&o=json
            external_identifier: CBDB:22186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f24SBTf6DCjkJGtUt19Zgc
        subject_person_id: p_LueaC76mRhuREbg2zvCv4u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南平人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kvfoo6qAAHyvFJsuF9eUJ1
          claim_id: c_f24SBTf6DCjkJGtUt19Zgc
          source_id: s_2cxrBng218AawQb1UAim2D
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
        id: c_Cuiq6sHc22jplz0a7Z7p12
        subject_person_id: p_LueaC76mRhuREbg2zvCv4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3ak7dpaWurwbSJZ48xJP8k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wnFnGIqftsEsx_BMNobqXZ
          claim_id: c_Cuiq6sHc22jplz0a7Z7p12
          source_id: s_2cxrBng218AawQb1UAim2D
          stance: supports
          locator: CBDB 双向互证（子 王延範 ⇄ 父 王保義）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_3ak7dpaWurwbSJZ48xJP8k
        status: active
        display_name: 王延範
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王保義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保義 | accepted |
| bio.summary | CBDB 记载为南平人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3ak7dpaWurwbSJZ48xJP8k | 王延範 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保義（CBDB 22186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22186&o=json)
