---
schema: wang-person/v1
id: p_FgnH5Tex3eEM8HgEHgSdm9
status: active
merged_into: null
display_name: 王道貞
cbdb_id: 524359
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UEE3n2tMhDF3BoKHZ5ADJ7
        subject_person_id: p_FgnH5Tex3eEM8HgEHgSdm9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道貞，明人物。中国历代人物传记资料库（CBDB）以人物编号 524359 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_jGwmEkmzMiKnTRfKcimWbI
          claim_id: c_UEE3n2tMhDF3BoKHZ5ADJ7
          source_id: s_Wjtp8tAobXMopg3HgXxk7b
          stance: supports
          locator: CBDB:524359
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Wjtp8tAobXMopg3HgXxk7b
            source_type: api_record
            title: 中国历代人物传记资料库：王道貞（CBDB 524359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524359&o=json
            external_identifier: CBDB:524359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLzYSYuvMJxqNsdeHNwmDE
        subject_person_id: p_FgnH5Tex3eEM8HgEHgSdm9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FodGGKjfCWTRV17jC8pGAV
          claim_id: c_QLzYSYuvMJxqNsdeHNwmDE
          source_id: s_Wjtp8tAobXMopg3HgXxk7b
          stance: supports
          locator: CBDB:524359
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_Wjtp8tAobXMopg3HgXxk7b
            source_type: api_record
            title: 中国历代人物传记资料库：王道貞（CBDB 524359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524359&o=json
            external_identifier: CBDB:524359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4hBOwxqBwLyfaAn9GP-I8o
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FgnH5Tex3eEM8HgEHgSdm9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vv6-d6P-mPBrjQBmLCZdwC
          claim_id: c_4hBOwxqBwLyfaAn9GP-I8o
          source_id: s_Wjtp8tAobXMopg3HgXxk7b
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10886：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLzE7EyB5VaDYLv2XHEgHa
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道貞，明人物。中国历代人物传记资料库（CBDB）以人物编号 524359 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王道貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLzE7EyB5VaDYLv2XHEgHa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道貞（CBDB 524359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=524359&o=json)
