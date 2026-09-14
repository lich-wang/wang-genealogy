---
schema: wang-person/v1
id: p_f2JZeLkhTkTg8WmMiG8z3u
status: active
merged_into: null
display_name: 王梓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8S2dgPY9qgJJTchtGsMBw
        subject_person_id: p_f2JZeLkhTkTg8WmMiG8z3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n34fLGWH9PQCC1U6jH1sqo
          claim_id: c_a8S2dgPY9qgJJTchtGsMBw
          source_id: s_KCDgbG8dHVtVW9ygKt8Vut
          stance: supports
          locator: CBDB:35624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35624）
          source: &a1
            id: s_KCDgbG8dHVtVW9ygKt8Vut
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 35624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35624&o=json
            external_identifier: CBDB:35624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MVK2c8UFLAHEWvydHPxFof
        subject_person_id: p_f2JZeLkhTkTg8WmMiG8z3u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35624）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e61V60AQLjJ6UltrnaThUr
          claim_id: c_MVK2c8UFLAHEWvydHPxFof
          source_id: s_KCDgbG8dHVtVW9ygKt8Vut
          stance: supports
          locator: CBDB:35624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GTSnOLzQf_4irOIy-22spN
        subject_person_id: p_9jnvd4Fa9587U7YHhYhBqm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f2JZeLkhTkTg8WmMiG8z3u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hzBIehghqjBDfOeS499h_h
          claim_id: c_GTSnOLzQf_4irOIy-22spN
          source_id: s_a2gsezIDh6g9uvXm7xqYgj
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35619）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_a2gsezIDh6g9uvXm7xqYgj
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 35624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35624&o=json
            external_identifier: CBDB:35624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9jnvd4Fa9587U7YHhYhBqm
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓 | accepted |
| bio.summary | 王梓，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9jnvd4Fa9587U7YHhYhBqm | 王逸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梓（CBDB 35624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35624&o=json)
