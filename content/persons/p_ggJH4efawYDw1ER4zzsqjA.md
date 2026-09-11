---
schema: wang-person/v1
id: p_ggJH4efawYDw1ER4zzsqjA
status: active
merged_into: null
display_name: 王亶翔
cbdb_id: 526844
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W2xL8abGUxQFb9jt5152FN
        subject_person_id: p_ggJH4efawYDw1ER4zzsqjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶翔，清人物。中国历代人物传记资料库（CBDB）以人物编号 526844 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__y2n_N6C-vwzDW2gwiyB7m
          claim_id: c_W2xL8abGUxQFb9jt5152FN
          source_id: s_krAcxhk2gTuGPJZyXE43Qf
          stance: supports
          locator: CBDB:526844
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_krAcxhk2gTuGPJZyXE43Qf
            source_type: api_record
            title: 中国历代人物传记资料库：王亶翔（CBDB 526844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526844&o=json
            external_identifier: CBDB:526844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RopiHpWNv3dhbEzW5QXPcG
        subject_person_id: p_ggJH4efawYDw1ER4zzsqjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4CtcyK4UMyvfr4gA5cRrbM
          claim_id: c_RopiHpWNv3dhbEzW5QXPcG
          source_id: s_krAcxhk2gTuGPJZyXE43Qf
          stance: supports
          locator: CBDB:526844
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_krAcxhk2gTuGPJZyXE43Qf
            source_type: api_record
            title: 中国历代人物传记资料库：王亶翔（CBDB 526844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526844&o=json
            external_identifier: CBDB:526844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yhVXK86G-_i3tnJcmyw7np
        subject_person_id: p_2y1eP1nsjw8ciu9GjNsB8J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ggJH4efawYDw1ER4zzsqjA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1p-Pqa9AdfPkIQJ4prCAo
          claim_id: c_yhVXK86G-_i3tnJcmyw7np
          source_id: s_krAcxhk2gTuGPJZyXE43Qf
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13031：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2y1eP1nsjw8ciu9GjNsB8J
        status: active
        display_name: 王恩綬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亶翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王亶翔，清人物。中国历代人物传记资料库（CBDB）以人物编号 526844 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王亶翔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2y1eP1nsjw8ciu9GjNsB8J | 王恩綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶翔（CBDB 526844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526844&o=json)
