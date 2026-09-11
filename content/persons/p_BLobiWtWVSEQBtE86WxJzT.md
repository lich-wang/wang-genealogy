---
schema: wang-person/v1
id: p_BLobiWtWVSEQBtE86WxJzT
status: active
merged_into: null
display_name: 王儼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bdtK3942jbtUGsRGW6opoK
        subject_person_id: p_BLobiWtWVSEQBtE86WxJzT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S6DAurPxKJtdBPwo5UQFuo
          claim_id: c_bdtK3942jbtUGsRGW6opoK
          source_id: s_1utwdnLN96H8ziLntjTCoV
          stance: supports
          locator: CBDB:215077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215077）
          source: &a1
            id: s_1utwdnLN96H8ziLntjTCoV
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 215077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215077&o=json
            external_identifier: CBDB:215077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eSm2metzy2nE3uDPdws4Nm
        subject_person_id: p_BLobiWtWVSEQBtE86WxJzT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。萬曆二年進士，曾任義官。（中国历代人物传记资料库 CBDB 215077）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qnPToIQhlu9X5AkTHBD52j
          claim_id: c_eSm2metzy2nE3uDPdws4Nm
          source_id: s_1utwdnLN96H8ziLntjTCoV
          stance: supports
          locator: CBDB:215077
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
        id: c_wLO9pezThhU0UTRL9MmKcJ
        subject_person_id: p_BLobiWtWVSEQBtE86WxJzT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9UovoVbjKY3inURtmJl6Dy
          claim_id: c_wLO9pezThhU0UTRL9MmKcJ
          source_id: s_1utwdnLN96H8ziLntjTCoV
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
  other: []
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。萬曆二年進士，曾任義官。（中国历代人物传记资料库 CBDB 215077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 215077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215077&o=json)
