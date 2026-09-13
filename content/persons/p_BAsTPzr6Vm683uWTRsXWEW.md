---
schema: wang-person/v1
id: p_BAsTPzr6Vm683uWTRsXWEW
status: active
merged_into: null
display_name: 王廣齋
cbdb_id: 255480
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fsinMVX7PYEZLMaFzcV9uJ
        subject_person_id: p_BAsTPzr6Vm683uWTRsXWEW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣齋，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 255480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tPcoi4K2iZpzlIRJKxbm2-
          claim_id: c_fsinMVX7PYEZLMaFzcV9uJ
          source_id: s_Fb2F5YRibVL3UicEtss8rh
          stance: supports
          locator: CBDB:255480
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fb2F5YRibVL3UicEtss8rh
            source_type: api_record
            title: 中国历代人物传记资料库：王廣齋（CBDB 255480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255480&o=json
            external_identifier: CBDB:255480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_39k82A7H28wr2GC6Rc2JTF
        subject_person_id: p_BAsTPzr6Vm683uWTRsXWEW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣齋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8Q9Euy9socWWoKvDzCqzVJ
          claim_id: c_39k82A7H28wr2GC6Rc2JTF
          source_id: s_Fb2F5YRibVL3UicEtss8rh
          stance: supports
          locator: CBDB:255480
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4xFVgx1eoD0SAoOHaYndwB
        subject_person_id: p_BAsTPzr6Vm683uWTRsXWEW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lVfHCe3UdsSQHTbYrbTfVh
          claim_id: c_4xFVgx1eoD0SAoOHaYndwB
          source_id: s_fXkoxige6XKe16u4aLm1LC
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fXkoxige6XKe16u4aLm1LC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 126831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json
            external_identifier: CBDB:126831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KL6pD2p9SR6r7j4F89boFc
        status: active
        display_name: 王衡
        merged_into_person_id: null
  other: []
---

# 王廣齋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廣齋，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 255480） | accepted |
| name.primary | 王廣齋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KL6pD2p9SR6r7j4F89boFc | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廣齋（CBDB 255480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255480&o=json)
- [中国历代人物传记资料库：王衡（CBDB 126831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126831&o=json)
