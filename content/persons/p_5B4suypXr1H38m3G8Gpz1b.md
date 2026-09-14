---
schema: wang-person/v1
id: p_5B4suypXr1H38m3G8Gpz1b
status: active
merged_into: null
display_name: 王貴
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kX6vJiLfGe7u1QxSLXE7nE
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v36f2WwNha8QGQQawnUhxc
          claim_id: c_kX6vJiLfGe7u1QxSLXE7nE
          source_id: s_uch6cdgWh3qREth5P5dYko
          stance: supports
          locator: CBDB:293424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293424）
          source: &a1
            id: s_uch6cdgWh3qREth5P5dYko
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 293424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293424&o=json
            external_identifier: CBDB:293424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EqumUABAiK9CXEtMKW2uyy
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王貴，明人物。嘉靖十一年進士，籍贯甌寧，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 293424）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O3gAKJY24GqHjc__K0L-N5
          claim_id: c_EqumUABAiK9CXEtMKW2uyy
          source_id: s_uch6cdgWh3qREth5P5dYko
          stance: supports
          locator: CBDB:293424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_igOCY-_G5SEBBmiEHJCaDg
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g1ZQp25f7TDHH92Q6ePC8K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-wBZhfV4xXMp5-cMZfh6h
          claim_id: c_igOCY-_G5SEBBmiEHJCaDg
          source_id: s_uch6cdgWh3qREth5P5dYko
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_g1ZQp25f7TDHH92Q6ePC8K
        status: active
        display_name: 王應詔
        merged_into_person_id: null
    - claim:
        id: c_IzjTloXss3K-4HgUovHnZ9
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ERswM4QAQbtuLfU6Kz3ufp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__K2cguFxHuSSdKCzrKnNf1
          claim_id: c_IzjTloXss3K-4HgUovHnZ9
          source_id: s_gYVKpPcD4_eBi4hz55doLv
          stance: supports
          locator: CBDB：兄弟 王應詔（202740）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賔 与 王應詔 为同胞（CBDB 记「弟」），王應詔 之父／母即 王用賔 之父／母。
          source:
            id: s_gYVKpPcD4_eBi4hz55doLv
            source_type: api_record
            title: 中国历代人物传记资料库：王用賔（CBDB 293427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293427&o=json
            external_identifier: CBDB:293427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ERswM4QAQbtuLfU6Kz3ufp
        status: active
        display_name: 王用賔
        merged_into_person_id: null
    - claim:
        id: c_QttzFVBUAV7eGK9CEnhP7Z
        subject_person_id: p_5B4suypXr1H38m3G8Gpz1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bouNPyg4uJs_a561B9O9CG
          claim_id: c_QttzFVBUAV7eGK9CEnhP7Z
          source_id: s_UiMFFA9AJEUGBPhF1lvv4E
          stance: supports
          locator: CBDB：兄弟 王應詔（202740）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王士策 与 王應詔 为同胞（CBDB 记「兄」），王應詔 之父／母即 王士策 之父／母。
          source:
            id: s_UiMFFA9AJEUGBPhF1lvv4E
            source_type: api_record
            title: 中国历代人物传记资料库：王士策（CBDB 293430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json
            external_identifier: CBDB:293430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dfeoxAWu5qVKsU6vsvN5Cg
        status: active
        display_name: 王士策
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。嘉靖十一年進士，籍贯甌寧，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 293424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_g1ZQp25f7TDHH92Q6ePC8K | 王應詔 | accepted |
| children | p_ERswM4QAQbtuLfU6Kz3ufp | 王用賔 | accepted |
| children | p_dfeoxAWu5qVKsU6vsvN5Cg | 王士策 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 293424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293424&o=json)
- [中国历代人物传记资料库：王士策（CBDB 293430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json)
- [中国历代人物传记资料库：王用賔（CBDB 293427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293427&o=json)
