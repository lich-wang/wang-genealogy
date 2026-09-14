---
schema: wang-person/v1
id: p_XMZWa26MMC6LxMpQ7MWtzL
status: active
merged_into: null
display_name: 王學周
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wUbx5qtHN6fK5UgY4tE36e
        subject_person_id: p_XMZWa26MMC6LxMpQ7MWtzL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_74USj6W7WcoXhr4fDeCcTw
          claim_id: c_wUbx5qtHN6fK5UgY4tE36e
          source_id: s_2NMzq2fLEuPpsq6acP4ryH
          stance: supports
          locator: CBDB:303183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303183）
          source: &a1
            id: s_2NMzq2fLEuPpsq6acP4ryH
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 303183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json
            external_identifier: CBDB:303183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KGSGE2DvrY5ucAmG9616DA
        subject_person_id: p_XMZWa26MMC6LxMpQ7MWtzL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學周，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303183）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pwWuYaE6qp0abUdsLr9wKW
          claim_id: c_KGSGE2DvrY5ucAmG9616DA
          source_id: s_2NMzq2fLEuPpsq6acP4ryH
          stance: supports
          locator: CBDB:303183
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uz8JYkHYAIk2wCPT6tK6Tu
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XMZWa26MMC6LxMpQ7MWtzL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kgib30WEjs4il7qMcgWyv9
          claim_id: c_uz8JYkHYAIk2wCPT6tK6Tu
          source_id: s_23p0juV1A8QC5aIrRU67SB
          stance: supports
          locator: CBDB：兄弟 王學柳（203329）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王學周 与 王學柳 为同胞（CBDB 记「兄」），王學柳 之父／母即 王學周 之父／母。
          source:
            id: s_23p0juV1A8QC5aIrRU67SB
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 303183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json
            external_identifier: CBDB:303183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xnVNk7Yn6e863HGsnbGHpw
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IHiRbGSSjIUYc9bE6HA8K8
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XMZWa26MMC6LxMpQ7MWtzL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FAnYlYoQmKBupVO1Vj4tkZ
          claim_id: c_IHiRbGSSjIUYc9bE6HA8K8
          source_id: s_23p0juV1A8QC5aIrRU67SB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_23p0juV1A8QC5aIrRU67SB
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 303183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json
            external_identifier: CBDB:303183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U7JNj2nXJh2KN7f9tg3Czd
        status: active
        display_name: 王學柳
        merged_into_person_id: null
---

# 王學周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學周 | accepted |
| bio.summary | 王學周，明人物。嘉靖二十年進士，籍贯澤州。（中国历代人物传记资料库 CBDB 303183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnVNk7Yn6e863HGsnbGHpw | 王相 | accepted |
| other | p_U7JNj2nXJh2KN7f9tg3Czd | 王學柳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學周（CBDB 303183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json)
