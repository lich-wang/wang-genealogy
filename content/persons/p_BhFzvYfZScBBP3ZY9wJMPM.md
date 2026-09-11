---
schema: wang-person/v1
id: p_BhFzvYfZScBBP3ZY9wJMPM
status: active
merged_into: null
display_name: 王嵩峯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KMJg75TH7Erg79mwqJU1Ln
        subject_person_id: p_BhFzvYfZScBBP3ZY9wJMPM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8RKq43DRSTnHhiwMdcTvEd
          claim_id: c_KMJg75TH7Erg79mwqJU1Ln
          source_id: s_63YTSjVZMz95PvBa7ESPbi
          stance: supports
          locator: CBDB:699108
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699108）
          source: &a1
            id: s_63YTSjVZMz95PvBa7ESPbi
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩峯（CBDB 699108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699108&o=json
            external_identifier: CBDB:699108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n19VFbMAmSQ2mArkGYJb5t
        subject_person_id: p_BhFzvYfZScBBP3ZY9wJMPM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王嵩峯，清人物。籍贯渮澤，身份为書法家、落第士人，入仕貢生: 拔貢，曾任教諭。（中国历代人物传记资料库 CBDB 699108）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N8kP0NEiuly8hQmCYyds6d
          claim_id: c_n19VFbMAmSQ2mArkGYJb5t
          source_id: s_63YTSjVZMz95PvBa7ESPbi
          stance: supports
          locator: CBDB:699108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g9l326XDN1r7YoPYZht1yO
        subject_person_id: p_EsATjcH2T2DuSoEWUsrrCU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BhFzvYfZScBBP3ZY9wJMPM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ucsD-FRHqSxe157x1iP7P
          claim_id: c_g9l326XDN1r7YoPYZht1yO
          source_id: s_63YTSjVZMz95PvBa7ESPbi
          stance: supports
          locator: 新修菏澤縣志，lgid=725119：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EsATjcH2T2DuSoEWUsrrCU
        status: active
        display_name: 王為章
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嵩峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩峯 | accepted |
| bio.summary | 王嵩峯，清人物。籍贯渮澤，身份为書法家、落第士人，入仕貢生: 拔貢，曾任教諭。（中国历代人物传记资料库 CBDB 699108） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EsATjcH2T2DuSoEWUsrrCU | 王為章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嵩峯（CBDB 699108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699108&o=json)
