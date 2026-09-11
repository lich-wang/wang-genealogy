---
schema: wang-person/v1
id: p_9iZg7bUcK8wS6LWMEX9vKo
status: active
merged_into: null
display_name: 王基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FeXUZrU7c1FTHiuoZMemNQ
        subject_person_id: p_9iZg7bUcK8wS6LWMEX9vKo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fzyTJnjw32vepYr3YAZFxG
          claim_id: c_FeXUZrU7c1FTHiuoZMemNQ
          source_id: s_jPSqCm5JgATCVAt7R6KA7j
          stance: supports
          locator: CBDB:19084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19084）
          source: &a1
            id: s_jPSqCm5JgATCVAt7R6KA7j
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 19084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19084&o=json
            external_identifier: CBDB:19084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xvXyaP1fCubHWTaocZSGeD
        subject_person_id: p_9iZg7bUcK8wS6LWMEX9vKo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基，宋人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 19084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i3_Nm7b-DytzxpmHoAAf52
          claim_id: c_xvXyaP1fCubHWTaocZSGeD
          source_id: s_jPSqCm5JgATCVAt7R6KA7j
          stance: supports
          locator: CBDB:19084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i2LPQwjhrqZSb8GQoRXj0-
        subject_person_id: p_KQXHiSb9v8hy4Pk5jUcKth
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9iZg7bUcK8wS6LWMEX9vKo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cy7Qid0HHEaBicdcZlx6AS
          claim_id: c_i2LPQwjhrqZSb8GQoRXj0-
          source_id: s_jPSqCm5JgATCVAt7R6KA7j
          stance: supports
          locator: CBDB 双向互证（父 王庭芳 ⇄ 子 王基）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KQXHiSb9v8hy4Pk5jUcKth
        status: active
        display_name: 王庭芳
        merged_into_person_id: null
  children:
    - claim:
        id: c_KUxOZr5dzCozBbBIdfXayk
        subject_person_id: p_9iZg7bUcK8wS6LWMEX9vKo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8PkieG2XAbUn2Us9dYW5eC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KY_6Ib0-lkZ2eoA_F09ZaD
          claim_id: c_KUxOZr5dzCozBbBIdfXayk
          source_id: s_DofG638kswFwfTEWcHgsRu
          stance: supports
          locator: CBDB 双向互证（父 王基 ⇄ 子 王鎬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DofG638kswFwfTEWcHgsRu
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 19085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19085&o=json
            external_identifier: CBDB:19085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8PkieG2XAbUn2Us9dYW5eC
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基 | accepted |
| bio.summary | 王基，宋人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 19084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQXHiSb9v8hy4Pk5jUcKth | 王庭芳 | accepted |
| children | p_8PkieG2XAbUn2Us9dYW5eC | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 19085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19085&o=json)
- [中国历代人物传记资料库：王基（CBDB 19084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19084&o=json)
