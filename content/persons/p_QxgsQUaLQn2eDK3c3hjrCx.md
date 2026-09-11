---
schema: wang-person/v1
id: p_QxgsQUaLQn2eDK3c3hjrCx
status: active
merged_into: null
display_name: 王慶元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_edZFA3RnU25JwsZYxScq6h
        subject_person_id: p_QxgsQUaLQn2eDK3c3hjrCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bPu2Gv6zcjJbRxLTZZF3hW
          claim_id: c_edZFA3RnU25JwsZYxScq6h
          source_id: s_wprKHszdNvTj53NU7t2T2A
          stance: supports
          locator: CBDB:694037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694037）
          source: &a1
            id: s_wprKHszdNvTj53NU7t2T2A
            source_type: api_record
            title: 中国历代人物传记资料库：王慶元（CBDB 694037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694037&o=json
            external_identifier: CBDB:694037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hM4HHfUNGabAkek5C7gUfP
        subject_person_id: p_QxgsQUaLQn2eDK3c3hjrCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王慶元，清人物。籍贯鄞縣，身份为經學家—禮經，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 694037）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BaYXc8Pu21NPtKxhr4L1qS
          claim_id: c_hM4HHfUNGabAkek5C7gUfP
          source_id: s_wprKHszdNvTj53NU7t2T2A
          stance: supports
          locator: CBDB:694037
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
        id: c_nSqtOVEAfZ6yhm_l7Dyl0u
        subject_person_id: p_QxgsQUaLQn2eDK3c3hjrCx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_attXpVUNq5Leu9LSRnM6z8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3ieRttIaVPvvcHC-vGTuA
          claim_id: c_nSqtOVEAfZ6yhm_l7Dyl0u
          source_id: s_wprKHszdNvTj53NU7t2T2A
          stance: supports
          locator: 鄞縣志，lgid=243599：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_attXpVUNq5Leu9LSRnM6z8
        status: active
        display_name: 王本梧
        merged_into_person_id: null
  other: []
---

# 王慶元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶元 | accepted |
| bio.summary | 王慶元，清人物。籍贯鄞縣，身份为經學家—禮經，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 694037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_attXpVUNq5Leu9LSRnM6z8 | 王本梧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶元（CBDB 694037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694037&o=json)
