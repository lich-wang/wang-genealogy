---
schema: wang-person/v1
id: p_hpB2Y5ktFHzZw4LUr2KGvj
status: active
merged_into: null
display_name: 王用楨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NpZ9ZG66E3PCqSK5gkLPPu
        subject_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bAUM4LNNnXveDGTCj86snn
          claim_id: c_NpZ9ZG66E3PCqSK5gkLPPu
          source_id: s_D85CeigFJvAynjJ4gGyfWV
          stance: supports
          locator: CBDB:204826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204826）
          source: &a1
            id: s_D85CeigFJvAynjJ4gGyfWV
            source_type: api_record
            title: 中国历代人物传记资料库：王用楨（CBDB 204826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204826&o=json
            external_identifier: CBDB:204826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8rrc8i324BGbB9J2ih71rP
        subject_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DLJCTSGeF6ysJCE7Mue4ft
          claim_id: c_8rrc8i324BGbB9J2ih71rP
          source_id: s_D85CeigFJvAynjJ4gGyfWV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e1JLyLJxKqvcJR9QfBqyAT
        subject_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAzeAoAH2D6gLH5JHRt7Gm
          claim_id: c_e1JLyLJxKqvcJR9QfBqyAT
          source_id: s_D85CeigFJvAynjJ4gGyfWV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DmgZ36zhQ_P1qQASUWMjxK
        subject_person_id: p_C5baHBFGFpi4r39kKgCUFK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ile_5MJmoPWOgE6k989Qfd
          claim_id: c_DmgZ36zhQ_P1qQASUWMjxK
          source_id: s_3qNy7QMGUrfC1yGfge6mTU
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3qNy7QMGUrfC1yGfge6mTU
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 324560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324560&o=json
            external_identifier: CBDB:324560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C5baHBFGFpi4r39kKgCUFK
        status: active
        display_name: 王汾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用楨 | accepted |
| birth.date | 1531年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C5baHBFGFpi4r39kKgCUFK | 王汾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 324560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324560&o=json)
- [中国历代人物传记资料库：王用楨（CBDB 204826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204826&o=json)
