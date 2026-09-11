---
schema: wang-person/v1
id: p_H1CHec8WiEP6udv6HsGiK6
status: active
merged_into: null
display_name: 王纓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DppKR7uh2DRGFetqb7Xnn7
        subject_person_id: p_H1CHec8WiEP6udv6HsGiK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iYzGTvj3haVVp77zKGgtBV
          claim_id: c_DppKR7uh2DRGFetqb7Xnn7
          source_id: s_zZRkBDi4jR2qezi4UwirP4
          stance: supports
          locator: CBDB:213201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213201）
          source: &a1
            id: s_zZRkBDi4jR2qezi4UwirP4
            source_type: api_record
            title: 中国历代人物传记资料库：王纓（CBDB 213201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213201&o=json
            external_identifier: CBDB:213201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iZKM7PtbV2p9CdJVaSTtwp
        subject_person_id: p_H1CHec8WiEP6udv6HsGiK6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纓，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 213201）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x6se7kKLZx4TVduGgGmjDF
          claim_id: c_iZKM7PtbV2p9CdJVaSTtwp
          source_id: s_zZRkBDi4jR2qezi4UwirP4
          stance: supports
          locator: CBDB:213201
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
        id: c_8f668cvn_9h55XyrgURszA
        subject_person_id: p_H1CHec8WiEP6udv6HsGiK6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o6jJRAaiVDnsRy0jA8qyDg
          claim_id: c_8f668cvn_9h55XyrgURszA
          source_id: s_zZRkBDi4jR2qezi4UwirP4
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
  other: []
---

# 王纓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王纓 | accepted |
| bio.summary | 王纓，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 213201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王纓（CBDB 213201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213201&o=json)
