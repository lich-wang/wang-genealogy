---
schema: wang-person/v1
id: p_FisdT3cjZ77SEtKVr6StYB
status: active
merged_into: null
display_name: 王RR
cbdb_id: 35059
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hH6HUhxsGM16uas7DWALPN
        subject_person_id: p_FisdT3cjZ77SEtKVr6StYB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王RR，清人物。CBDB 记录其籍贯记录为新城。中国历代人物传记资料库（CBDB）以人物编号 35059 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_7w8XABW7wGP4GixWzSUKzF
          claim_id: c_hH6HUhxsGM16uas7DWALPN
          source_id: s_V4noD4rZ6FMENxND1RhUKc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_V4noD4rZ6FMENxND1RhUKc
            source_type: api_record
            title: 维基数据：王RR（Q45425409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425409
            external_identifier: Q45425409
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
        - id: cs_4ysXFCvGtCKJYs7l90hAIf
          claim_id: c_hH6HUhxsGM16uas7DWALPN
          source_id: s_f2SKKvZjmwHoUEydMzwjvn
          stance: supports
          locator: CBDB:35059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_f2SKKvZjmwHoUEydMzwjvn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王RR（35059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35059&o=json
            external_identifier: CBDB:35059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:06.441Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rZ3AnZKGHqEFyxE5sCMu8L
        subject_person_id: p_FisdT3cjZ77SEtKVr6StYB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王RR
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L7eFpqxTaAH25uv4WTgkC6
          claim_id: c_rZ3AnZKGHqEFyxE5sCMu8L
          source_id: s_V4noD4rZ6FMENxND1RhUKc
          stance: supports
          locator: Q45425409
          quotation: null
          interpretation_note: null
          source:
            id: s_V4noD4rZ6FMENxND1RhUKc
            source_type: api_record
            title: 维基数据：王RR（Q45425409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425409
            external_identifier: Q45425409
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
        - id: cs_kmpqFfXue6jTZKVm5rsjYv
          claim_id: c_rZ3AnZKGHqEFyxE5sCMu8L
          source_id: s_f2SKKvZjmwHoUEydMzwjvn
          stance: supports
          locator: Q45425409
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_h9MNRE5ohTVTmFpzZGmdg2
        subject_person_id: p_FisdT3cjZ77SEtKVr6StYB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Pbmps3AjkLgf51zccDC7JU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VDyqhpoMQuCURkX3BXthYQ
          claim_id: c_h9MNRE5ohTVTmFpzZGmdg2
          source_id: s_V4noD4rZ6FMENxND1RhUKc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_V4noD4rZ6FMENxND1RhUKc
            source_type: api_record
            title: 维基数据：王RR（Q45425409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425409
            external_identifier: Q45425409
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
        - id: cs_tUx3kWo2oYuhCgoNBaqm4z
          claim_id: c_h9MNRE5ohTVTmFpzZGmdg2
          source_id: s_46mouz1m51uubjxJyoRkRU
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_46mouz1m51uubjxJyoRkRU
            source_type: api_record
            title: 维基数据：王士禛（Q11572955）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572955
            external_identifier: Q11572955
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:08.907Z
            metadata_json: null
      object_person:
        id: p_Pbmps3AjkLgf51zccDC7JU
        status: active
        display_name: 王士禛
        merged_into_person_id: null
    - claim:
        id: c_4ZJPBr6H38MrAP6vNySrvt
        subject_person_id: p_FisdT3cjZ77SEtKVr6StYB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9d5KLm4AkzUSZ83mAsdHYT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C21aVyFwDZJ8Dwaza7Efx7
          claim_id: c_4ZJPBr6H38MrAP6vNySrvt
          source_id: s_VG1mDvHqPqpgTUFzXYJjwj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VG1mDvHqPqpgTUFzXYJjwj
            source_type: api_record
            title: 维基数据：王士禄（Q15938298）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938298
            external_identifier: Q15938298
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
        - id: cs_Fr4PetBSENH4RB6HN7LxzS
          claim_id: c_4ZJPBr6H38MrAP6vNySrvt
          source_id: s_V4noD4rZ6FMENxND1RhUKc
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_V4noD4rZ6FMENxND1RhUKc
            source_type: api_record
            title: 维基数据：王RR（Q45425409）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425409
            external_identifier: Q45425409
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:06.301Z
            metadata_json: null
      object_person:
        id: p_9d5KLm4AkzUSZ83mAsdHYT
        status: active
        display_name: 王士禄
        merged_into_person_id: null
    - claim:
        id: c_Wm9Ji8-7czjS8b7orG_gTL
        subject_person_id: p_FisdT3cjZ77SEtKVr6StYB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TACtcGqgnGy8yNMBE86m5e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rJtAeEYQh7A2n0zvguCI-v
          claim_id: c_Wm9Ji8-7czjS8b7orG_gTL
          source_id: s_f2SKKvZjmwHoUEydMzwjvn
          stance: supports
          locator: CBDB 双向互证（子 王士喜 ⇄ 父 王RR）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TACtcGqgnGy8yNMBE86m5e
        status: active
        display_name: 王士喜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王RR

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王RR，清人物。CBDB 记录其籍贯记录为新城。中国历代人物传记资料库（CBDB）以人物编号 35059 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王RR | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Pbmps3AjkLgf51zccDC7JU | 王士禛 | accepted |
| children | p_9d5KLm4AkzUSZ83mAsdHYT | 王士禄 | accepted |
| children | p_TACtcGqgnGy8yNMBE86m5e | 王士喜 | accepted |

## 外部来源

- [维基数据：王士禄（Q15938298）](https://www.wikidata.org/wiki/Q15938298)
- [维基数据：王士禛（Q11572955）](https://www.wikidata.org/wiki/Q11572955)
- [维基数据：王RR（Q45425409）](https://www.wikidata.org/wiki/Q45425409)
- [CBDB 中国历代人物传记资料库：王RR（35059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35059&o=json)
