---
schema: wang-person/v1
id: p_tSboei7PeevkFbNm86EkDE
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7GAqLuj5qrNKHUQcHpQ6mu
        subject_person_id: p_tSboei7PeevkFbNm86EkDE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B6k3x3AHdEHBQCx6B5ikX8
          claim_id: c_7GAqLuj5qrNKHUQcHpQ6mu
          source_id: s_Hb5mu4upFxdvgLSWq1eni7
          stance: supports
          locator: CBDB:210674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210674）
          source: &a1
            id: s_Hb5mu4upFxdvgLSWq1eni7
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 210674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210674&o=json
            external_identifier: CBDB:210674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTWNMz3cwnAjuCQhcUeFpY
        subject_person_id: p_tSboei7PeevkFbNm86EkDE
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
        - id: cs_saeiNyEZYUgACX63mV9jfq
          claim_id: c_PTWNMz3cwnAjuCQhcUeFpY
          source_id: s_Hb5mu4upFxdvgLSWq1eni7
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
        id: c_XpQxw3zqqO4cW3vGeuz9PJ
        subject_person_id: p_tSboei7PeevkFbNm86EkDE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l08uS7oxul1LFZzXigmXLO
          claim_id: c_XpQxw3zqqO4cW3vGeuz9PJ
          source_id: s_Hb5mu4upFxdvgLSWq1eni7
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JTc1E7LgQAh6Uz9airZSVG
        status: active
        display_name: 王雲鷺
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JTc1E7LgQAh6Uz9airZSVG | 王雲鷺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 210674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210674&o=json)
