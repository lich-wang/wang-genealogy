---
schema: wang-person/v1
id: p_qbCS5FPkLgFa4ddZfQZsVG
status: active
merged_into: null
display_name: 王孟常
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b7PM6evxnNs6eTQL9PCFF2
        subject_person_id: p_qbCS5FPkLgFa4ddZfQZsVG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_15h1Jrc3oceYuj2nhvK3Z7
          claim_id: c_b7PM6evxnNs6eTQL9PCFF2
          source_id: s_M861zwi2pVJ6WTYux69TRw
          stance: supports
          locator: CBDB:309758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309758）
          source: &a1
            id: s_M861zwi2pVJ6WTYux69TRw
            source_type: api_record
            title: 中国历代人物传记资料库：王孟常（CBDB 309758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309758&o=json
            external_identifier: CBDB:309758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M5ERs9NLCXWLRucdiQZ18h
        subject_person_id: p_qbCS5FPkLgFa4ddZfQZsVG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MjfwHwZz6EsVx67gSHvGrQ
          claim_id: c_M5ERs9NLCXWLRucdiQZ18h
          source_id: s_M861zwi2pVJ6WTYux69TRw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_E84yk5oOv21CsnTpYDp0p_
        subject_person_id: p_qbCS5FPkLgFa4ddZfQZsVG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CLVogrJsobqnPvkSGHQ8V4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kQ3vS2RBlRQgta0HT9x_xZ
          claim_id: c_E84yk5oOv21CsnTpYDp0p_
          source_id: s_BPFKQVE7voYxhrah4SdQpz
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第二十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BPFKQVE7voYxhrah4SdQpz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚禮（CBDB 203768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json
            external_identifier: CBDB:203768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CLVogrJsobqnPvkSGHQ8V4
        status: active
        display_name: 王尚禮
        merged_into_person_id: null
  other: []
---

# 王孟常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟常 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CLVogrJsobqnPvkSGHQ8V4 | 王尚禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟常（CBDB 309758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309758&o=json)
- [中国历代人物传记资料库：王尚禮（CBDB 203768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203768&o=json)
