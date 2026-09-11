---
schema: wang-person/v1
id: p_jCuYqbLwtSwzdb7N2z84c9
status: active
merged_into: null
display_name: 王汝錦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cVmP8bTw7RsKAcB91QbpMa
        subject_person_id: p_jCuYqbLwtSwzdb7N2z84c9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bmcKbKyar7od9oEaXF6Wre
          claim_id: c_cVmP8bTw7RsKAcB91QbpMa
          source_id: s_p5DBUPUGvqJfe5rJ7UjvMR
          stance: supports
          locator: CBDB:703141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703141）
          source: &a1
            id: s_p5DBUPUGvqJfe5rJ7UjvMR
            source_type: api_record
            title: 中国历代人物传记资料库：王汝錦（CBDB 703141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703141&o=json
            external_identifier: CBDB:703141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FzX7KNLu4f3aheapuaeKNT
        subject_person_id: p_jCuYqbLwtSwzdb7N2z84c9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝錦，清人物。籍贯上虞。（中国历代人物传记资料库 CBDB 703141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZHj11F8z6lg7Bo9mK5yX8D
          claim_id: c_FzX7KNLu4f3aheapuaeKNT
          source_id: s_p5DBUPUGvqJfe5rJ7UjvMR
          stance: supports
          locator: CBDB:703141
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YG9hTQIADDC6gkuEhAeLM0
        subject_person_id: p_DVCr6jBgLiL3jTMuxyZfR5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jCuYqbLwtSwzdb7N2z84c9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lBcfNyuURj7_7b1yE19bE1
          claim_id: c_YG9hTQIADDC6gkuEhAeLM0
          source_id: s_p5DBUPUGvqJfe5rJ7UjvMR
          stance: supports
          locator: 上虞縣志，lgid=324918：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVCr6jBgLiL3jTMuxyZfR5
        status: active
        display_name: 王世功
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝錦 | accepted |
| bio.summary | 王汝錦，清人物。籍贯上虞。（中国历代人物传记资料库 CBDB 703141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DVCr6jBgLiL3jTMuxyZfR5 | 王世功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝錦（CBDB 703141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703141&o=json)
