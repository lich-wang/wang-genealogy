---
schema: wang-person/v1
id: p_dimTrX27PvxL2MX3Rq63kM
status: active
merged_into: null
display_name: 王龍從
cbdb_id: 20094
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YKPRTrG8WqJqNCpuPfW2ty
        subject_person_id: p_dimTrX27PvxL2MX3Rq63kM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍從，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 20094）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XwHS5rUgJF_zY4nqiAQ-Xf
          claim_id: c_YKPRTrG8WqJqNCpuPfW2ty
          source_id: s_smFzmiyEaTP2dX3epynaep
          stance: supports
          locator: CBDB:20094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_smFzmiyEaTP2dX3epynaep
            source_type: api_record
            title: 中国历代人物传记资料库：王龍從（CBDB 20094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20094&o=json
            external_identifier: CBDB:20094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPsvam3xkEG3A9qvTCdu54
        subject_person_id: p_dimTrX27PvxL2MX3Rq63kM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍從
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hz8AapN4FptsWvLGKnuri2
          claim_id: c_tPsvam3xkEG3A9qvTCdu54
          source_id: s_smFzmiyEaTP2dX3epynaep
          stance: supports
          locator: CBDB:20094
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
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
        id: c_nf3ctKDf1ZTjblo6kVtu6I
        subject_person_id: p_fjtx6PajidBF5DeEX7ULow
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dimTrX27PvxL2MX3Rq63kM
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rapuYx8BFS-ys-ccmC99Wf
          claim_id: c_nf3ctKDf1ZTjblo6kVtu6I
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王龍從 ⇄ 高祖;四世祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DKwEihoKaeDdokgXg515QL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖道（CBDB 1902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json
            external_identifier: CBDB:1902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fjtx6PajidBF5DeEX7ULow
        status: active
        display_name: 王祖道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王龍從

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王龍從，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 20094） | accepted |
| name.primary | 王龍從 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_fjtx6PajidBF5DeEX7ULow | 王祖道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍從（CBDB 20094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20094&o=json)
- [中国历代人物传记资料库：王祖道（CBDB 1902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json)
