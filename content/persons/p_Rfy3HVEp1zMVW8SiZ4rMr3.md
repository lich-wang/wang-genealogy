---
schema: wang-person/v1
id: p_Rfy3HVEp1zMVW8SiZ4rMr3
status: active
merged_into: null
display_name: 王寵兒
cbdb_id: 160466
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H3UU5QKJgJdBDnXb6xPeEQ
        subject_person_id: p_Rfy3HVEp1zMVW8SiZ4rMr3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160466 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_GDDA-hsXRAJ78ih7XvLdtc
          claim_id: c_H3UU5QKJgJdBDnXb6xPeEQ
          source_id: s_3ZYof5aKQgvF5BtHa8yu6T
          stance: supports
          locator: CBDB:160466
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3ZYof5aKQgvF5BtHa8yu6T
            source_type: api_record
            title: 中国历代人物传记资料库：王寵兒（CBDB 160466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160466&o=json
            external_identifier: CBDB:160466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARVS9uZJUpEVY6Jvq2RYC8
        subject_person_id: p_Rfy3HVEp1zMVW8SiZ4rMr3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jCLqahh3vf7yyGA1aMKfjB
          claim_id: c_ARVS9uZJUpEVY6Jvq2RYC8
          source_id: s_3ZYof5aKQgvF5BtHa8yu6T
          stance: supports
          locator: CBDB:160466
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_3ZYof5aKQgvF5BtHa8yu6T
            source_type: api_record
            title: 中国历代人物传记资料库：王寵兒（CBDB 160466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160466&o=json
            external_identifier: CBDB:160466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l8uIsHlluMAJ4or7GccKu4
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rfy3HVEp1zMVW8SiZ4rMr3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YoM2MjS0K0HYNrpF8CEdJu
          claim_id: c_l8uIsHlluMAJ4or7GccKu4
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cUBuvMo9eRXEUn6UkP3FHH
            source_type: api_record
            title: 中国历代人物传记资料库：王誕（CBDB 141997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json
            external_identifier: CBDB:141997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uLwVmgMC518Yd4ehoNd1de
        status: active
        display_name: 王誕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寵兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寵兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 160466 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王寵兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uLwVmgMC518Yd4ehoNd1de | 王誕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵兒（CBDB 160466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160466&o=json)
- [中国历代人物传记资料库：王誕（CBDB 141997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json)
