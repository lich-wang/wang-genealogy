---
schema: wang-person/v1
id: p_PzQMN95GqE7HZfgDzsGUwc
status: active
merged_into: null
display_name: 王希雍
cbdb_id: 208940
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mCYkM6ThQLsSGdXPF9zh4g
        subject_person_id: p_PzQMN95GqE7HZfgDzsGUwc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希雍，明人物。隆慶五年進士，籍贯蘄水。（中国历代人物传记资料库 CBDB 208940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KQNOeq24lLD5FhJC38gnAk
          claim_id: c_mCYkM6ThQLsSGdXPF9zh4g
          source_id: s_wykVnQLjHhAQ8zm1cj7iDH
          stance: supports
          locator: CBDB:208940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wykVnQLjHhAQ8zm1cj7iDH
            source_type: api_record
            title: 中国历代人物传记资料库：王希雍（CBDB 208940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json
            external_identifier: CBDB:208940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_k5remw49iWU9oau8uYJC4j
        subject_person_id: p_PzQMN95GqE7HZfgDzsGUwc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4UuqBUNLBmsFh48CcHPp1F
          claim_id: c_k5remw49iWU9oau8uYJC4j
          source_id: s_wykVnQLjHhAQ8zm1cj7iDH
          stance: supports
          locator: CBDB:208940
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yt5vAY7Tg93xHewNi1vVGv
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PzQMN95GqE7HZfgDzsGUwc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvRbwwBpb9-J3mPnliFuUG
          claim_id: c_yt5vAY7Tg93xHewNi1vVGv
          source_id: s_sbSmhV9TVtlk47M6WVjRzi
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希雍 与 王希元 为同胞（CBDB 记「兄」），王希元 之父／母即 王希雍 之父／母。
          source:
            id: s_sbSmhV9TVtlk47M6WVjRzi
            source_type: api_record
            title: 中国历代人物传记资料库：王希雍（CBDB 208940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json
            external_identifier: CBDB:208940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u7EsVBbqzhdscb4MCv8fHW
        status: active
        display_name: 王承芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_V3zKLgDYPMg9NhhNndTHqD
        subject_person_id: p_PzQMN95GqE7HZfgDzsGUwc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hiYllCUXcP7SI5acmCzKST
          claim_id: c_V3zKLgDYPMg9NhhNndTHqD
          source_id: s_sbSmhV9TVtlk47M6WVjRzi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126544 王希元）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sbSmhV9TVtlk47M6WVjRzi
            source_type: api_record
            title: 中国历代人物传记资料库：王希雍（CBDB 208940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json
            external_identifier: CBDB:208940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Sg6kuXv7Vis1mLCj6EFgTh
        status: active
        display_name: 王希元
        merged_into_person_id: null
---

# 王希雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希雍，明人物。隆慶五年進士，籍贯蘄水。（中国历代人物传记资料库 CBDB 208940） | accepted |
| name.primary | 王希雍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u7EsVBbqzhdscb4MCv8fHW | 王承芳 | accepted |
| other | p_Sg6kuXv7Vis1mLCj6EFgTh | 王希元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希雍（CBDB 208940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json)
