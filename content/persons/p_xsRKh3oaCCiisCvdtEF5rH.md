---
schema: wang-person/v1
id: p_xsRKh3oaCCiisCvdtEF5rH
status: active
merged_into: null
display_name: 王春
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YkPKeSyJC1RWH9eumhcpSZ
        subject_person_id: p_xsRKh3oaCCiisCvdtEF5rH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UFYn6RV33o6h91AAG6SBDm
          claim_id: c_YkPKeSyJC1RWH9eumhcpSZ
          source_id: s_DvuWyYSPcFRTcdiDEQ5PmY
          stance: supports
          locator: CBDB:684822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684822）
          source: &a1
            id: s_DvuWyYSPcFRTcdiDEQ5PmY
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 684822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684822&o=json
            external_identifier: CBDB:684822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yb7yED3YgiMWeKxDdRuMet
        subject_person_id: p_xsRKh3oaCCiisCvdtEF5rH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春，明人物。籍贯仙居，曾任翰林院檢討。（中国历代人物传记资料库 CBDB 684822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8VRLOZvBVWyQWA379swq9U
          claim_id: c_yb7yED3YgiMWeKxDdRuMet
          source_id: s_DvuWyYSPcFRTcdiDEQ5PmY
          stance: supports
          locator: CBDB:684822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fY23bw25aPPk9VKq5TYGcG
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xsRKh3oaCCiisCvdtEF5rH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v51b3ysIJTTIhljW0f0EaP
          claim_id: c_fY23bw25aPPk9VKq5TYGcG
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ck87NE7fwgpouGzP6KYPZg
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 126438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json
            external_identifier: CBDB:126438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EMcJ9fNVqRtQ6d9NXvcerV
        status: active
        display_name: 王康
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春 | accepted |
| bio.summary | 王春，明人物。籍贯仙居，曾任翰林院檢討。（中国历代人物传记资料库 CBDB 684822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EMcJ9fNVqRtQ6d9NXvcerV | 王康 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 684822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684822&o=json)
- [中国历代人物传记资料库：王康（CBDB 126438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json)
