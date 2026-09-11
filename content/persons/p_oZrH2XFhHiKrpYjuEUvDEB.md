---
schema: wang-person/v1
id: p_oZrH2XFhHiKrpYjuEUvDEB
status: active
merged_into: null
display_name: 王太堪
cbdb_id: 195155
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MVmC2Wme9sssyhqgWpBBpY
        subject_person_id: p_oZrH2XFhHiKrpYjuEUvDEB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太堪，唐人物。中国历代人物传记资料库（CBDB）以人物编号 195155 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_xxWqg35seg4Jirxy1QN7Tv
          claim_id: c_MVmC2Wme9sssyhqgWpBBpY
          source_id: s_MsofEV81avu6ReZ4k9aoLK
          stance: supports
          locator: CBDB:195155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_MsofEV81avu6ReZ4k9aoLK
            source_type: api_record
            title: 中国历代人物传记资料库：王太堪（CBDB 195155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195155&o=json
            external_identifier: CBDB:195155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWKD5GEFRXabDqeNWo61Jc
        subject_person_id: p_oZrH2XFhHiKrpYjuEUvDEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王太堪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aZUj7DAZC62quJ6ZvGYKTy
          claim_id: c_hWKD5GEFRXabDqeNWo61Jc
          source_id: s_MsofEV81avu6ReZ4k9aoLK
          stance: supports
          locator: CBDB:195155
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_MsofEV81avu6ReZ4k9aoLK
            source_type: api_record
            title: 中国历代人物传记资料库：王太堪（CBDB 195155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195155&o=json
            external_identifier: CBDB:195155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5V7fWJEJN8j5MScJLVG4t_
        subject_person_id: p_oZrH2XFhHiKrpYjuEUvDEB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H98GekL49GgpYeKf4B8Yds
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G_ly0je4dyVmo8MS3KrFoz
          claim_id: c_5V7fWJEJN8j5MScJLVG4t_
          source_id: s_5aXwxtH8JREGPzv9BEz5VK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5aXwxtH8JREGPzv9BEz5VK
            source_type: api_record
            title: 中国历代人物传记资料库：王昭俊（CBDB 195154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195154&o=json
            external_identifier: CBDB:195154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_H98GekL49GgpYeKf4B8Yds
        status: active
        display_name: 王昭俊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王太堪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王太堪，唐人物。中国历代人物传记资料库（CBDB）以人物编号 195155 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王太堪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H98GekL49GgpYeKf4B8Yds | 王昭俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王太堪（CBDB 195155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195155&o=json)
- [中国历代人物传记资料库：王昭俊（CBDB 195154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195154&o=json)
