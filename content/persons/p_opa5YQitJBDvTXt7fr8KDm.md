---
schema: wang-person/v1
id: p_opa5YQitJBDvTXt7fr8KDm
status: active
merged_into: null
display_name: 王焄
cbdb_id: 294140
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VH4ANZSNoRe2d3Rw5KNEff
        subject_person_id: p_opa5YQitJBDvTXt7fr8KDm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焄，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jS8l61bnqV0KVD_IfVRDY_
          claim_id: c_VH4ANZSNoRe2d3Rw5KNEff
          source_id: s_mv67k5J4NUQgcXWu77MtJu
          stance: supports
          locator: CBDB:294140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mv67k5J4NUQgcXWu77MtJu
            source_type: api_record
            title: 中国历代人物传记资料库：王焄（CBDB 294140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294140&o=json
            external_identifier: CBDB:294140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ne5AHLfgH8dn6GaEBpApDW
        subject_person_id: p_opa5YQitJBDvTXt7fr8KDm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zW3weELPRTjPB8HLs84JHV
          claim_id: c_ne5AHLfgH8dn6GaEBpApDW
          source_id: s_mv67k5J4NUQgcXWu77MtJu
          stance: supports
          locator: CBDB:294140
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_SDyfHy4I9X9HnOcJMroBi3
        subject_person_id: p_opa5YQitJBDvTXt7fr8KDm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6wLXvOddDHzU3QMoXorFnN
          claim_id: c_SDyfHy4I9X9HnOcJMroBi3
          source_id: s_mv67k5J4NUQgcXWu77MtJu
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mv67k5J4NUQgcXWu77MtJu
            source_type: api_record
            title: 中国历代人物传记资料库：王焄（CBDB 294140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294140&o=json
            external_identifier: CBDB:294140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_NYtdu2CY4GDrtrwsQaXuDi
        status: active
        display_name: 王朝賢
        merged_into_person_id: null
  other: []
---

# 王焄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王焄，明人物。嘉靖十一年進士。（中国历代人物传记资料库 CBDB 294140） | accepted |
| name.primary | 王焄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_NYtdu2CY4GDrtrwsQaXuDi | 王朝賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王焄（CBDB 294140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294140&o=json)
