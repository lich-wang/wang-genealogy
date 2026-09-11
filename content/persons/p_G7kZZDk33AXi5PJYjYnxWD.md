---
schema: wang-person/v1
id: p_G7kZZDk33AXi5PJYjYnxWD
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QBFBKwsPvzf3N1qeduohSH
        subject_person_id: p_G7kZZDk33AXi5PJYjYnxWD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f65fWLFoLii1AYJSoGkxWK
          claim_id: c_QBFBKwsPvzf3N1qeduohSH
          source_id: s_nGkbHfPcvbKEwk6NmE2tqT
          stance: supports
          locator: CBDB:302716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302716）
          source: &a1
            id: s_nGkbHfPcvbKEwk6NmE2tqT
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 302716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302716&o=json
            external_identifier: CBDB:302716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i3s4jYS6eHB91jb7VPcLXf
        subject_person_id: p_G7kZZDk33AXi5PJYjYnxWD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9JUL18Yv5MHUMVuz4dHlm4
          claim_id: c_i3s4jYS6eHB91jb7VPcLXf
          source_id: s_nGkbHfPcvbKEwk6NmE2tqT
          stance: supports
          locator: CBDB:302716
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
        id: c_Ypc17nFnPNufgWHOnGmRnN
        subject_person_id: p_G7kZZDk33AXi5PJYjYnxWD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6DErnJ465hB4EQ6obzhoFP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5BpTo0vLOtWFT-zNnBvUfh
          claim_id: c_Ypc17nFnPNufgWHOnGmRnN
          source_id: s_5zcswoRuK7oFRUJUGyavEE
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5zcswoRuK7oFRUJUGyavEE
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 203298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json
            external_identifier: CBDB:203298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6DErnJ465hB4EQ6obzhoFP
        status: active
        display_name: 王言
        merged_into_person_id: null
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，明人物。嘉靖二十年進士。（中国历代人物传记资料库 CBDB 302716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6DErnJ465hB4EQ6obzhoFP | 王言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 203298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203298&o=json)
- [中国历代人物传记资料库：王玉（CBDB 302716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302716&o=json)
