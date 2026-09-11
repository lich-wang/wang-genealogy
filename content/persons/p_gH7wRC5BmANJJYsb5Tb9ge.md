---
schema: wang-person/v1
id: p_gH7wRC5BmANJJYsb5Tb9ge
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MC83XjjiK8Zi6QoKRgvC63
        subject_person_id: p_gH7wRC5BmANJJYsb5Tb9ge
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wyvXHhtM3DCaVztuutuBYW
          claim_id: c_MC83XjjiK8Zi6QoKRgvC63
          source_id: s_Muvi8rgLhcoea86NFTVd38
          stance: supports
          locator: CBDB:329588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329588）
          source: &a1
            id: s_Muvi8rgLhcoea86NFTVd38
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 329588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329588&o=json
            external_identifier: CBDB:329588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.327Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8CrFAAdEFqZ5Tx5APko8Cs
        subject_person_id: p_gH7wRC5BmANJJYsb5Tb9ge
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。嘉靖四十四年進士，曾任壽官。（中国历代人物传记资料库 CBDB 329588）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_inf4xZwfVctG7fAXMQ6sHz
          claim_id: c_8CrFAAdEFqZ5Tx5APko8Cs
          source_id: s_Muvi8rgLhcoea86NFTVd38
          stance: supports
          locator: CBDB:329588
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_kxVvXDRE1DEY3cAKVGJ8o3
        subject_person_id: p_gH7wRC5BmANJJYsb5Tb9ge
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fB9KA_lYHALapWHudhecy
          claim_id: c_kxVvXDRE1DEY3cAKVGJ8o3
          source_id: s_1SUmsFVocSHYtEuenTLpTH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SUmsFVocSHYtEuenTLpTH
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 126886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json
            external_identifier: CBDB:126886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e8Z59Em5hbj5KfsGE7UhVQ
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，明人物。嘉靖四十四年進士，曾任壽官。（中国历代人物传记资料库 CBDB 329588） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_e8Z59Em5hbj5KfsGE7UhVQ | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 126886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126886&o=json)
- [中国历代人物传记资料库：王宗（CBDB 329588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329588&o=json)
