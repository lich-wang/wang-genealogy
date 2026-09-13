---
schema: wang-person/v1
id: p_bqD63aFdZJi7bNMGkx1CRn
status: active
merged_into: null
display_name: 王繼耀
cbdb_id: 294880
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5eniNJALG2QpqJx6DBNNG
        subject_person_id: p_bqD63aFdZJi7bNMGkx1CRn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼耀，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294880）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6oHJ06IZYqlpKZO1n8k3qP
          claim_id: c_J5eniNJALG2QpqJx6DBNNG
          source_id: s_n575Pge4P8TP3yRBKaL9Gu
          stance: supports
          locator: CBDB:294880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n575Pge4P8TP3yRBKaL9Gu
            source_type: api_record
            title: 中国历代人物传记资料库：王繼耀（CBDB 294880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294880&o=json
            external_identifier: CBDB:294880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRPPXx1JRDE7c4dAbm2bCk
        subject_person_id: p_bqD63aFdZJi7bNMGkx1CRn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_35ftFrc62Uen3WV7e9L7Rj
          claim_id: c_GRPPXx1JRDE7c4dAbm2bCk
          source_id: s_n575Pge4P8TP3yRBKaL9Gu
          stance: supports
          locator: CBDB:294880
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_XiQ4qMyf-fcE-YK-Vb6xBO
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bqD63aFdZJi7bNMGkx1CRn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__L0Ru-GxD5vB-oBAdMy5Kr
          claim_id: c_XiQ4qMyf-fcE-YK-Vb6xBO
          source_id: s_n575Pge4P8TP3yRBKaL9Gu
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n575Pge4P8TP3yRBKaL9Gu
            source_type: api_record
            title: 中国历代人物传记资料库：王繼耀（CBDB 294880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294880&o=json
            external_identifier: CBDB:294880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_netpjn2vvpbP4gRNZK5nnW
        status: active
        display_name: 王畿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼耀，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294880） | accepted |
| name.primary | 王繼耀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_netpjn2vvpbP4gRNZK5nnW | 王畿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼耀（CBDB 294880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294880&o=json)
