---
schema: wang-person/v1
id: p_TACtcGqgnGy8yNMBE86m5e
status: active
merged_into: null
display_name: 王士喜
cbdb_id: 35061
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x86JrZco1hC1uf5eFB1cW4
        subject_person_id: p_TACtcGqgnGy8yNMBE86m5e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王士喜，清人物。CBDB 记录其籍贯记录为新城，身份包括士人，入仕记录为貢生: 歲貢、常貢、挨貢。中国历代人物传记资料库（CBDB）以人物编号 35061 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CPKZFP6CAz2o1YEQhWkgCM
          claim_id: c_x86JrZco1hC1uf5eFB1cW4
          source_id: s_8JFjMcAf1A1BiytUvMGW1B
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_8JFjMcAf1A1BiytUvMGW1B
            source_type: api_record
            title: 维基数据：王士喜（Q45425492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425492
            external_identifier: Q45425492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_gyicmQK-Pj5mY1btmh13-2
          claim_id: c_x86JrZco1hC1uf5eFB1cW4
          source_id: s_ybGGLHcrVpiSDbDwZ8LkqZ
          stance: supports
          locator: CBDB:35061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ybGGLHcrVpiSDbDwZ8LkqZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士喜（35061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35061&o=json
            external_identifier: CBDB:35061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.408Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o7mPqozmcdFR8Nh5uKFJxy
        subject_person_id: p_TACtcGqgnGy8yNMBE86m5e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士喜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g7QrLUesBcCkvQJQQw2kmi
          claim_id: c_o7mPqozmcdFR8Nh5uKFJxy
          source_id: s_8JFjMcAf1A1BiytUvMGW1B
          stance: supports
          locator: Q45425492
          quotation: null
          interpretation_note: null
          source:
            id: s_8JFjMcAf1A1BiytUvMGW1B
            source_type: api_record
            title: 维基数据：王士喜（Q45425492）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45425492
            external_identifier: Q45425492
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_n7aHu28EX7xPkatGqtG8mK
          claim_id: c_o7mPqozmcdFR8Nh5uKFJxy
          source_id: s_ybGGLHcrVpiSDbDwZ8LkqZ
          stance: supports
          locator: Q45425492
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_FisdT3cjZ77SEtKVr6StYB
        status: active
        display_name: 王RR
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士喜，清人物。CBDB 记录其籍贯记录为新城，身份包括士人，入仕记录为貢生: 歲貢、常貢、挨貢。中国历代人物传记资料库（CBDB）以人物编号 35061 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王士喜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FisdT3cjZ77SEtKVr6StYB | 王RR | accepted |

## 外部来源

- [维基数据：王士喜（Q45425492）](https://www.wikidata.org/wiki/Q45425492)
- [CBDB 中国历代人物传记资料库：王士喜（35061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35061&o=json)
- [CBDB 中国历代人物传记资料库：王RR（35059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35059&o=json)
